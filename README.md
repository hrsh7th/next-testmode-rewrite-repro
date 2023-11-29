next-testmode-rewrite-repro
============================================================

This repository aims to explain the bug related testmode and rewrites config in Next.js

What's the bug?
------------------------------------------------------------

In `npm run dev`, the following URLs can display the content without errors.

- `http://localhost:3000/app`
- `http://localhost:3000/pages`

In `npm run dev-repro`, the URLs can *NOT* display the content without errors.

