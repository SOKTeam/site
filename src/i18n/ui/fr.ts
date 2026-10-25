import type { Dict } from './en';

const fr: Dict = {
  meta: {
    title: 'S.O.K - Organiseur de médias gratuit pour Plex, Jellyfin et Kodi',
    description:
      "S.O.K est une app gratuite et open source pour Windows, macOS et Linux qui renomme et range vos films, séries, musiques, livres et jeux dans une bibliothèque propre.",
    imageAlt: "S.O.K - Storage Organisation Kit, l'organiseur de médias gratuit",
    schemaDescription:
      "App gratuite et open source pour Windows, macOS et Linux qui identifie, renomme et range films, séries, musiques, livres et jeux dans une bibliothèque compatible avec Plex, Jellyfin et Kodi.",
  },
  nav: {
    home: 'Accueil',
    features: 'Fonctionnalités',
    guide: 'Guide',
    docs: 'Docs',
    roadmap: 'Roadmap',
    download: 'Télécharger',
  },
  header: {
    logoAlt: 'Logo de S.O.K',
    download: 'Télécharger',
    downloadApp: 'Télécharger S.O.K',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    theme: 'Changer de thème',
    language: 'Langue',
  },
  footer: {
    guide: 'Guide',
    docs: 'Docs développeur',
    releases: 'Versions',
    license: 'Licence',
  },
  hero: {
    title1: 'Organisez votre',
    title2: 'univers numérique.',
    tagline1: 'Le gestionnaire de médias universel.',
    tagline2: 'Transformez le chaos en bibliothèque impeccable.',
    download: 'Télécharger S.O.K',
    learnMore: 'En savoir plus',
    available:
      'Disponible pour Windows, macOS et Linux, et en <a href="/guide/server">image Docker</a> pour votre NAS. <a href="/demo">Essayer la démo</a>',
  },
  home: {
    title: 'S.O.K - Organiseur de médias gratuit pour Plex, Jellyfin et Kodi',
    description:
      "Renommez et rangez automatiquement vos films, séries, musiques, livres et jeux. S.O.K est une app gratuite et open source pour Windows, macOS et Linux qui crée une bibliothèque propre pour Plex, Jellyfin et Kodi.",
    featuresTitle: 'Chaque chose à sa place.',
    featuresSubtitle: 'Une automatisation puissante dans une belle interface.',
    cards: {
      universal: {
        title: 'Tous vos médias',
        text: 'Une seule app pour vos vidéos, musiques, livres et jeux. Fini de jongler entre plusieurs logiciels.',
      },
      metadata: {
        title: 'Métadonnées intelligentes',
        text: 'Récupère automatiquement les informations de TMDB, Spotify et bien d’autres.',
      },
      privacy: {
        title: 'Vie privée avant tout',
        text: 'Vos données restent sur votre machine. Aucune synchronisation dans le cloud.',
      },
      renaming: {
        title: 'Renommage puissant',
        text: 'Des formats comme {Title} ({Year}) pour organiser vos fichiers exactement comme vous le voulez.',
      },
      design: {
        title: 'Pensé pour les humains',
        text: 'Une interface moderne et sans bordure, construite avec PySide6. Mode sombre inclus.',
      },
      openSource: { title: 'Open source', text: 'Écrit en Python. Gratuit pour toujours.' },
    },
    logos: 'Métadonnées fournies par les références du secteur',
  },
  downloadSection: {
    title: 'Prêt à tout ranger ?',
    text1: 'Reprenez le contrôle de votre médiathèque avec S.O.K.',
    text2: 'Disponible dès maintenant pour Windows, macOS, Linux et Docker.',
    button: 'Obtenir S.O.K',
    availableFor: 'Disponible pour {os}',
    dockerTitle: 'S.O.K Server, une image Docker pour un NAS ou un serveur maison',
    footer: 'Open source • Version {version} • Gratuit pour toujours',
  },
  showcase: {
    label: "Aperçu de la page d'accueil de S.O.K",
    switcher: 'Afficher S.O.K tel qu’il apparaît sur',
  },
  features: {
    title: 'Fonctionnalités - S.O.K, organiseur de médias',
    description:
      'Rangez les épisodes dans des dossiers de saison, renommez des films par lots, personnalisez le format des noms et récupérez les métadonnées de TMDB, TheTVDB et plus encore. Découvrez tout ce que fait S.O.K.',
    heading: 'Fonctionnalités',
    intro:
      'S.O.K identifie vos fichiers multimédias, leur donne des noms propres et les range dans une bibliothèque que les serveurs multimédias comprennent.',
    before: 'Avant',
    after: 'Après',
    formatsAnchor: 'formats-de-sortie',
    highlights: [
      {
        title: 'Les séries, rangées par série et par saison',
        text: "Déposez un dossier d'épisodes : S.O.K reconnaît la série, télécharge les titres des épisodes et range chaque fichier dans le dossier de sa saison. Il lit les noms du type S01E02, 1x02 et « Season 1 Episode 2 ».",
        after: 'Breaking Bad/Saison 1/Breaking Bad S01E02 Le Choix.mkv',
        link: 'Ranger des séries',
      },
      {
        title: 'Les films, renommés en un seul lot',
        text: 'Ajoutez des dizaines de films d’un coup. S.O.K cherche chacun d’eux, marque ceux qui sont prêts et vous laisse choisir le bon résultat quand plusieurs films portent le même titre.',
        after: 'Inception (2010).mkv',
        link: 'Renommer des films par lots',
      },
      {
        title: 'Vos noms, vos règles',
        text: 'Changez le format des noms avec des variables simples comme {title}, {year}, {season}, {episode} ou {quality}. Avec le format {title} ({year}) [{quality}], un fichier 2160p devient :',
        after: 'Dune (2021) [4K].mkv',
        link: 'Personnaliser les formats',
      },
    ],
    providersTitle: 'Des métadonnées issues de bases de référence',
    providersText:
      'Les titres, les années, les noms des épisodes et les illustrations viennent des bases de référence de chaque type de média. Choisissez votre source préférée dans les réglages.',
    providers: { video: 'Films et séries', music: 'Musique', books: 'Livres', games: 'Jeux' },
    providersNote:
      'La musique, les livres et les jeux sont rangés eux aussi : les albums dans des dossiers d’artiste et d’album, les livres dans des dossiers d’auteur, et chaque jeu dans son propre dossier. Voir le <a href="/guide/music-books-games">guide</a>.',
    extrasTitle: 'Et aussi',
    extras: [
      {
        title: 'Prêt pour les serveurs multimédias',
        text: 'Les noms des dossiers et des fichiers suivent les conventions de Plex, Jellyfin et Kodi : votre bibliothèque est reconnue tout de suite.',
      },
      {
        title: 'Aucune configuration',
        text: 'TMDB et TheTVDB marchent tout de suite, avec une clé intégrée. Aucun compte à créer.',
      },
      {
        title: 'Vos fichiers restent chez vous',
        text: 'Vos fichiers ne quittent jamais votre ordinateur. Pour les identifier, S.O.K envoie seulement des recherches, comme un titre, aux bases de métadonnées.',
      },
      {
        title: 'Un aperçu avant de valider',
        text: 'Voyez le nom actuel et le nouveau nom de chaque fichier, puis confirmez. Vous avez changé d’avis ? Annulez le renommage depuis la page Historique.',
      },
      {
        title: '8 langues',
        text: 'Anglais, français, allemand, espagnol, italien, portugais, russe et polonais, jusqu’aux noms des dossiers de saison.',
      },
      {
        title: 'Sur un NAS aussi',
        text: 'S.O.K Server est une image Docker avec une interface web : il range vos nouveaux téléchargements tout seul, avec des liens durs, pour que vos torrents continuent de partager.',
      },
      {
        title: 'Gratuit et open source',
        text: 'Publié sous licence MIT. Le code est sur GitHub.',
      },
    ],
    ctaTitle: 'Prêt à faire le ménage dans votre bibliothèque ?',
    ctaDownload: 'Télécharger S.O.K',
    ctaGuide: 'Lire le guide',
  },
  download: {
    titleAll: 'Télécharger S.O.K pour Windows, macOS et Linux - Organiseur de médias gratuit',
    titleNoLinux: 'Télécharger S.O.K pour Windows et macOS - Organiseur de médias gratuit',
    description:
      'Téléchargez S.O.K {version} pour Windows 10 et 11 (64 bits), macOS (Apple Silicon){linux}. Gratuit et open source : renommez et rangez vos films, vos séries et votre médiathèque en quelques clics.',
    descriptionLinux: ' et Linux (AppImage)',
    heading: 'Télécharger S.O.K',
    intro1: 'Commencez à ranger votre médiathèque dès aujourd’hui.',
    intro2: 'Choisissez votre système ci-dessous.',
    windowsVersions: 'Windows 10/11 (64 bits)',
    macVersions: 'Apple Silicon (M1 ou plus récent)',
    linuxVersions: 'Ubuntu, Fedora, Debian, Arch…',
    dockerVersions: 'S.O.K Server, pour votre NAS',
    downloadExe: 'Télécharger le .exe',
    downloadDmg: 'Télécharger le .dmg',
    appImageIntel: 'AppImage (Intel/AMD)',
    appImageArm: 'AppImage (ARM)',
    comingSoon: 'Bientôt disponible',
    version: 'Version {version}',
    copy: 'Copier',
    clickToCopy: 'Cliquez pour copier',
    copied: 'Copié',
    copyFailed: 'Sélectionnez la commande pour la copier',
    installGuide: "Guide d'installation",
    tryDemo: 'Essayer la démo',
    macNote:
      'Premier lancement sur Mac : macOS bloque les apps de développeurs non identifiés. <a href="/guide/getting-started#macos">Voir comment ouvrir S.O.K</a>.',
    linuxNote:
      'Sur Linux, prenez l’AppImage de votre processeur et autorisez-la à s’exécuter comme un programme. <a href="/guide/getting-started#linux">Voir comment lancer S.O.K</a>.',
    archiveNote: 'Vous cherchez une version précédente ? <a href="/releases">Parcourir les anciennes versions</a>.',
  },
  releases: {
    title: 'Anciennes versions - S.O.K',
    description:
      'Toutes les versions publiées de S.O.K pour Windows, macOS et Linux, avec leurs notes de version et les liens de téléchargement.',
    heading: 'Anciennes versions',
    intro: 'Toutes les versions publiées de S.O.K. Vous voulez la plus récente ? <a href="/download">Allez sur la page de téléchargement</a>.',
    unavailable:
      'L’historique des versions est indisponible pour le moment. Retrouvez toutes les versions sur <a href="https://github.com/SOKTeam/S.O.K/releases">GitHub</a>.',
    version: 'Version {version}',
    latest: 'Dernière',
    notes: 'Notes de version',
    noInstaller: 'Pas d’installateur',
  },
  roadmap: {
    title: 'Roadmap - S.O.K',
    description:
      'Ce qui est disponible, en cours et prévu pour S.O.K, l’organiseur de médias gratuit pour les films, séries, musiques, livres et jeux.',
    heading: 'Roadmap du développement',
    available: 'Disponible',
    next: 'Prochainement',
    later: 'Plus tard',
    availableItems: [
      'Films, séries, musique, livres et jeux',
      'Apps Windows, macOS (Apple Silicon) et Linux (AppImage)',
      'Mises à jour intégrées',
      'Détection automatique du type de média',
      'Un statut « Prêt » plus fiable : le titre et l’année doivent correspondre',
      'Historique des fichiers renommés, avec annulation',
      'Déplacement, lien dur ou copie ; les sous-titres suivent leur vidéo',
      'S.O.K Server : une image Docker avec une interface web au style de l’app (thèmes clair, orange et sombre), liens durs par défaut, plusieurs dossiers de destination par type de média, fichiers déjà traités écartés',
      'S.O.K Server range les nouveaux fichiers tout seul une fois téléchargés, puis prévient Discord, Jellyfin, Plex, un webhook ou un script',
      'Une démo en ligne de S.O.K Server sur le site',
    ],
    nextItems: [
      'S.O.K Server : une nouvelle saison rejoint la série déjà présente dans votre bibliothèque, même si son dossier porte un autre nom',
      'S.O.K Server : vérifier et corriger la langue des pistes audio et des sous-titres d’une vidéo',
      'Sous-titres : la langue d’un fichier de sous-titres trouvée d’après son texte, et les sous-titres d’un dossier Subs renommés avec leur vidéo',
      'S.O.K Server : convertir les vidéos en MKV, sans perte de qualité',
      'S.O.K Server : écrire le titre, l’année, l’affiche et plus encore dans les fichiers vidéo',
    ],
    laterItems: [
      'S.O.K Server : récupérer les téléchargements d’une seedbox en SFTP',
      'Une app mobile pour S.O.K Server',
    ],
  },
  guide: {
    title: "Guide d'utilisation",
    description: 'Apprenez à installer et à utiliser S.O.K pour ranger votre médiathèque.',
    titleSuffix: '{title} - Guide de S.O.K',
    heading: "Guide d'utilisation",
    intro:
      'Tout ce qu’il faut pour installer S.O.K et ranger votre médiathèque. Vous débutez ? Commencez par <a href="/guide/getting-started">Prise en main</a>.',
    overview: 'Sommaire',
    label: "Guide d'utilisation",
    previous: '← Précédent',
    next: 'Suivant →',
  },
  notFound: {
    title: 'Page introuvable - S.O.K',
    description: "Cette page n'existe pas.",
    heading: 'Ce fichier s’est perdu dans le désordre',
    text: 'La page que vous cherchez n’existe pas ou a été déplacée. Même S.O.K ne peut pas ranger ce qui n’est pas là.',
    home: "Retour à l'accueil",
    guide: 'Lire le guide',
  },
};

export default fr;
