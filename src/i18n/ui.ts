export const languages = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

// Minimal UI dictionary. Extend as needed.
export const ui: Record<Lang, Record<string, string>> = {
  en: {
    'site.title': 'Vlada Polyanskaya - Photographer Dresden',
    'nav.about': 'about me',
    'nav.portfolio': 'portfolio',
    'nav.services': 'services',
    'nav.contacts': 'contacts',
    'nav.booking': 'booking terms',
    'modal.bookingTitle': 'Booking Terms',
    'about.title': 'ABOUT ME',
    'portfolio.title': 'PORTFOLIO',
    'services.title': 'SERVICES',
    'services.individual': 'Individual Shoot',
    'services.content': 'Content',
    'services.film': 'Film Photoshoot',
    'services.family': 'Couple/Family',
    'services.gift': 'Gift Certificate',
    'contacts.title': 'CONTACTS',
    'contacts.location': 'Location',
    'contacts.email': 'Email',
    'contacts.telegram': 'Telegram',
    'contacts.instagram': 'Instagram',
    'controls.prev': 'Previous',
    'controls.next': 'Next',
    'footer.copy': '© Vlada Polyanskaya — Photographer',
  },
  de: {
    'site.title': 'Vlada Polyanskaya - Fotografin Dresden',
    'nav.about': 'über mich',
    'nav.portfolio': 'portfolio',
    'nav.services': 'leistungen',
    'nav.contacts': 'kontakt',
    'nav.booking': 'buchungsbedingungen',
    'modal.bookingTitle': 'Buchungsbedingungen',
    'about.title': 'ÜBER MICH',
    'portfolio.title': 'PORTFOLIO',
    'services.title': 'LEISTUNGEN',
    'services.individual': 'Einzelshooting',
    'services.content': 'Content',
    'services.film': 'Film-Fotoshooting',
    'services.family': 'Paar/Familie',
    'services.gift': 'Gutschein',
    'contacts.title': 'KONTAKT',
    'contacts.location': 'Standort',
    'contacts.email': 'E-Mail',
    'contacts.telegram': 'Telegram',
    'contacts.instagram': 'Instagram',
    'controls.prev': 'Zurück',
    'controls.next': 'Weiter',
    'footer.copy': '© Vlada Polyanskaya — Fotografin',
  },
  ru: {
    'site.title': 'Влада Полянская — Фотограф Дрезден',
    'nav.about': 'обо мне',
    'nav.portfolio': 'портфолио',
    'nav.services': 'услуги',
    'nav.contacts': 'контакты',
    'nav.booking': 'условия бронирования',
    'modal.bookingTitle': 'Условия предоставления услуг',
    'about.title': 'ОБО МНЕ',
    'portfolio.title': 'ПОРТФОЛИО',
    'services.title': 'УСЛУГИ',
    'services.individual': 'Индивидуальная съёмка',
    'services.content': 'Контент',
    'services.film': 'Плёночная съёмка',
    'services.family': 'Пара/Семья',
    'services.gift': 'Подарочный сертификат',
    'contacts.title': 'КОНТАКТЫ',
    'contacts.location': 'Локация',
    'contacts.email': 'Email',
    'contacts.telegram': 'Телеграм',
    'contacts.instagram': 'Инстаграм',
    'controls.prev': 'Назад',
    'controls.next': 'Вперёд',
    'footer.copy': '© Влада Полянская — Фотограф',
  },
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(Astro: any) {
  const lang = getLangFromUrl(Astro.url);
  return (key: string) => ui[lang][key] ?? ui[defaultLang][key] ?? key;
}

