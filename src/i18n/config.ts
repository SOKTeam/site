// The languages of the site: the 8 languages of the S.O.K app. English is at
// the root (/guide), the others under their code (/fr/guide).

export const LANGUAGES = ['en', 'fr', 'de', 'es', 'it', 'pl', 'pt', 'ru'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'en';
/** The languages with a prefix in their addresses. */
export const OTHER_LANGUAGES = LANGUAGES.filter((lang) => lang !== DEFAULT_LANG);

/** The name of each language, written in that language, for the menu. */
export const LANGUAGE_NAMES: Record<Lang, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  pl: 'Polski',
  pt: 'Português',
  ru: 'Русский',
};

/** The tag of each language for Open Graph and the dates. The Portuguese
 * of the site is the Portuguese of Portugal. */
export const LOCALES: Record<Lang, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  de: 'de-DE',
  es: 'es-ES',
  it: 'it-IT',
  pl: 'pl-PL',
  pt: 'pt-PT',
  ru: 'ru-RU',
};

/** The cookie that keeps the language picked in the menu: the home page then
 * no longer follows the browser (vercel.json). */
export const LANG_COOKIE = 'sok_lang';

export function isLang(value: string | undefined): value is Lang {
  return LANGUAGES.includes(value as Lang);
}

/** The language of an address: /fr/guide is French, /guide English. */
export function langOf(pathname: string): Lang {
  const first = pathname.split('/')[1];
  return isLang(first) ? first : DEFAULT_LANG;
}

/** An address without its language: /fr/guide → /guide. */
export function unlocalize(pathname: string): string {
  const lang = langOf(pathname);
  if (lang === DEFAULT_LANG) return pathname;
  return pathname.slice(lang.length + 1) || '/';
}

/** The address of a page of the site in a language: /guide → /fr/guide. The
 * demo gets the language as a parameter; the developer docs stay English. */
export function localize(path: string, lang: Lang): string {
  if (!path.startsWith('/') || path.startsWith('/docs')) return path;
  if (path === '/demo' || path.startsWith('/demo/') || path.startsWith('/demo?')) {
    return lang === DEFAULT_LANG ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${lang}`;
  }
  if (lang === DEFAULT_LANG) return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}
