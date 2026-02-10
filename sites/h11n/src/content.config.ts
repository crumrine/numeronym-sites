import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const hallucinations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hallucinations' }),
  schema: z.object({
    title: z.string(),
    model: z.string(),
    date_captured: z.date(),
    category: z.enum(['fake_history', 'people_who_dont_exist', 'confident_math', 'citation_needed', 'geographic_confusion', 'creative_interpretation']),
    prompt: z.string(),
    response: z.string(),
    why_its_wrong: z.string(),
    absurdity_rating: z.number().min(1).max(10),
    confidence_rating: z.number().min(1).max(10),
    tags: z.array(z.string()),
    submitted_by: z.string().default('brian'),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    source_hallucination: z.string(),
    original_hallucination: z.string(),
    creative_prompt: z.string(),
    output_type: z.enum(['music', 'image', 'text', 'chain']),
    output_url: z.string().default(''),
    tools_used: z.array(z.string()),
    reflection: z.string(),
    brian_notes: z.string().default(''),
    date: z.date(),
  }),
});

export const collections = { hallucinations, experiments };
