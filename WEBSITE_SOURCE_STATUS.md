# Website source and media status

Updated November 23, 2026.

## Git-backed source
- `index.html`, `resume.html`, `project-evidence.html`, `styles.css`, `script.js`
- `assets/`: professional portrait, résumé PDF, video poster, HLS video playlist/segments, HLS player/license, and historical NFL images

The assets were recovered from the prior Vercel deployment and checksum-verified before adding them to this review branch. See [assets/asset-sha1-manifest.txt](assets/asset-sha1-manifest.txt).

The website now uses **relative asset paths**, so previews and future Git-backed production deployments no longer rely on the previous deployment's public domain for media.

## Publishing and safety
- Keep the website's existing production project and URL. Do not delete historical deployments until the recovered Git-backed production release is verified.
- Team model repositories, client data, patient data and private referral material must remain private.
- The current portfolio résumé PDF is a recovered prior version, not a claim that the user's latest job-specific résumé has been finalized.
- After merge, confirm the production deployment includes the media and test actual browser loading for the portrait, PDF, and video.
