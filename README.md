# hajin322.github.io

Personal website of Hajin — a minimal Jekyll site with `jekyll-scholar`
for BibTeX-driven publications. Inspired by [al-folio](https://github.com/alshedivat/al-folio)
but stripped down to a quiet, Vercel/Linear-adjacent layout.

## Local development

Prereqs: **Ruby 3.2+**, Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000>. The site rebuilds on save.

## Deploying

Push to `main`. The GitHub Actions workflow in
`.github/workflows/deploy.yml` builds the site (with `jekyll-scholar`)
and deploys it to GitHub Pages automatically.

**One-time setup** in the GitHub repo:

1. Settings → Pages → **Source: GitHub Actions**.
2. That's it. No `gh-pages` branch needed.

## Adding content

### A new publication

Append to `_bibliography/papers.bib`:

```bibtex
@inproceedings{hajin2027glm,
  title     = {GLM extension for best arm identification},
  author    = {Hajin and Kim, Wonyoung},
  booktitle = {ICML},
  year      = {2027}
}
```

It shows up on `/publications/` grouped by year, newest first.

### A new blog post

Create `_posts/YYYY-MM-DD-slug.md`:

```yaml
---
title: Title of the note
subtitle: Optional one-line summary.
date: 2026-05-01
tags: [research, notes]
---

Markdown content. LaTeX math with `$ ... $` and `$$ ... $$`.
```

### A new project

Create `_projects/slug.md` with `title`, `description`, and `date`.

## Retheming

Every design token lives at the top of `assets/css/main.scss`. Change
`--color-accent` to shift the whole palette. No other file needs edits.

## Structure

```
_config.yml             site config
_layouts/               default / page / post
_includes/              head, nav, footer
_sass/                  (reserved — currently unused; main.scss is self-contained)
_posts/                 blog
_projects/              projects collection
_bibliography/          papers.bib for jekyll-scholar
assets/css/main.scss    entire design system, single file
index.md                About / landing
publications.md         renders _bibliography/papers.bib
projects.md             lists _projects/
blog.md                 lists _posts/ grouped by year
.github/workflows/      deploy pipeline
```

## What's not included from al-folio

Removed on purpose: news feed, CV page, teaching page, talks page,
Disqus, Google Analytics, Bootstrap, jQuery, the default photo grid,
the news flash banner, and the background image header. Add any back
by writing a new `.md` page and linking it in `_includes/nav.html` — no
plugin work needed for most of them.
