import type { Article } from "@bali/ui/article";

/** Insights articles for Bali Jet Catering. Order = listing order; the
 *  `featured: true` entry is the lead article on /insights. */
export const articles: Article[] = [
  {
    slug: "food-tastes-different-at-altitude",
    category: "Craft",
    readTime: "6 min read",
    title: "Why food tastes different at 40,000 feet",
    excerpt:
      "Low humidity and cabin pressure dull salt and sweetness and dry the palate. A look at how our chefs re-balance acidity, fat and texture so every course tastes as intended aloft.",
    imageSlot: "jet-plated-dish",
    ratio: "4 / 3",
    featured: true,
    body: [
      {
        paragraphs: [
          "At cruising altitude the cabin is a hostile place for flavour. Pressurisation and humidity below fifteen percent numb the palate, muting salt and sweetness by as much as a third while leaving sour, bitter and umami largely intact. A dish that sings on the ground can arrive flat at the pass.",
        ],
      },
      {
        heading: "Re-balancing the plate",
        paragraphs: [
          "We compensate deliberately rather than simply over-seasoning. Brighter acidity, a little more umami, considered fat and aromatic lift all carry through the dry air, and textures are built to survive a galley reheat without collapsing.",
          "Every menu is tested the way it will be served: chilled, held, and regenerated on board. What leaves our kitchen is engineered for the cabin, not the tasting bench, so the last course tastes as deliberate as the first.",
        ],
      },
    ],
  },
  {
    slug: "turnaround-at-execujet",
    category: "Operations",
    readTime: "4 min read",
    title: "Inside a 02:00 turnaround at ExecuJet Bali",
    excerpt:
      "What it takes to clear catering to the apron when a manifest changes in the middle of the night.",
    imageSlot: "jet-tarmac",
    ratio: "3 / 2",
    body: [
      {
        paragraphs: [
          "A tail repositions, a passenger count doubles, and the departure slot holds at 02:40. Catering cannot be the reason an aircraft misses it. Our dispatch desk runs around the clock precisely because private aviation does not keep office hours.",
        ],
      },
      {
        heading: "Cleared, packed, delivered",
        paragraphs: [
          "The moment a revised manifest lands we re-source, re-plate and re-label against the new headcount, then move the order through customs and airside screening in step with the handler. Temperature-controlled to the last metre, it reaches the galley sealed and stowed.",
          "Reliability is the product. When the cabin door closes, the only thing anyone remembers is that dinner was already on board.",
        ],
      },
    ],
  },
  {
    slug: "provenance-at-altitude",
    category: "Sourcing",
    readTime: "5 min read",
    title: "Provenance at altitude: building a cabin pantry",
    excerpt:
      "Where we source the grades and brands an executive cabin expects, and how they travel to the aircraft.",
    imageSlot: "jet-premium-ingredients",
    ratio: "3 / 2",
    body: [
      {
        paragraphs: [
          "A cabin pantry is only as good as its supply chain. We buy to specification — exact grades, exact brands — from the same producers and importers that serve Bali's best tables, and we hold standing relationships so a last-minute request is a phone call, not a hunt.",
        ],
      },
      {
        heading: "From market to manifest",
        paragraphs: [
          "Wagyu, caviar, day-boat fish and rare vintages each travel under their own cold-chain protocol, consolidated into one manifest so nothing arrives compromised. Provenance is documented, not assumed.",
          "The result is a pantry that reads like a private cellar and a market stall at once: premium, traceable, and matched to the passengers on the day.",
        ],
      },
    ],
  },
  {
    slug: "allergen-safe-service",
    category: "Kitchen",
    readTime: "3 min read",
    title: "Allergen-safe service, without compromise",
    excerpt:
      "How a HACCP-controlled kitchen prepares medical and allergen diets that still plate beautifully.",
    imageSlot: "jet-kitchen-detail",
    ratio: "3 / 2",
    body: [
      {
        paragraphs: [
          "Specialized does not mean plain. Halal, vegan, keto, low-sodium and clinical diets are built to the same standard as the à la carte menu, so a passenger on a restricted plan is never handed the lesser plate.",
        ],
      },
      {
        heading: "Segregated, labelled, verified",
        paragraphs: [
          "Allergen-sensitive orders are prepared at dedicated stations with separate utensils, then sealed and labelled to the individual seat. Every order is cross-checked against the manifest before it leaves the kitchen under HACCP control.",
          "That discipline lets the cabin crew serve with confidence — presentation intact, provenance clear, and not a trace of the allergen it was built to exclude.",
        ],
      },
    ],
  },
];
