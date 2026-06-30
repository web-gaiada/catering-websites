/* =====================================================================
   Cross-brand link targets — env-driven with production defaults.
   Same pattern as the portal: production builds use the real domains;
   local dev overrides via each app's .env.development (localhost ports).
   Used by SisterBrands and each brand's footer so all cross-site links
   resolve correctly in both environments.
   ===================================================================== */
export const SITE_URLS = {
  jet: import.meta.env.PUBLIC_JET_URL ?? "https://balijetcatering.com",
  yacht: import.meta.env.PUBLIC_YACHT_URL ?? "https://baliyachtcatering.com",
  prov: import.meta.env.PUBLIC_PROV_URL ?? "https://baliyachtprovisioning.com",
  events: import.meta.env.PUBLIC_EVENTS_URL ?? "https://balicatering.com",
};
