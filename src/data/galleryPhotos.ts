import type { ImageMetadata } from "astro";

// Photo lists are stored as JSON files (one per gallery) that Sveltia CMS edits.
// Each entry references an image by its project path (e.g. /src/assets/...).
type PhotoEntry = { image: string; alt?: string };
type GalleryDoc = { photos?: PhotoEntry[] };

export type Slide = { src: ImageMetadata; alt: string; code: string };

// Vite imports JSON natively and synchronously — no async, no extra deps.
const docs = import.meta.glob<GalleryDoc>("./galleries/*.json", {
  eager: true,
  import: "default",
});

// Home-page Hero triptych photo list (single file, CMS-edited).
const heroDoc = import.meta.glob<GalleryDoc>("./hero.json", {
  eager: true,
  import: "default",
});

// Home-page Portfolio carousel photo list (single file, CMS-edited).
const portfolioDoc = import.meta.glob<GalleryDoc>("./portfolio.json", {
  eager: true,
  import: "default",
});

// Single "About me" photo (CMS-edited).
type AboutDoc = { image?: string; alt?: string };
const aboutDoc = import.meta.glob<AboutDoc>("./about.json", {
  eager: true,
  import: "default",
});

// All optimizable portfolio images. Extensions are listed in both cases because
// Vite's glob matching is case-sensitive and cameras/phones often emit
// uppercase extensions (e.g. IMG_0001.PNG, .JPG).
const imageFiles = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/portfolio/**/*.{jpeg,jpg,png,webp,avif,JPEG,JPG,PNG,WEBP,AVIF}",
  { eager: true },
);

// Case-insensitive lookup by full path, so the path the CMS writes still
// resolves even if its casing differs from the file on disk.
const byLowerPath = new Map<string, { default: ImageMetadata }>();
for (const [path, mod] of Object.entries(imageFiles)) {
  byLowerPath.set(path.toLowerCase(), mod);
}

function resolveImage(path: string): ImageMetadata | null {
  const mod = imageFiles[path] ?? byLowerPath.get(path.toLowerCase());
  return mod?.default ?? null;
}

// Resolve a photo list into ordered, optimized slides. Missing references are
// skipped (with a warning) so one bad/transient entry never breaks the page.
function slidesFromDoc(doc: GalleryDoc | undefined, label: string): Slide[] {
  if (!doc?.photos?.length) return [];

  const resolved: Omit<Slide, "code">[] = [];
  for (const photo of doc.photos) {
    const src = resolveImage(photo.image);
    if (!src) {
      console.warn(
        `[galleryPhotos] ${label}: image not found, skipping → ${photo.image}`,
      );
      continue;
    }
    resolved.push({ src, alt: photo.alt ?? "" });
  }

  return resolved.map((s, i) => ({
    ...s,
    code: String(i + 1).padStart(3, "0"),
  }));
}

/** Ordered, optimized slides for a gallery slug (empty if no photos yet). */
export function getGalleryPhotos(slug: string): Slide[] {
  return slidesFromDoc(docs[`./galleries/${slug}.json`], `"${slug}"`);
}

/** Ordered, optimized slides for the home-page Hero triptych. */
export function getHeroPhotos(): Slide[] {
  return slidesFromDoc(heroDoc["./hero.json"], "hero");
}

/** Ordered, optimized slides for the home-page Portfolio carousel. */
export function getPortfolioPhotos(): Slide[] {
  return slidesFromDoc(portfolioDoc["./portfolio.json"], "portfolio");
}

/** The single optimized "About me" photo, or null if unset/missing. */
export function getAboutPhoto(): { src: ImageMetadata; alt: string } | null {
  const doc = aboutDoc["./about.json"];
  if (!doc?.image) return null;
  const src = resolveImage(doc.image);
  if (!src) {
    console.warn(`[galleryPhotos] about: image not found → ${doc.image}`);
    return null;
  }
  return { src, alt: doc.alt ?? "" };
}
