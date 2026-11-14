# Deepak Kandel’s portfolio

Academic portfolio built with Jekyll and Academic Pages / Minimal Mistakes.

Public address: https://kandeldeepak46.github.io

## Publish

The workflow in `.github/workflows/pages.yml` builds with GitHub Pages dependencies and deploys pushes to `main`.

1. In the repository’s **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Leave the custom domain blank to use `kandeldeepak46.github.io`.
3. Push changes to `main`, or run **Publish portfolio to GitHub Pages** from the **Actions** tab.
4. Wait for the workflow to finish successfully before checking the public address.

If the repository is private, GitHub Pages availability depends on the account plan. See [GitHub’s publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Edit content

- `_config.yml`: site name, profile, social links, and site settings.
- `_data/navigation.yml`: navigation links.
- `_pages/about.html`: homepage and research interests.
- `_pages/experience.md`, `_pages/projects.md`, `_pages/cv.md`: portfolio content.
- `_pages/teaching.html`: teaching experience.
- `_publications/`: publication records, grouped by year on the Publications page. Add a Markdown file with `title`, `authors`, `year`, `venue`, `permalink`, and `source_url`; optionally include `paperurl`, `doi`, and `pages`.
- `files/Resume__Kandel__Deepak.pdf`: downloadable resume.
- `_layouts/`, `_includes/`, `_sass/`: templates and styling.

Template posts, publications, portfolio samples, talks and slide PDFs, demo pages, and the unrelated `files/CV.pdf` are excluded from the published site through `_config.yml`.

## Preview locally

Use a Ruby installation with development headers (the macOS system Ruby may lack these), then install Bundler 2.1.4 as specified by `Gemfile.lock`:

```sh
gem install bundler -v 2.1.4
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open http://localhost:4000. Restart Jekyll after changing configuration files.

The publishing workflow uses GitHub’s preinstalled Pages dependencies and does not require local Ruby setup.
