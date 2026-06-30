import type { Brand } from "@bali/ui/brand";
import { SITE_URLS } from "@bali/ui/site-urls";

/** Bali Yacht Provisioning — baliyachtprovisioning.com */
export const provisioning: Brand = {
  key: "prov",
  name: "Bali Yacht Provisioning",
  domain: "baliyachtprovisioning.com",
  nav: [
    { key: "categories", label: "Provisioning Categories", href: "/categories" },
    { key: "logistics", label: "Port Logistics", href: "/port-logistics" },
    { key: "manifest", label: "Submit Manifest", href: "/manifest" },
    { key: "insights", label: "Insights", href: "/insights" },
  ],
  cta: { label: "Submit Manifest", href: "/manifest" },
  social: [{ label: "LinkedIn", href: "#", icon: "linkedin" }],
  whatsapp: "6281138210187",
  footer: {
    columns: [
      {
        title: "Provisioning",
        links: [
          { label: "Meats & Seafood", href: "/categories" },
          { label: "Cheese & Produce", href: "/categories" },
          { label: "Cellar & Spirits", href: "/categories" },
        ],
      },
      {
        title: "Logistics",
        links: [
          { label: "Cold-Chain Transport", href: "/port-logistics" },
          { label: "Dockside Delivery", href: "/port-logistics" },
          { label: "Customs & Compliance", href: "/port-logistics" },
        ],
      },
      {
        title: "Sister Brands",
        links: [
          { label: "Bali Catering and Events", href: SITE_URLS.events, external: true },
          { label: "Bali Jet Catering", href: SITE_URLS.jet, external: true },
          { label: "Bali Yacht Catering", href: SITE_URLS.yacht, external: true },
          { label: "Submit Manifest", href: "/manifest" },
        ],
      },
    ],
    address: {
      lines: ["Komplek Ruko Wayang Sanur", "Jl. Bypass Ngurah Rai, Sanur, Bali 80227"],
      phone: { label: "+62 811 3821 0187", href: "tel:+6281138210187" },
      email: { label: "info@baliyachtprovisioning.com", href: "mailto:info@baliyachtprovisioning.com" },
    },
    copyright:
      "&copy; MMXXVI Bali Yacht Provisioning &middot; Superyacht provisioning &amp; maritime F&amp;B procurement, Benoa Marina, Bali. All rights reserved.",
  },
};

/** Shared geo meta for all provisioning pages (Sanur, Bali). */
export const provGeo = {
  region: "ID-BA",
  placename: "Sanur, Bali",
  position: "-8.6845;115.2533",
};
