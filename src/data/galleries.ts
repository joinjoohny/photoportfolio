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
          "Minimalist individual portrait photography in Dresden — natural, unposed photoshoots on digital and film with Vlada Polyanskaya. Book your shoot today.",
        keywords:
          "individual portrait photoshoot Dresden, portrait photographer Dresden, solo photoshoot Dresden, Vlada Polyanskaya",
      },
      de: {
        title: "Einzelshooting Fotograf Dresden | Vlada Polyanskaya",
        description:
          "Minimalistische Einzelporträts in Dresden — natürliche, ungestellte Fotoshootings digital und analog. Jetzt dein Einzelshooting buchen.",
        keywords:
          "Einzelshooting Dresden, Porträtfotograf Dresden, Fotoshooting Dresden, Bewerbungsfotos Dresden, Vlada Polyanskaya",
      },
      ru: {
        title: "Индивидуальная фотосессия в Дрездене | Влада Полянская",
        description:
          "Минималистичные портретные съёмки в Дрездене — естественные кадры без позирования на цифру и плёнку. Запишитесь на индивидуальную съёмку.",
        keywords:
          "индивидуальная фотосессия Дрезден, портретная съёмка Дрезден, фотограф Дрезден, Влада Полянская",
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
          "Authentic couple and family portrait sessions in Dresden, capturing natural connection on digital and film. Book your family photoshoot today.",
        keywords:
          "couple photographer Dresden, family photographer Dresden, family photoshoot Dresden, Vlada Polyanskaya",
      },
      de: {
        title: "Familienfotograf Dresden | Vlada Polyanskaya",
        description:
          "Authentische Paar- und Familienfotos in Dresden — natürliche Momente digital und analog festgehalten. Jetzt euer Familienshooting buchen.",
        keywords:
          "Familienfotograf Dresden, Familienfotografie Dresden, Fotoshooting Dresden Familie, Paarshooting Dresden, Vlada Polyanskaya",
      },
      ru: {
        title: "Семейный фотограф в Дрездене | Влада Полянская",
        description:
          "Тёплые парные и семейные фотосессии в Дрездене — живые моменты на цифру и плёнку. Запишитесь на семейную съёмку уже сегодня.",
        keywords:
          "семейный фотограф Дрезден, семейная фотосессия Дрезден, парная фотосессия Дрезден, Влада Полянская",
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
          "Gentle maternity photoshoots in Dresden — minimalist portraits celebrating pregnancy, on digital and film. Book your maternity session today.",
        keywords:
          "maternity photographer Dresden, pregnancy photoshoot Dresden, maternity photoshoot Dresden, Vlada Polyanskaya",
      },
      de: {
        title: "Babybauch-Fotograf Dresden | Vlada Polyanskaya",
        description:
          "Einfühlsame Babybauch-Fotoshootings in Dresden — minimalistische Porträts digital und analog. Jetzt dein Babybauch-Shooting buchen.",
        keywords:
          "Babybauch Fotograf Dresden, Schwangerschaftsfotos Dresden, Babybauch Fotoshooting Dresden, Vlada Polyanskaya",
      },
      ru: {
        title: "Фотосессия для беременных в Дрездене | Влада Полянская",
        description:
          "Нежные фотосессии для беременных в Дрездене — минималистичные портреты на цифру и плёнку. Запишитесь на съёмку для будущих мам.",
        keywords:
          "фотосессия для беременных Дрезден, беременность фотограф Дрезден, Влада Полянская",
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
          "Analog film portrait photography in Dresden with a minimalist, timeless aesthetic — natural light, real moments. Book your film shoot today.",
        keywords:
          "film photography Dresden, analog portrait photography Dresden, film photoshoot Dresden, Vlada Polyanskaya",
      },
      de: {
        title: "Analoge Porträtfotografie Dresden | Vlada Polyanskaya",
        description:
          "Analoge Porträtfotografie in Dresden mit minimalistischer, zeitloser Ästhetik — echte Momente im natürlichen Licht. Jetzt anfragen.",
        keywords:
          "Analoge Fotografie Dresden, Filmfotografie Dresden, Porträtfotograf Dresden analog, Vlada Polyanskaya",
      },
      ru: {
        title: "Плёночная фотосъёмка в Дрездене | Влада Полянская",
        description:
          "Портретная съёмка на плёнку в Дрездене с минималистичной, атмосферной эстетикой и живым светом. Запишитесь на плёночную съёмку.",
        keywords:
          "плёночная фотосъёмка Дрезден, аналоговая фотография Дрезден, фотограф Дрезден, Влада Полянская",
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
          "Natural, unposed event photography in Dresden — capturing real moments as they happen, from intimate gatherings to celebrations. Book now.",
        keywords:
          "event photographer Dresden, event photography Dresden, reportage photographer Dresden, Vlada Polyanskaya",
      },
      de: {
        title: "Eventfotograf Dresden | Vlada Polyanskaya",
        description:
          "Natürliche, ungestellte Eventfotografie in Dresden — echte Momente authentisch festgehalten, von Feiern bis zu besonderen Anlässen. Jetzt anfragen.",
        keywords:
          "Eventfotograf Dresden, Eventfotografie Dresden, Reportagefotograf Dresden, Vlada Polyanskaya",
      },
      ru: {
        title: "Фотограф на мероприятия в Дрездене | Влада Полянская",
        description:
          "Живая репортажная съёмка мероприятий в Дрездене — настоящие моменты без постановки, от праздников до особых событий. Запишитесь.",
        keywords:
          "фотограф на мероприятия Дрезден, репортажная съёмка Дрезден, событийная фотосъёмка, Влада Полянская",
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
          "Minimalist wedding photography in Dresden — authentic, unposed moments on digital and film, captured with care. Book your date today.",
        keywords:
          "wedding photographer Dresden, wedding photography Dresden, Vlada Polyanskaya",
      },
      de: {
        title: "Hochzeitsfotograf Dresden | Vlada Polyanskaya",
        description:
          "Minimalistische Hochzeitsfotografie in Dresden — authentische, ungestellte Momente digital und analog, einfühlsam festgehalten. Jetzt Termin sichern.",
        keywords:
          "Hochzeitsfotograf Dresden, Hochzeitsfotografie Dresden, Hochzeitsfotograf Dresden Preise, Vlada Polyanskaya",
      },
      ru: {
        title: "Свадебный фотограф в Дрездене | Влада Полянская",
        description:
          "Минималистичная свадебная фотосъёмка в Дрездене — искренние моменты на цифру и плёнку, бережно сохранённые навсегда. Забронируйте дату.",
        keywords:
          "свадебный фотограф Дрезден, свадебная фотосъёмка Дрезден, Влада Полянская",
      },
    },
    slides: slides.slice(20, 24),
  },
] satisfies Array<{
  slug: GallerySlug;
  title: Record<Lang, string>;
  seo: Record<Lang, { title: string; description: string; keywords: string }>;
  slides: typeof slides;
}>;

export function getGallery(slug: string | undefined) {
  return galleries.find((gallery) => gallery.slug === slug);
}
