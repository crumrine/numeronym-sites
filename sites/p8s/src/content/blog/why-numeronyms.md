---
title: "Why Numeronyms? Because Naming Things Is the Hardest Problem in Computer Science"
date: 2026-02-10
description: "The origin story of p8s.dev, e8s.dev, and h11n.dev, and why abbreviating words by stuffing a number in the middle is the perfect metaphor for what AI is doing to software."
tags: [numeronyms, origin-story, naming, ai]
author: "Brian Crumrine"
draft: false
---

If you've ever deployed a container, you've used a numeronym without thinking about it. Kubernetes: k8s. Internationalization: i18n. Accessibility: a11y. Observability: o11y. The pattern is simple: first letter, count of middle letters, last letter. It's a compression algorithm for words that are too long to type in a Slack channel.

I built three websites around this pattern, and people keep asking me why. The honest answer is that it started as a naming exercise and turned into a thesis.

## The Pattern

Here's what I noticed: every widely-adopted numeronym in tech represents something that started niche and became infrastructure. Internationalization was a specialty, and now every app does it by default. Kubernetes was experimental, and now it's the substrate. Accessibility was an afterthought, and now it's a legal requirement.

The numeronym doesn't just abbreviate the word. It marks the transition from "thing some people care about" to "thing everyone uses but nobody wants to spell out every time." It's a badge of ubiquity.

So when I was thinking about what to build, I asked: what concepts in AI-assisted development are making that same transition right now? What's moving from niche to infrastructure?

Three things stood out.

## p8s: Parameters

[p8s.dev](https://p8s.dev) is about the inputs that determine outputs. In the context of AI, "parameters" means model weights, but the word has always meant something broader: the configuration decisions that shape a system's behavior.

When I describe an architecture to Claude Code, every choice in the prompt is a parameter. Astro over Next. Monorepo over polyrepo. CSS custom properties over Tailwind. These aren't code. They're configuration expressed in English. And they determine the output as completely as any `config.yaml` ever did.

The thesis of p8s is that parameters are the new source code. The blog posts here explore that idea from different angles: the [death of the traditional SWE](/blog/death-of-the-traditional-swe), [English as a programming language](/blog/english-is-the-new-programming-language), [building without writing code](/blog/i-built-three-sites-without-code). They're all circling the same point: the valuable work has shifted from implementation to specification.

## e8s: Embeddings

[e8s.dev](https://e8s.dev) is the technical sibling. Embeddings are the numerical representations that let machines understand meaning, turning words, images, and concepts into vectors in high-dimensional space so that "similar" things are mathematically close together.

If that sounds academic, it shouldn't. Embeddings are why your search engine understands that "best pizza near me" and "top-rated pizzeria nearby" mean the same thing. They're why recommendation systems work. They're the hidden infrastructure underneath every AI product you use daily.

The name follows the pattern: embeddings started as a research concept, became a tool for ML engineers, and are now so fundamental that most developers interact with them without knowing it. That's numeronym territory.

## h11n: Hallucination

[h11n.dev](https://h11n.dev) is the fun one. AI hallucinations (those moments when a model generates something confidently, fluently, and completely wrong) are simultaneously the biggest problem in AI and the most entertaining content on the internet.

Budapest as the capital of Romania. A fake Supreme Court case cited in a legal brief. A bicycle designed for submarine use. The models don't hedge. They don't say "I'm not sure." They deliver fiction with the confidence of a tenured professor, and the results are frequently hilarious.

h11n treats hallucinations as artifacts worth preserving. The [Hall of Fame](https://h11n.dev/hall-of-fame) ranks them by a "Comedy Gold" score: absurdity times confidence. The [quiz](https://h11n.dev/quiz) challenges you to distinguish real hallucinations from made-up ones (harder than you'd think). And soon, you'll be able to [submit your own catches](https://h11n.dev), because the best hallucinations are found in the wild, not manufactured.

The name fits. Hallucination is making the transition from "weird edge case" to "fundamental challenge that every AI system must address." It deserves its numeronym.

## Why This Naming Convention Matters

There's a deeper point here that goes beyond cute abbreviations.

Numeronyms succeed when a concept becomes so common that the full word creates friction. Nobody writes "kubernetes" in a commit message. Nobody types "internationalization" in a code review. The abbreviation isn't laziness. It's a signal that the concept has graduated from something you explain to something you assume.

AI-assisted development is in that graduation ceremony right now. Parameters, embeddings, and hallucinations aren't emerging concepts anymore. They're the vocabulary of a new way of building software. Giving them numeronyms is a small bet that these words will be typed as often in the next decade as "kubernetes" was in the last one.

And if I'm wrong? Then I've got three well-designed websites with unusual domain names. There are worse outcomes.

## The Monorepo, Obviously

The three sites share a codebase, a monorepo with shared components, a unified design system, and site-specific accent colors (cyan for p8s, purple for e8s, amber for h11n). This isn't just engineering convenience. It's the point.

These concepts are connected. Parameters shape how models work. Embeddings are how they represent knowledge. Hallucinations are what happens when those representations fail. Building them as isolated sites would have missed the relationship. Building them as a single system makes the connection visible.

The [entire codebase is public](https://github.com/crumrine/numeronym-sites). Every line was generated by AI. The `.prompts/` directory contains the actual prompts used in each session. It's the most transparent AI development project I'm aware of, because the industry needs fewer "I used AI to help" claims and more receipts.

## What's Next

p8s is growing: you're reading its blog, and the [Parameter Playground](/playground) is live. h11n is about to get its first interactive feature: a submission form where anyone can contribute hallucinations they've caught. e8s is still in the design phase, figuring out what an embeddings-focused site looks like when it's not just another API documentation page.

The numeronym project is a living experiment in building with AI, building about AI, and being transparent about both. It started with a naming convention and turned into something bigger.

But it's still, at its core, about knowing your parameters.
