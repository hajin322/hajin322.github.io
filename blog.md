---
layout: page
title: Blog
permalink: /blog/
show_title: true
subtitle: Notes from research, courses, and study sessions.
---

{% assign current_year = "" %}
{% for post in site.posts %}
  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% if this_year != current_year %}
    {% unless forloop.first %}</div>{% endunless %}
    <h3 class="year-heading">{{ this_year }}</h3>
    <div class="entry-list">
    {% assign current_year = this_year %}
  {% endif %}
  <div class="row">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d" }}</time>
  </div>
{% endfor %}
{% if site.posts.size > 0 %}</div>{% endif %}
