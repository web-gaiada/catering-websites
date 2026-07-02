# Bali Jet Catering — images

Drop photos in **this folder**. The filename (without extension) must match a
**slot** below. It then appears automatically on the next build / `pnpm dev:jet`
reload — no code changes needed. Any slot without a file keeps the placeholder.

Formats accepted: `.jpg` `.jpeg` `.png` `.webp` `.avif`
(images are optimized + responsively resized automatically by Astro).

| Filename (slot)     | Page · position             | Suggested subject                    | Shape            |
| ------------------- | --------------------------- | ------------------------------------ | ---------------- |
| `jet-home-hero`     | Home · hero                 | Private jet on the apron at dusk     | Landscape (hero) |
| `jet-home-plate1`   | Home · split                | Tarmac / FBO delivery                | ~4:3             |
| `jet-menus-hero`    | Inflight Menus · hero       | Plated fine dining / caviar service  | Landscape (hero) |
| `jet-menus-plate1`  | Inflight Menus · split      | Plating / kitchen detail             | ~4:3             |
| `jet-specialized-hero`   | Specialized & Allergen-Safe · hero  | HACCP kitchen / allergen-safe plating | Landscape (hero) |
| `jet-specialized-plate1` | Specialized & Allergen-Safe · split | Segregated prep / per-passenger labels | ~4:3           |
| `jet-crew-hero`     | Crew, Cabin & Provisioning · hero   | Galley restock / cabin provisioning  | Landscape (hero) |
| `jet-crew-plate1`   | Crew, Cabin & Provisioning · split  | Consolidated manifest / cold-chain packing | ~4:3       |
| `jet-ops-hero`      | Airside Operations · hero   | Apron / FBO ground ops at night      | Landscape (hero) |
| `jet-ops-plate1`    | Airside Operations · split  | Packaging / labelling / cold chain   | ~4:3             |
| `jet-contact-hero`  | Order & Dispatch · hero     | Dispatch / operations desk at night  | Landscape (hero) |
| `jet-insights-hero`    | Insights · hero          | Chef at the pass / plated detail     | Landscape (hero) |
| `jet-plated-dish`      | Insights · feature       | Galley hygiene standards / chef plating | ~4:3          |
| `jet-tarmac`           | Insights · article card  | Tarmac / FBO at night                | ~3:2             |
| `jet-premium-ingredients` | Insights · article card | Market / premium ingredients        | ~3:2             |
| `jet-kitchen-detail`   | Insights · article card  | Kitchen detail / per-passenger label | ~3:2             |

**Sizes:** heroes ≥ 1600px wide (landscape); plates ≥ 1000px wide (~4:3).
Example: drop `jet-home-hero.jpg` here and the home hero photo appears.
