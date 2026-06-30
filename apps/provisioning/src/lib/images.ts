import type { ImageMetadata } from "astro";

// Auto-loads every photo dropped into ../images (any common format) and exposes
// it by filename stem (e.g. "prov-home-hero"). Drop a file named <slot>.<ext>
// into src/images/ and it appears on the next build / dev reload; any slot
// without a file falls back to the placeholder plate.
const files = import.meta.glob<{ default: ImageMetadata }>(
  "../images/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

const bySlot: Record<string, ImageMetadata> = {};
for (const path in files) {
  const stem = path.split("/").pop()!.replace(/\.[^.]+$/, "");
  bySlot[stem] = files[path].default;
}

/** Photo for a slot, or undefined (→ placeholder) if none has been added yet. */
export const img = (slot: string): ImageMetadata | undefined => bySlot[slot];
