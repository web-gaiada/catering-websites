# Bali Yacht Provisioning — images

Drop photos in **this folder**. The filename (without extension) must match a
**slot** below. It then appears automatically on the next build /
`pnpm dev:provisioning` reload — no code changes needed. Any slot without a file
keeps the placeholder.

Formats accepted: `.jpg` `.jpeg` `.png` `.webp` `.avif`
(images are optimized + responsively resized automatically by Astro).

| Filename (slot)       | Page · position             | Suggested subject                          | Shape            |
| --------------------- | --------------------------- | ------------------------------------------ | ---------------- |
| `prov-home-hero`      | Home · hero                 | Superyacht at Benoa Marina / dockside      | Landscape (hero) |
| `prov-home-plate1`    | Home · split                | Dockside delivery / refrigerated transport | ~4:3             |
| `prov-cat-hero`       | Provisioning Categories · hero | Premium produce / dry store / cellar    | Landscape (hero) |
| `prov-cat-plate2`     | Provisioning Categories · protein split | Wagyu / seafood / charcuterie      | ~4:3             |
| `prov-cat-plate1`     | Provisioning Categories · split | Cheese / organic produce / dry store   | ~4:3             |
| `prov-log-hero`       | Port Logistics · hero       | Refrigerated transport / Benoa harbour     | Landscape (hero) |
| `prov-log-plate1`     | Port Logistics · split      | Cold-chain handling / marine packing       | ~4:3             |
| `prov-manifest-hero`  | Submit Manifest · hero      | Provisioning order desk / manifest         | Landscape (hero) |
| `prov-manifest` | Insights · article card  | Manifest / provisioning crates             | ~3:2             |
| `prov-premium-imports`   | Insights · article card  | Premium imports / cellar                   | ~3:2             |
| `prov-benoa-marina`     | Insights · article card  | Benoa Marina / port operations             | ~3:2             |

**Sizes:** heroes ≥ 1600px wide (landscape); plates ≥ 1000px wide (~4:3).
Example: drop `prov-home-hero.jpg` here and the home hero photo appears.
