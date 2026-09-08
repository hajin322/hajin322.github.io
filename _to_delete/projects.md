---
layout: page
title: Projects
permalink: /projects/
show_title: true
subtitle: Code, experiments, and side things.
---

<div class="project-list">
{% assign projects = site.projects | sort: "date" | reverse %}
{% for proj in projects %}
  <div class="project-row">
    <div class="top">
      <a href="{{ proj.url | relative_url }}" class="name">{{ proj.title }}</a>
      <span class="when">{{ proj.date | date: "%Y" }}</span>
    </div>
    <p class="desc">{{ proj.description }}</p>
  </div>
{% endfor %}
</div>
