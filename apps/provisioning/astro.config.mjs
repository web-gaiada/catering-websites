// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Bali Yacht Provisioning — baliyachtprovisioning.com. Static output (default).
export default defineConfig({
  site: "https://baliyachtprovisioning.com",
  integrations: [sitemap()],
  server: { port: 4323 },
});
