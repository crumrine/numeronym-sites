# Contributing to Numeronym Sites

This project is built and maintained entirely by Claude Code, directed by a human architect.

## How This Works

1. **Brian** decides what to build and writes prompts
2. **Claude Code** writes every line of code
3. **Every session** is logged in `.prompts/log/`
4. **Every change** is committed with clear messages

## Want to Contribute?

This repo is primarily a demonstration project, but contributions are welcome:

- **Bug reports** — Open an issue if something's broken
- **Feature ideas** — Open an issue with your suggestion
- **Typo fixes** — PRs welcome for obvious fixes

## Development

Each site is an independent Astro project under `sites/`. Shared components and styles live in `shared/`.

```bash
# Work on a specific site
cd sites/p8s
npm install
npm run dev
```

## Prompt Contributions

If you build something cool with Claude Code and want to share the prompt, consider adding it to `.prompts/` as a community contribution.

## Code of Conduct

Be kind. We're all figuring this out together.
