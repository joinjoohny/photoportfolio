export const languages = {
  en: "English",
  de: "Deutsch",
  ru: "Русский",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

// Locale values for the `[...lang]` rest param in getStaticPaths: the default
// locale has no prefix (undefined -> "/..."), others use their code ("/de/...").
// Adding a language here wires up every localized route automatically.
export const localeParams: Array<Lang | undefined> = (
  Object.keys(languages) as Lang[]
).map((lang) => (lang === defaultLang ? undefined : lang));

// Minimal UI dictionary. Extend as needed.
export const ui: Record<Lang, Record<string, string>> = {
  en: {
    "site.title": "Vlada Polyanskaya - Photographer Dresden",
    "site.description":
      "Vlada Polyanskaya is a portrait photographer in Dresden, Germany, creating minimalist digital and film photography for individuals, couples and families.",
    "nav.about": "about me",
    "nav.portfolio": "portfolio",
    "nav.services": "services",
    "nav.contacts": "contacts",
    "nav.booking": "booking terms",
    "nav.book": "Book me",
    "book.message": "Hi! I'd like to book a photoshoot.",
    "modal.bookingTitle": "Booking Terms",
    "about.title": "ABOUT ME",
    "portfolio.title": "PORTFOLIO",
    "services.title": "SERVICES",
    "services.individual": "Individual Shoot",
    "services.content": "Content",
    "services.film": "Film Photoshoot",
    "services.family": "Couple/Family",
    "services.gift": "Gift Certificate",
    "contacts.title": "CONTACTS",
    "contacts.location": "Location",
    "contacts.email": "Email",
    "contacts.telegram": "Telegram",
    "contacts.instagram": "Instagram",
    "controls.prev": "Previous",
    "controls.next": "Next",
    "gallery.back": "Back",
    "coming.title": "Still developing…",
    "coming.text": "This gallery is in the darkroom. The photos will be here very soon — check back!",
    "footer.copy": "© Vlada Polyanskaya — Photographer",
    "footer.cookies": "Cookie Settings",
  },
  de: {
    "site.title": "Vlada Polyanskaya - Fotografin Dresden",
    "site.description":
      "Vlada Polyanskaya ist Porträtfotografin in Dresden und gestaltet minimalistische Digital- und Filmfotografie für Einzelpersonen, Paare und Familien.",
    "nav.about": "über mich",
    "nav.portfolio": "portfolio",
    "nav.services": "leistungen",
    "nav.contacts": "kontakt",
    "nav.booking": "buchungsbedingungen",
    "nav.book": "Termin buchen",
    "book.message": "Hallo! Ich möchte ein Fotoshooting buchen.",
    "modal.bookingTitle": "Buchungsbedingungen",
    "about.title": "ÜBER MICH",
    "portfolio.title": "PORTFOLIO",
    "services.title": "LEISTUNGEN",
    "services.individual": "Einzelshooting",
    "services.content": "Content",
    "services.film": "Film-Fotoshooting",
    "services.family": "Paar/Familie",
    "services.gift": "Gutschein",
    "contacts.title": "KONTAKT",
    "contacts.location": "Standort",
    "contacts.email": "E-Mail",
    "contacts.telegram": "Telegram",
    "contacts.instagram": "Instagram",
    "controls.prev": "Zurück",
    "controls.next": "Weiter",
    "gallery.back": "Zurück",
    "coming.title": "Wird noch entwickelt…",
    "coming.text": "Diese Galerie ist noch in der Dunkelkammer. Die Fotos sind bald hier — schau wieder vorbei!",
    "footer.copy": "© Vlada Polyanskaya — Fotografin",
    "footer.cookies": "Cookie-Einstellungen",
  },
  ru: {
    "site.title": "Влада Полянская — Фотограф Дрезден",
    "site.description":
      "Влада Полянская — портретный фотограф в Дрездене (Германия). Минималистичная съёмка на цифру и плёнку для индивидуальных, парных и семейных фотосессий.",
    "nav.about": "обо мне",
    "nav.portfolio": "портфолио",
    "nav.services": "услуги",
    "nav.contacts": "контакты",
    "nav.booking": "условия бронирования",
    "nav.book": "Записаться",
    "book.message": "Здравствуйте! Хочу записаться на съёмку.",
    "modal.bookingTitle": "Условия предоставления услуг",
    "about.title": "ОБО МНЕ",
    "portfolio.title": "ПОРТФОЛИО",
    "services.title": "УСЛУГИ",
    "services.individual": "Индивидуальная съёмка",
    "services.content": "Контент",
    "services.film": "Плёночная съёмка",
    "services.family": "Пара/Семья",
    "services.gift": "Подарочный сертификат",
    "contacts.title": "КОНТАКТЫ",
    "contacts.location": "Локация",
    "contacts.email": "Email",
    "contacts.telegram": "Телеграм",
    "contacts.instagram": "Инстаграм",
    "controls.prev": "Назад",
    "controls.next": "Вперёд",
    "gallery.back": "Назад",
    "coming.title": "Ещё проявляется…",
    "coming.text": "Эта галерея пока в фотолаборатории. Снимки появятся здесь совсем скоро — загляните позже!",
    "footer.copy": "© Влада Полянская — Фотограф",
    "footer.cookies": "Настройки файлов cookie",
  },
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang && lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(Astro: any) {
  const lang = getLangFromUrl(Astro.url);
  return (key: string) => ui[lang][key] ?? ui[defaultLang][key] ?? key;
}

// Strips the locale prefix from a pathname, returning the locale-agnostic path
// (e.g. "/de/gallery/portraits" -> "/gallery/portraits", "/de" -> "/").
function getPathWithoutLang(pathname: string, lang: Lang): string {
  if (lang === defaultLang) return pathname;
  const stripped = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), "");
  return stripped === "" ? "/" : stripped;
}

// Builds one absolute URL per supported locale (plus "x-default") for the
// current page, for use in hreflang alternate links.
export function getAlternateUrls(
  url: URL,
): Record<Lang | "x-default", string> {
  const lang = getLangFromUrl(url);
  const basePath = getPathWithoutLang(url.pathname, lang);

  const urls = {} as Record<Lang | "x-default", string>;
  for (const locale of Object.keys(languages) as Lang[]) {
    const prefix = locale === defaultLang ? "" : `/${locale}`;
    const path = prefix + (basePath === "/" ? "/" : basePath);
    urls[locale] = new URL(path, url).toString();
  }
  urls["x-default"] = urls[defaultLang];

  return urls;
}
