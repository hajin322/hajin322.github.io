# v2 redesign — apply notes

This zip contains **only the changed files** from the v1 site. Overlay them
onto your existing `hajin322.github.io` repo — every path matches exactly.

## Files changed

```
_includes/head.html        ← new font stack (Fraunces + Inter Tight + JBM)
_includes/nav.html         ← pulsing dot on logo
_includes/footer.html      ← mono styling
_layouts/default.html      ← adds .aurora + .cursor-blob layers, loads main.js
assets/css/main.scss       ← full rewrite
assets/js/main.js          ← NEW: cursor blob, scroll reveal, view transitions
index.md                   ← new hero with Fraunces display + italic accent
```

Files you should **keep as-is** (not in this zip):
- `_config.yml`
- `Gemfile`
- `.github/workflows/deploy.yml`
- `_bibliography/papers.bib`
- `_posts/*`
- `_projects/*`
- `publications.md` / `projects.md` / `blog.md`
- `_layouts/page.html` / `_layouts/post.html`

## Applying

From the zip's root directory (where this README lives):

```bash
# From inside your local git repo root:
cp -R /path/to/redesign-v2/_includes/. _includes/
cp -R /path/to/redesign-v2/_layouts/. _layouts/
cp -R /path/to/redesign-v2/assets/. assets/
cp /path/to/redesign-v2/index.md index.md

git status   # 7 modified, 1 new file (assets/js/main.js)
git add .
git commit -m "Redesign v2: Fraunces display, cursor blob, scroll reveals"
git push
```

## What changed visually

- **Fonts**. Fraunces (opsz-variable serif) for all display headings with
  italic accent in blue. Inter Tight for body. JetBrains Mono for dates,
  labels, and monospace chrome.
- **Cursor blob**. A soft blue radial gradient (440px) follows the pointer
  on hover-capable devices. Respects `prefers-reduced-motion`.
- **Aurora**. Two slowly drifting blurred blobs in the background (blue +
  subtle amber) give the page atmosphere without being distracting.
- **Scroll reveal**. Hero + every section/card/list item fades in as it
  enters the viewport. Slight stagger.
- **Page transition**. View Transitions API where supported (Chromium,
  Safari 18+); on older browsers a quick 220 ms fade before navigation.
- **Hero**. Display h1 with italic blue accent on role word; hoverable
  tagline with highlight sweep on key phrases (`.hl`); mono status pill
  with pulsing dot at top.
- **Ticker**. Keyword marquee between hero and sections.
- **News list**. Terminal-log style — left border grows on row hover.
- **Publication cards**. Left accent border expands on hover, underline
  grows under the title link.
- **All transitions** use a single easing curve `cubic-bezier(0.22, 1, 0.36, 1)`
  for consistency.

## Customizing

Every color / radius / font token lives at the top of `assets/css/main.scss`
(the `:root` block). Changing `--accent` recolors the entire site.

If you want a different cursor blob color, change `--accent-glow`. If it
feels too strong on white, lower the opacity in that rgba value.

If the ticker feels noisy, delete the `.ticker` block in `index.md`.
