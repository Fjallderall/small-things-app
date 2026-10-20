# Small Things

A cosy pixel-art wagon where Mite, a small moss creature, keeps your task list company.

**Play it:** https://fjallderall.github.io/small-things-app/

- Works in any browser, on a phone or a computer. On Android, Chrome's menu → Install app (or Add to home screen) puts it on your home screen as its own app, and it then opens without a connection too.
- Everything you add is saved in your own browser only. Nobody else can see it, and there's no account.
- That storage isn't encrypted: anyone who uses your browser profile can read it. Don't put passwords or other secrets in your tasks or notes.
- To keep a copy, use Settings → backup in the app.
- The page loads nothing from other servers. The only outside connection is the optional weather (open-meteo.com), with a rounded location.

This repository only holds the built app: `index.html`, plus the files that make it installable (manifest, icons, and `sw.js`, which keeps a copy for offline use).

Fonts: Bricolage Grotesque, Atkinson Hyperlegible, IBM Plex Mono, DotGothic16 and VT323, each under the SIL Open Font License 1.1, embedded in the page.
