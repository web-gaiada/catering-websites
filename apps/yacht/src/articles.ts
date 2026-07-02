import type { Article } from "@bali/ui/article";

/** Insights articles for Bali Yacht Catering. Order = listing order; the
 *  `featured: true` entry is the lead article on /insights. */
export const articles: Article[] = [
  {
    slug: "composing-a-sunset-menu-for-the-indian-ocean",
    category: "Menus",
    readTime: "5 min read",
    title: "Composing a sunset menu for the Indian Ocean",
    excerpt:
      "Timing canapés to golden hour, building courses that travel well between deck and galley, and letting the last light do the plating.",
    imageSlot: "yacht-sunset-canapes",
    ratio: "4 / 3",
    featured: true,
    body: [
      {
        paragraphs: [
          "A sunset menu is written to a clock the kitchen does not control. Golden hour lasts perhaps forty minutes off Bali, and the food has to meet it, not chase it. We build backward from the moment the light turns, so the first canapés reach the deck as the sky begins to warm and the last course lands before dusk settles on the water.",
        ],
      },
      {
        heading: "Cooking to the light",
        paragraphs: [
          "The menu leans on things that hold: cured and chilled openers, seafood dressed to order, warm courses that finish quickly on a compact galley range. Nothing that wilts in the sea air, nothing that needs a long plate window.",
          "We let the setting carry the presentation. Simple, generous plates read beautifully against open water and low sun, so the styling stays quiet and the produce, and the view, do the work.",
        ],
      },
    ],
  },
  {
    slug: "barefoot-canapes-dining-under-sail",
    category: "On the Water",
    readTime: "4 min read",
    title: "Barefoot canapés: dining under sail",
    excerpt:
      "Grazing menus and fresh seafood styled for relaxed, easy days on deck.",
    imageSlot: "yacht-grazing-platter",
    ratio: "3 / 2",
    body: [
      {
        paragraphs: [
          "Not every day on the water calls for courses. Under sail, with the deck moving and no set sitting time, guests graze: a little now, more later, always within reach. The menu answers that rhythm with platters built to stand for an afternoon rather than a single service.",
        ],
      },
      {
        heading: "Built to graze",
        paragraphs: [
          "We work with produce that stays honest at deck temperature: fresh seafood dressed light, island fruit, cured pieces, breads and dips that do not suffer for sitting out. Everything is portioned to pick up by hand, no cutlery, no ceremony.",
          "The look stays relaxed on purpose. Abundant boards, natural colour, easy refills from the galley, so the table feels effortless while the crew quietly keeps it full.",
        ],
      },
    ],
  },
  {
    slug: "marine-mixology-a-bar-that-holds-its-line-in-a-swell",
    category: "Bar",
    readTime: "3 min read",
    title: "Marine mixology: a bar that holds its line in a swell",
    excerpt:
      "Building a cocktail programme that stays precise while the deck moves underneath it.",
    imageSlot: "yacht-cocktail",
    ratio: "3 / 2",
    body: [
      {
        paragraphs: [
          "A cocktail is precision work, and a deck in a swell is the opposite of a steady bar. Marine mixology is really a discipline of preparation: the more that is measured and settled before guests arrive, the less a moving hull can throw off.",
        ],
      },
      {
        heading: "Prepped for the swell",
        paragraphs: [
          "We batch and pre-chill where we can, keep syrups and infusions ready in sealed bottles, and choose builds that survive a little movement without losing their line. Garnishes are cut ashore, ice is planned rather than improvised.",
          "That groundwork lets the bar stay generous on the water. Drinks come out balanced and consistent, glass after glass, however the deck decides to move.",
        ],
      },
    ],
  },
  {
    slug: "plating-at-anchor-when-the-galley-moves",
    category: "Craft",
    readTime: "5 min read",
    title: "Plating at anchor, when the galley moves",
    excerpt:
      "How our onboard chefs hold a fine-dining standard far from a fixed kitchen.",
    imageSlot: "yacht-chef-plating",
    ratio: "3 / 2",
    body: [
      {
        paragraphs: [
          "At anchor the galley is small, the counter shifts underfoot, and there is no back kitchen to hide the work. Holding a fine-dining standard here is less about equipment than about how the service is planned around the space.",
        ],
      },
      {
        heading: "A standard that travels",
        paragraphs: [
          "Our chefs prep in stages, keeping components ready so the final plate comes together in a few controlled moves rather than a crowded rush. Mise en place is stowed so nothing slides, and each course is timed to the galley's real capacity, not a restaurant's.",
          "The result reaches the table looking composed and deliberate. Guests see a finished plate at sea, not the constraints behind it, which is exactly the point.",
        ],
      },
    ],
  },
];
