// Structured data (schema.org JSON-LD) so search engines can show S.O.K
// as a software result: free, Windows, macOS and Linux, current version, download link.
// The description and the addresses are those of the language of the page.
import { localize, LOCALES } from '../i18n/config';
import { t } from '../i18n';

export function softwareApplicationSchema(release, site, lang = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'S.O.K - Storage Organisation Kit',
    alternateName: 'S.O.K',
    description: t(lang).meta.schemaDescription,
    inLanguage: LOCALES[lang],
    url: new URL(localize('/', lang), site).href,
    image: new URL('/og-image.png?v=2', site).href,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Windows 10, Windows 11, macOS, Linux',
    softwareVersion: release.version,
    downloadUrl: new URL(localize('/download', lang), site).href,
    license: 'https://github.com/SOKTeam/S.O.K/blob/main/LICENSE',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    sameAs: ['https://github.com/SOKTeam/S.O.K'],
  };
}
