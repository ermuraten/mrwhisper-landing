# MrWhisper landing page

Static, bilingual (English at `/`, German at `/de`) site for MrWhisper. Next.js 16 static export, hosted on GitHub Pages.

## Deployment status — 2026-10-07

The original bilingual landing page is published as a product presentation at https://mrwhisper.site/ (German: `/de/`), including the self-hosted demo video. The user explicitly requested this while an external legal-notice address is pending. The existing simple company introduction is preserved at https://mrwhisper.site/company/.

- Repository: https://github.com/ermuraten/mrwhisper-landing (public).
- Hosting: GitHub Pages via `.github/workflows/pages.yml` (manual trigger). Domain/DNS and email remain at Hostinger; no new DNS changes or purchases are needed.
- `SITE.preview: true`: purchase buttons disabled; planned early-bird pricing is visible (39 € for the first 100 licenses, then 59 €, one-time). A pricing link is available in the hero. Sales FAQs and commercial terms remain hidden. `checkoutUrl` stays empty. No app download links; contact links remain available.
- Legal pages disclose the pending service address without publishing placeholder or private address data. The notice does not replace a complete statutory legal address.
- Demo, poster and captions are self-hosted in `public/media/`.
- `npm run check:preview` checks language parity and requires preview mode, an empty checkout and disabled search indexing. `node scripts/prepare-pages.mjs` copies `company-preview/` into `out/company/` after the static build.
- The old introduction-only workflow was removed to prevent it from replacing the full landing page. The simple page's source and styling remain unchanged.
- `public/CNAME` selects the root build path for the existing custom domain. HTTPS is enforced in GitHub Pages settings.
- Update: edit, run lint/check:preview/build:pages/prepare-pages, review the static output, commit/push and run `gh workflow run pages.yml --ref main`.
- Before enabling sales, complete the actual legal address, review sales terms and privacy, set `preview: false`, configure checkout, and change the workflow check back to `npm run check`. The commercial launch check remains strict.
- Claude Startups application fields were prepared; submission or acceptance has not been verified.

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

## Commercial launch remains blocked until the legal data exists

`npm run check` fails while any `legal.*` field still holds `[[TODO]]`. The deploy workflow is manual (`workflow_dispatch`) until launch.

To go live:
1. Fill `legal.name`, `legal.street`, `legal.city`, `legal.email` in `src/site.config.ts`.
2. Make the repository public (GitHub Pages on a private repo needs a paid plan) and enable Pages with source "GitHub Actions".
3. Run the "Deploy to GitHub Pages" workflow. For a custom domain add `public/CNAME` with the domain; the base path then becomes empty automatically.

## Notes

- The changelog is bilingual: English at `/changelog/`, German at `/de/changelog/`. Language switching preserves the current page. Add matching versions and entries to `src/data/changelog.de.json` and `changelog.en.json`.
- The legal pages are good-faith drafts, not reviewed by a lawyer.
- The site loads nothing from third parties: fonts, images and the demo video are self-hosted.
