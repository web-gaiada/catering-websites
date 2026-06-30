// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Bali Jet Catering — balijetcatering.com. Static output (default).
export default defineConfig({
  site: "https://balijetcatering.com",
  integrations: [sitemap()],
  server: { port: 4321 },
});
