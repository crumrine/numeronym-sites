---
title: "I Built Three Websites This Weekend Without Writing a Single Line of Code"
date: 2026-02-09
description: "The meta story of building p8s.dev, e8s.dev, and h11n.dev — a public monorepo where every line was written by AI."
tags: [claude-code, case-study, astro, cloudflare]
author: "Brian Crumrine"
draft: false
---

This is the meta post. The one where I tell you about building the thing you're currently reading. I'll try not to disappear into the recursive absurdity of it, but no promises.

Last weekend, I built three websites — [p8s.dev](https://p8s.dev), [e8s.dev](https://e8s.dev), and [h11n.dev](https://h11n.dev) — from zero. A monorepo with shared components, shared design tokens, site-specific theming, and Cloudflare deployments. About 37 files. Over 16,000 lines of code. Two Claude Code sessions. Zero lines written by hand.

Here's how it actually went.

## The Setup

I started with a blank directory and a thesis: if English really is the new programming language (it is — I wrote a [whole post about it](/blog/english-is-the-new-programming-language)), then I should be able to build a real, production-quality web project without touching a keyboard for anything except prompts.

My tool was Claude Code — Anthropic's CLI agent. Not the chat interface. The one that reads your filesystem, writes files, runs commands, and iterates on its own output. The distinction matters.

My stack decisions, made before I typed my first prompt:

- **Astro 5** for static-site generation (fast, simple, ships zero JS by default)
- **Monorepo** structure for code sharing across three sites
- **CSS custom properties** for the design system (no Tailwind — I wanted explicit control)
- **Cloudflare Pages** for deployment
- **JetBrains Mono + Inter** for typography

These weren't arbitrary. They were engineering decisions made from twenty years of opinions about what ships well and ages gracefully.

## Session One: The Foundation

The first session was about architecture. I described the monorepo structure I wanted: a `shared/` directory for components, styles, and utilities, and a `sites/` directory with individual Astro projects that aliased into shared code.

Claude Code built it in about fifteen minutes. The `@shared` alias, the CSS tokens file, BaseLayout, SiteHeader, SiteFooter, Card component — all generated from descriptive prompts about what I wanted each piece to do.

The design tokens came out particularly well. I described a dark-theme palette with site-specific accent colors (cyan for p8s, purple for e8s, amber for h11n) and got a clean CSS custom properties file that drives the entire visual system. One file, three sites, consistent theming.

What surprised me: the monorepo structure worked on the first try. No import resolution bugs. No TypeScript path alias confusion. I expected at least an hour of debugging. I got zero.

## Session Two: The Content

Session two was about the individual site pages. Each site needed a landing page with a hero section, an explainer, coming-soon cards, and a footer with cross-links to the sibling sites.

This is where prompt specificity mattered most. "Build me a landing page" would have produced something generic. Instead, I described the exact layout: a hero with the numeronym logo at massive scale, a tagline in monospace, a subtitle in sans-serif, a CTA button, and a subtle grid background animation.

The output was close on the first pass and right on the second. The grid background used a CSS linear gradient with the accent color at 3% opacity — subtle enough to feel intentional without being distracting. I didn't specify that exact value. Claude Code made that call, and it was the right one.

## What Worked

**Architectural prompts are the sweet spot.** When I described *what I wanted the system to be* rather than what individual lines of code should say, the output was consistently strong. "Create a shared Card component that renders as a `div` by default but as an `a` tag when an `href` prop is provided" — that prompt produced exactly the right component pattern.

**Iteration is cheap.** If something was wrong, I described the problem and got a fix in seconds. Not minutes, not hours — seconds. The feedback loop is so tight that you stop thinking about it as "fixing bugs" and start thinking about it as "refining intent."

**Design systems emerge naturally.** Once I established the tokens file and the first few components, subsequent components came out stylistically consistent without me having to specify colors, spacing, or typography. The AI understood the system and extended it correctly.

## What Didn't Work

**Copy editing.** The AI writes competent prose, but it has a tendency toward a specific kind of cadence that starts to feel uniform across pages. I had to push for more variation in tone between the three sites.

**Decision fatigue shifts, it doesn't disappear.** I didn't write code, but I made constant decisions. What should the max-width be? Should the footer be sticky? Should the cards have hover animations? These decisions used to be embedded in the act of writing code. Now they're extracted into pure architectural choices, which is arguably more cognitively demanding because there's no busywork to give you a rest.

**Naming things is still hard.** The AI names things fine, but the numeronym concept itself — p8s for parameters, e8s for embeddings, h11n for hallucination — that required a human with an opinion and a sense of humor. AI generates competent names. Humans generate interesting ones.

## The Transparency Angle

Every prompt from these sessions is logged in the `.prompts/` directory of the public repository. Every file was generated, not handwritten. The git history is the proof.

I did this intentionally. The narrative around AI-assisted development is full of vague claims. "I used AI to help me build this." Cool, what does that mean? Did the AI autocomplete a function name? Did it write the whole codebase? The spectrum is enormous and nobody talks about where they actually sit on it.

I'm sitting at the far end. 100% generated. And I'm making that provably visible because the industry needs concrete examples, not abstract possibilities.

## The Numbers

For the curious:

- **37 files** across the monorepo
- **16,000+ lines** of code, styles, and configuration
- **2 Claude Code sessions**, roughly 4 hours total
- **3 production sites** deployed to Cloudflare
- **0 lines** of hand-written code
- **1 shared component library** with 5 components
- **1 design token system** powering all three sites

Would a team of developers have built this faster? No. Would the code be structured differently? Maybe — some of it would be better, some worse. Would it have been shipped on a Sunday afternoon by one person? Absolutely not.

## What This Means

This isn't a flex. It's a data point. A single engineer with deep architectural knowledge and a good AI tool can now produce what used to require a small team and a sprint cycle.

That doesn't eliminate teams. It doesn't make collaboration obsolete. But it fundamentally changes the economics of building software. The startup that used to need three frontend developers now needs one engineer who knows what good looks like and can describe it clearly.

You're reading the proof right now.
