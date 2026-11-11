# REC OpenWorks

REC OpenWorks is a GitHub Pages-compatible Jekyll site for a student-led engineering knowledge initiative by VGU Robotics & Electronics Club (REC). Its visual language follows the supplied prototype: editorial typography, engineering-green linework, compact publication metadata, and a paper-like archive.

All six records in this repository are explicitly marked as demonstration content. They are not real publications, research results, people, affiliations, or DOIs.

## Requirements

- Ruby supported by the current `github-pages` gem (check the [GitHub Pages dependency versions](https://pages.github.com/versions/) before choosing a Ruby version)
- Bundler (`gem install bundler` if it is missing)

No Node.js, database, build service, backend, or paid service is needed.

## Local installation and preview

From the project root:

```sh
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll (normally `http://127.0.0.1:4000/`). For a production-style build:

```sh
bundle exec jekyll build
```

Jekyll writes the generated static site to `_site/`, which is intentionally ignored by Git.

## Project structure

```text
_config.yml             Jekyll and GitHub Pages settings
_data/                  Navigation and category definitions
_includes/              Shared brand, header, footer, and archive rows
_layouts/               Default, regular page, and individual work templates
_works/<work-slug>/     One work per folder: index.md, images/, and supplements/
pages/                  Archive, knowledge, about, submit, and policy pages
assets/css/main.css     Responsive visual system and dark mode
assets/js/main.js       Navigation, theme, search/filter, and citation copy
assets/images/          SVG favicon and social-image placeholders
index.html              Editorial homepage
404.html                Custom not-found page
```

## Create a new work

1. Create a folder for the URL-safe work slug, for example `_works/my-new-record/`.
2. Create its single collection document at `_works/my-new-record/index.md`, then create sibling `images/` and `supplements/` folders.
3. Add front matter like this:

   ```yaml
   ---
   title: "A clear title"
   slug: my-new-record
   permalink: /works/my-new-record/
   authors:
     - name: Author name
       affiliation: Vietnamese-German University (VGU)
       email: student-id@student.vgu.edu.vn # Optional; publish only a verified public address
   date: 2026-11-09
   category: report # research, report, article, project, tutorial, or video
   field: Electronics & Embedded Systems
   keywords: [keyword one, keyword two]
   abstract: "A concise description of the work."
   status: Technical moderation
   version: v1.0
   featured: false
   citation_ready: true
   cover: images/cover.svg # Optional archive thumbnail and work-page cover
   supplements:
     - title: Full technical paper
       file: supplements/paper.pdf
       type: PDF paper
     - title: Example measurements
       file: supplements/measurements.csv
       type: CSV dataset
   ---
   ```

3. Write the article in normal Markdown beneath the front matter. Keep the explicit `permalink`—all collection documents are named `index.md`, and it preserves the public URL without filename collisions.
4. Place work-owned images in `images/` and papers, slides, datasets, and other downloadable attachments in `supplements/`. The nested files are copied beside the generated work page, for example `/_site/works/my-new-record/images/cover.svg`.
5. Use Liquid and `relative_url` for every work-owned image or document URL. Do **not** use an ordinary Markdown-relative path. For an article image:

   ```md
   ![Descriptive alt text]({{ page.url | append: 'images/cover.svg' | relative_url }})
   ```

   The `cover` and each supplementary `file` value are paths relative to that work's URL, such as `images/cover.svg` and `supplements/paper.pdf`; the templates apply `relative_url` automatically. This keeps root-domain and GitHub Pages project-site URLs working.
6. Optionally add `doi`, `external_url`, `github_url`, `video_url`, and `references` only when they are real, verified, and permitted to publish. A record marked `Preprint — Not Peer Reviewed` automatically receives the clear preprint notice.

The work page, archive row, search index, metadata block, and knowledge page are generated automatically. Do not add work records to JavaScript arrays.

### Public-asset warning

Anything in a work's `images/` or `supplements/` directory is copied to the published static website and can be downloaded by anyone. Never place private submissions, reviewer records, personal data, credentials, confidential research, or other non-public material in these folders.

## Edit categories, brand, and colours

- Change category IDs and labels in `_data/categories.yml`. Keep an existing work's `category` equal to one of those IDs.
- Replace `assets/images/favicon.svg` and `assets/images/og-placeholder.svg` with approved REC assets when available.
- Edit the CSS custom properties at the top of `assets/css/main.css` for the palette, including light and dark themes. The supplied palette starts with paper `#F5F4EF`, text `#1D2927`, engineering green `#15594E`, signal orange `#D67A52`, and borders `#D7DBD2`.
- Shared navigation lives in `_data/navigation.yml`; the logo structure is in `_includes/brand.html`.

## Configure the site URL

Before publishing, edit `_config.yml`:

```yaml
url: "https://USERNAME.github.io"
baseurl: "/REPOSITORY"
```

For a user or organization site at `https://USERNAME.github.io`, leave `baseurl` as an empty string. For a future custom domain, set `url` to that domain and normally leave `baseurl` empty. The templates use Jekyll's `relative_url` and `absolute_url` filters, so links and assets work in a repository subdirectory.

After changing `_config.yml`, stop and restart `bundle exec jekyll serve`; Jekyll does not reliably reload configuration in a running server.

## Manual GitHub Pages deployment

1. Create a new GitHub repository manually and upload these project files. Do not upload `_site/` or `vendor/`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing this project (usually `main`) and the `/ (root)` folder, then save.
5. Set `url` and `baseurl` in `_config.yml` as described above, commit/upload that change, and wait for GitHub Pages to rebuild.
6. Open the URL reported in the Pages settings and verify the archive, a work page, dark mode, mobile navigation, and the custom 404 page.

## Known limitations

- This is deliberately a static public site: there are no user accounts, upload form, private review store, comments, analytics, or backend.
- The submission page contains a placeholder for a future university-approved private form. It does not collect data.
- There is no bundled math renderer to avoid an external dependency. Standard Markdown, responsive tables, and Rouge syntax highlighting are supported.
- Local verification requires a Ruby environment that can install the GitHub Pages gem.
# rec-openworks
