# MrWhisper landing page

Static, bilingual (English at `/`, German at `/de`) site for MrWhisper. Next.js 16 static export, hosted on GitHub Pages.

## Deployment status — 2026-10-07

- Repository: https://github.com/ermuraten/mrwhisper-landing (public).
- GitHub Pages is enabled with GitHub Actions and HTTPS.
- Configured URL: https://ermuraten.github.io/mrwhisper-landing/ (not live yet).
- Contact: Murat Eren, info@mrwhisper.site. Street and postal code/city are still required before running the deploy workflow.
- Local lint, language parity (68 features) and static production build passed. The launch check correctly fails on the two missing address fields.
- `mrwhisper.site` is not connected to Pages yet. Claude Startups requires the business email domain to match the website domain: https://claude.com/de/programs/startups.

Once the address is provided: run `npm run check`, commit and push, trigger `gh workflow run pages.yml --ref main`, then verify both languages, assets and legal pages on the deployed URL.
Keep `NEXT_PUBLIC_BASE_PATH=/mrwhisper-landing` for the GitHub URL. When switching to the custom domain, configure it in GitHub Pages, add `public/CNAME` containing `mrwhisper.site` (used by this workflow to select an empty base path), and rebuild. GitHub Actions does not use the CNAME file itself to configure the custom domain.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run check        # feature-list parity + launch readiness
NEXT_PUBLIC_BASE_PATH=/mrwhisper-landing npm run build:pages   # static export into ./out
```

## Everything that is a business or legal decision lives in `src/site.config.ts`

| Setting | Meaning |
| --- | --- |
| `priceEarly`, `priceRegular`, `earlyLimit` | Test price: 39 € for the first 100 licenses, then 59 € (review after ~20 sales). |
| `updateMonths`, `refundDays` | Updates included (12 months) and refund window (14 days). Shown on the site and in the terms. **Confirm before launch.** |
| `checkoutUrl` | Lemon Squeezy checkout link. Empty = the buy button shows "Launching soon". |
| `demoVideo`, `demoPoster` | File under `public/` (for example `/media/mrwhisper-demo.mp4`). Empty = the demo section is hidden. |
| `legal.*` | Name, address and email for the legal notice (Impressum), privacy policy and terms. |
| `indexable` | `false` = `noindex`. Flip to `true` at launch. |

## Publishing is deliberately blocked until the legal data exists

`npm run check` (also run by the workflow) fails while any `legal.*` field still holds `[[TODO]]`. The deploy workflow is manual (`workflow_dispatch`) until launch.

To go live:
1. Fill `legal.name`, `legal.street`, `legal.city`, `legal.email` in `src/site.config.ts`.
2. Make the repository public (GitHub Pages on a private repo needs a paid plan) and enable Pages with source "GitHub Actions".
3. Run the "Deploy to GitHub Pages" workflow. For a custom domain add `public/CNAME` with the domain; the base path then becomes empty automatically.

## Notes

- The changelog page is German only (release notes are written in German).
- The legal pages are good-faith drafts, not reviewed by a lawyer.
- The site loads nothing from third parties: fonts, images and the demo video are self-hosted.
