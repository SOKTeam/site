import type { Dict } from './en';

const es: Dict = {
  meta: {
    title: 'S.O.K - Organizador de medios gratuito para Plex, Jellyfin y Kodi',
    description:
      'S.O.K es una app gratuita y de código abierto para Windows, macOS y Linux que renombra y ordena sus películas, series, música, libros y juegos en una biblioteca limpia.',
    imageAlt: 'S.O.K - Storage Organisation Kit, el organizador de medios gratuito',
    schemaDescription:
      'App gratuita y de código abierto para Windows, macOS y Linux que identifica, renombra y ordena películas, series, música, libros y juegos en una biblioteca compatible con Plex, Jellyfin y Kodi.',
  },
  nav: {
    home: 'Inicio',
    features: 'Funciones',
    guide: 'Guía',
    docs: 'Docs',
    roadmap: 'Hoja de ruta',
    download: 'Descargar',
  },
  header: {
    logoAlt: 'Logo de S.O.K',
    download: 'Descargar',
    downloadApp: 'Descargar S.O.K',
    openMenu: 'Abrir el menú',
    closeMenu: 'Cerrar el menú',
    theme: 'Cambiar de tema',
    language: 'Idioma',
  },
  footer: {
    guide: 'Guía',
    docs: 'Docs para desarrolladores',
    releases: 'Versiones',
    license: 'Licencia',
  },
  hero: {
    title1: 'Ordene su',
    title2: 'universo digital.',
    tagline1: 'El gestor de medios universal.',
    tagline2: 'Convierta el caos en una biblioteca impecable.',
    download: 'Descargar S.O.K',
    learnMore: 'Saber más',
    available:
      'Disponible para Windows, macOS y Linux, y como <a href="/guide/server">imagen Docker</a> para su NAS. <a href="/demo">Probar la demo</a>',
  },
  home: {
    title: 'S.O.K - Organizador de medios gratuito para Plex, Jellyfin y Kodi',
    description:
      'Renombre y ordene automáticamente sus películas, series, música, libros y juegos. S.O.K es una app gratuita y de código abierto para Windows, macOS y Linux que crea una biblioteca limpia para Plex, Jellyfin y Kodi.',
    featuresTitle: 'Cada cosa en su sitio.',
    featuresSubtitle: 'Una automatización potente en una interfaz cuidada.',
    cards: {
      universal: {
        title: 'Todos sus medios',
        text: 'Una sola app para sus vídeos, música, libros y juegos. Olvídese de usar varios programas.',
      },
      metadata: {
        title: 'Metadatos inteligentes',
        text: 'Obtiene automáticamente la información de TMDB, Spotify y muchos más.',
      },
      privacy: {
        title: 'La privacidad primero',
        text: 'Sus datos se quedan en su equipo. Sin sincronización en la nube.',
      },
      renaming: {
        title: 'Renombrado potente',
        text: 'Patrones como {Title} ({Year}) para organizar sus archivos exactamente como usted quiere.',
      },
      design: {
        title: 'Pensado para las personas',
        text: 'Una interfaz moderna y sin bordes, hecha con PySide6. Modo oscuro incluido.',
      },
      openSource: { title: 'Código abierto', text: 'Hecho en Python. Gratis para siempre.' },
    },
    logos: 'Metadatos de las fuentes de referencia',
  },
  downloadSection: {
    title: '¿Listo para ordenar?',
    text1: 'Tome el control de su biblioteca multimedia con S.O.K.',
    text2: 'Ya disponible para Windows, macOS, Linux y Docker.',
    button: 'Obtener S.O.K',
    availableFor: 'Disponible para {os}',
    dockerTitle: 'S.O.K Server, una imagen Docker para un NAS o un servidor doméstico',
    footer: 'Código abierto • Versión {version} • Gratis para siempre',
  },
  showcase: {
    label: 'Vista previa de la página de inicio de S.O.K',
    switcher: 'Mostrar S.O.K tal como se ve en',
  },
  features: {
    title: 'Funciones - S.O.K, organizador de medios',
    description:
      'Ordene los episodios en carpetas de temporada, renombre películas por lotes, personalice el formato de los nombres y obtenga metadatos de TMDB, TheTVDB y más. Descubra todo lo que hace S.O.K.',
    heading: 'Funciones',
    intro:
      'S.O.K identifica sus archivos multimedia, les da nombres limpios y los ordena en una biblioteca que los servidores multimedia entienden.',
    before: 'Antes',
    after: 'Después',
    formatsAnchor: 'formatos-de-salida',
    highlights: [
      {
        title: 'Series, ordenadas por serie y temporada',
        text: 'Suelte una carpeta de episodios: S.O.K reconoce la serie, descarga los títulos de los episodios y mueve cada archivo a la carpeta de su temporada. Lee nombres como S01E02, 1x02 y «Season 1 Episode 2».',
        after: 'Breaking Bad/Temporada 1/Breaking Bad S01E02 El gato está en la bolsa.mkv',
        link: 'Ordenar series',
      },
      {
        title: 'Películas, renombradas de una vez',
        text: 'Añada decenas de películas a la vez. S.O.K busca cada una, marca los archivos listos y le deja elegir el resultado correcto cuando varias películas tienen el mismo título.',
        after: 'Origen (2010).mkv',
        link: 'Renombrar películas por lotes',
      },
      {
        title: 'Sus nombres, sus reglas',
        text: 'Cambie el formato de los nombres con variables sencillas como {title}, {year}, {season}, {episode} o {quality}. Con el formato {title} ({year}) [{quality}], un archivo 2160p queda así:',
        after: 'Dune (2021) [4K].mkv',
        link: 'Personalizar los formatos',
      },
    ],
    providersTitle: 'Metadatos de bases de datos fiables',
    providersText:
      'Los títulos, los años, los nombres de los episodios y las imágenes vienen de las bases de referencia de cada tipo de medio. Elija su fuente preferida en los ajustes.',
    providers: { video: 'Películas y series', music: 'Música', books: 'Libros', games: 'Juegos' },
    providersNote:
      'La música, los libros y los juegos también se ordenan: los álbumes en carpetas de artista y de álbum, los libros en carpetas de autor, y cada juego en su propia carpeta. Consulte la <a href="/guide/music-books-games">guía</a>.',
    extrasTitle: 'Y además',
    extras: [
      {
        title: 'Listo para los servidores multimedia',
        text: 'Los nombres de carpetas y archivos siguen las convenciones de Plex, Jellyfin y Kodi, así su biblioteca se reconoce al instante.',
      },
      {
        title: 'Sin configuración',
        text: 'TMDB y TheTVDB funcionan de inmediato con una clave integrada. No hace falta crear una cuenta.',
      },
      {
        title: 'Sus archivos son suyos',
        text: 'Sus archivos nunca salen de su equipo. Para identificarlos, S.O.K solo envía búsquedas, como un título, a las bases de metadatos.',
      },
      {
        title: 'Vista previa antes de confirmar',
        text: 'Vea el nombre actual y el nuevo de cada archivo y luego confirme. ¿Ha cambiado de idea? Deshaga el renombrado desde la página Historial.',
      },
      {
        title: '8 idiomas',
        text: 'Inglés, francés, alemán, español, italiano, portugués, ruso y polaco, hasta en los nombres de las carpetas de temporada.',
      },
      {
        title: 'También en un NAS',
        text: 'S.O.K Server es una imagen Docker con interfaz web: ordena sus nuevas descargas por sí solo, con enlaces duros, para que los torrents sigan compartiéndose.',
      },
      {
        title: 'Gratis y de código abierto',
        text: 'Publicado bajo la licencia MIT. El código está en GitHub.',
      },
    ],
    ctaTitle: '¿Listo para poner orden en su biblioteca?',
    ctaDownload: 'Descargar S.O.K',
    ctaGuide: 'Leer la guía',
  },
  download: {
    titleAll: 'Descargar S.O.K para Windows, macOS y Linux - Organizador de medios gratuito',
    titleNoLinux: 'Descargar S.O.K para Windows y macOS - Organizador de medios gratuito',
    description:
      'Descargue S.O.K {version} para Windows 10 y 11 (64 bits), macOS (Apple Silicon){linux}. Gratis y de código abierto: renombre y ordene sus películas, series y su biblioteca multimedia en pocos clics.',
    descriptionLinux: ' y Linux (AppImage)',
    heading: 'Descargar S.O.K',
    intro1: 'Empiece hoy a ordenar su biblioteca multimedia.',
    intro2: 'Elija su sistema aquí abajo.',
    windowsVersions: 'Windows 10/11 (64 bits)',
    macVersions: 'Apple Silicon (M1 o posterior)',
    linuxVersions: 'Ubuntu, Fedora, Debian, Arch…',
    dockerVersions: 'S.O.K Server, para su NAS',
    downloadExe: 'Descargar el .exe',
    downloadDmg: 'Descargar el .dmg',
    appImageIntel: 'AppImage (Intel/AMD)',
    appImageArm: 'AppImage (ARM)',
    comingSoon: 'Próximamente',
    version: 'Versión {version}',
    copy: 'Copiar',
    clickToCopy: 'Haga clic para copiar',
    copied: 'Copiado',
    copyFailed: 'Seleccione el comando para copiarlo',
    installGuide: 'Guía de instalación',
    tryDemo: 'Probar la demo',
    macNote:
      'Primer inicio en Mac: macOS bloquea las apps de desarrolladores no identificados. <a href="/guide/getting-started#macos">Vea cómo abrir S.O.K</a>.',
    linuxNote:
      'En Linux, elija la AppImage de su procesador y permita que se ejecute como un programa. <a href="/guide/getting-started#linux">Vea cómo iniciar S.O.K</a>.',
    archiveNote: '¿Busca una versión anterior? <a href="/releases">Consulte el archivo de versiones</a>.',
  },
  releases: {
    title: 'Archivo de versiones - S.O.K',
    description:
      'Todas las versiones publicadas de S.O.K para Windows, macOS y Linux, con sus notas de versión y los enlaces de descarga.',
    heading: 'Archivo de versiones',
    intro: 'Todas las versiones publicadas de S.O.K. ¿Necesita la más reciente? <a href="/download">Vaya a la página de descarga</a>.',
    unavailable:
      'El historial de versiones no está disponible ahora mismo. Consulte todas las versiones en <a href="https://github.com/SOKTeam/S.O.K/releases">GitHub</a>.',
    version: 'Versión {version}',
    latest: 'Última',
    notes: 'Notas de la versión',
    noInstaller: 'Sin instalador',
  },
  roadmap: {
    title: 'Hoja de ruta - S.O.K',
    description:
      'Lo que ya está disponible, en curso y previsto para S.O.K, el organizador de medios gratuito para películas, series, música, libros y juegos.',
    heading: 'Hoja de ruta del desarrollo',
    available: 'Disponible',
    next: 'Próximamente',
    later: 'Más adelante',
    availableItems: [
      'Películas, series, música, libros y juegos',
      'Apps para Windows, macOS (Apple Silicon) y Linux (AppImage)',
      'Actualizaciones integradas',
      'Detección automática del tipo de medio',
      'Un estado «Listo» más fiable: el título y el año deben coincidir',
      'Historial de los archivos renombrados, con opción de deshacer',
      'Mover, enlace duro o copiar; los subtítulos siguen a su vídeo',
      'S.O.K Server: una imagen Docker con una interfaz web al estilo de la app (temas claro, naranja y oscuro), enlaces duros por defecto, varias carpetas de destino por tipo de medio, archivos ya procesados excluidos',
      'S.O.K Server ordena los archivos nuevos por sí solo en cuanto se descargan, y luego avisa a Discord, Jellyfin, Plex, un webhook o un script',
      'Una demo en vivo de S.O.K Server en el sitio web',
    ],
    nextItems: [
      'S.O.K Server: una nueva temporada se une a la serie que ya está en su biblioteca, aunque su carpeta tenga otro nombre',
      'S.O.K Server: comprobar y corregir el idioma de las pistas de audio y los subtítulos de un vídeo',
      'Subtítulos: el idioma de un archivo de subtítulos detectado a partir de su texto, y los subtítulos de una carpeta Subs renombrados con su vídeo',
      'S.O.K Server: convertir los vídeos a MKV, sin pérdida de calidad',
      'S.O.K Server: escribir el título, el año, el póster y más en los archivos de vídeo',
    ],
    laterItems: [
      'S.O.K Server: traer las descargas de un seedbox por SFTP',
      'Una app móvil para S.O.K Server',
    ],
  },
  guide: {
    title: 'Guía de uso',
    description: 'Aprenda a instalar y usar S.O.K para ordenar su biblioteca multimedia.',
    titleSuffix: '{title} - Guía de S.O.K',
    heading: 'Guía de uso',
    intro:
      'Todo lo necesario para instalar S.O.K y ordenar su biblioteca multimedia. ¿Es nuevo? Empiece por <a href="/guide/getting-started">Primeros pasos</a>.',
    overview: 'Índice',
    label: 'Guía de uso',
    previous: '← Anterior',
    next: 'Siguiente →',
  },
  notFound: {
    title: 'Página no encontrada - S.O.K',
    description: 'Esta página no existe.',
    heading: 'Este archivo se perdió en el desorden',
    text: 'La página que busca no existe o se ha movido. Ni siquiera S.O.K puede ordenar lo que no está.',
    home: 'Volver al inicio',
    guide: 'Leer la guía',
  },
};

export default es;
