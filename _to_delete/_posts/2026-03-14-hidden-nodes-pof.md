---
title: Hidden nodes in causal graphs ≈ POF
subtitle: A bridge from bandit theory to causal inference.
date: 2026-03-14
tags: [research, causal-ml, bandits]
---

A connection that's been on my mind: the partially observable features
(POF) in our linear bandit setup look structurally identical to **hidden
confounders** in a causal graph.

## Same object, different vocabulary

In BAI+POF we have an arm $a$ with observable feature $x_a$, an
unobservable feature $u_a$, and reward
$r_a = \theta_\star^\top [x_a; u_a]$.

In a causal graph picture, $x_a$ is a measured variable, $u_a$ is a
latent node, and $r_a$ is the outcome variable downstream of both. The
"partial observability" of bandits is exactly the "hidden confounder"
problem of causal inference, just dressed for sequential decisions.

## What this buys us

If you accept the equivalence, several causal-ML tools become applicable:

- **Front-door / back-door identification** translates to: under what
  arm-sampling distributions can we identify $\theta_\star$'s components
  separately?
- **Instrumental variables** would give us cleaner BAI rates when an
  exogenous source of variation in $u_a$ exists.
- **Orthogonal complement methods** (à la double ML) suggest a way to
  isolate the BAI signal from the latent-feature contamination.

Direction I want to push: take the BAI+POF algorithm, recast it in a
causal-graph language, and see whether the resulting estimator matches
what double ML gives you.
