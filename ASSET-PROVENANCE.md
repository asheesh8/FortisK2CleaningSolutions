# Asset provenance

Every image on the site, where it came from, and what it may be presented as.

**Rule:** AI-generated images are brand illustrations. They are never captioned or described as a customer's home, a Fortis K² job, or a result. Only the images marked REAL may be shown as the team's work.

## Real (from the Fortis K² Facebook page, scraped 2026-09-28)

Originals in `raw-assets/facebook/` (see `SCRAPE-NOTES.md` there).

| Site file | Source | Edits |
|---|---|---|
| `src/assets/img/tub-before.jpg`, `tub-after.jpg` | `03-post-122113995189.jpg` (their "Got a tub or shower you dread scrubbing?" post) | Cropped out of the Facebook graphic. The pink arrow overlay the owners added was removed with OpenCV inpainting (arrow pixels only), then both halves cropped to the same window so the drains line up. The tub itself is not altered. Shown as the draggable before/after in the homepage hero arch. |
| (not used on site) | `08-photo-portrait.jpg` | Sunroom photo. Was the hero arch; replaced by the tub before/after, which shows the result more clearly. |
| `src/assets/img/living-room-reset.jpg` | `07-photo-landscape.jpg` | None. |
| `src/assets/img/supplies.jpg` | `09-supplies.jpg` | None. Used in Recent work. |
| `src/assets/brand/logo-light.png` | Client-supplied logo (`raw-assets/logo/fortis-logo-original.jpg`, 1284×911 JPEG) | White background removed by edge flood fill; cropped. |
| `src/assets/brand/logo-reverse.png` | Same | Navy lettering recoloured to white for dark backgrounds. Pink shield untouched. |

## AI-generated (Higgsfield)

- Project: "Fortis K2 Cleaning Solutions - website" (`298ab021-3816-414a-8e15-18e32f1100fe`), workspace `91626fb4-…` (Plus).
- Requested model `nano_banana_pro` at 2k; provider reported `nano_banana_2`. 2 credits each, 8 images, 16 credits. Balance before: 1,210.
- Created 2026-09-28. Full-size PNG originals are in `raw-assets/higgsfield/` locally (git-ignored, 65MB) and in the Higgsfield project above.
- Shared prompt constraints on every image: no people, no text, no logos, no labels, no watermarks.

| Site file | Job ID | Subject | Notes |
|---|---|---|---|
| `svc-recurring.jpg` | `679fd459-bab3-4cf0-b729-ccf59e523d9f` | Sunlit farmhouse living room, navy throw, pink cushion, fall maples outside | |
| `svc-deep.jpg` | `095b78fd-e150-47c0-a072-4657b131ba62` | Kitchen counter, pink microfiber cloth, unlabeled glass spray bottle | Cropped to the right side: the full frame showed a doubled faucet spout (generation artifact). |
| `svc-move.jpg` | `137d8f85-64a1-4fe0-ae48-5a28dc9e768c` | Empty clean colonial bedroom, stacked moving boxes | |
| `svc-airbnb.jpg` | `ab437938-d74d-4090-a7c2-d55d1422bc5d` | Cabin rental bedroom, towels tied with pink ribbon, mountain view | |
| `svc-organizing.jpg` | `6d075a1a-4ec2-4332-a849-cd408562cbab` | Organized farmhouse mudroom | |
| `svc-business.jpg` | `26093d2a-8d09-4748-9af9-406be03f0705` | Clean brick-downtown shop after hours | |
| (source of `hero-vermont.jpg`, original in `raw-assets/higgsfield/vermont-foliage.png`) | `f8a2c452-1a95-4bcf-8375-3ea08a03078d` | Southern VT valley at peak foliage, farmhouse and red barn (21:9) | Generic Vermont scene, not a specific town. |
| `hero-vermont.jpg` | derived from `f8a2c452-…` | Homepage hero. The 21:9 foliage image with the sky extended upward to 16:9 (3168×1782) by extrapolating the sky gradient in Python; every original pixel is kept. A Higgsfield outpaint (`b5510b01-a182-45ed-b98b-b1982ddc1aae`, 2 credits) was also run but only returned 1376×768, so it is not used. |
| `cta-entryway.jpg` | `3e22c837-0c64-496a-8c00-2ed8e7aafebd` | Clean entryway, door open to autumn maples (16:9) | |

### Prompt template

> Editorial interior photograph for a family-owned Southern Vermont house cleaning company website. [scene]. Bright natural morning daylight, airy, calm, realistic, medium-format camera, true-to-life colors, soft shadows. No people, no text, no typography, no logos, no watermarks, no labels.

## Still needed from the client

- Real photos of Kaleigh, McKayla and Sarah (the only headshots are ~100px circles inside a Facebook graphic). The About section uses initials until then.
- More before/after pairs. Only one exists today (the tub).
