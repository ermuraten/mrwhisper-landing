# MrWhisper landing page

Static, bilingual (English at `/`, German at `/de`) site for MrWhisper. Next.js 16 static export, hosted on GitHub Pages.

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
