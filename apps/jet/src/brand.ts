import type { Brand } from "@bali/ui/brand";
import { SITE_URLS } from "@bali/ui/site-urls";

/** Bali Jet Catering — balijetcatering.com */
export const jet: Brand = {
  key: "jet",
  name: "Bali Jet Catering",
  domain: "balijetcatering.com",
  nav: [
    { key: "menus", label: "Inflight Menus", href: "/inflight-menus" },
    { key: "operations", label: "Airside Operations", href: "/airside-operations" },
    { key: "contact", label: "Order & Dispatch", href: "/contact" },
    { key: "insights", label: "Insights", href: "/insights" },
  ],
  cta: { label: "Request a Quote", href: "/contact" },
  social: [{ label: "LinkedIn", href: "#", icon: "linkedin" }],
  whatsapp: "6281138210187",
  footer: {
    columns: [
      {
        title: "Catering",
        links: [
          { label: "Inflight Menus", href: "/inflight-menus" },
          { label: "Dietary & Allergen", href: "/inflight-menus" },
          { label: "Crew Catering", href: "/inflight-menus" },
        ],
      },
      {
        title: "Operations",
        links: [
          { label: "Airside Logistics", href: "/airside-operations" },
          { label: "FBO Delivery", href: "/airside-operations" },
          { label: "Food Safety & HACCP", href: "/airside-operations" },
        ],
      },
      {
        title: "Sister Brands",
        links: [
          { label: "Bali Catering and Events", href: SITE_URLS.events, external: true },
          { label: "Bali Yacht Catering", href: SITE_URLS.yacht, external: true },
          { label: "Bali Yacht Provisioning", href: SITE_URLS.prov, external: true },
          { label: "Order & Dispatch", href: "/contact" },
        ],
      },
    ],
    address: {
      lines: ["Komplek Ruko Wayang Sanur", "Jl. Bypass Ngurah Rai, Sanur, Bali 80227"],
      phone: { label: "+62 811 3821 0187 · 24/7 Dispatch", href: "tel:+6281138210187" },
      email: { label: "info@balijetcatering.com", href: "mailto:info@balijetcatering.com" },
    },
    copyright:
      "&copy; MMXXVI Bali Jet Catering &middot; Private aviation inflight catering, Bali Ngurah Rai (DPS / WADD). All rights reserved.",
  },
};

/** Shared geo meta for all jet pages (Sanur, Bali). */
export const jetGeo = {
  region: "ID-BA",
  placename: "Sanur, Bali",
  position: "-8.6845;115.2533",
};
