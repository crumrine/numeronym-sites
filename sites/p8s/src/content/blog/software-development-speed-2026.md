---
title: "Software Development Is Absurdly Fast Now. It's About to Get Absurder."
date: 2026-02-27
description: "A snapshot of how fast software ships in February 2026, and why by December this pace will look quaint."
tags: [ai, velocity, predictions, engineering-culture]
author: "Brian Crumrine"
draft: false
---

It's February 2026 and I genuinely cannot tell if I'm being productive or if productivity has lost all meaning.

Three weeks ago, I shipped a full-stack feature to [h11n.dev](https://h11n.dev). Database schema, API endpoint, form with validation, Cloudflare Workers deployment, Turnstile bot protection. All in a single sitting. Forty minutes, maybe. The kind of thing that would've been a sprint ticket with a two-point estimate eighteen months ago. I did it between lunch and a 1 PM meeting.

I keep waiting for the punchline. There isn't one. This is just how it works now.

## The Actual State of Things

I want to be concrete here because the discourse around AI and development speed tends to oscillate between "it changes everything!" and "it's just fancy autocomplete." Both are wrong, and I'm tired of both.

Here's what my day actually looks like in February 2026: I wake up, I think about what needs building, and then I describe it. Carefully, specifically, with twenty years of opinions about what "good" means baked into every sentence. And then it exists. Not a rough draft of it. Not a prototype. The thing.

The bottleneck used to be implementation. Now implementation is the fast part and I spend my time on the stuff that was always supposed to be the hard part: deciding what should exist, how the pieces fit together, whether this feature actually solves the problem or just looks like it does. The typing was never the point. I knew that intellectually. Now I feel it in my calendar.

The other thing that shifted, and this is the one that sneaks up on you, is that multi-file changes just happen. When I built that submission feature for h11n, the AI touched the frontend form, the serverless function, the content schema, and the deployment config in one pass. It held the whole stack in its head. A year ago that would've required me to context-switch between four files and keep the mental model consistent myself. Now I describe the feature and the consistency comes free.

## What's Different From a Year Ago

Early 2025 AI coding tools were useful in the way that a smart but unreliable intern is useful. You'd get output, then spend real time fixing the parts that were confidently wrong. Net gain, sure, but modest. Maybe 2-3x for someone who already knew what they were doing.

Three things broke that ceiling.

Context windows stopped being a party trick and started being actually useful. The tool can hold your whole codebase, not just the file you're editing, the *whole thing*, and generate code that fits your existing patterns instead of generic code you have to sand down to fit.

The loop changed. Instead of "generate code, human fixes code," it became "generate code, run it, read the error, fix it, run it again, verify it works, hand human a finished result." I went from being in the loop to being above it. That sounds like a small distinction. It isn't.

And models got better at the most underrated capability in software: admitting they don't know. When the model isn't sure about your Cloudflare Workers config or your weird monorepo alias setup, it asks now instead of guessing. That one change might matter more than everything else combined, because it means I can *trust* the output. Trust changes the whole workflow.

## December

Predictions are dangerous and I'm going to make some anyway.

By end of year, I think generating a complete application from a specification document will be boring. Not impressive, not novel. Boring. Auth, persistence, business logic, deployment. The specification becomes the artifact that matters. The code is compiled output. We'll talk about specs the way we currently talk about code.

I think the solo technical founder becomes the default. Not because teams stop mattering, but because for a surprisingly large category of products, the coordination cost of a five-person team exceeds what one person with deep domain knowledge and good tools can ship alone. This will be uncomfortable for the industry to absorb. It's going to happen anyway.

I think "code review" will mean reviewing a system against a specification instead of reviewing a pull request against a style guide. The unit of work changes.

And I think speed stops being the story. That's the big one. Right now when I tell another engineer I shipped something in forty minutes, they react. By December, nobody will blink. The interesting conversation moves from "look how fast" to "okay, it's fast, so what should we actually be building?" That's a better conversation. We should've been having it all along.

## The Uncomfortable Part

I've stopped planning more than two weeks ahead on anything technical. I can't. The assumptions I make today about what's hard and what's easy will be wrong by March. I've been in software for over twenty years and I have never experienced a period where the ground moves this fast.

Here's what I didn't expect: speed is exhausting in a way that slowness never was. When building is fast, you can try everything, which means you need to decide what's worth trying, which means you need taste, and you need it *fast*. The old world let you hide mediocre judgment behind thorough execution. Spend three weeks building something wrong and nobody blames your decision. They empathize with the effort. Build the wrong thing in an afternoon and it's obviously a judgment call you got wrong.

The architect who takes two weeks to produce a design document is now competing with the architect who ships three working prototypes in two days and lets the users pick. I know which one I'd bet on. It's not the one with the document.

So that's where I am. Moving fast, trying to steer well, occasionally wondering if the brakes work. If you're an engineer who understands systems and users and tradeoffs, this is the most leveraged you've ever been. If you're not, if the job was always about the typing, I don't know what to tell you that would be both honest and comforting.

The parameters are changing faster than they ever have. Keep up.
