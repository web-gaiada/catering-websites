// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Bali Yacht Catering — baliyachtcatering.com. Static output (default).
export default defineConfig({
  site: "https://baliyachtcatering.com",
  integrations: [sitemap()],
  server: { port: 4322 },
});
