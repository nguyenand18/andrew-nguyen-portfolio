# Portfolio media assets

These files were recovered from the prior Vercel portfolio deployment and verified against the SHA-1 values in [asset-sha1-manifest.txt](asset-sha1-manifest.txt).

The public portfolio includes:
- `andrew-nguyen-professional.jpg` — professional portrait
- `andrew-introduction-poster.jpg` — introduction video poster
- `Andrew_Nguyen_Resume.pdf` — portfolio résumé currently served by the site
- `video/` — HLS introduction video playlist and segments
- `vendor/` — HLS player and license
- Historical NFL project images

These are public-facing assets and should not contain private client data or patient records.

When replacing the résumé, confirm the content and all links first. The image, PDF, and video should be referenced by relative `assets/` paths so Git-backed Vercel previews work without the old deployment.
