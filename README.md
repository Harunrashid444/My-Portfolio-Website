# My Portfolio Website

Personal portfolio of Harun Rashid Ansari — full-stack developer and MCA student.

**Live:** [folio-harunn.vercel.app](https://folio-harunn.vercel.app)

## Stack

- [Next.js](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Deployed on Vercel (every push to `main` deploys)

## Running locally

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts: `pnpm build`, `pnpm start`, `pnpm typecheck`.

## Editing content

Each homepage section is its own component in `components/`, with its content in a plain array at the top of the file:

| Section | File |
| --- | --- |
| Hero | `components/hero.tsx` |
| About, experience, skills, certifications | `components/about.tsx` |
| Projects | `components/projects.tsx` (screenshots in `public/projects/`) |
| Research | `components/research.tsx` |
| Contact | `components/contact.tsx` |
| Tech strip | `components/stack-marquee.tsx` |

Sections are assembled in `app/page.tsx`.
