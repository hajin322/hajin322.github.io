---
title: PPCA as a generative process for BAI+POF
subtitle: A Bayesian latent-variable foundation for partially observable bandits.
date: 2026-03-28
tags: [research, bandits, latent-variable]
---

In the BAI + partially observable features (POF) setting, we have an arm
representation $x_a \in \mathbb{R}^d$ that we observe and a missing factor
$u_a$ that drives part of the reward. PPCA gives a principled generative
story for where $x_a$ comes from.

## The setup

Probabilistic PCA assumes a low-dimensional latent $z_a \in \mathbb{R}^k$
($k < d$) and

$$
x_a = W z_a + \varepsilon, \qquad \varepsilon \sim \mathcal{N}(0, \sigma^2 I).
$$

The posterior $p(z_a \mid x_a)$ is Gaussian with closed form. So even
though we never *observe* $z_a$, we can use its posterior mean as a
sufficient summary for downstream decisions.

## The bandit reading

If the true reward is $r_a = \langle \theta_\star, [x_a; z_a] \rangle$ —
i.e., depends on both observable and latent components — then BAI with
posterior $z_a$ inference is essentially **Thompson-style exploration in
the latent dimension** while doing standard linear-bandit elimination in
the observable dimension.

Two open questions:

1. **Identifiability.** When does $\hat{z}_a$ recover $z_a$ well enough
   that BAI rates degrade gracefully with $\sigma^2$?
2. **Sample complexity.** Does the bound depend on $k$ (latent dim) or on
   the effective dimension after projecting onto the relevant subspace of
   $\theta_\star$?

The second is the more interesting one and ties straight into the Fisher
discriminant view we've been using for $\theta_\star$.
