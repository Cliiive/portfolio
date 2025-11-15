# Minimal Cybersecurity Portfolio (React + Vite)

A minimal, modern, dark-mode portfolio for a 20-year-old CS student focused on cybersecurity. Content-first design with zero flashy animations. Projects and writeups are loaded from Obsidian-exported Markdown files with support for images and internal links.

## Run

```bash
npm install
npm run dev
```

## Structure

- `src/pages`: About, Projects list/detail, Writeups list/detail
- `src/components`: Nav, Tile
- `src/content`: Markdown content
  - `src/content/projects/*.md`
  - `src/content/writeups/*.md`

## Content Workflow

- Drop new Markdown files into `src/content/projects` or `src/content/writeups`.
- Frontmatter (YAML) is supported:

```md
---
title: My Project
description: One-liner about the project
tags: RCE, Postgres, C++
---

Body text in Markdown...
```

- Internal links between items work using relative `.md` links:
  - Example in a project: `../writeups/some-writeup.md`
  - Example in a writeup: `../projects/some-project.md`
- Images referenced in Markdown are supported when placed next to the `.md` file (relative paths) within `src/content/**`. They are resolved by the bundler.

### Images & Assets

- Keep lightweight screenshots next to the Markdown file under `src/content/**` when possible.
- For larger blobs, drop them under `public/projects/<slug>/` or `public/writeups/<slug>/`; the `<slug>` is the Markdown filename without the extension.
- Obsidian-style embeds such as `![[image.png]]` are auto-converted to regular Markdown images and will look for that image in the inferred public folder when it is not bundled under `src/content`.
- Absolute `/` paths still work: `![diagram](/images/diagram.png)` pulls directly from `public/images/diagram.png`.

## Design Principles

- Dark mode by default, professional and minimal
- Clean typography and spacing
- No playful aesthetics or animations

## Routes

- `/` — About
- `/projects` — Projects / Blog
- `/projects/:slug` — Project detail
- `/writeups` — Writeups
- `/writeups/:slug` — Writeup detail

## Notes

- Tech: React 19, Vite 6, Tailwind CSS 4, react-router, react-markdown, gray-matter
- New Markdown files are auto-detected at dev/build time via `import.meta.glob`.
