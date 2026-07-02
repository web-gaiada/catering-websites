import type { Article } from "@bali/ui/article";

/** Insights articles for Bali Yacht Provisioning. Order = listing order; the
 *  `featured: true` entry is the lead article on /insights. */
export const articles: Article[] = [
  {
    slug: "cold-chain-unbroken-to-the-passerelle",
    category: "Logistics",
    readTime: "6 min read",
    title: "Keeping the cold chain unbroken to the passerelle",
    excerpt:
      "Temperature-controlled transport and marine packing: how a provision stays exactly at temperature from store to ship across a Bali afternoon.",
    imageSlot: "prov-refrigerated",
    ratio: "4 / 3",
    featured: true,
    body: [
      {
        paragraphs: [
          "A tropical afternoon is the enemy of a delivery. Between our chill rooms and a yacht's galley lie loading bays, marina traffic and a passerelle in full sun, and every one of those points is a chance for a chilled provision to drift out of spec. We treat the last mile as the most fragile part of the chain, not an afterthought once the order is packed.",
        ],
      },
      {
        heading: "Packed for the climate, logged the whole way",
        paragraphs: [
          "Each provision is staged to its own band: deep-frozen, chilled, or ambient. Insulated marine cases and phase-change packs hold that band through transfer, and a data logger travels with the load so the temperature history arrives with the goods, not as a promise.",
          "The handover is timed to the tender or the dock, never left to sit. What reaches the galley is sealed, in date, and exactly as cold as it left us.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-superyacht-manifest",
    category: "Procurement",
    readTime: "5 min read",
    title: "Reading a superyacht manifest, line by line",
    excerpt:
      "From dry stores to the cellar, turning a chief stew's list into one accurate delivery.",
    imageSlot: "prov-manifest",
    ratio: "3 / 2",
    body: [
      {
        paragraphs: [
          "A provisioning manifest is rarely a tidy document. It arrives as a spreadsheet, a photograph of a handwritten pad, or a chief stew's voice note between guest services, and it mixes brands, grades, pack sizes and the occasional impossible request. Our first job is to read it the way the galley meant it.",
        ],
      },
      {
        heading: "From ambiguity to one accurate order",
        paragraphs: [
          "We standardise every line to a specific grade and pack, flag substitutions before they become a surprise dockside, and confirm quantities against the length of the passage rather than the length of the list. Dry stores, chill, freezer and the cellar are each costed and sourced against their own lead time.",
          "What goes back to the yacht is a single priced manifest the chief stew can approve in one pass. No guessing, no gaps at the passerelle.",
        ],
      },
    ],
  },
  {
    slug: "sourcing-the-rare",
    category: "Sourcing",
    readTime: "4 min read",
    title: "Sourcing the rare: Wagyu, cru wine and the hard-to-find",
    excerpt:
      "Where the grades, vintages and brands a demanding galley asks for actually come from.",
    imageSlot: "prov-premium-imports",
    ratio: "3 / 2",
    body: [
      {
        paragraphs: [
          "The line items that make a provisioning list interesting are the ones that cannot be bought off a shelf. A specific marbling score, a named vintage, a brand that only one importer on the island carries: these are the requests that separate a genuine provisioner from a supermarket run.",
        ],
      },
      {
        heading: "Standing relationships, documented provenance",
        paragraphs: [
          "We hold direct lines to the importers and producers that serve Bali's best tables, so a rare grade or a hard-to-find label is a call rather than a hunt. Wagyu, day-boat fish, caviar and cru wine each move under their own handling protocol and arrive with paperwork, not assurances.",
          "The result reads like a private cellar built to order: premium, traceable, and matched to the passage and the guests aboard.",
        ],
      },
    ],
  },
  {
    slug: "customs-and-port-protocol-at-benoa",
    category: "Port",
    readTime: "3 min read",
    title: "Customs and port protocol at Benoa, handled",
    excerpt:
      "Clearing provisions through the Bali Maritime Tourism Hub without holding a departure.",
    imageSlot: "prov-benoa-marina",
    ratio: "3 / 2",
    body: [
      {
        paragraphs: [
          "Provisions that clear late hold a yacht in port, and a held departure is the one thing no captain forgives. Benoa and the Bali Maritime Tourism Hub run to their own rhythm of documentation, inspection and access, and a provisioner who does not know that rhythm becomes the reason a slot slips.",
        ],
      },
      {
        heading: "Cleared to the dock, on schedule",
        paragraphs: [
          "We prepare declarations and supporting paperwork ahead of arrival, coordinate with the agent and port authority, and stage the delivery to the vessel's clearance window rather than our own convenience. Bonded and duty-free items are handled to their own rules so nothing is flagged at the gate.",
          "Done properly, port protocol is invisible. The provisions are simply there, cleared and stowed, before the yacht is ready to leave.",
        ],
      },
    ],
  },
];
