import type { Dict } from './en';

const it: Dict = {
  meta: {
    title: 'S.O.K - Organizzatore di media gratuito per Plex, Jellyfin e Kodi',
    description:
      'S.O.K è un’app gratuita e open source per Windows, macOS e Linux che rinomina e ordina i Suoi film, serie TV, musica, libri e giochi in una libreria pulita.',
    imageAlt: 'S.O.K - Storage Organisation Kit, l’organizzatore di media gratuito',
    schemaDescription:
      'App gratuita e open source per Windows, macOS e Linux che riconosce, rinomina e ordina film, serie TV, musica, libri e giochi in una libreria compatibile con Plex, Jellyfin e Kodi.',
  },
  nav: {
    home: 'Home',
    features: 'Funzioni',
    guide: 'Guida',
    docs: 'Docs',
    roadmap: 'Roadmap',
    download: 'Download',
  },
  header: {
    logoAlt: 'Logo di S.O.K',
    download: 'Download',
    downloadApp: 'Scarica S.O.K',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    theme: 'Cambia tema',
    language: 'Lingua',
  },
  footer: {
    guide: 'Guida',
    docs: 'Docs per sviluppatori',
    releases: 'Versioni',
    license: 'Licenza',
  },
  hero: {
    title1: 'Metta ordine nel Suo',
    title2: 'universo digitale.',
    tagline1: 'Il gestore di media universale.',
    tagline2: 'Trasformi il caos in una libreria impeccabile.',
    download: 'Scarica S.O.K',
    learnMore: 'Scopri di più',
    available:
      'Disponibile per Windows, macOS e Linux, e come <a href="/guide/server">immagine Docker</a> per il Suo NAS. <a href="/demo">Provi la demo</a>',
  },
  home: {
    title: 'S.O.K - Organizzatore di media gratuito per Plex, Jellyfin e Kodi',
    description:
      'Rinomini e ordini automaticamente i Suoi film, serie TV, musica, libri e giochi. S.O.K è un’app gratuita e open source per Windows, macOS e Linux che crea una libreria pulita per Plex, Jellyfin e Kodi.',
    featuresTitle: 'Ogni cosa al suo posto.',
    featuresSubtitle: 'Un’automazione potente in un’interfaccia curata.',
    cards: {
      universal: {
        title: 'Tutti i Suoi media',
        text: 'Un’unica app per video, musica, libri e giochi. Basta destreggiarsi tra più programmi.',
      },
      metadata: {
        title: 'Metadati intelligenti',
        text: 'Recupera automaticamente le informazioni da TMDB, Spotify e molti altri.',
      },
      privacy: {
        title: 'La privacy prima di tutto',
        text: 'I Suoi dati restano sul Suo computer. Nessuna sincronizzazione nel cloud.',
      },
      renaming: {
        title: 'Rinomina potente',
        text: 'Schemi come {Title} ({Year}) per organizzare i Suoi file esattamente come vuole.',
      },
      design: {
        title: 'Pensato per le persone',
        text: 'Un’interfaccia moderna e senza bordi, realizzata con PySide6. Modalità scura inclusa.',
      },
      openSource: { title: 'Open source', text: 'Scritto in Python. Gratis per sempre.' },
    },
    logos: 'Metadati dalle fonti di riferimento',
  },
  downloadSection: {
    title: 'Pronto a fare ordine?',
    text1: 'Prenda il controllo della Sua libreria multimediale con S.O.K.',
    text2: 'Disponibile ora per Windows, macOS, Linux e Docker.',
    button: 'Ottieni S.O.K',
    availableFor: 'Disponibile per {os}',
    dockerTitle: 'S.O.K Server, un’immagine Docker per un NAS o un server domestico',
    footer: 'Open source • Versione {version} • Gratis per sempre',
  },
  showcase: {
    label: 'Anteprima della pagina iniziale di S.O.K',
    switcher: 'Mostra S.O.K come appare su',
  },
  features: {
    title: 'Funzioni - S.O.K, organizzatore di media',
    description:
      'Ordini gli episodi in cartelle per stagione, rinomini film in blocco, personalizzi il formato dei nomi e recuperi i metadati da TMDB, TheTVDB e altri. Scopra tutto ciò che fa S.O.K.',
    heading: 'Funzioni',
    intro:
      'S.O.K riconosce i Suoi file multimediali, dà loro nomi puliti e li ordina in una libreria che i server multimediali capiscono.',
    before: 'Prima',
    after: 'Dopo',
    formatsAnchor: 'formati-di-uscita',
    highlights: [
      {
        title: 'Serie TV, ordinate per serie e stagione',
        text: 'Trascini una cartella di episodi: S.O.K riconosce la serie, scarica i titoli degli episodi e sposta ogni file nella cartella della sua stagione. Legge nomi come S01E02, 1x02 e «Season 1 Episode 2».',
        after: 'Breaking Bad/Stagione 1/Breaking Bad S01E02 Senza ritorno.mkv',
        link: 'Ordinare le serie TV',
      },
      {
        title: 'Film, rinominati in un colpo solo',
        text: 'Aggiunga decine di film in una volta. S.O.K cerca ognuno di essi, segna i file pronti e Le lascia scegliere il risultato giusto quando più film hanno lo stesso titolo.',
        after: 'Inception (2010).mkv',
        link: 'Rinominare film in blocco',
      },
      {
        title: 'I Suoi nomi, le Sue regole',
        text: 'Cambi il formato dei nomi con variabili semplici come {title}, {year}, {season}, {episode} o {quality}. Con il formato {title} ({year}) [{quality}], un file 2160p diventa:',
        after: 'Dune (2021) [4K].mkv',
        link: 'Personalizzare i formati',
      },
    ],
    providersTitle: 'Metadati da database affidabili',
    providersText:
      'Titoli, anni, nomi degli episodi e immagini provengono dai database di riferimento di ogni tipo di media. Scelga la Sua fonte preferita nelle impostazioni.',
    providers: { video: 'Film e serie TV', music: 'Musica', books: 'Libri', games: 'Giochi' },
    providersNote:
      'Anche musica, libri e giochi vengono ordinati: gli album in cartelle per artista e album, i libri in cartelle per autore, e ogni gioco nella sua cartella. Consulti la <a href="/guide/music-books-games">guida</a>.',
    extrasTitle: 'E inoltre',
    extras: [
      {
        title: 'Pronto per i server multimediali',
        text: 'I nomi di cartelle e file seguono le convenzioni di Plex, Jellyfin e Kodi, così la Sua libreria viene riconosciuta subito.',
      },
      {
        title: 'Nessuna configurazione',
        text: 'TMDB e TheTVDB funzionano subito, con una chiave integrata. Nessun account da creare.',
      },
      {
        title: 'I Suoi file restano Suoi',
        text: 'I Suoi file non lasciano mai il Suo computer. Per riconoscerli, S.O.K invia solo delle ricerche, come un titolo, ai database dei metadati.',
      },
      {
        title: 'Anteprima prima di confermare',
        text: 'Veda il nome attuale e il nuovo nome di ogni file, poi confermi. Ha cambiato idea? Annulli la rinomina dalla pagina Cronologia.',
      },
      {
        title: '8 lingue',
        text: 'Inglese, francese, tedesco, spagnolo, italiano, portoghese, russo e polacco, fino ai nomi delle cartelle delle stagioni.',
      },
      {
        title: 'Anche su un NAS',
        text: 'S.O.K Server è un’immagine Docker con interfaccia web: ordina da solo i nuovi download, con collegamenti fisici, così i torrent continuano a essere condivisi.',
      },
      {
        title: 'Gratis e open source',
        text: 'Pubblicato con licenza MIT. Il codice è su GitHub.',
      },
    ],
    ctaTitle: 'Pronto a mettere ordine nella Sua libreria?',
    ctaDownload: 'Scarica S.O.K',
    ctaGuide: 'Legga la guida',
  },
  download: {
    titleAll: 'Scarica S.O.K per Windows, macOS e Linux - Organizzatore di media gratuito',
    titleNoLinux: 'Scarica S.O.K per Windows e macOS - Organizzatore di media gratuito',
    description:
      'Scarichi S.O.K {version} per Windows 10 e 11 (64 bit), macOS (Apple Silicon){linux}. Gratis e open source: rinomini e ordini film, serie TV e la Sua libreria multimediale in pochi clic.',
    descriptionLinux: ' e Linux (AppImage)',
    heading: 'Scarica S.O.K',
    intro1: 'Inizi oggi a mettere ordine nella Sua libreria multimediale.',
    intro2: 'Scelga il Suo sistema qui sotto.',
    windowsVersions: 'Windows 10/11 (64 bit)',
    macVersions: 'Apple Silicon (M1 o successivo)',
    linuxVersions: 'Ubuntu, Fedora, Debian, Arch…',
    dockerVersions: 'S.O.K Server, per il Suo NAS',
    downloadExe: 'Scarica il .exe',
    downloadDmg: 'Scarica il .dmg',
    appImageIntel: 'AppImage (Intel/AMD)',
    appImageArm: 'AppImage (ARM)',
    comingSoon: 'Prossimamente',
    version: 'Versione {version}',
    copy: 'Copia',
    clickToCopy: 'Clicchi per copiare',
    copied: 'Copiato',
    copyFailed: 'Selezioni il comando per copiarlo',
    installGuide: 'Guida all’installazione',
    tryDemo: 'Provi la demo',
    macNote:
      'Primo avvio su Mac: macOS blocca le app di sviluppatori non identificati. <a href="/guide/getting-started#macos">Veda come aprire S.O.K</a>.',
    linuxNote:
      'Su Linux, scelga l’AppImage del Suo processore e consenta di eseguirla come programma. <a href="/guide/getting-started#linux">Veda come avviare S.O.K</a>.',
    archiveNote: 'Cerca una versione precedente? <a href="/releases">Sfogli l’archivio delle versioni</a>.',
  },
  releases: {
    title: 'Archivio delle versioni - S.O.K',
    description:
      'Tutte le versioni pubblicate di S.O.K per Windows, macOS e Linux, con le note di rilascio e i link per il download.',
    heading: 'Archivio delle versioni',
    intro: 'Tutte le versioni pubblicate di S.O.K. Le serve la più recente? <a href="/download">Vada alla pagina di download</a>.',
    unavailable:
      'La cronologia delle versioni non è disponibile al momento. Trova tutte le versioni su <a href="https://github.com/SOKTeam/S.O.K/releases">GitHub</a>.',
    version: 'Versione {version}',
    latest: 'Ultima',
    notes: 'Note di rilascio',
    noInstaller: 'Nessun installer',
  },
  roadmap: {
    title: 'Roadmap - S.O.K',
    description:
      'Ciò che è disponibile, in corso e previsto per S.O.K, l’organizzatore di media gratuito per film, serie TV, musica, libri e giochi.',
    heading: 'Roadmap di sviluppo',
    available: 'Disponibile',
    next: 'Prossimamente',
    later: 'Più avanti',
    availableItems: [
      'Film, serie TV, musica, libri e giochi',
      'App per Windows, macOS (Apple Silicon) e Linux (AppImage)',
      'Aggiornamenti integrati',
      'Riconoscimento automatico del tipo di media',
      'Uno stato «Pronto» più affidabile: titolo e anno devono corrispondere',
      'Cronologia dei file rinominati, con annullamento',
      'Sposta, collegamento fisico o copia; i sottotitoli seguono il loro video',
      'S.O.K Server: un’immagine Docker con un’interfaccia web nello stile dell’app (temi chiaro, arancione e scuro), collegamenti fisici come impostazione predefinita, più cartelle di destinazione per tipo di media, file già elaborati esclusi',
      'S.O.K Server ordina da solo i nuovi file appena scaricati, poi avvisa Discord, Jellyfin, Plex, un webhook o uno script',
      'Una demo dal vivo di S.O.K Server sul sito',
    ],
    nextItems: [
      'S.O.K Server: una nuova stagione si unisce alla serie già presente nella Sua libreria, anche se la sua cartella ha un altro nome',
      'S.O.K Server: verificare e correggere la lingua delle tracce audio e dei sottotitoli di un video',
      'Sottotitoli: la lingua di un file di sottotitoli riconosciuta dal suo testo, e i sottotitoli di una cartella Subs rinominati con il loro video',
      'S.O.K Server: convertire i video in MKV, senza perdita di qualità',
      'S.O.K Server: scrivere il titolo, l’anno, il poster e altro nei file video',
    ],
    laterItems: [
      'S.O.K Server: recuperare i download da una seedbox via SFTP',
      'Un’app mobile per S.O.K Server',
    ],
  },
  guide: {
    title: 'Guida all’uso',
    description: 'Scopra come installare e usare S.O.K per ordinare la Sua libreria multimediale.',
    titleSuffix: '{title} - Guida di S.O.K',
    heading: 'Guida all’uso',
    intro:
      'Tutto ciò che serve per installare S.O.K e ordinare la Sua libreria multimediale. È nuovo? Inizi da <a href="/guide/getting-started">Primi passi</a>.',
    overview: 'Indice',
    label: 'Guida all’uso',
    previous: '← Precedente',
    next: 'Successivo →',
  },
  notFound: {
    title: 'Pagina non trovata - S.O.K',
    description: 'Questa pagina non esiste.',
    heading: 'Questo file si è perso nel disordine',
    text: 'La pagina che cerca non esiste o è stata spostata. Nemmeno S.O.K può ordinare ciò che non c’è.',
    home: 'Torna alla home',
    guide: 'Legga la guida',
  },
};

export default it;
