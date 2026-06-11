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
    seo: {
      en: {
        title: "Individual Portrait Photoshoot Dresden | Vlada Polyanskaya",
        description:
          "Minimalist individual portrait photography in Dresden — natural, unposed photoshoots on digital and film with Vlada Polyanskaya.",
      },
      de: {
        title: "Einzelshooting Fotograf Dresden | Vlada Polyanskaya",
        description:
          "Minimalistische Einzelporträts in Dresden — natürliche, ungestellte Fotoshootings digital und analog.",
      },
      ru: {
        title: "Индивидуальная фотосессия в Дрездене | Влада Полянская",
        description:
          "Минималистичные портретные съёмки в Дрездене — естественные кадры без позирования на цифру и плёнку.",
      },
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
    seo: {
      en: {
        title: "Couple & Family Photographer Dresden | Vlada Polyanskaya",
        description:
          "Authentic couple and family portrait sessions in Dresden, capturing natural connection on digital and film.",
      },
      de: {
        title: "Familienfotograf Dresden | Vlada Polyanskaya",
        description:
          "Authentische Paar- und Familienfotos in Dresden — natürliche Momente digital und analog festgehalten.",
      },
      ru: {
        title: "Семейный фотограф в Дрездене | Влада Полянская",
        description:
          "Тёплые парные и семейные фотосессии в Дрездене — живые моменты на цифру и плёнку.",
      },
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
    seo: {
      en: {
        title: "Maternity Photographer Dresden | Vlada Polyanskaya",
        description:
          "Gentle maternity photoshoots in Dresden — minimalist portraits celebrating pregnancy, on digital and film.",
      },
      de: {
        title: "Babybauch-Fotograf Dresden | Vlada Polyanskaya",
        description:
          "Einfühlsame Babybauch-Fotoshootings in Dresden — minimalistische Porträts digital und analog.",
      },
      ru: {
        title: "Фотосессия для беременных в Дрездене | Влада Полянская",
        description:
          "Нежные фотосессии для беременных в Дрездене — минималистичные портреты на цифру и плёнку.",
      },
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
    seo: {
      en: {
        title: "Film Portrait Photography Dresden | Vlada Polyanskaya",
        description:
          "Analog film portrait photography in Dresden with a minimalist, timeless aesthetic.",
      },
      de: {
        title: "Analoge Porträtfotografie Dresden | Vlada Polyanskaya",
        description:
          "Analoge Porträtfotografie in Dresden mit minimalistischer, zeitloser Ästhetik.",
      },
      ru: {
        title: "Плёночная фотосъёмка в Дрездене | Влада Полянская",
        description:
          "Портретная съёмка на плёнку в Дрездене с минималистичной, атмосферной эстетикой.",
      },
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
    seo: {
      en: {
        title: "Event Photographer Dresden | Vlada Polyanskaya",
        description:
          "Natural, unposed event photography in Dresden — capturing real moments as they happen.",
      },
      de: {
        title: "Eventfotograf Dresden | Vlada Polyanskaya",
        description:
          "Natürliche, ungestellte Eventfotografie in Dresden — echte Momente authentisch festgehalten.",
      },
      ru: {
        title: "Фотограф на мероприятия в Дрездене | Влада Полянская",
        description:
          "Живая репортажная съёмка мероприятий в Дрездене — настоящие моменты без постановки.",
      },
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
    seo: {
      en: {
        title: "Wedding Photographer Dresden | Vlada Polyanskaya",
        description:
          "Minimalist wedding photography in Dresden — authentic, unposed moments on digital and film.",
      },
      de: {
        title: "Hochzeitsfotograf Dresden | Vlada Polyanskaya",
        description:
          "Minimalistische Hochzeitsfotografie in Dresden — authentische, ungestellte Momente digital und analog.",
      },
      ru: {
        title: "Свадебный фотограф в Дрездене | Влада Полянская",
        description:
          "Минималистичная свадебная фотосъёмка в Дрездене — искренние моменты на цифру и плёнку.",
      },
    },
    slides: slides.slice(20, 24),
  },
] satisfies Array<{
  slug: GallerySlug;
  title: Record<Lang, string>;
  seo: Record<Lang, { title: string; description: string }>;
  slides: typeof slides;
}>;

export function getGallery(slug: string | undefined) {
  return galleries.find((gallery) => gallery.slug === slug);
}
