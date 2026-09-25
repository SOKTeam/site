// Structured data (schema.org JSON-LD) so search engines can show S.O.K
// as a software result: free, Windows, current version, download link.
export function softwareApplicationSchema(release, site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'S.O.K - Storage Organisation Kit',
    alternateName: 'S.O.K',
    description:
      'Free, open-source Windows app that identifies, renames and organizes movies, TV shows, music, books and games into a library compatible with Plex, Jellyfin and Kodi.',
    url: new URL('/', site).href,
    image: new URL('/og-image.png', site).href,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Windows 10, Windows 11',
    softwareVersion: release.version,
    downloadUrl: release.url,
    fileSize: release.size,
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
