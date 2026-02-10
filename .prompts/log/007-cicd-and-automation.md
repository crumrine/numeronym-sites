# Session 007: CI/CD Pipeline & Content Automation

**Date:** 2026-02-09
**Site:** shared infrastructure
**Tool:** Claude (Cowork mode, via Claude desktop app)
**ClickUp Tasks:** N/A — automation infrastructure

## Prompt

> do we have a way to do regular updates and blog posts for these? How do we automate it?

Brian asked about automating content updates across all three sites. After discussing options (manual, scheduled shortcuts, CI/CD, hybrid), he chose the hybrid approach: GitHub Actions auto-deploy on push + a scheduled Cowork shortcut for weekly content generation.

## What Was Built

### GitHub Actions CI/CD Pipeline
- `.github/workflows/deploy.yml` — Auto-deploy on push to main
- Smart change detection: only builds/deploys sites that actually changed
- Shared directory changes trigger all three sites
- Uses `cloudflare/wrangler-action@v3` for Cloudflare Pages deployment
- Three parallel deploy jobs (p8s, e8s, h11n) — each conditional on changes detected
- Concurrency control: queues deploys, doesn't cancel in-progress ones

### Weekly Content Generation Shortcut (drafted)
- Task name: `weekly-numeronym-content`
- Schedule: Sunday evening (7pm ET)
- Generates: 1 blog post draft (p8s), 2-3 hallucination entries (h11n), 5-10 quiz questions (h11n)
- Blog posts set to `draft: true` for Brian's review before publishing
- Auto-commits and pushes — GitHub Actions handles the deploy
- Note: `set_scheduled_task` tool wasn't available in Cowork; task description provided for manual shortcut creation

### Session 5 Verification (also done this session)
- Verified h11n Hall of Fame gallery: 18 entries, 6 categories, Comedy Gold scoring, leaderboard ✅
- Verified Quiz Game: 110 questions, all 5 categories, keyboard shortcuts, share feature ✅
- Verified p8s deploy: Session 4 CTA fix + nav links now live ✅
- Minor issues flagged: accessibility gaps (progress bar ARIA, toast aria-live, keyboard nav for filters)

## Files Changed

- `.github/workflows/deploy.yml` — Created: CI/CD pipeline for auto-deploy
- `.prompts/CHANGELOG.md` — Updated: session 7 entry
- `.prompts/log/007-cicd-and-automation.md` — Created: this file

## Iterations & Corrections

1. **set_scheduled_task unavailable**: The Cowork `create-shortcut` skill references a `set_scheduled_task` tool that wasn't available in the current environment. Drafted the full task description for manual shortcut creation instead.

2. **GitHub secrets required**: The CI/CD workflow needs two secrets added to the GitHub repo:
   - `CLOUDFLARE_API_TOKEN` — Cloudflare API token with Pages edit permissions
   - `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID
   These need to be added in the repo's GitHub Settings > Secrets and variables > Actions

## Notes

- This eliminates manual `wrangler pages deploy` — just push and it deploys
- Smart change detection means a blog post commit only deploys p8s, not all three sites
- The weekly content shortcut generates draft blog posts for review, but hallucinations and quiz questions go live immediately (they're additive content with low risk)
- Combined with Session 4's verification work, this Cowork session covered: code review, bug fixes, prompt authoring for Claude Code, CI/CD setup, and automation design
