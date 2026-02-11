import type { Env } from '../types';

const ALLOWED_MODELS = [
  'ChatGPT-4', 'ChatGPT-3.5', 'Claude', 'Google Bard/Gemini',
  'Copilot', 'Llama', 'Mistral', 'Other',
];

const ALLOWED_CATEGORIES = [
  'fake_history', 'people_who_dont_exist', 'confident_math',
  'citation_needed', 'geographic_confusion', 'creative_interpretation',
];

const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
const MAX_SCREENSHOT_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_TEXT_LENGTH = 5000;

function jsonResponse(data: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function validateString(value: FormDataEntryValue | null, name: string, maxLen = MAX_TEXT_LENGTH, required = true): string | null {
  if (!value || typeof value !== 'string') {
    return required ? `${name} is required` : null;
  }
  const trimmed = value.trim();
  if (required && trimmed.length === 0) {
    return `${name} is required`;
  }
  if (trimmed.length > maxLen) {
    return `${name} must be ${maxLen} characters or less`;
  }
  return null;
}

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  const formData = new URLSearchParams();
  formData.set('secret', secret);
  formData.set('response', token);
  if (ip) formData.set('remoteip', ip);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });
  const result = await res.json<{ success: boolean }>();
  return result.success;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.formData();

    // Honeypot check — bots fill hidden fields, humans don't
    const honeypot = formData.get('website');
    if (honeypot && typeof honeypot === 'string' && honeypot.trim().length > 0) {
      // Silently accept to not tip off bots
      return jsonResponse({ success: true, id: 'ok' });
    }

    // Turnstile verification (skip if secret not configured yet)
    if (context.env.TURNSTILE_SECRET_KEY) {
      const turnstileToken = formData.get('cf-turnstile-response');
      if (!turnstileToken || typeof turnstileToken !== 'string') {
        return jsonResponse({ success: false, error: 'Spam verification failed. Please try again.' }, 403);
      }
      const ip = context.request.headers.get('CF-Connecting-IP');
      const valid = await verifyTurnstile(turnstileToken, context.env.TURNSTILE_SECRET_KEY, ip);
      if (!valid) {
        return jsonResponse({ success: false, error: 'Spam verification failed. Please try again.' }, 403);
      }
    }

    // Extract and validate fields
    const errors: string[] = [];

    const title = (formData.get('title') as string || '').trim();
    const model = (formData.get('model') as string || '').trim();
    const category = (formData.get('category') as string || '').trim();
    const prompt = (formData.get('prompt') as string || '').trim();
    const response = (formData.get('response') as string || '').trim();
    const whyWrong = (formData.get('why_wrong') as string || '').trim();
    const absurdityStr = (formData.get('absurdity_rating') as string || '').trim();
    const confidenceStr = (formData.get('confidence_rating') as string || '').trim();
    const tags = (formData.get('tags') as string || '').trim();
    const submittedBy = (formData.get('submitted_by') as string || '').trim() || 'anonymous';
    const email = (formData.get('email') as string || '').trim();

    // Required field validation
    let err: string | null;
    err = validateString(title, 'Title', 200); if (err) errors.push(err);
    err = validateString(prompt, 'Prompt'); if (err) errors.push(err);
    err = validateString(response, 'Response'); if (err) errors.push(err);
    err = validateString(whyWrong, 'Why it\'s wrong'); if (err) errors.push(err);

    if (!ALLOWED_MODELS.includes(model)) {
      errors.push('Invalid model selection');
    }
    if (!ALLOWED_CATEGORIES.includes(category)) {
      errors.push('Invalid category selection');
    }

    const absurdity = parseInt(absurdityStr, 10);
    const confidence = parseInt(confidenceStr, 10);
    if (isNaN(absurdity) || absurdity < 1 || absurdity > 10) {
      errors.push('Absurdity rating must be between 1 and 10');
    }
    if (isNaN(confidence) || confidence < 1 || confidence > 10) {
      errors.push('Confidence rating must be between 1 and 10');
    }

    if (tags.length > 500) {
      errors.push('Tags must be 500 characters or less');
    }
    if (submittedBy.length > 100) {
      errors.push('Name must be 100 characters or less');
    }
    if (email && email.length > 200) {
      errors.push('Email must be 200 characters or less');
    }
    if (email && !email.includes('@')) {
      errors.push('Invalid email format');
    }

    if (errors.length > 0) {
      return jsonResponse({ success: false, error: errors[0] }, 400);
    }

    // Handle screenshot upload
    let screenshotUrl: string | null = null;
    const screenshot = formData.get('screenshot');
    if (screenshot && screenshot instanceof File && screenshot.size > 0) {
      if (!ALLOWED_IMAGE_TYPES.includes(screenshot.type)) {
        return jsonResponse({ success: false, error: 'Screenshot must be PNG, JPEG, or WebP' }, 400);
      }
      if (screenshot.size > MAX_SCREENSHOT_SIZE) {
        return jsonResponse({ success: false, error: 'Screenshot must be 5MB or less' }, 400);
      }

      const id = crypto.randomUUID();
      const ext = screenshot.name.split('.').pop() || 'png';
      const key = `submissions/${id}/${Date.now()}.${ext}`;

      await context.env.SCREENSHOTS.put(key, screenshot.stream(), {
        httpMetadata: { contentType: screenshot.type },
      });
      screenshotUrl = key;
    }

    // Insert into D1
    const id = crypto.randomUUID();
    await context.env.DB.prepare(
      `INSERT INTO submissions (id, title, model, category, prompt, response, why_wrong,
        absurdity_rating, confidence_rating, tags, screenshot_url, submitted_by, email)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      id, title, model, category, prompt, response, whyWrong,
      absurdity, confidence, tags || null, screenshotUrl, submittedBy, email || null
    ).run();

    return jsonResponse({ success: true, id });
  } catch (e) {
    console.error('Submit error:', e);
    return jsonResponse({ success: false, error: 'Something went wrong. Please try again.' }, 500);
  }
};
