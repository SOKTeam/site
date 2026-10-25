import type { Dict } from './en';

const pl: Dict = {
  meta: {
    title: 'S.O.K - Darmowy organizer multimediów dla Plex, Jellyfin i Kodi',
    description:
      'S.O.K to darmowa aplikacja open source dla Windows, macOS i Linux, która zmienia nazwy filmów, seriali, muzyki, książek i gier oraz porządkuje je w czystą bibliotekę.',
    imageAlt: 'S.O.K - Storage Organisation Kit, darmowy organizer multimediów',
    schemaDescription:
      'Darmowa aplikacja open source dla Windows, macOS i Linux, która rozpoznaje filmy, seriale, muzykę, książki i gry, zmienia ich nazwy i porządkuje je w bibliotekę zgodną z Plex, Jellyfin i Kodi.',
  },
  nav: {
    home: 'Strona główna',
    features: 'Funkcje',
    guide: 'Przewodnik',
    docs: 'Docs',
    roadmap: 'Plan rozwoju',
    download: 'Pobierz',
  },
  header: {
    logoAlt: 'Logo S.O.K',
    download: 'Pobierz',
    downloadApp: 'Pobierz S.O.K',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    theme: 'Zmień motyw',
    language: 'Język',
  },
  footer: {
    guide: 'Przewodnik',
    docs: 'Dokumentacja dla deweloperów',
    releases: 'Wersje',
    license: 'Licencja',
  },
  hero: {
    title1: 'Porządek w Państwa',
    title2: 'cyfrowym świecie.',
    tagline1: 'Uniwersalny menedżer multimediów.',
    tagline2: 'Z chaosu powstaje nienaganna biblioteka.',
    download: 'Pobierz S.O.K',
    learnMore: 'Dowiedz się więcej',
    available:
      'Dostępny dla Windows, macOS i Linux oraz jako <a href="/guide/server">obraz Docker</a> na serwer NAS. <a href="/demo">Wypróbuj demo</a>',
  },
  home: {
    title: 'S.O.K - Darmowy organizer multimediów dla Plex, Jellyfin i Kodi',
    description:
      'Automatyczna zmiana nazw i porządkowanie filmów, seriali, muzyki, książek i gier. S.O.K to darmowa aplikacja open source dla Windows, macOS i Linux, która tworzy czystą bibliotekę dla Plex, Jellyfin i Kodi.',
    featuresTitle: 'Wszystko na swoim miejscu.',
    featuresSubtitle: 'Potężna automatyzacja w dopracowanym interfejsie.',
    cards: {
      universal: {
        title: 'Wszystkie multimedia',
        text: 'Jedna aplikacja do filmów, muzyki, książek i gier. Koniec z żonglowaniem kilkoma programami.',
      },
      metadata: {
        title: 'Inteligentne metadane',
        text: 'Automatycznie pobiera szczegółowe informacje z TMDB, Spotify i wielu innych.',
      },
      privacy: {
        title: 'Prywatność przede wszystkim',
        text: 'Dane zostają na Państwa komputerze. Bez synchronizacji w chmurze.',
      },
      renaming: {
        title: 'Zaawansowana zmiana nazw',
        text: 'Wzorce takie jak {Title} ({Year}) pozwalają uporządkować pliki dokładnie tak, jak Państwo chcą.',
      },
      design: {
        title: 'Zaprojektowany dla ludzi',
        text: 'Nowoczesny interfejs bez ramek, zbudowany w PySide6. Tryb ciemny w zestawie.',
      },
      openSource: { title: 'Open source', text: 'Napisany w Pythonie. Darmowy na zawsze.' },
    },
    logos: 'Metadane od liderów branży',
  },
  downloadSection: {
    title: 'Gotowi na porządki?',
    text1: 'S.O.K oddaje Państwu kontrolę nad biblioteką multimediów.',
    text2: 'Już dostępny dla Windows, macOS, Linux i Docker.',
    button: 'Pobierz S.O.K',
    availableFor: 'Dostępny dla {os}',
    dockerTitle: 'S.O.K Server, obraz Docker na serwer NAS lub serwer domowy',
    footer: 'Open source • Wersja {version} • Darmowy na zawsze',
  },
  showcase: {
    label: 'Podgląd strony głównej S.O.K',
    switcher: 'Pokaż S.O.K tak, jak wygląda w systemie',
  },
  features: {
    title: 'Funkcje - S.O.K, organizer multimediów',
    description:
      'Porządkowanie odcinków w folderach sezonów, zbiorcza zmiana nazw filmów, własne formaty nazw i metadane z TMDB, TheTVDB i innych źródeł. Wszystko, co potrafi S.O.K.',
    heading: 'Funkcje',
    intro:
      'S.O.K rozpoznaje pliki multimedialne, nadaje im czyste nazwy i porządkuje je w bibliotekę, którą rozumieją serwery multimediów.',
    before: 'Przed',
    after: 'Po',
    formatsAnchor: 'formaty-wyjściowe',
    highlights: [
      {
        title: 'Seriale uporządkowane według serii i sezonów',
        text: 'Wystarczy upuścić folder z odcinkami: S.O.K rozpoznaje serial, pobiera tytuły odcinków i przenosi każdy plik do folderu jego sezonu. Odczytuje nazwy w stylu S01E02, 1x02 i „Season 1 Episode 2”.',
        after: 'Breaking Bad/Sezon 1/Breaking Bad S01E02 Ptaszek w klatce.mkv',
        link: 'Porządkowanie seriali',
      },
      {
        title: 'Filmy przemianowane za jednym razem',
        text: 'Można dodać dziesiątki filmów naraz. S.O.K wyszukuje każdy z nich, oznacza pliki gotowe i pozwala wybrać właściwy wynik, gdy kilka filmów ma ten sam tytuł.',
        after: 'Incepcja (2010).mkv',
        link: 'Zbiorcza zmiana nazw filmów',
      },
      {
        title: 'Państwa nazwy, Państwa zasady',
        text: 'Format nazw zmienia się za pomocą prostych zmiennych, takich jak {title}, {year}, {season}, {episode} czy {quality}. Z formatem {title} ({year}) [{quality}] plik 2160p staje się:',
        after: 'Diuna (2021) [4K].mkv',
        link: 'Dostosowanie formatów',
      },
    ],
    providersTitle: 'Metadane z zaufanych baz danych',
    providersText:
      'Tytuły, lata, nazwy odcinków i grafiki pochodzą z referencyjnych baz danych dla każdego typu multimediów. Preferowane źródło można wybrać w ustawieniach.',
    providers: { video: 'Filmy i seriale', music: 'Muzyka', books: 'Książki', games: 'Gry' },
    providersNote:
      'Muzyka, książki i gry również są porządkowane: albumy w folderach wykonawcy i albumu, książki w folderach autora, a każda gra we własnym folderze. Więcej w <a href="/guide/music-books-games">przewodniku</a>.',
    extrasTitle: 'A także',
    extras: [
      {
        title: 'Gotowy na serwery multimediów',
        text: 'Nazwy folderów i plików są zgodne z konwencjami Plex, Jellyfin i Kodi, więc biblioteka jest rozpoznawana od razu.',
      },
      {
        title: 'Bez konfiguracji',
        text: 'TMDB i TheTVDB działają od razu dzięki wbudowanemu kluczowi. Nie trzeba zakładać konta.',
      },
      {
        title: 'Pliki zostają u Państwa',
        text: 'Pliki nigdy nie opuszczają komputera. Aby je rozpoznać, S.O.K wysyła do baz metadanych tylko zapytania, na przykład tytuł.',
      },
      {
        title: 'Podgląd przed zatwierdzeniem',
        text: 'Widać obecną i nową nazwę każdego pliku przed potwierdzeniem. Zmiana zdania? Zmianę nazw można cofnąć na stronie Historia.',
      },
      {
        title: '8 języków',
        text: 'Angielski, francuski, niemiecki, hiszpański, włoski, portugalski, rosyjski i polski, łącznie z nazwami folderów sezonów.',
      },
      {
        title: 'Także na serwerze NAS',
        text: 'S.O.K Server to obraz Docker z interfejsem webowym: sam porządkuje nowe pobrane pliki, używając twardych dowiązań, więc torrenty nadal są udostępniane.',
      },
      {
        title: 'Darmowy i open source',
        text: 'Wydany na licencji MIT. Kod jest na GitHubie.',
      },
    ],
    ctaTitle: 'Gotowi uporządkować bibliotekę?',
    ctaDownload: 'Pobierz S.O.K',
    ctaGuide: 'Przeczytaj przewodnik',
  },
  download: {
    titleAll: 'Pobierz S.O.K dla Windows, macOS i Linux - Darmowy organizer multimediów',
    titleNoLinux: 'Pobierz S.O.K dla Windows i macOS - Darmowy organizer multimediów',
    description:
      'S.O.K {version} dla Windows 10 i 11 (64-bit), macOS (Apple Silicon){linux}. Darmowy i open source: zmiana nazw i porządkowanie filmów, seriali i całej biblioteki multimediów w kilku kliknięciach.',
    descriptionLinux: ' i Linux (AppImage)',
    heading: 'Pobierz S.O.K',
    intro1: 'Porządek w bibliotece multimediów już dziś.',
    intro2: 'Proszę wybrać system poniżej.',
    windowsVersions: 'Windows 10/11 (64-bit)',
    macVersions: 'Apple Silicon (M1 lub nowszy)',
    linuxVersions: 'Ubuntu, Fedora, Debian, Arch…',
    dockerVersions: 'S.O.K Server, na serwer NAS',
    downloadExe: 'Pobierz plik .exe',
    downloadDmg: 'Pobierz plik .dmg',
    appImageIntel: 'AppImage (Intel/AMD)',
    appImageArm: 'AppImage (ARM)',
    comingSoon: 'Wkrótce',
    version: 'Wersja {version}',
    copy: 'Kopiuj',
    clickToCopy: 'Kliknięcie kopiuje',
    copied: 'Skopiowano',
    copyFailed: 'Proszę zaznaczyć polecenie, aby je skopiować',
    installGuide: 'Instrukcja instalacji',
    tryDemo: 'Wypróbuj demo',
    macNote:
      'Pierwsze uruchomienie na Macu: macOS blokuje aplikacje niezidentyfikowanych deweloperów. <a href="/guide/getting-started#macos">Jak otworzyć S.O.K</a>.',
    linuxNote:
      'W systemie Linux należy wybrać AppImage dla swojego procesora i zezwolić na uruchamianie go jako programu. <a href="/guide/getting-started#linux">Jak uruchomić S.O.K</a>.',
    archiveNote: 'Szukają Państwo starszej wersji? <a href="/releases">Archiwum wersji</a>.',
  },
  releases: {
    title: 'Archiwum wersji - S.O.K',
    description:
      'Wszystkie opublikowane wersje S.O.K dla Windows, macOS i Linux, z informacjami o wydaniu i linkami do pobrania.',
    heading: 'Archiwum wersji',
    intro: 'Wszystkie opublikowane wersje S.O.K. Najnowsza wersja jest na <a href="/download">stronie pobierania</a>.',
    unavailable:
      'Historia wersji jest chwilowo niedostępna. Wszystkie wersje są na <a href="https://github.com/SOKTeam/S.O.K/releases">GitHubie</a>.',
    version: 'Wersja {version}',
    latest: 'Najnowsza',
    notes: 'Informacje o wydaniu',
    noInstaller: 'Brak instalatora',
  },
  roadmap: {
    title: 'Plan rozwoju - S.O.K',
    description:
      'Co jest dostępne, w toku i planowane w S.O.K, darmowym organizerze filmów, seriali, muzyki, książek i gier.',
    heading: 'Plan rozwoju',
    available: 'Dostępne',
    next: 'Wkrótce',
    later: 'Później',
    availableItems: [
      'Filmy, seriale, muzyka, książki i gry',
      'Aplikacje dla Windows, macOS (Apple Silicon) i Linux (AppImage)',
      'Wbudowane aktualizacje',
      'Automatyczne rozpoznawanie typu multimediów',
      'Bardziej wiarygodny status „Gotowe”: tytuł i rok muszą się zgadzać',
      'Historia plików o zmienionych nazwach, z możliwością cofnięcia',
      'Przenoszenie, twarde dowiązanie lub kopia; napisy idą za swoim wideo',
      'S.O.K Server: obraz Docker z interfejsem webowym w stylu aplikacji (motywy jasny, pomarańczowy i ciemny), domyślnie twarde dowiązania, kilka folderów docelowych na typ multimediów, pomijanie już przetworzonych plików',
      'S.O.K Server sam porządkuje nowe pliki po pobraniu, a potem powiadamia Discord, Jellyfin, Plex, webhook lub skrypt',
      'Demo S.O.K Server na żywo na stronie',
    ],
    nextItems: [
      'S.O.K Server: nowy sezon trafia do serialu, który już jest w bibliotece, nawet jeśli jego folder ma inną nazwę',
      'S.O.K Server: sprawdzanie i poprawianie języka ścieżek dźwiękowych i napisów w wideo',
      'Napisy: język pliku napisów rozpoznawany na podstawie tekstu, a napisy z folderu Subs przemianowywane razem z wideo',
      'S.O.K Server: konwersja wideo do MKV bez utraty jakości',
      'S.O.K Server: zapisywanie tytułu, roku, plakatu i innych danych w plikach wideo',
    ],
    laterItems: [
      'S.O.K Server: pobieranie plików z seedboxa przez SFTP',
      'Aplikacja mobilna dla S.O.K Server',
    ],
  },
  guide: {
    title: 'Przewodnik',
    description: 'Jak zainstalować S.O.K i uporządkować bibliotekę multimediów.',
    titleSuffix: '{title} - Przewodnik S.O.K',
    heading: 'Przewodnik',
    intro:
      'Wszystko, czego potrzeba, aby zainstalować S.O.K i uporządkować bibliotekę multimediów. Pierwszy raz? Najlepiej zacząć od strony <a href="/guide/getting-started">Pierwsze kroki</a>.',
    overview: 'Spis treści',
    label: 'Przewodnik',
    previous: '← Poprzednia',
    next: 'Następna →',
  },
  notFound: {
    title: 'Nie znaleziono strony - S.O.K',
    description: 'Ta strona nie istnieje.',
    heading: 'Ten plik zgubił się w bałaganie',
    text: 'Szukana strona nie istnieje lub została przeniesiona. Nawet S.O.K nie uporządkuje czegoś, czego nie ma.',
    home: 'Wróć na stronę główną',
    guide: 'Przeczytaj przewodnik',
  },
};

export default pl;
