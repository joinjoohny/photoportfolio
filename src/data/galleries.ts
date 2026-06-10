import type { Lang } from "../i18n/ui";
import { slides } from "./slides";

export const gallerySlugs = [
  "individual",
  "couple-family",
  "maternity",
  "film",
  "event",
  "wedding",
] as const;

export type GallerySlug = (typeof gallerySlugs)[number];

export const galleries = [
  {
    slug: "individual",
    title: {
      en: "Individual Shoot",
      de: "Einzelshooting",
      ru: "Индивидуальная съёмка",
    },
    slides: slides.slice(0, 14),
  },
  {
    slug: "couple-family",
    title: {
      en: "Couple / Families & Children",
      de: "Paar / Familie & Kinder",
      ru: "Пара / семья и дети",
    },
    slides: slides.slice(4, 8),
  },
  {
    slug: "maternity",
    title: {
      en: "Maternity",
      de: "Schwangerschaft",
      ru: "Беременность",
    },
    slides: slides.slice(8, 12),
  },
  {
    slug: "film",
    title: {
      en: "Film Photoshoot",
      de: "Analoge Fotografie",
      ru: "Плёночная съёмка",
    },
    slides: slides.slice(12, 16),
  },
  {
    slug: "event",
    title: {
      en: "Event",
      de: "Event",
      ru: "Мероприятие",
    },
    slides: slides.slice(16, 20),
  },
  {
    slug: "wedding",
    title: {
      en: "Wedding",
      de: "Hochzeit",
      ru: "Свадьба",
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
