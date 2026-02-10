# Prompt Changelog

How this project was built, one conversation at a time.

---

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
