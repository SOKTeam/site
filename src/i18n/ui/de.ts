import type { Dict } from './en';

const de: Dict = {
  meta: {
    title: 'S.O.K - Kostenloser Medien-Organizer für Plex, Jellyfin und Kodi',
    description:
      'S.O.K ist eine kostenlose Open-Source-App für Windows, macOS und Linux, die Ihre Filme, Serien, Musik, Bücher und Spiele umbenennt und in eine saubere Bibliothek einsortiert.',
    imageAlt: 'S.O.K - Storage Organisation Kit, der kostenlose Medien-Organizer',
    schemaDescription:
      'Kostenlose Open-Source-App für Windows, macOS und Linux, die Filme, Serien, Musik, Bücher und Spiele erkennt, umbenennt und in eine mit Plex, Jellyfin und Kodi kompatible Bibliothek einsortiert.',
  },
  nav: {
    home: 'Start',
    features: 'Funktionen',
    guide: 'Anleitung',
    docs: 'Docs',
    roadmap: 'Roadmap',
    download: 'Download',
  },
  header: {
    logoAlt: 'S.O.K-Logo',
    download: 'Download',
    downloadApp: 'S.O.K herunterladen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    theme: 'Design wechseln',
    language: 'Sprache',
  },
  footer: {
    guide: 'Anleitung',
    docs: 'Entwickler-Docs',
    releases: 'Versionen',
    license: 'Lizenz',
  },
  hero: {
    title1: 'Ordnen Sie Ihr',
    title2: 'digitales Universum.',
    tagline1: 'Der universelle Medienmanager.',
    tagline2: 'Machen Sie aus Chaos eine makellose Bibliothek.',
    download: 'S.O.K herunterladen',
    learnMore: 'Mehr erfahren',
    available:
      'Verfügbar für Windows, macOS und Linux und als <a href="/guide/server">Docker-Image</a> für Ihr NAS. <a href="/demo">Demo ausprobieren</a>',
  },
  home: {
    title: 'S.O.K - Kostenloser Medien-Organizer für Plex, Jellyfin und Kodi',
    description:
      'Benennen Sie Ihre Filme, Serien, Musik, Bücher und Spiele automatisch um und sortieren Sie sie. S.O.K ist eine kostenlose Open-Source-App für Windows, macOS und Linux, die eine saubere Bibliothek für Plex, Jellyfin und Kodi anlegt.',
    featuresTitle: 'Alles an seinem Platz.',
    featuresSubtitle: 'Starke Automatisierung in einer schönen Oberfläche.',
    cards: {
      universal: {
        title: 'Alle Ihre Medien',
        text: 'Eine App für Videos, Musik, Bücher und Spiele. Schluss mit dem Jonglieren zwischen mehreren Programmen.',
      },
      metadata: {
        title: 'Smarte Metadaten',
        text: 'Holt automatisch ausführliche Infos von TMDB, Spotify und vielen mehr.',
      },
      privacy: {
        title: 'Privatsphäre zuerst',
        text: 'Ihre Daten bleiben auf Ihrem Rechner. Keine Cloud-Synchronisierung nötig.',
      },
      renaming: {
        title: 'Starkes Umbenennen',
        text: 'Eigene Muster wie {Title} ({Year}), damit Ihre Dateien genau so geordnet sind, wie Sie es wollen.',
      },
      design: {
        title: 'Für Menschen gemacht',
        text: 'Eine moderne, rahmenlose Oberfläche, gebaut mit PySide6. Dunkelmodus inklusive.',
      },
      openSource: { title: 'Open Source', text: 'Geschrieben in Python. Für immer kostenlos.' },
    },
    logos: 'Metadaten von den führenden Quellen',
  },
  downloadSection: {
    title: 'Bereit zum Aufräumen?',
    text1: 'Übernehmen Sie mit S.O.K die Kontrolle über Ihre Mediathek.',
    text2: 'Jetzt verfügbar für Windows, macOS, Linux und Docker.',
    button: 'S.O.K holen',
    availableFor: 'Verfügbar für {os}',
    dockerTitle: 'S.O.K Server, ein Docker-Image für ein NAS oder einen Heimserver',
    footer: 'Open Source • Version {version} • Für immer kostenlos',
  },
  showcase: {
    label: 'Vorschau der Startseite von S.O.K',
    switcher: 'S.O.K so zeigen, wie es aussieht auf',
  },
  features: {
    title: 'Funktionen - S.O.K, der Medien-Organizer',
    description:
      'Sortieren Sie Folgen in Staffelordner, benennen Sie Filme stapelweise um, passen Sie die Dateinamen an und holen Sie Metadaten von TMDB, TheTVDB und mehr. Entdecken Sie alles, was S.O.K kann.',
    heading: 'Funktionen',
    intro:
      'S.O.K erkennt Ihre Mediendateien, gibt ihnen saubere Namen und sortiert sie in eine Bibliothek, die Medienserver verstehen.',
    before: 'Vorher',
    after: 'Nachher',
    formatsAnchor: 'ausgabeformate',
    highlights: [
      {
        title: 'Serien, nach Serie und Staffel sortiert',
        text: 'Legen Sie einen Ordner mit Folgen ab: S.O.K erkennt die Serie, lädt die Titel der Folgen und verschiebt jede Datei in ihren Staffelordner. Es liest Namen wie S01E02, 1x02 und „Season 1 Episode 2“.',
        after: 'Breaking Bad/Staffel 1/Breaking Bad S01E02 Die Katze ist im Sack.mkv',
        link: 'Serien ordnen',
      },
      {
        title: 'Filme, in einem Rutsch umbenannt',
        text: 'Fügen Sie Dutzende Filme auf einmal hinzu. S.O.K sucht jeden einzelnen, markiert die fertigen Dateien und lässt Sie den richtigen Treffer wählen, wenn mehrere Filme gleich heißen.',
        after: 'Inception (2010).mkv',
        link: 'Filme stapelweise umbenennen',
      },
      {
        title: 'Ihre Namen, Ihre Regeln',
        text: 'Ändern Sie das Format der Dateinamen mit einfachen Variablen wie {title}, {year}, {season}, {episode} oder {quality}. Mit dem Format {title} ({year}) [{quality}] wird eine 2160p-Datei zu:',
        after: 'Dune (2021) [4K].mkv',
        link: 'Formate anpassen',
      },
    ],
    providersTitle: 'Metadaten aus verlässlichen Datenbanken',
    providersText:
      'Titel, Jahre, Folgennamen und Bilder kommen aus den Referenzdatenbanken jedes Medientyps. Wählen Sie Ihre bevorzugte Quelle in den Einstellungen.',
    providers: { video: 'Filme und Serien', music: 'Musik', books: 'Bücher', games: 'Spiele' },
    providersNote:
      'Musik, Bücher und Spiele werden ebenfalls sortiert: Alben in Künstler- und Albumordner, Bücher in Autorenordner, und jedes Spiel bekommt einen eigenen Ordner. Siehe die <a href="/guide/music-books-games">Anleitung</a>.',
    extrasTitle: 'Und außerdem',
    extras: [
      {
        title: 'Bereit für Medienserver',
        text: 'Ordner- und Dateinamen folgen den Konventionen von Plex, Jellyfin und Kodi, damit Ihre Bibliothek sofort erkannt wird.',
      },
      {
        title: 'Keine Einrichtung nötig',
        text: 'TMDB und TheTVDB funktionieren sofort mit einem eingebauten Schlüssel. Kein Konto nötig.',
      },
      {
        title: 'Ihre Dateien bleiben bei Ihnen',
        text: 'Ihre Dateien verlassen nie Ihren Rechner. Um sie zu erkennen, schickt S.O.K nur Suchanfragen, etwa einen Titel, an die Metadaten-Datenbanken.',
      },
      {
        title: 'Vorschau vor dem Bestätigen',
        text: 'Sehen Sie den aktuellen und den neuen Namen jeder Datei und bestätigen Sie dann. Doch anders überlegt? Machen Sie die Umbenennung auf der Seite Verlauf rückgängig.',
      },
      {
        title: '8 Sprachen',
        text: 'Englisch, Französisch, Deutsch, Spanisch, Italienisch, Portugiesisch, Russisch und Polnisch, bis hin zu den Namen der Staffelordner.',
      },
      {
        title: 'Auch auf dem NAS',
        text: 'S.O.K Server ist ein Docker-Image mit Weboberfläche: Es sortiert neue Downloads von selbst, mit Hardlinks, damit Torrents weiter geseedet werden.',
      },
      {
        title: 'Kostenlos und Open Source',
        text: 'Veröffentlicht unter der MIT-Lizenz. Der Code liegt auf GitHub.',
      },
    ],
    ctaTitle: 'Bereit, Ihre Bibliothek aufzuräumen?',
    ctaDownload: 'S.O.K herunterladen',
    ctaGuide: 'Anleitung lesen',
  },
  download: {
    titleAll: 'S.O.K für Windows, macOS und Linux herunterladen - Kostenloser Medien-Organizer',
    titleNoLinux: 'S.O.K für Windows und macOS herunterladen - Kostenloser Medien-Organizer',
    description:
      'Laden Sie S.O.K {version} für Windows 10 und 11 (64 Bit), macOS (Apple Silicon){linux} herunter. Kostenlos und Open Source: Benennen Sie Filme, Serien und Ihre Mediathek mit wenigen Klicks um und sortieren Sie sie.',
    descriptionLinux: ' und Linux (AppImage)',
    heading: 'S.O.K herunterladen',
    intro1: 'Bringen Sie noch heute Ordnung in Ihre Mediathek.',
    intro2: 'Wählen Sie unten Ihr System.',
    windowsVersions: 'Windows 10/11 (64 Bit)',
    macVersions: 'Apple Silicon (M1 oder neuer)',
    linuxVersions: 'Ubuntu, Fedora, Debian, Arch…',
    dockerVersions: 'S.O.K Server, für Ihr NAS',
    downloadExe: '.exe herunterladen',
    downloadDmg: '.dmg herunterladen',
    appImageIntel: 'AppImage (Intel/AMD)',
    appImageArm: 'AppImage (ARM)',
    comingSoon: 'Demnächst',
    version: 'Version {version}',
    copy: 'Kopieren',
    clickToCopy: 'Zum Kopieren klicken',
    copied: 'Kopiert',
    copyFailed: 'Markieren Sie den Befehl, um ihn zu kopieren',
    installGuide: 'Installationsanleitung',
    tryDemo: 'Demo ausprobieren',
    macNote:
      'Erster Start auf dem Mac: macOS blockiert Apps von nicht verifizierten Entwicklern. <a href="/guide/getting-started#macos">So öffnen Sie S.O.K</a>.',
    linuxNote:
      'Wählen Sie unter Linux das AppImage für Ihren Prozessor und erlauben Sie, es als Programm auszuführen. <a href="/guide/getting-started#linux">So starten Sie S.O.K</a>.',
    archiveNote: 'Suchen Sie eine frühere Version? <a href="/releases">Zum Versionsarchiv</a>.',
  },
  releases: {
    title: 'Versionsarchiv - S.O.K',
    description:
      'Alle veröffentlichten Versionen von S.O.K für Windows, macOS und Linux, mit Versionshinweisen und Download-Links.',
    heading: 'Versionsarchiv',
    intro: 'Alle veröffentlichten Versionen von S.O.K. Sie brauchen die neueste? <a href="/download">Zur Download-Seite</a>.',
    unavailable:
      'Die Versionsgeschichte ist gerade nicht verfügbar. Alle Versionen finden Sie auf <a href="https://github.com/SOKTeam/S.O.K/releases">GitHub</a>.',
    version: 'Version {version}',
    latest: 'Neueste',
    notes: 'Versionshinweise',
    noInstaller: 'Kein Installer',
  },
  roadmap: {
    title: 'Roadmap - S.O.K',
    description:
      'Was es bei S.O.K, dem kostenlosen Medien-Organizer für Filme, Serien, Musik, Bücher und Spiele, schon gibt, was in Arbeit ist und was geplant ist.',
    heading: 'Entwicklungs-Roadmap',
    available: 'Verfügbar',
    next: 'Als Nächstes',
    later: 'Später',
    availableItems: [
      'Filme, Serien, Musik, Bücher und Spiele',
      'Apps für Windows, macOS (Apple Silicon) und Linux (AppImage)',
      'Eingebaute Updates',
      'Automatische Erkennung des Medientyps',
      'Ein zuverlässigerer Status „Bereit“: Titel und Jahr müssen passen',
      'Verlauf der umbenannten Dateien, mit Rückgängig',
      'Verschieben, Hardlink oder Kopieren; Untertitel folgen ihrem Video',
      'S.O.K Server: ein Docker-Image mit einer Weboberfläche im Stil der App (helles, oranges und dunkles Design), Hardlinks als Standard, mehrere Zielordner pro Medientyp, bereits verarbeitete Dateien werden ausgelassen',
      'S.O.K Server sortiert neue Dateien nach dem Download von selbst und benachrichtigt dann Discord, Jellyfin, Plex, einen Webhook oder ein Skript',
      'Eine Live-Demo von S.O.K Server auf der Website',
    ],
    nextItems: [
      'S.O.K Server: Eine neue Staffel kommt zur Serie, die schon in Ihrer Bibliothek ist, auch wenn ihr Ordner anders heißt',
      'S.O.K Server: Sprache der Tonspuren und Untertitel eines Videos prüfen und korrigieren',
      'Untertitel: Die Sprache einer Untertiteldatei wird an ihrem Text erkannt, und die Untertitel eines Subs-Ordners werden mit ihrem Video umbenannt',
      'S.O.K Server: Videos ohne Qualitätsverlust in MKV umwandeln',
      'S.O.K Server: Titel, Jahr, Poster und mehr in die Videodateien schreiben',
    ],
    laterItems: [
      'S.O.K Server: Downloads per SFTP von einer Seedbox holen',
      'Eine mobile App für S.O.K Server',
    ],
  },
  guide: {
    title: 'Anleitung',
    description: 'Erfahren Sie, wie Sie S.O.K installieren und damit Ihre Mediathek ordnen.',
    titleSuffix: '{title} - S.O.K-Anleitung',
    heading: 'Anleitung',
    intro:
      'Alles, was Sie brauchen, um S.O.K zu installieren und Ihre Mediathek zu ordnen. Neu hier? Beginnen Sie mit <a href="/guide/getting-started">Erste Schritte</a>.',
    overview: 'Übersicht',
    label: 'Anleitung',
    previous: '← Zurück',
    next: 'Weiter →',
  },
  notFound: {
    title: 'Seite nicht gefunden - S.O.K',
    description: 'Diese Seite gibt es nicht.',
    heading: 'Diese Datei ist im Chaos verloren gegangen',
    text: 'Die gesuchte Seite gibt es nicht oder sie wurde verschoben. Selbst S.O.K kann nicht ordnen, was nicht da ist.',
    home: 'Zur Startseite',
    guide: 'Anleitung lesen',
  },
};

export default de;
