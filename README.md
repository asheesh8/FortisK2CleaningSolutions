# Fortis K² Cleaning Solutions

Website for Fortis K² Cleaning Solutions, a family-owned, fully insured house cleaning company in Brattleboro, Windham County and Southern Vermont. Built by ArkiTech Solutions.

Static Astro site. No database, no server runtime.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4521
npm run build      # static output in dist/
npm run preview    # serve the build on :4522
```

Node 20.3+.

## The one rule

**`src/data/business.ts` is the single source of truth for every factual claim.** Phone, email, services, owners, FAQ answers, job stories: all of it lives there, and every page reads from it.

- If a fact is not in that file, it does not go on the site.
- Anything marked `TODO(fortis)` is unconfirmed and must be checked with the owners before launch.

Facts were taken from the business's Facebook page on 2026-09-28. The raw scrape (posts, bios, photos) is in `raw-assets/facebook/SCRAPE-NOTES.md`.

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/services/<slug>/` (6 pages) | `src/pages/services/[slug].astro`, one per entry in `services` |
| `/about/` | `src/pages/about.astro` |
| `/quote/` | `src/pages/quote.astro` |
| `/thank-you/` (noindex) | `src/pages/thank-you.astro` |
| `/privacy/`, `/404` | `src/pages/` |

Add a service to `business.ts` and its page, homepage card, footer link, form option, schema and sitemap entry all follow.

## Design system

- Colours sampled from the logo: navy `#043881`, pink `#F75894`, ink `#0B1E45`. Primary buttons are pink with navy text (5.3:1 contrast). Tokens live in `src/styles/global.css`.
- Type: Archivo variable (self-hosted via `@fontsource-variable/archivo`), using the width axis for condensed display headlines.
- Radius rule: pills for controls, 20px for cards and photos, 12px for inputs. The arch (rounded-top frame) echoes the shield in the logo.
- Icons: Phosphor (bold), inlined at build time by `src/components/Icon.astro`.
- Light theme only, on purpose: the supplied logo is built for white.

## Images

See `ASSET-PROVENANCE.md`. Real job photos come from the owners' Facebook page. Service-card images, the Vermont hero landscape and the quote background are AI-generated (Higgsfield) brand illustrations and must never be presented as a customer's home or a Fortis K² result.

## Quote form

`src/components/QuoteForm.astro`.

- **Netlify:** works out of the box through Netlify Forms.
- **Anywhere else:** set `PUBLIC_QUOTE_ENDPOINT` (Formspree, Basin, a Zapier hook). See `.env.example`.
- **Neither:** the form does not fake success. It shows the visitor a "send by email / call" fallback with their answers filled in.

## Deploying

`netlify.toml` and `vercel.json` are both committed. Before launch:

1. Confirm the domain and update `site` in `astro.config.mjs`, `company.url` in `business.ts` and `public/robots.txt` (currently `www.fortisk2cleaning.com`, unconfirmed).
2. Hook up the form (above).
3. Clear the `TODO(fortis)` items in `business.ts`.

## Still needed from the client

- Real photos of Kaleigh, McKayla and Sarah (the About section uses initials for now).
- More before/after pairs.
- Confirmed towns served, and scope details for move-out and Airbnb turnovers.
