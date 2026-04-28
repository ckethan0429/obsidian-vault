# CK Wiki Viewer

Obsidian-style Next.js viewer for the wiki at `../`.

## What it does

- Sidebar reads `wiki/index.md`
- Body renders the selected durable wiki page
- Internal `[[wikilinks]]` are converted into clickable viewer links
- Uses a dark Obsidian-like layout with sidebar + main content

## Run

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment

Optional override:

```bash
WIKI_ROOT=/home/ck/wiki npm run dev
```

By default the app assumes the wiki root is the parent directory of `viewer/`.

## Current implementation notes

- Index sidebar = `../index.md`
- Durable note body = markdown pages under `../entities`, `../concepts`, `../comparisons`, `../queries`
- `README.md` at the wiki root is also viewable
- This first version is read-only; editing can be added later
