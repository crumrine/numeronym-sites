---
title: "English is the New Programming Language"
date: 2026-02-09
description: "The fundamental skill of software engineering is shifting from writing code to communicating intent clearly."
tags: [ai, prompt-engineering, future-of-coding]
author: "Brian Crumrine"
draft: false
---

I've been writing software for over twenty years. I've shipped production code in C#, JavaScript, Python, Go, and a handful of languages I'd rather forget. I've debugged race conditions at 2 AM, argued about tabs versus spaces, and mass-refactored codebases that should have been condemned.

And I'm here to tell you that the most important programming language of the next decade isn't Rust, isn't TypeScript, isn't whatever WebAssembly evolves into. It's English.

## The Pattern We Keep Missing

Every major shift in software has been about raising the level of abstraction. Assembly gave way to C. C gave way to managed languages. We stopped hand-rolling HTTP servers when frameworks arrived. We stopped provisioning bare metal when cloud showed up. We stopped writing deployment scripts when Infrastructure as Code became the standard.

Each time, the same crowd said the same thing: "You still need to understand what's underneath." And they were right. But they missed the bigger point. Understanding the foundation doesn't mean you keep building at that level. It means you can direct the work more effectively when the tools improve.

That's exactly where we are now. Code is becoming conversation.

## The k8s-to-p8s Pipeline

I didn't come up with the numeronym naming by accident. k8s democratized infrastructure. You didn't need to understand Linux networking at a packet level to deploy a container. You needed to know *what you wanted* and how to express it in a YAML file that Kubernetes could interpret.

p8s is the same thesis applied to AI-assisted development. The parameters matter. The configuration matters. But the language you use to describe *what you want built* — that's the new source code.

When I built this site, I didn't open VS Code and start typing `import React from 'react'`. I opened Claude Code and said, "Build me a monorepo with three Astro sites sharing a component library, deployed to Cloudflare Pages." The specificity of that prompt — the architectural decisions embedded in the language — that *was* the engineering.

## What This Actually Looks Like in Practice

Let me be concrete, because I've seen too many "AI will change everything" takes that stay safely in the abstract.

Last weekend, I built three production websites. Not prototypes. Not mockups. Real sites with shared component libraries, design token systems, responsive layouts, SEO metadata, and Cloudflare deployments. I wrote zero lines of code by hand.

But here's the part people miss when they hear that: I made hundreds of engineering decisions. I chose Astro over Next.js for static-first performance. I chose a monorepo structure for code sharing. I specified CSS custom properties over Tailwind because I wanted fine-grained control over the design system. I defined a font stack, a color system, a spacing scale. I decided on JetBrains Mono for headings and Inter for body text.

Every one of those decisions was expressed in English. And every one of those decisions required years of experience to make well.

## The Hiring Implications

If you're a hiring manager still filtering resumes by "5+ years React experience," you're hiring for a skill that's depreciating faster than a new car driven off the lot.

The engineers who will thrive in the next five years are the ones who can:

- **Decompose a problem** into components that an AI can implement individually
- **Specify architecture** with enough precision that the output is production-ready
- **Review generated code** with enough depth to catch the subtle bugs that AI still introduces
- **Iterate on output** by providing feedback that converges toward the right solution instead of diverging into frustration

Notice what's not on that list: memorizing API surfaces, recalling syntax from memory, or typing 120 words per minute. Those were proxies for competence. They're not competence itself.

## The Career Development Shift

If you're a junior developer reading this, you might feel like the ground is shifting under your feet. It is. But the shift favors you more than you think.

The traditional path was: learn syntax, build projects, understand patterns, develop architectural intuition. That path took five to ten years. The new path compresses the early stages dramatically. You can generate working code in minutes. But architectural intuition — knowing *what* to build, not just *how* — that still takes experience. It still takes getting burned by bad decisions and learning from the scars.

The difference is that you can now accumulate those scars ten times faster. You can prototype an idea in an afternoon that used to take a sprint. You can explore three architectural approaches before lunch instead of committing to one and hoping for the best. The learning loop is tighter. The feedback is faster. The iteration speed is extraordinary.

If you're a senior engineer, your advantage is immense — but only if you let go of the identity that's tied to writing code. Your value was never in the typing. It was in the knowing. The knowing doesn't go away. It becomes more valuable, not less, because it's the bottleneck now.

## What the Industry Gets Wrong

The current discourse is dominated by two equally wrong positions.

Position one: "AI will replace all developers." No. It won't. It can't decompose novel problems. It can't navigate ambiguous business requirements. It can't sit in a room with a product manager and a designer and figure out what the user actually needs versus what they say they want.

Position two: "AI is just autocomplete. It's not a threat." Also no. If your daily contribution is translating well-understood requirements into well-understood code using well-understood patterns, you're describing a task that AI does reliably right now.

The truth lives in between, and it's more interesting than either extreme. AI is a force multiplier for the competent. It widens the gap between engineers who understand systems and engineers who only understood syntax. It rewards clarity of thought. It punishes vagueness.

English is the new programming language — but you still need to know what program to write.

## The Uncomfortable Bottom Line

I've shipped more production-quality software in the last three months than in any full year of my career. Not because I got faster at typing. Because I got better at saying what I mean.

The toolchain has changed. The compiler now runs on natural language. The IDE is a conversation. The deployment pipeline starts with a sentence.

But the engineering — the hard part, the part that matters — hasn't changed at all. You still need to know your parameters.

That's the whole point of this site.
