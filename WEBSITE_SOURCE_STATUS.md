# Website source status

This branch contains the static HTML/CSS/JS source currently used by Andrew's portfolio website, adapted for Git-backed preview deployments.

## What is self-contained here
- `index.html`
- `resume.html`
- `project-evidence.html`
- `styles.css`
- `script.js`

## Temporary external media dependency
Large/binary assets (resume PDF, portrait image, HLS player file and intro-video segments) are still served from the existing production Vercel project at:

`https://andrew-nguyen-portfolio-vercel-1.vercel.app`

This keeps the Git preview visually consistent without moving large media assets in the first migration. The live production site remains the source of those assets until a later media migration.

## Safety and publishing
- The ECG technical link now points to the public portfolio case study rather than the private competition repository.
- No production domain should be moved until the Git-backed preview is verified.
- Do not delete or replace the original Vercel project while this branch depends on its media URLs.
