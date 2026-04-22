---
layout: page
title: About
permalink: /
---

<section class="hero">

<div class="hero-grid">

<div class="hero-text">

<span class="hero-label"><span class="dot"></span>MSc · SIAI Lab · Chung-Ang University</span>

<h1>Sangjin Kim</h1>
<h2><span class="italic">stduent researcher</span></h2>


<p class="hero-tagline">
  I work on <span class="hl">bandit theory</span> and sequential decision-making,
  under the supervision of <strong>Prof. Wonyoung Kim</strong>. My current project studies
  <span class="hl">Sequential Decision-making with partially observable features</span>
  generalizing through ViT pooling loss as a bandit reward signal to
  diagnose embedding quality, etc.
</p>

<p class="hero-tagline">
  I'm interested in how <span class="hl">partial observability</span> connects to hidden
  structure in causal graphs, and where representation
  learning meets sequential decision-making. Planning to apply for PhD in 2027.
</p>


</div>
<div class="hero-photo">
  <img src="{{ '/assets/images/hajin.jpg' | relative_url }}" alt="Hajin" loading="eager" fetchpriority="high">
  <div class="hero-photo-frame" aria-hidden="true"></div>
</div>

<div class="pill-row">
  <span class="pill">Contextual Bandits</span>
  <span class="pill">Best Arm Identification</span>
  <span class="pill">Representation Learning</span>
  <span class="pill">Causal ML</span>
</div>

</div>

<div class="hero-links">
  <a href="mailto:{{ site.author.email }}">Email</a>
  <a href="https://github.com/{{ site.author.github }}">GitHub</a>
  <a href="https://www.linkedin.com/in/hajin322/">LinkedIn</a>
  {% if site.author.scholar != "" %}<a href="https://scholar.google.com/citations?user={{ site.author.scholar }}">Scholar</a>{% endif %}
</div>


</section>

<section class="section" id="news">
  <h2 class="section-title">
    <span class="num">01</span>
    <span>Recent <em>news</em></span>
    <span class="line"></span>
  </h2>
  <ul class="news-list">
    <li class="news-item">
      <span class="news-date">Apr 2026</span>
      <span class="news-body">
        Preparing manuscript on <b>BAI with partially observable features</b> for submission to <b>Annals of Statistics</b>.
      </span>
    </li>
    <li class="news-item">
      <span class="news-date">Mar 2026</span>
      <span class="news-body">
        Selected as team lead for the <b>2026 AI Rookie Contest</b> — Korean sovereign AI multi-agent Android automation pipeline.
      </span>
    </li>
    <li class="news-item">
      <span class="news-date">Feb 2026</span>
      <span class="news-body">
        Running CUB-200 experiments on ViT embeddings for the BAI+POF project — targeting a NeurIPS 2026 workshop writeup.
      </span>
    </li>
  </ul>
</section>

<section class="section" id="selected-work">
  <h2 class="section-title">
    <span class="num">02</span>
    <span>Selected <em>work</em></span>
    <span class="line"></span>
  </h2>
  <div class="feature-card">
    <div class="meta">
      <span class="badge badge-warn">In prep</span>
      <span>2026 · Annals of Statistics</span>
    </div>
    <p class="title">Best arm identification with partially observable features in linear bandits</p>
    <p class="authors">Hajin, Wonyoung Kim</p>
  </div>
  <p style="margin-top: 1rem; font-size: 0.88rem;">
    <a href="{{ '/publications/' | relative_url }}">All publications →</a>
  </p>
</section>

<section class="section" id="recent-notes">
  <h2 class="section-title">
    <span class="num">03</span>
    <span>Recent <em>notes</em></span>
    <span class="line"></span>
  </h2>
  <div class="entry-list">
    {% for post in site.posts limit: 4 %}
      <div class="row">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d" }}</time>
      </div>
    {% endfor %}
  </div>
  <p style="margin-top: 1rem; font-size: 0.88rem;">
    <a href="{{ '/blog/' | relative_url }}">All notes →</a>
  </p>
</section>
