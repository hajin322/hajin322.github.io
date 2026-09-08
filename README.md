# hajin322.github.io

Personal academic site for Sangjin Kim — a single-page CV built with Jekyll.

## Structure

```
index.md                   ← the whole page (header, intro, CV sections)
_layouts/default.html      ← html shell
_layouts/page.html         ← article wrapper
_includes/head.html        ← meta, Source Serif 4, stylesheet
_includes/footer.html      ← copyright line
assets/css/main.scss       ← all styling (one serif family, blue accent)
assets/images/hajin.jpg    ← profile photo
_config.yml                ← site + author metadata
```

## Editing

All content lives in `index.md`. To add a CV section, copy an existing
`<section class="cv-block">` block and change the heading and entries.

Entry markup:

```html
<div class="entry">
  <div class="entry-top">
    <span class="entry-title">Title</span>
    <span class="entry-date">Date</span>
  </div>
  <div class="entry-line">Detail line</div>
</div>
```

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
deploys to GitHub Pages.

## Notes

`_to_delete/` holds the old blog / projects / publications pages that were
removed when the site was consolidated into one page. Delete that folder
whenever you're ready:

```bash
rm -rf _to_delete && git add -A && git commit -m "remove archived pages"
```
