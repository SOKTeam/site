// The texts of the site in English: the reference of the other languages,
// which have the same keys (scripts/check-i18n.mjs). A text with a link is
// HTML: its addresses are those of the English site, localized when shown.

const en = {
  meta: {
    title: 'S.O.K - Free Media Organizer for Plex, Jellyfin & Kodi',
    description:
      'S.O.K is a free, open-source app for Windows, macOS and Linux that renames and organizes your movies, TV shows, music, books and games into a clean library.',
    imageAlt: 'S.O.K - Storage Organisation Kit, the free media organizer',
    schemaDescription:
      'Free, open-source app for Windows, macOS and Linux that identifies, renames and organizes movies, TV shows, music, books and games into a library compatible with Plex, Jellyfin and Kodi.',
  },
  nav: {
    home: 'Home',
    features: 'Features',
    guide: 'Guide',
    docs: 'Docs',
    roadmap: 'Roadmap',
    download: 'Download',
  },
  header: {
    logoAlt: 'S.O.K Logo',
    download: 'Download',
    downloadApp: 'Download S.O.K',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    theme: 'Toggle Dark Mode',
    language: 'Language',
  },
  footer: {
    guide: 'Guide',
    docs: 'Developer docs',
    releases: 'Releases',
    license: 'License',
  },
  hero: {
    title1: 'Organize Your',
    title2: 'Digital Universe.',
    tagline1: 'The universal media manager.',
    tagline2: 'Transform chaos into a pristine library.',
    download: 'Download S.O.K',
    learnMore: 'Learn more',
    available:
      'Available for Windows, macOS and Linux, and as a <a href="/guide/server">Docker image</a> for your NAS. <a href="/demo">Try the demo</a>',
  },
  home: {
    title: 'S.O.K - Free Media Organizer for Plex, Jellyfin & Kodi',
    description:
      'Rename and organize your movies, TV shows, music, books and games automatically. S.O.K is a free, open-source app for Windows, macOS and Linux that builds a clean library for Plex, Jellyfin and Kodi.',
    featuresTitle: 'Everything in its right place.',
    featuresSubtitle: 'Powerful automation wrapped in a beautiful interface.',
    cards: {
      universal: {
        title: 'Universal Media',
        text: 'One app for your Videos, Music, Books and Games. Stop juggling multiple organizers.',
      },
      metadata: {
        title: 'Smart Metadata',
        text: 'Automatically fetch rich details from TMDB, Spotify, and more.',
      },
      privacy: {
        title: 'Privacy First',
        text: 'Your data stays locally on your machine. No cloud syncing required.',
      },
      renaming: {
        title: 'Powerful Renaming',
        text: 'Custom patterns like {Title} ({Year}) to structure your filesystem exactly how you want it.',
      },
      design: {
        title: 'Designed for Humans',
        text: 'A modern, frameless interface built with PySide6. Dark mode included.',
      },
      openSource: { title: 'Open Source', text: 'Built with Python. Free forever.' },
    },
    logos: 'Metadata Powered By Industry Leaders',
  },
  downloadSection: {
    title: 'Ready to Organize?',
    text1: 'Take control of your media library with S.O.K.',
    text2: 'Available now for Windows, macOS, Linux and Docker.',
    button: 'Get S.O.K',
    availableFor: 'Available for {os}',
    dockerTitle: 'S.O.K Server, a Docker image for a NAS or a home server',
    footer: 'Open Source • Version {version} • Free Forever',
  },
  showcase: {
    label: 'Preview of the S.O.K home page',
    switcher: 'Show S.O.K as it looks on',
  },
  features: {
    title: 'Features - S.O.K Media Organizer',
    description:
      'Rename TV episodes into season folders, batch rename movies, customize file name formats and fetch metadata from TMDB, TheTVDB and more. See everything S.O.K can do.',
    heading: 'Features',
    intro:
      'S.O.K identifies your media files, gives them clean names and sorts them into a library that media servers understand.',
    before: 'Before',
    after: 'After',
    // The id of the "Output formats" heading of the settings page of the guide.
    formatsAnchor: 'output-formats',
    highlights: [
      {
        title: 'TV shows, sorted by series and season',
        text: 'Drop a folder of episodes: S.O.K recognizes the series, downloads the episode titles and moves every file into its season folder. It reads S01E02, 1x02 and "Season 1 Episode 2" style names.',
        after: "Breaking Bad/Season 1/Breaking Bad S01E02 Cat's in the Bag.mkv",
        link: 'Organize TV shows',
      },
      {
        title: 'Movies, renamed in one batch',
        text: 'Add dozens of movie files at once. S.O.K searches for each one, marks the files that are ready, and lets you pick the right match when several movies share a title.',
        after: 'Inception (2010).mkv',
        link: 'Batch rename movies',
      },
      {
        title: 'Your naming, your rules',
        text: 'Change the file name format with simple variables such as {title}, {year}, {season}, {episode} or {quality}. With the format {title} ({year}) [{quality}], a 2160p file becomes:',
        after: 'Dune (2021) [4K].mkv',
        link: 'Customize formats',
      },
    ],
    providersTitle: 'Metadata from trusted databases',
    providersText:
      'Titles, years, episode names and artwork come from the reference databases of each media type. Choose your preferred source in the settings.',
    providers: { video: 'Movies & TV', music: 'Music', books: 'Books', games: 'Games' },
    providersNote:
      'Music, books and games are organized too: albums go into artist and album folders, books into author folders, and each game gets its own folder. See the <a href="/guide/music-books-games">guide</a>.',
    extrasTitle: 'And also',
    extras: [
      {
        title: 'Ready for media servers',
        text: 'Folder and file names follow the conventions of Plex, Jellyfin and Kodi, so your library is recognized right away.',
      },
      {
        title: 'No setup needed',
        text: 'TMDB and TheTVDB work out of the box with a built-in key. No account to create.',
      },
      {
        title: 'Your files stay yours',
        text: 'Your files never leave your computer. To identify them, S.O.K only sends search queries, such as a title, to the metadata databases.',
      },
      {
        title: 'Preview before you commit',
        text: 'See the current and new name of every file, then confirm. Changed your mind? Undo the rename from the History page.',
      },
      {
        title: '8 languages',
        text: 'English, French, German, Spanish, Italian, Portuguese, Russian and Polish, including season folder names.',
      },
      {
        title: 'On a NAS too',
        text: 'S.O.K Server is a Docker image with a web interface: it sorts your new downloads on its own, with hard links, so torrents keep seeding.',
      },
      {
        title: 'Free and open source',
        text: 'Released under the MIT license. The code is on GitHub.',
      },
    ],
    ctaTitle: 'Ready to clean up your library?',
    ctaDownload: 'Download S.O.K',
    ctaGuide: 'Read the guide',
  },
  download: {
    titleAll: 'Download S.O.K for Windows, macOS and Linux - Free Media Organizer',
    titleNoLinux: 'Download S.O.K for Windows and macOS - Free Media Organizer',
    description:
      'Download S.O.K {version} for Windows 10 and 11 (64-bit), macOS (Apple Silicon){linux}. Free and open source: rename and organize your movies, TV shows and media library in a few clicks.',
    descriptionLinux: ' and Linux (AppImage)',
    heading: 'Download S.O.K',
    intro1: 'Start organizing your media library today.',
    intro2: 'Choose your platform below.',
    windowsVersions: 'Windows 10/11 (64-bit)',
    macVersions: 'Apple Silicon (M1 or later)',
    linuxVersions: 'Ubuntu, Fedora, Debian, Arch…',
    dockerVersions: 'S.O.K Server, for your NAS',
    downloadExe: 'Download .exe',
    downloadDmg: 'Download .dmg',
    appImageIntel: 'AppImage (Intel/AMD)',
    appImageArm: 'AppImage (ARM)',
    comingSoon: 'Coming Soon',
    version: 'Version {version}',
    copy: 'Copy',
    clickToCopy: 'Click to copy',
    copied: 'Copied',
    copyFailed: 'Select the command to copy it',
    installGuide: 'Installation guide',
    tryDemo: 'Try the demo',
    macNote:
      'First launch on a Mac: macOS blocks apps from unidentified developers. <a href="/guide/getting-started#macos">See how to open S.O.K</a>.',
    linuxNote:
      'On Linux, pick the AppImage for your processor and allow it to run as a program. <a href="/guide/getting-started#linux">See how to start S.O.K</a>.',
    archiveNote: 'Looking for a previous build? <a href="/releases">Browse the release archive</a>.',
  },
  releases: {
    title: 'Release Archive - S.O.K',
    description:
      'Every published version of S.O.K for Windows, macOS and Linux, with release notes and download links for past builds.',
    heading: 'Release Archive',
    intro: 'Every published version of S.O.K. Need the newest build? <a href="/download">Head to the download page</a>.',
    unavailable:
      'Release history is currently unavailable. Browse all versions on <a href="https://github.com/SOKTeam/S.O.K/releases">GitHub</a>.',
    version: 'Version {version}',
    latest: 'Latest',
    notes: 'Release notes',
    noInstaller: 'No installer',
  },
  roadmap: {
    title: 'Roadmap - S.O.K',
    description:
      'What is available, in progress and planned for S.O.K, the free media organizer for movies, TV shows, music, books and games.',
    heading: 'Development Roadmap',
    available: 'Available',
    next: 'Next',
    later: 'Later',
    // Same content as the Roadmap section of the S.O.K README.
    availableItems: [
      'Movies, TV shows, music, books and games',
      'Windows, macOS (Apple Silicon) and Linux (AppImage) apps',
      'Built-in updates',
      'Automatic detection of the media type',
      'A more reliable "Ready" status: the title and year must match',
      'History of renamed files, with undo',
      'Move, hard link or copy; subtitles follow their video',
      'S.O.K Server: a Docker image with a web interface in the look of the app (light, orange and dark themes), hard links by default, several destination folders per media type, files already processed left out',
      'S.O.K Server sorts new files automatically once downloaded, then notifies Discord, Jellyfin, Plex, a webhook or a script',
      'A live demo of S.O.K Server on the website',
    ],
    nextItems: [
      'S.O.K Server: a new season joins the series already in your library, even when its folder is named differently',
      'S.O.K Server: check and fix the language of the audio tracks and subtitles of a video',
      'Subtitles: the language of a subtitle file found from its text, and the subtitles of a Subs folder renamed with their video',
      'S.O.K Server: convert videos to MKV, without losing quality',
      'S.O.K Server: write the title, year, poster and more into the video files',
    ],
    laterItems: ['S.O.K Server: fetch downloads from a seedbox over SFTP', 'A mobile app for S.O.K Server'],
  },
  guide: {
    title: 'User guide',
    description: 'Learn how to install and use S.O.K to organize your media library.',
    titleSuffix: '{title} - S.O.K Guide',
    heading: 'User guide',
    intro:
      'Everything you need to install S.O.K and organize your media library. New here? Start with <a href="/guide/getting-started">Getting started</a>.',
    overview: 'Overview',
    label: 'User guide',
    previous: '← Previous',
    next: 'Next →',
  },
  notFound: {
    title: 'Page not found - S.O.K',
    description: 'This page does not exist.',
    heading: 'This file got lost in the mess',
    text: "The page you are looking for does not exist or has moved. Even S.O.K can't organize what isn't there.",
    home: 'Back to home',
    guide: 'Read the guide',
  },
};

export default en;
export type Dict = typeof en;
