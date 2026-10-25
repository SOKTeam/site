// The pages of the user guide in a language: src/content/guide/<lang>/*.md,
// with the same file names in every language.

import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/config';

export type GuidePage = CollectionEntry<'guide'> & { slug: string };

/** The pages of a language, in the order of the sidebar. */
export async function guidePages(lang: Lang): Promise<GuidePage[]> {
  const pages = await getCollection('guide', (page) => page.id.startsWith(`${lang}/`));
  return pages
    .map((page) => ({ ...page, slug: page.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
}
