# Tide Notes (static-site)

A Strux real-world test project (docs/REAL_WORLD_TESTS.md in the Strux repository).

**What it is:** a plain static site in the folder `site/`: three HTML pages, a not-found page, a stylesheet, one script
and an SVG image. No `package.json`, no build. This README stays outside `site/`, so it is not published.

**What Strux should do:** find one app folder, `site`, as a **static site**, publish its files as they are, and serve
`index.html`, `about.html`, `images/wave.svg` and, for an unknown path, the not-found answer. `README.md` and
`.gitignore` are not in the published files.

| Source | Content | Use in the tests |
|---|---|---|
| tag `v1.0.0` | Version 1 | Start: publish **A fixed commit** (the commit of the tag) as Release 1; no update is offered |
| `main` | Version 2: adds the Contact page | **Change branch** to `main`, publish Release 2, then **Make Release 1 live** |
| branch `next` | Version 3: a warmer accent colour | **Change branch** to `next` |

The commit of the tag: `git rev-list -n 1 v1.0.0`.

Check locally: open `site/index.html` in a browser.
