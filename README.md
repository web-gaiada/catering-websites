# Bali Luxury Catering Group

A pnpm monorepo for the group's web presence: **three independent brand
sites + one group portal**, all built on a single shared design system
("Luxury Minimalist"). Built with [Astro](https://astro.build) (static output).

## Why a monorepo

The three sites are separate brands on separate domains, but they share one
design system and one page-composition layer. The monorepo keeps that shared
code in exactly one place (`packages/ui`) while each site builds and deploys
independently.

```
.
├─ packages/
│  └─ ui/                     @bali/ui — the shared design system
│     └─ src/
│        ├─ styles/           tokens, components.css, site.css, fonts/  → one styles.css entry
│        ├─ components/       shared Astro components (BaseLayout, Header, Footer, …)
│        └─ brand.ts          the Brand config contract consumed by Header/Footer
├─ apps/
│  ├─ group/                  the group portal  (index — "choose a house")
│  ├─ jet/                    Bali Jet Catering        → balijetcatering.com
│  ├─ yacht/                  Bali Yacht Catering       → baliyachtcatering.com
│  └─ provisioning/           Bali Yacht Provisioning   → baliyachtprovisioning.com
├─ pnpm-workspace.yaml
└─ package.json
```

Each `apps/*` site defines a single `src/brand.ts` (wordmark, nav, footer,
contact, social) and feeds it into the shared components — so the header and
footer are one implementation, themed per brand by data, not copied three times.

## Commands

```bash
pnpm install            # install all workspaces

pnpm dev:group          # run a single site in dev (also dev:jet, dev:yacht, dev:provisioning)
pnpm --filter @bali/jet dev

pnpm build              # build every site (static output → apps/*/dist)
pnpm --filter @bali/group build
```

## Conventions

- **Design system is the source of truth.** Change a token or component in
  `packages/ui` once; every site picks it up. Don't fork DS styles into an app.
- **Page composition** (heroes, splits, FAQ, insights grids, sister-brand
  cards) lives in `packages/ui/src/styles/site.css` as `.jc-*` classes, shared
  by all sites.
- **Per-brand content** (copy, SEO, JSON-LD, nav, footer) lives in each app.
- **Static + form service.** Sites are statically generated; contact / quote /
  booking forms post to a form service (provider TBD). No SSR adapter is wired
  in yet so the build stays host-agnostic.

> Domains and contact details in the current build are placeholders pending
> confirmation (the design ships as a preview).
