---
title: Attention as loss reweighting
subtitle: Focal loss, multi-task weighting, and token-level masks under one frame.
date: 2026-04-12
tags: [notes, deep-learning]
---

A short observation from this week's reading. If you treat the per-example
(or per-token) loss as a *distribution* rather than a scalar, several
seemingly unrelated tricks collapse into a single move: **reweighting that
distribution with attention**.

## Three things that look different

- **Focal loss.** $\mathcal{L}_{\text{focal}} = -(1 - p_t)^\gamma \log p_t$.
  The factor $(1 - p_t)^\gamma$ is just an attention weight that depends on
  the model's own confidence — easy examples get downweighted.
- **Multi-task weighting.** Per-task scalars $w_k$ multiplying $\mathcal{L}_k$
  are an attention over the task axis. If you let $w_k$ depend on gradient
  norm or uncertainty, it becomes data-dependent attention.
- **Token-level loss masking.** A binary mask over tokens is just hard
  attention over the sequence axis with $\{0, 1\}$ weights.

## The unified view

Let $\ell_i$ be the loss on item $i$ (token, example, task — pick a
granularity). The total objective is

$$
\mathcal{L} = \sum_i \alpha_i(\theta, x) \, \ell_i,
$$

where $\alpha_i \ge 0$ and $\sum_i \alpha_i = 1$ if you want a soft
distribution. The interesting axis is what $\alpha_i$ depends on:

- constant → uniform mean
- input only → static curriculum
- model state → focal-loss family
- gradient signals → uncertainty-weighted multi-task

Most "tricks" are choices on this single dial.

## Why I'm thinking about it

The bandit framing makes this natural: $\alpha_i$ is a soft action over
which losses to attend to. There's probably a clean BAI-flavored result
here about identifying which subset of $\ell_i$ are informative for
$\theta_\star$ — same flavor as feature selection in linear bandits.
Worth a longer note.
