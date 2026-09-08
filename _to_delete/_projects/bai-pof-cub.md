---
title: BAI+POF experiments on CUB-200
description: Using ViT pooling loss as a bandit reward signal on a 200-class bird dataset.
date: 2026-03-01
---

An empirical companion to the BAI with partially observable features
project. We treat each bird species as an arm ($K = 200$) and construct
observable/unobservable features from a pretrained ViT-Base.

## Setup

- **Dataset.** CUB-200-2011 (200 species, 60 images per species).
- **Observable feature $x_a$.** Mean CLS token embedding per species,
  $x_a \in \mathbb{R}^{768}$.
- **Unobservable feature $u_a$.** PCA eigenvalues from patch tokens —
  capturing spatial structure that CLS pooling discards.
- **Reward direction $\theta_\star$.** Fisher discriminant over the
  $[x_a; u_a]$ concatenation.

## Why this matters

No prior work uses ViT pooling *information loss* as a bandit reward
structure. The experiment doubles as a diagnostic for embedding quality:
if BAI converges faster with $u_a$ than without, the patch-token
structure is informative beyond what CLS captures.

A parallel run on CLIP (contrastive pretraining) vs. ViT (supervised)
lets us ask whether the latent structure depends on the training
objective.

## Status

- Pipeline: complete
- Regret curves: running
- Writeup: drafted for NeurIPS 2026 workshop
