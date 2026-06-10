import type { Lang } from "../i18n/ui";
import { slides } from "./slides";

export const gallerySlugs = [
  "portrait",
  "studio",
  "outdoor",
  "content",
  "film",
  "couple-family",
] as const;

export type GallerySlug = (typeof gallerySlugs)[number];

export const galleries = [
  {
    slug: "portrait",
    title: {
      en: "Portrait",
      de: "Porträt",
      ru: "Портрет",
    },
    slides: slides.slice(0, 14),
  },
  {
    slug: "studio",
    title: {
      en: "Studio",
      de: "Studio",
      ru: "Студия",
    },
    slides: slides.slice(4, 8),
  },
  {
    slug: "outdoor",
    title: {
      en: "Outdoor",
      de: "Outdoor",
      ru: "На улице",
    },
    slides: slides.slice(8, 12),
  },
  {
    slug: "content",
    title: {
      en: "Content",
      de: "Content",
      ru: "Контент",
    },
    slides: slides.slice(12, 16),
  },
  {
    slug: "film",
    title: {
      en: "Film",
      de: "Analog",
      ru: "Плёнка",
    },
    slides: slides.slice(16, 20),
  },
  {
    slug: "couple-family",
    title: {
      en: "Couple / Family",
      de: "Paar / Familie",
      ru: "Пара / семья",
    },
    slides: slides.slice(20, 24),
  },
] satisfies Array<{
  slug: GallerySlug;
  title: Record<Lang, string>;
  slides: typeof slides;
}>;

export function getGallery(slug: string | undefined) {
  return galleries.find((gallery) => gallery.slug === slug);
}
