# Hatch Analytics (craft mockup)

Next.js App Router craft / design-copy reference for **Hatch Analytics** (`hatchdata.us`).

**Production path:** redesign-in-place on Squarespace. This app is **not** the live custom-domain target. Use it to port section spine, copy, and visual direction into Squarespace.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (design tokens as CSS variables in `app/globals.css` via `@theme inline`)
- ESLint
- Path alias `@/*`

## Develop

```bash
npm install
npm run dev
```

## Production preview (local)

```bash
npm run build
npm run start -- -p 3456
```

Then open `http://127.0.0.1:3456`.

## Page spine

1. Hero — value prop + CTAs
2. Services — four modular offerings
3. Approach — four short steps
4. Proof — honest WIP placeholders (no fake metrics/logos)
5. Contact — mailto form UI + `hello@hatchdata.us` (intended)

See `NOTES.md` for domain / ownership context.
