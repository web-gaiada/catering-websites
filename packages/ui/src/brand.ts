/* =====================================================================
   Brand contract — the per-site configuration that drives the SHARED
   Header / Footer / SEO components. Each app defines one `Brand` object
   (see apps/<site>/src/brand.ts) and passes it into the shared components,
   so the three sites reuse one component set with different content.
   ===================================================================== */

export type SocialIcon = "linkedin" | "instagram" | "facebook" | "youtube";

export interface NavItem {
  /** Stable key used for aria-current matching (e.g. "home", "menus"). */
  key: string;
  label: string;
  /** Site-relative path, e.g. "/menus". */
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  /** External (cross-brand) links open in a new tab with rel=noopener. */
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface BrandAddress {
  /** Street / locality lines, rendered one per row. */
  lines: string[];
  phone?: { label: string; href: string };
  email?: { label: string; href: string };
}

export interface Brand {
  /** Site key: "jet" | "yacht" | "prov" | "group". */
  key: string;
  /** Wordmark shown in header + footer, e.g. "Bali Jet Catering". */
  name: string;
  /** Canonical production domain (no protocol), e.g. "balijetcatering.com". */
  domain: string;
  /** Primary nav (desktop bar + mobile drawer). */
  nav: NavItem[];
  /** Header / drawer call-to-action button. */
  cta: { label: string; href: string };
  footer: {
    columns: FooterColumn[];
    address: BrandAddress;
    social: SocialLink[];
    /** Full text of the © line (Roman-numeral year per the brand voice). */
    copyright: string;
  };
}
