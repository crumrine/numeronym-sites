# Prompt Changelog

How this project was built, one conversation at a time.

---

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
projects (p8s-dev, e8s-dev, h11n-dev) on the [REDACTED_EMAIL] Cloudflare account,
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
