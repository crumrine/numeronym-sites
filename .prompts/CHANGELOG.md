# Prompt Changelog

How this project was built, one conversation at a time.

---

## Session 8 — e8s.dev Embedding Explorer + Semantic Jukebox (2026-02-10)

Built both remaining e8s.dev features using two parallel Claude Code background agents.
The Embedding Explorer is a Canvas-based interactive visualization of 200 pre-computed
points across 4 categories (music genres, emotions, tech concepts, random fun), with
pan/zoom, hover labels, nearest-neighbor lines, category toggles, and suggestion pills
for cluster navigation. The Semantic Jukebox is a vibe-matching search — type a mood
description and get matched music genres via weighted keyword scoring with synonym
expansion. 51 genres with 15-25 keywords each, 10 preset queries, Brian's track
recommendations, match percentage bars, and staggered card animations. All pre-computed
(no API backend, zero cost). Updated landing page nav and card links. Zero build errors.
[Full log ->](log/008-e8s-features.md)

## Session 7 — CI/CD Pipeline & Content Automation (2026-02-09)

Second Cowork session. Added GitHub Actions CI/CD so pushing to main auto-deploys
to Cloudflare Pages — with smart change detection that only builds sites that
actually changed. Shared directory changes trigger all three. Also drafted a
weekly content generation shortcut (Sunday evenings) that auto-generates blog
post drafts for p8s, new hallucination entries and quiz questions for h11n,
commits, and pushes — letting the CI/CD handle deployment. Blog posts are set
to draft: true for Brian's review. Additionally verified Session 5 and 6's work:
Hall of Fame gallery (18 entries, 6 categories), Quiz Game (110 questions, keyboard
shortcuts), and Creative Experiments (7 seed experiments) all checked out clean.
[Full log ->](log/007-cicd-and-automation.md)

## Session 6 — "I Hallucinated This" Creative Experiments (2026-02-09)

Built the final h11n.dev feature: an experimental gallery where Hall of Fame
hallucinations are fed into music generators, other AIs, and creative tools.
7 seed experiments across 3 types: AI-generated music prompts (Submarine Bicycle
Sonata, Twelve Million Martians, Earth's Love Song), hallucination telephone
chains (Molasses War and Professor Martinez evolving through 4 AI models), and
text experiments (a Wikipedia article about a fictional Nobel laureate, a
community cookbook recipe from a city that doesn't exist). Gallery with type
filters, detail pages with audio placeholders and chain visualization. Updated
nav across all h11n pages. One build fix (render import pattern).
[Full log ->](log/006-creative-experiments.md)

## Session 5 — h11n Hall of Fame + Quiz Game (2026-02-09)

Built two major h11n.dev features in parallel using two Claude Code background agents.
The Hall of Fame is a content-collection-powered gallery of 18 seed AI hallucinations
across 6 categories (history rewrites, geography fails, people who don't exist,
confident math, citation needed, science gone wrong), with a filterable gallery index,
detail pages, and an absurdity-rated leaderboard. The "Real or Hallucinated?" quiz
is a 10-question game drawn from a 70-question bank across 5 categories, with
keyboard shortcuts, streak tracking, share-to-clipboard, and animated transitions.
Also deployed p8s.dev with Session 4's CTA fix. Zero build errors on first try.
[Full log ->](log/005-h11n-features.md)

## Session 4 — Verification & Landing Page Fix (2026-02-09)

First session using Claude via Cowork mode (desktop app) instead of Claude Code CLI.
Brian asked for a verification pass on Session 3's blog and playground work. Reviewed
all 14 new files for code quality, accessibility, and responsiveness — everything
checked out clean. Caught two issues by comparing source to live site: the landing
page nav links for Blog and Playground weren't showing on the deployed p8s.dev
(stale deploy), and the hero CTA still pointed to `#coming-soon` instead of
`/playground`. Fixed the CTA, rebuilt successfully. Deploy handed off to Claude Code
which has the Cloudflare API token.
[Full log ->](log/004-verification-and-fix.md)

## Session 3 — Blog + Parameter Playground (2026-02-09)

Built two major p8s.dev features in parallel using two Claude Code agents.
The blog uses Astro Content Collections with three seed posts — "English is
the New Programming Language", "I Built Three Sites Without Code", and
"The Death of the Traditional SWE". The parameter playground is a fully
interactive split-screen tool with sliders for temperature, top_p, and
max_tokens, plus system prompt and model selectors. Uses pre-generated
responses that swap based on slider positions with typing animations.
Only one fix needed: the glob loader import path for Astro 5.17.
[Full log ->](log/003-blog-and-playground.md)

## Session 2 — Cloudflare Pages Deployment (2026-02-09)

Set up Cloudflare Pages deployments for all three sites. Created three Pages
projects (p8s-dev, e8s-dev, h11n-dev) on the Cloudflare account,
deployed all three sites via direct upload with wrangler, and configured custom
domains (p8s.dev, e8s.dev, h11n.dev). Hit an issue where wrangler CLI created
two projects under the wrong account despite setting CLOUDFLARE_ACCOUNT_ID —
had to recreate e8s-dev and h11n-dev via the Cloudflare REST API directly.
Custom domain addition also required the API since wrangler doesn't support
`pages project add-domain`. p8s.dev went active immediately; e8s.dev and
h11n.dev SSL provisioning takes a few minutes.
[Full log ->](log/002-cloudflare-deploy.md)

## Session 1 — Bootstrap (2026-02-09)

The big bang. Initialized the monorepo with three Astro sites (p8s, e8s, h11n),
created the shared design system with CSS custom properties and reusable Astro
components, and built all three landing pages. Each site has its own personality:
p8s is clean and editorial with a subtle grid background, e8s is ethereal with
floating CSS particles, and h11n is playful with glitch effects and a noise
texture. Hit one issue with path encoding (spaces in Google Drive paths) for the
Vite alias — fixed by switching from `URL.pathname` to `fileURLToPath()`. All
three sites build cleanly. [Full log ->](log/001-bootstrap.md)
