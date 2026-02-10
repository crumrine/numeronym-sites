# Prompt Changelog

How this project was built, one conversation at a time.

---

## Session 1 — Bootstrap (2026-02-09)

The big bang. Initialized the monorepo with three Astro sites (p8s, e8s, h11n),
created the shared design system with CSS custom properties and reusable Astro
components, and built all three landing pages. Each site has its own personality:
p8s is clean and editorial with a subtle grid background, e8s is ethereal with
floating CSS particles, and h11n is playful with glitch effects and a noise
texture. Hit one issue with path encoding (spaces in Google Drive paths) for the
Vite alias — fixed by switching from `URL.pathname` to `fileURLToPath()`. All
three sites build cleanly. [Full log ->](log/001-bootstrap.md)
