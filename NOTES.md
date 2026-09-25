# Hatch Analytics — notes

## Role of this folder

- **Path:** `/workspace/sites/hatchdata.us`
- **Purpose:** Craft / design-copy **reference** for the hatchdata.us redesign.
- **Production:** Squarespace redesign-in-place (Scott / Sites Lead decision). This Next app is **not** shipping as the live site right now.
- **GitHub:** `https://github.com/phillipsscott/hatchdata.us` — craft pushed to main for mockup/preview.
- **Do not:** change DNS, buy domains, deploy to Vercel custom domain, or touch anything related to `aeiy.io`.

## Domain blocker (current live DNS / hosting)

- **Apex (`hatchdata.us`):** Squarespace.
- **`www`:** empty Google Sites → 404.
- Sites Lead owns DNS / hosting cutover. Production remains Squarespace redesign-in-place.

## Design decisions (v0 craft)

- Palette: warm paper (`#f7f6f3`) + charcoal/ink + soft sage accent (`#4f7a5c`).
- Typography: Geist Sans / Mono; dashboard-flavored section labels and modular cards.
- Proof: explicit WIP placeholders only — never fake clients, logos, metrics, or testimonials.
- Contact: client-side mailto to `hello@hatchdata.us` (intended contact).

## Porting to Squarespace

Carry over section order, headlines, body copy, service titles, approach steps, and proof honesty language from `app/page.tsx`.
