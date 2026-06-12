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

/** Ordered, optimized slides for a gallery slug (empty if no photos yet). */
export function getGalleryPhotos(slug: string): Slide[] {
  const doc = docs[`./galleries/${slug}.json`];
  if (!doc?.photos?.length) return [];

  const slides: Omit<Slide, "code">[] = [];
  for (const photo of doc.photos) {
    const src = resolveImage(photo.image);
    if (!src) {
      // Don't break the whole gallery on one bad/transient reference —
      // skip it and surface a warning in the build/dev log instead.
      console.warn(
        `[galleryPhotos] "${slug}": image not found, skipping → ${photo.image}`,
      );
      continue;
    }
    slides.push({ src, alt: photo.alt ?? "" });
  }

  return slides.map((s, i) => ({
    ...s,
    code: String(i + 1).padStart(3, "0"),
  }));
}
