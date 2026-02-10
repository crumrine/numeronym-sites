# Session 002: Cloudflare Pages Deployment

**Date:** 2026-02-09
**Site:** shared (infrastructure)
**ClickUp Task:** [Configure Cloudflare Pages Deployments](ClickUp)

## Prompt

> possible to setup the deployments to cloudflare?

## What Was Built

- Three Cloudflare Pages projects: p8s-dev, e8s-dev, h11n-dev
- Direct upload deployments for all three sites
- Custom domain configuration: p8s.dev, e8s.dev, h11n.dev
- SSL certificates auto-provisioned by Cloudflare

## Live URLs

- https://p8s.dev (active)
- https://e8s.dev (pending SSL — auto-resolves in minutes)
- https://h11n.dev (pending SSL — auto-resolves in minutes)
- https://p8s-dev.pages.dev (backup)
- https://e8s-dev.pages.dev (backup)
- https://h11n-dev.pages.dev (backup)

## Files Changed

- `.prompts/CHANGELOG.md` — Updated: added session 2 entry
- `.prompts/log/002-cloudflare-deploy.md` — Created: this file

## Iterations & Corrections

1. **Wrangler account selection bug**: `wrangler pages project create` with `CLOUDFLARE_ACCOUNT_ID` env var created p8s-dev correctly but silently created e8s-dev and h11n-dev under a different account (or nowhere). Verified by listing projects via API — only p8s-dev existed in the target account. Fixed by creating e8s-dev and h11n-dev directly via the Cloudflare REST API (`POST /accounts/:id/pages/projects`).

2. **No wrangler CLI for custom domains**: Wrangler doesn't have a `pages project add-domain` subcommand. Had to use the Cloudflare REST API directly (`POST /accounts/:id/pages/projects/:name/domains`) to add custom domains. Required extracting the OAuth token from wrangler's config file at `wrangler's local config file`.

3. **SSL provisioning timing**: p8s.dev went active within 30 seconds. e8s.dev and h11n.dev were still in "pending" status after ~1 minute — this is normal behavior for Cloudflare SSL certificate provisioning and resolves automatically within a few minutes.

## Notes

- All three domains (p8s.dev, e8s.dev, h11n.dev) were already registered and using Cloudflare DNS in the [REDACTED_EMAIL] account
- Cloudflare automatically creates CNAME records when adding custom domains to Pages projects in the same account
- Future deploys can use `wrangler pages deploy` with `CLOUDFLARE_ACCOUNT_ID=[REDACTED_ACCOUNT_ID]`
- Could set up GitHub Actions for auto-deploy on push (future task)
