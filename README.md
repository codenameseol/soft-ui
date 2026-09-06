# soft-ui

a little softer, a little kinder than sharp-edged defaults — a small React component kit

![TypeScript](https://img.shields.io/badge/TypeScript-7.x-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)

## a note on taste

I tend to like a slightly rounded corner more than a sharp one, and a slightly muted color more than a loud one. I'd love for that taste to show up even in small things — a single button, a single label. I'm more interested in sharing small attempts and small discoveries than a finished, perfect answer, so this is me actually using a few small pieces on real screens and writing down what I learn along the way. Still becoming whatever this is — there's a lot I don't know yet, and that's kind of the point of keeping a record like this.

## what this actually is

soft-ui is not a design system. It's a very small library of three React components I kept wanting to reuse across my own little side projects. Everything is styled with a quiet five-color palette: paper, ink, wine, muted, and line.

- **`SoftButton`** — a fully rounded pill button. Pick a tone with `variant="primary" | "outline"`.
- **`Tag`** — a small rounded label/chip. `tone` gives it one of a couple of soft color variants.
- **`NoteCard`** — a soft-shadowed card with a title, body text, and an optional footer slot.

That's it, three components. No heavier UI framework underneath — just plain CSS, kept intentionally small.

## try it

```bash
git clone <this-repo-url>
cd soft-ui
npm install
npm run dev
```

`npm run dev` starts the tiny demo app in `demo/`, so you can actually look at all three components together in a browser instead of just trusting the code.

If you want to build the library for use elsewhere:

```bash
npm run build
```

This outputs an ESM bundle (`soft-ui.mjs`), a CJS bundle (`soft-ui.cjs`), type declarations (`.d.ts`), and one CSS file into `dist/`. Consumers can then do:

```tsx
import { SoftButton, Tag, NoteCard } from 'soft-ui'
import 'soft-ui/style.css'
```

## tests

```bash
npm test
```

Each component has at least one Vitest + Testing Library test covering a render and a small interaction (a click, some text actually showing up on screen, that sort of thing). There's also a short GitHub Actions workflow at `.github/workflows/test.yml` that runs `npm run build` and `npm test` on every push and pull request.

## license

MIT © 2026 Seol
