// Checks that every language of the site has the texts of English: the same
// keys, the same number of items in the lists, the same {placeholders} and
// the same links, and that the guide has the same pages in every language.
// node scripts/check-i18n.mjs (TypeScript files are read by Node 22.18+).
import { readdirSync } from 'node:fs';

const LANGUAGES = ['fr', 'de', 'es', 'it', 'pl', 'pt', 'ru'];
const en = (await import('../src/i18n/ui/en.ts')).default;
const problems = [];

const placeholders = (text) => [...text.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
const links = (text) => [...text.matchAll(/href="([^"]+)"/g)].map((m) => m[1]).join(',');

function compare(base, other, path, lang) {
  if (other === undefined) return problems.push(`${lang}: missing ${path}`);
  if (Array.isArray(base)) {
    if (!Array.isArray(other) || other.length !== base.length) {
      return problems.push(`${lang}: ${path} has ${other?.length} items, not ${base.length}`);
    }
    base.forEach((item, i) => compare(item, other[i], `${path}[${i}]`, lang));
  } else if (typeof base === 'object') {
    for (const key of Object.keys(base)) compare(base[key], other[key], `${path}.${key}`, lang);
    for (const key of Object.keys(other)) if (!(key in base)) problems.push(`${lang}: unknown ${path}.${key}`);
  } else if (typeof base === 'string' && !path.endsWith('formatsAnchor') && !path.endsWith('.after')) {
    if (placeholders(base) !== placeholders(other)) problems.push(`${lang}: placeholders of ${path}`);
    if (links(base) !== links(other)) problems.push(`${lang}: links of ${path}`);
  }
}

const guide = (lang) => readdirSync(new URL(`../src/content/guide/${lang}/`, import.meta.url)).sort().join(',');
for (const lang of LANGUAGES) {
  compare(en, (await import(`../src/i18n/ui/${lang}.ts`)).default, 'text', lang);
  let pages = '';
  try {
    pages = guide(lang);
  } catch {}
  if (pages !== guide('en')) problems.push(`${lang}: the guide pages are not those of English`);
}

console.log(problems.length ? problems.join('\n') : `All ${LANGUAGES.length} languages have every text.`);
process.exit(problems.length ? 1 : 0);
