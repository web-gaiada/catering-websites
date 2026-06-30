/* =====================================================================
   The group's public-facing entities, used by the shared SisterBrands
   cross-link section. Each brand page shows the OTHER three. Cross-brand
   links are absolute (separate domains / deployments).
   ===================================================================== */

import { SITE_URLS } from "./site-urls";

export interface SisterBrand {
  key: string;
  domain: string;
  name: string;
  href: string;
  desc: string;
}

export const SISTER_BRANDS: SisterBrand[] = [
  {
    key: "jet",
    domain: "balijetcatering.com",
    name: "Bali Jet Catering",
    href: SITE_URLS.jet,
    desc: "VVIP inflight & private jet catering at Bali Ngurah Rai (DPS / WADD), delivered tarmac-side, 24/7.",
  },
  {
    key: "yacht",
    domain: "baliyachtcatering.com",
    name: "Bali Yacht Catering",
    href: SITE_URLS.yacht,
    desc: "Luxury yacht catering for day charters, sunset cruises and private ocean events.",
  },
  {
    key: "prov",
    domain: "baliyachtprovisioning.com",
    name: "Bali Yacht Provisioning",
    href: SITE_URLS.prov,
    desc: "Superyacht provisioning and premium maritime F&B procurement at Benoa Marina.",
  },
  {
    key: "events",
    domain: "balicatering.com",
    name: "Bali Catering and Events",
    href: SITE_URLS.events,
    desc: "Full-service catering and event production for weddings, villas and private occasions across Bali.",
  },
];
