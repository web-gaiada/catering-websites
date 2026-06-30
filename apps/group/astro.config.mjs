// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Group portal. Static output (default). `site` is the canonical group domain
// — PLACEHOLDER until the real group domain is chosen; the three brand sites
// live on their own domains (see each app's astro.config).
export default defineConfig({
  site: "https://baliluxurycatering.com",
  integrations: [sitemap()],
  server: { port: 4320 },
});
