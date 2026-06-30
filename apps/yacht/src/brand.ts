import type { Brand } from "@bali/ui/brand";
import { SITE_URLS } from "@bali/ui/site-urls";

/** Bali Yacht Catering — baliyachtcatering.com */
export const yacht: Brand = {
  key: "yacht",
  name: "Bali Yacht Catering",
  domain: "baliyachtcatering.com",
  nav: [
    { key: "menus", label: "Cruise & Event Menus", href: "/menus" },
    { key: "chefs", label: "Onboard Chefs", href: "/onboard-chefs" },
    { key: "booking", label: "Booking", href: "/booking" },
    { key: "insights", label: "Insights", href: "/insights" },
  ],
  cta: { label: "Request a Quote", href: "/booking" },
  social: [{ label: "Facebook", href: "#", icon: "facebook" }],
  whatsapp: "6281138210187",
  footer: {
    columns: [
      {
        title: "Catering",
        links: [
          { label: "Cruise & Event Menus", href: "/menus" },
          { label: "Platters & Canapés", href: "/menus" },
          { label: "Beverage & Open Bar", href: "/menus" },
        ],
      },
      {
        title: "Onboard",
        links: [
          { label: "Private Chefs", href: "/onboard-chefs" },
          { label: "Marine Service", href: "/onboard-chefs" },
          { label: "Galley Execution", href: "/onboard-chefs" },
        ],
      },
      {
        title: "Sister Brands",
        links: [
          { label: "Bali Catering and Events", href: SITE_URLS.events, external: true },
          { label: "Bali Jet Catering", href: SITE_URLS.jet, external: true },
          { label: "Bali Yacht Provisioning", href: SITE_URLS.prov, external: true },
          { label: "Booking & Inquiries", href: "/booking" },
        ],
      },
    ],
    address: {
      lines: ["Komplek Ruko Wayang Sanur", "Jl. Bypass Ngurah Rai, Sanur, Bali 80227"],
      phone: { label: "+62 811 3821 0187", href: "tel:+6281138210187" },
      email: { label: "info@baliyachtcatering.com", href: "mailto:info@baliyachtcatering.com" },
    },
    copyright:
      "&copy; MMXXVI Bali Yacht Catering &middot; Luxury yacht &amp; private boat event catering, Bali. All rights reserved.",
  },
};

/** Shared geo meta for all yacht pages (Sanur, Bali). */
export const yachtGeo = {
  region: "ID-BA",
  placename: "Sanur, Bali",
  position: "-8.6845;115.2533",
};
