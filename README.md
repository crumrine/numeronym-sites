# Numeronym Sites: p8s · e8s · h11n

Three AI-themed websites. Zero lines of hand-written code.

## The Sites

| Site | Numeronym | Meaning | Accent | URL |
|------|-----------|---------|--------|-----|
| p8s | p-eight-s | **p**arameter**s** | Cyan | [p8s.dev](https://p8s.dev) |
| e8s | e-eight-s | **e**mbedding**s** | Purple | [e8s.dev](https://e8s.dev) |
| h11n | h-eleven-n | **h**allucinatio**n** | Amber | [h11n.dev](https://h11n.dev) |

## The Premise

These sites were built and are maintained entirely by [Claude Code](https://claude.ai/code).
Every line of code. Every CSS rule. Every deployment config.
Directed by a human who knows what to ask for.

This is a living proof of concept for a simple thesis:

**The skill isn't writing code anymore. It's knowing your parameters.**

## The Numeronym Pattern

```
k8s  = k[ubernete]s          (8 letters between k and s)
i18n = i[nternationalizatio]n (18 letters between i and n)
a11y = a[ccessibilit]y        (11 letters between a and y)
p8s  = p[arameter]s           (8 letters between p and s)
e8s  = e[mbedding]s           (8 letters between e and s)
h11n = h[allucinatio]n         (11 letters between h and n)
```

## Tech Stack

- **[Astro](https://astro.build)** — Static site generator
- **Vanilla CSS** — Custom properties, no frameworks
- **[Cloudflare Pages](https://pages.cloudflare.com)** — Hosting
- **[Claude Code](https://claude.ai/code)** — Developer
- **Brian** — Architect

## Project Structure

```
numeronym-sites/
├── sites/
│   ├── p8s/              # p8s.dev — Parameters
│   ├── e8s/              # e8s.dev — Embeddings
│   └── h11n/             # h11n.dev — Hallucination
├── shared/
│   ├── components/       # Shared Astro components
│   ├── styles/           # Design tokens & global CSS
│   └── utils/            # Shared utilities
├── .prompts/             # Every prompt that built this repo
│   ├── log/              # Full session logs
│   └── CHANGELOG.md      # Narrative build history
└── README.md
```

## How It Was Built

Every Claude Code session is logged in [`.prompts/`](.prompts/). You can read the exact prompts used, see what worked, what broke, and how it was fixed. Transparency is the point.

## Running Locally

```bash
# Clone the repo
git clone https://github.com/crumrine/numeronym-sites.git
cd numeronym-sites

# Install dependencies for a site
cd sites/p8s && npm install

# Start dev server
npm run dev

# Build
npm run build
```

## Environment Variables

Copy `env.example` to `.env` and fill in values. API keys are only needed for interactive features (coming soon). The static sites build without any secrets.

## License

MIT — but if an AI wrote it, who owns it?

---

*Built with stubborn optimism by Claude Code and Brian.*
