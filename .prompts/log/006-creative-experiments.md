# Session 006: "I Hallucinated This" Creative Experiments

**Date:** 2026-02-09
**Site:** h11n.dev
**ClickUp Task:** Build "I Hallucinated This" Creative Experiments Section

## Prompt

> Build the "I Hallucinated This" creative experiments section for h11n.dev.
> An experimental gallery where AI hallucinations from the Hall of Fame are
> fed into other AI tools to create art, music, and absurd chains of misinformation.

## What Was Built

### Experiments Content Collection
- Added `experiments` collection to `content.config.ts` alongside existing `hallucinations` collection
- Schema: title, source_hallucination, original_hallucination, creative_prompt, output_type (music|image|text|chain), output_url, tools_used, reflection, brian_notes, date
- Same `glob` loader pattern from `astro/loaders`

### 7 Seed Experiments

**Music Experiments (3):**
1. **The Submarine Bicycle Sonata** — Orchestral electronica track inspired by the submarine-as-bicycle hallucination. Detailed AI music generation prompt with instrumentation notes.
2. **Twelve Million Martians** — Lo-fi hip hop track about Mars's nonexistent 12 million residents. Vocoder motif, NASA radio samples, Perseverance wind recordings.
3. **Earth's Love Song** — Indie folk ballad about gravity as the Earth hugging you. Elephant trumpet sample, glockenspiel melody.

**Hallucination Telephone (2):**
4. **Telephone: The Great Molasses War** — 4-pass chain where a hallucinated industrial "war" evolves through ChatGPT → Claude → Gemini → Llama into a geopolitical conflict with treaties, commemorative holidays, and bronze memorials.
5. **Telephone: Professor Martinez's Legacy** — 4-pass chain where a fictional professor accumulates a Nobel Prize, Stanford building naming, TIME 100 listing, and UN advisory role.

**Text Experiments (2):**
6. **Wikipedia: Dr. Wei Chen** — Complete Wikipedia-style article about the hallucinated Nobel laureate, with early life, career, controversy section, and personal life.
7. **East Dakota Hotdish** — Community cookbook recipe from a fictional Midwestern city, complete with local color, Marge Lindqvist's notes, and pairing suggestions.

### Pages
- `/experiments` — Gallery index with filter chips by output type (music/image/text/telephone), pipeline visualization, lab-notebook aesthetic
- `/experiments/[slug]` — Detail view with source hallucination quote, creative prompt block, output section (audio placeholder for music, rendered markdown for text/chain), reflection, and Brian's notes

### Design Choices
- Per-type accent colors: music (amber), image (purple), text (cyan), chain (green)
- Cards with gradient tint based on output type
- Audio placeholder with animated equalizer bars and "Coming soon" message
- Content output styled for chain visualization with blockquotes and horizontal rules
- Lab-notebook feel with "PROMPT" watermark on prompt blocks

### Nav Updates
- Added "Experiments" to SiteHeader nav across ALL h11n pages (landing, hall-of-fame index/detail/leaderboard, quiz)
- Added `href="/experiments"` to "I Hallucinated This" card on landing page

## Files Created

- `sites/h11n/src/content/experiments/submarine-bicycle-sonata.md`
- `sites/h11n/src/content/experiments/twelve-million-martians.md`
- `sites/h11n/src/content/experiments/earths-love-song.md`
- `sites/h11n/src/content/experiments/telephone-molasses-war.md`
- `sites/h11n/src/content/experiments/telephone-professor-martinez.md`
- `sites/h11n/src/content/experiments/wikipedia-dr-chen.md`
- `sites/h11n/src/content/experiments/recipe-east-dakota-hotdish.md`
- `sites/h11n/src/pages/experiments/index.astro`
- `sites/h11n/src/pages/experiments/[...slug].astro`
- `.prompts/log/006-creative-experiments.md`

## Files Modified

- `sites/h11n/src/content.config.ts` — Added experiments collection
- `sites/h11n/src/pages/index.astro` — Added Experiments to nav + card href
- `sites/h11n/src/pages/hall-of-fame/index.astro` — Added Experiments to nav
- `sites/h11n/src/pages/hall-of-fame/leaderboard.astro` — Added Experiments to nav
- `sites/h11n/src/pages/hall-of-fame/[...slug].astro` — Added Experiments to nav
- `sites/h11n/src/pages/quiz.astro` — Added Experiments to nav
- `.prompts/CHANGELOG.md` — Added session 6 entry
- `.prompts/README.md` — Updated session count to 6

## Iterations & Corrections

1. **`entry.render()` vs `render(entry)`**: Initially used `entry.render()` in the detail page, but Astro 5's content layer API uses `import { render } from 'astro:content'` with `render(entry)`. Fixed after first build error. The Hall of Fame detail page already had the correct pattern.

2. **Build success on second try**: 30 pages generated in 1.29s after the render fix.

## Live URLs

- https://h11n.dev (updated landing page with all three cards linked)
- https://h11n.dev/experiments (gallery index)
- https://h11n.dev/experiments/submarine-bicycle-sonata
- https://h11n.dev/experiments/twelve-million-martians
- https://h11n.dev/experiments/earths-love-song
- https://h11n.dev/experiments/telephone-molasses-war
- https://h11n.dev/experiments/telephone-professor-martinez
- https://h11n.dev/experiments/wikipedia-dr-chen
- https://h11n.dev/experiments/recipe-east-dakota-hotdish

## ClickUp

- Marked "Build 'I Hallucinated This' Creative Experiments Section" complete
- Verified "Build Parameter Playground" already complete
- Verified "Set Up Blog with Seed Content" already complete
