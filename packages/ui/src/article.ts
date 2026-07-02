/* =====================================================================
   Article contract — per-site editorial content that drives the SHARED
   ArticleLayout and the Insights listing cards. Each brand site defines an
   `articles` array (see apps/<site>/src/articles.ts); a dynamic route
   (src/pages/insights/[slug].astro) renders one ArticleLayout per entry.
   ===================================================================== */

/** One block of article body copy: an optional subhead + its paragraphs. */
export interface ArticleBlock {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  /** URL slug under /insights/, e.g. "dining-under-sail". */
  slug: string;
  /** Kicker category, e.g. "On the Water". */
  category: string;
  /** Human read-time label, e.g. "4 min read". */
  readTime: string;
  title: string;
  /** One-line summary — used on the listing card and as the meta description. */
  excerpt: string;
  /** Image slot name (resolved per-site via lib/images `img()`). */
  imageSlot: string;
  /** Card image aspect-ratio, e.g. "4 / 3" (feature) or "3 / 2" (grid card). */
  ratio?: string;
  /** Marks the lead/feature article on the listing page. */
  featured?: boolean;
  /** Body copy, rendered in order. */
  body: ArticleBlock[];
}
