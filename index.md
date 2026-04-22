---
layout: page
title: About
permalink: /
---

<p class="eyebrow">AI undergraduate researcher · SIAI Lab</p>
<h1>Hajin</h1>

<p class="lead">
  I work on bandit theory and sequential decision-making at Chung-Ang
  University, advised by <a href="https://sites.google.com/view/wonyoungkim">Prof. Wonyoung Kim</a>.
  My current project studies <strong>best arm identification with partially
  observable features</strong> in linear bandits — using ViT pooling loss as
  a bandit reward signal to diagnose embedding quality.
</p>

<p class="lead" style="margin-top: 1rem;">
  I'm interested in how partial observability in bandits connects to hidden
  structure in causal graphs, and where representation learning meets
  sequential decision-making. Planning to apply for PhD in 2027.
</p>

<section class="section">
  <h2 class="section-title">Research interests</h2>
  <div class="tags">
    <span class="tag">Best arm identification</span>
    <span class="tag">Linear bandits</span>
    <span class="tag">Latent variable models</span>
    <span class="tag">Causal ML</span>
    <span class="tag">Representation learning</span>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Selected work</h2>
  <div class="feature-card">
    <div class="meta">
      <span class="badge badge-warn">In prep</span>
      <span>2026 · Annals of Statistics</span>
    </div>
    <p class="title">Best arm identification with partially observable features in linear bandits</p>
    <p class="authors">Hajin, Wonyoung Kim</p>
  </div>
  <p style="margin-top: 0.75rem; font-size: 0.875rem;">
    <a href="{{ '/publications/' | relative_url }}">All publications →</a>
  </p>
</section>

<section class="section">
  <h2 class="section-title">Recent notes</h2>
  <div class="entry-list">
    {% for post in site.posts limit: 4 %}
      <div class="row">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d" }}</time>
      </div>
    {% endfor %}
  </div>
  <p style="margin-top: 0.75rem; font-size: 0.875rem;">
    <a href="{{ '/blog/' | relative_url }}">All notes →</a>
  </p>
</section>

<section class="section">
  <h2 class="section-title">Elsewhere</h2>
  <p class="lead" style="font-size: 0.875rem;">
    <a href="https://github.com/{{ site.author.github }}">GitHub</a> ·
    <a href="mailto:{{ site.author.email }}">Email</a> ·
    <a href="https://www.linkedin.com/in/hajin322/">LinkedIn</a>
  </p>
</section>
