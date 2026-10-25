// The texts of a page in its language: t(lang).home.title, fill() for the
// {values} of a text, rich() for a text with links.

import { DEFAULT_LANG, localize, type Lang } from './config';
import en, { type Dict } from './ui/en';

const dictionaries = import.meta.glob<{ default: Partial<Dict> }>('./ui/*.ts', { eager: true });

/** A text of another language, or the English one when it is missing. */
function merge<T>(base: T, over: unknown): T {
  if (Array.isArray(base) || typeof base !== 'object' || base === null) {
    return (over ?? base) as T;
  }
  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries((over ?? {}) as Record<string, unknown>)) {
    result[key] = merge((base as Record<string, unknown>)[key], value);
  }
  return result as T;
}

const cache = new Map<Lang, Dict>();

/** The texts of a language. */
export function t(lang: Lang): Dict {
  if (lang === DEFAULT_LANG) return en;
  if (!cache.has(lang)) {
    cache.set(lang, merge(en, dictionaries[`./ui/${lang}.ts`]?.default));
  }
  return cache.get(lang)!;
}

/** Put values in the {placeholders} of a text. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (whole, name) => (name in values ? String(values[name]) : whole));
}

/** A text with links, ready for set:html: each link of the site goes to the
 * page of the language, and gets the classes given. */
export function rich(html: string, lang: Lang, linkClass = ''): string {
  return html.replace(/<a href="([^"]+)">/g, (_, href: string) => {
    const external = /^https?:/.test(href);
    const target = external ? href : localize(href, lang);
    return `<a href="${target}"${linkClass ? ` class="${linkClass}"` : ''}>`;
  });
}

export { localize };
