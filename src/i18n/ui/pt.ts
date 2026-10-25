import type { Dict } from './en';

// European Portuguese (pt-PT), with the formal address.
const pt: Dict = {
  meta: {
    title: 'S.O.K - Organizador de multimédia gratuito para Plex, Jellyfin e Kodi',
    description:
      'O S.O.K é uma app gratuita e de código aberto para Windows, macOS e Linux que muda o nome e arruma os seus filmes, séries, música, livros e jogos numa biblioteca limpa.',
    imageAlt: 'S.O.K - Storage Organisation Kit, o organizador de multimédia gratuito',
    schemaDescription:
      'App gratuita e de código aberto para Windows, macOS e Linux que identifica, muda o nome e arruma filmes, séries, música, livros e jogos numa biblioteca compatível com Plex, Jellyfin e Kodi.',
  },
  nav: {
    home: 'Início',
    features: 'Funcionalidades',
    guide: 'Guia',
    docs: 'Docs',
    roadmap: 'Roteiro',
    download: 'Transferir',
  },
  header: {
    logoAlt: 'Logótipo do S.O.K',
    download: 'Transferir',
    downloadApp: 'Transferir o S.O.K',
    openMenu: 'Abrir o menu',
    closeMenu: 'Fechar o menu',
    theme: 'Mudar de tema',
    language: 'Idioma',
  },
  footer: {
    guide: 'Guia',
    docs: 'Docs para programadores',
    releases: 'Versões',
    license: 'Licença',
  },
  hero: {
    title1: 'Arrume o seu',
    title2: 'universo digital.',
    tagline1: 'O gestor de multimédia universal.',
    tagline2: 'Transforme o caos numa biblioteca impecável.',
    download: 'Transferir o S.O.K',
    learnMore: 'Saber mais',
    available:
      'Disponível para Windows, macOS e Linux, e como <a href="/guide/server">imagem Docker</a> para o seu NAS. <a href="/demo">Experimentar a demo</a>',
  },
  home: {
    title: 'S.O.K - Organizador de multimédia gratuito para Plex, Jellyfin e Kodi',
    description:
      'Mude o nome e arrume automaticamente os seus filmes, séries, música, livros e jogos. O S.O.K é uma app gratuita e de código aberto para Windows, macOS e Linux que cria uma biblioteca limpa para Plex, Jellyfin e Kodi.',
    featuresTitle: 'Cada coisa no seu lugar.',
    featuresSubtitle: 'Uma automatização poderosa numa interface cuidada.',
    cards: {
      universal: {
        title: 'Toda a sua multimédia',
        text: 'Uma única app para os seus vídeos, música, livros e jogos. Acabou o malabarismo entre vários programas.',
      },
      metadata: {
        title: 'Metadados inteligentes',
        text: 'Obtém automaticamente as informações do TMDB, do Spotify e de muitos outros.',
      },
      privacy: {
        title: 'Privacidade em primeiro lugar',
        text: 'Os seus dados ficam no seu computador. Sem sincronização na nuvem.',
      },
      renaming: {
        title: 'Mudança de nome poderosa',
        text: 'Padrões como {Title} ({Year}) para organizar os seus ficheiros exatamente como pretende.',
      },
      design: {
        title: 'Pensado para pessoas',
        text: 'Uma interface moderna e sem moldura, feita com PySide6. Modo escuro incluído.',
      },
      openSource: { title: 'Código aberto', text: 'Feito em Python. Gratuito para sempre.' },
    },
    logos: 'Metadados das fontes de referência',
  },
  downloadSection: {
    title: 'Pronto para arrumar?',
    text1: 'Assuma o controlo da sua biblioteca multimédia com o S.O.K.',
    text2: 'Já disponível para Windows, macOS, Linux e Docker.',
    button: 'Obter o S.O.K',
    availableFor: 'Disponível para {os}',
    dockerTitle: 'S.O.K Server, uma imagem Docker para um NAS ou um servidor doméstico',
    footer: 'Código aberto • Versão {version} • Gratuito para sempre',
  },
  showcase: {
    label: 'Pré-visualização da página inicial do S.O.K',
    switcher: 'Mostrar o S.O.K tal como aparece em',
  },
  features: {
    title: 'Funcionalidades - S.O.K, organizador de multimédia',
    description:
      'Arrume os episódios em pastas de temporada, mude o nome de filmes em lote, personalize o formato dos nomes e obtenha metadados do TMDB, do TheTVDB e de outros. Descubra tudo o que o S.O.K faz.',
    heading: 'Funcionalidades',
    intro:
      'O S.O.K identifica os seus ficheiros multimédia, dá-lhes nomes limpos e arruma-os numa biblioteca que os servidores multimédia compreendem.',
    before: 'Antes',
    after: 'Depois',
    formatsAnchor: 'formatos-de-saída',
    highlights: [
      {
        title: 'Séries, arrumadas por série e temporada',
        text: 'Largue uma pasta de episódios: o S.O.K reconhece a série, transfere os títulos dos episódios e move cada ficheiro para a pasta da sua temporada. Lê nomes como S01E02, 1x02 e «Season 1 Episode 2».',
        after: 'Breaking Bad/Temporada 1/Breaking Bad S01E02 O gato está no saco.mkv',
        link: 'Arrumar séries',
      },
      {
        title: 'Filmes, com o nome mudado de uma só vez',
        text: 'Adicione dezenas de filmes de uma vez. O S.O.K procura cada um, marca os ficheiros prontos e deixa-o escolher o resultado certo quando vários filmes têm o mesmo título.',
        after: 'A Origem (2010).mkv',
        link: 'Mudar o nome de filmes em lote',
      },
      {
        title: 'Os seus nomes, as suas regras',
        text: 'Altere o formato dos nomes com variáveis simples como {title}, {year}, {season}, {episode} ou {quality}. Com o formato {title} ({year}) [{quality}], um ficheiro 2160p fica assim:',
        after: 'Dune - Duna (2021) [4K].mkv',
        link: 'Personalizar os formatos',
      },
    ],
    providersTitle: 'Metadados de bases de dados fiáveis',
    providersText:
      'Os títulos, os anos, os nomes dos episódios e as imagens vêm das bases de referência de cada tipo de multimédia. Escolha a sua fonte preferida nas definições.',
    providers: { video: 'Filmes e séries', music: 'Música', books: 'Livros', games: 'Jogos' },
    providersNote:
      'A música, os livros e os jogos também são arrumados: os álbuns em pastas de artista e de álbum, os livros em pastas de autor, e cada jogo na sua própria pasta. Consulte o <a href="/guide/music-books-games">guia</a>.',
    extrasTitle: 'E ainda',
    extras: [
      {
        title: 'Pronto para os servidores multimédia',
        text: 'Os nomes das pastas e dos ficheiros seguem as convenções do Plex, do Jellyfin e do Kodi, para que a sua biblioteca seja reconhecida de imediato.',
      },
      {
        title: 'Sem configuração',
        text: 'O TMDB e o TheTVDB funcionam de imediato, com uma chave integrada. Não é preciso criar uma conta.',
      },
      {
        title: 'Os seus ficheiros ficam consigo',
        text: 'Os seus ficheiros nunca saem do seu computador. Para os identificar, o S.O.K envia apenas pesquisas, como um título, às bases de metadados.',
      },
      {
        title: 'Pré-visualização antes de confirmar',
        text: 'Veja o nome atual e o novo nome de cada ficheiro e depois confirme. Mudou de ideias? Anule a mudança de nome na página Histórico.',
      },
      {
        title: '8 idiomas',
        text: 'Inglês, francês, alemão, espanhol, italiano, português, russo e polaco, até nos nomes das pastas de temporada.',
      },
      {
        title: 'Também num NAS',
        text: 'O S.O.K Server é uma imagem Docker com interface web: arruma sozinho as novas transferências, com ligações físicas, para que os torrents continuem a ser partilhados.',
      },
      {
        title: 'Gratuito e de código aberto',
        text: 'Publicado sob a licença MIT. O código está no GitHub.',
      },
    ],
    ctaTitle: 'Pronto para arrumar a sua biblioteca?',
    ctaDownload: 'Transferir o S.O.K',
    ctaGuide: 'Ler o guia',
  },
  download: {
    titleAll: 'Transferir o S.O.K para Windows, macOS e Linux - Organizador de multimédia gratuito',
    titleNoLinux: 'Transferir o S.O.K para Windows e macOS - Organizador de multimédia gratuito',
    description:
      'Transfira o S.O.K {version} para Windows 10 e 11 (64 bits), macOS (Apple Silicon){linux}. Gratuito e de código aberto: mude o nome e arrume os seus filmes, séries e a sua biblioteca multimédia em poucos cliques.',
    descriptionLinux: ' e Linux (AppImage)',
    heading: 'Transferir o S.O.K',
    intro1: 'Comece hoje a arrumar a sua biblioteca multimédia.',
    intro2: 'Escolha o seu sistema abaixo.',
    windowsVersions: 'Windows 10/11 (64 bits)',
    macVersions: 'Apple Silicon (M1 ou posterior)',
    linuxVersions: 'Ubuntu, Fedora, Debian, Arch…',
    dockerVersions: 'S.O.K Server, para o seu NAS',
    downloadExe: 'Transferir o .exe',
    downloadDmg: 'Transferir o .dmg',
    appImageIntel: 'AppImage (Intel/AMD)',
    appImageArm: 'AppImage (ARM)',
    comingSoon: 'Em breve',
    version: 'Versão {version}',
    copy: 'Copiar',
    clickToCopy: 'Clique para copiar',
    copied: 'Copiado',
    copyFailed: 'Selecione o comando para o copiar',
    installGuide: 'Guia de instalação',
    tryDemo: 'Experimentar a demo',
    macNote:
      'Primeira abertura num Mac: o macOS bloqueia apps de programadores não identificados. <a href="/guide/getting-started#macos">Veja como abrir o S.O.K</a>.',
    linuxNote:
      'No Linux, escolha a AppImage do seu processador e permita que seja executada como programa. <a href="/guide/getting-started#linux">Veja como iniciar o S.O.K</a>.',
    archiveNote: 'Procura uma versão anterior? <a href="/releases">Consulte o arquivo de versões</a>.',
  },
  releases: {
    title: 'Arquivo de versões - S.O.K',
    description:
      'Todas as versões publicadas do S.O.K para Windows, macOS e Linux, com as notas de versão e as ligações de transferência.',
    heading: 'Arquivo de versões',
    intro: 'Todas as versões publicadas do S.O.K. Precisa da mais recente? <a href="/download">Vá à página de transferência</a>.',
    unavailable:
      'O histórico de versões não está disponível neste momento. Consulte todas as versões no <a href="https://github.com/SOKTeam/S.O.K/releases">GitHub</a>.',
    version: 'Versão {version}',
    latest: 'Mais recente',
    notes: 'Notas de versão',
    noInstaller: 'Sem instalador',
  },
  roadmap: {
    title: 'Roteiro - S.O.K',
    description:
      'O que já está disponível, em curso e previsto para o S.O.K, o organizador de multimédia gratuito para filmes, séries, música, livros e jogos.',
    heading: 'Roteiro de desenvolvimento',
    available: 'Disponível',
    next: 'Em breve',
    later: 'Mais tarde',
    availableItems: [
      'Filmes, séries, música, livros e jogos',
      'Apps para Windows, macOS (Apple Silicon) e Linux (AppImage)',
      'Atualizações integradas',
      'Deteção automática do tipo de multimédia',
      'Um estado «Pronto» mais fiável: o título e o ano têm de corresponder',
      'Histórico dos ficheiros com o nome mudado, com anulação',
      'Mover, ligação física ou copiar; as legendas seguem o seu vídeo',
      'S.O.K Server: uma imagem Docker com uma interface web ao estilo da app (temas claro, laranja e escuro), ligações físicas por predefinição, várias pastas de destino por tipo de multimédia, ficheiros já processados deixados de fora',
      'O S.O.K Server arruma sozinho os novos ficheiros assim que são transferidos e depois avisa o Discord, o Jellyfin, o Plex, um webhook ou um script',
      'Uma demo ao vivo do S.O.K Server no site',
    ],
    nextItems: [
      'S.O.K Server: uma nova temporada junta-se à série que já está na sua biblioteca, mesmo que a pasta tenha outro nome',
      'S.O.K Server: verificar e corrigir o idioma das faixas de áudio e das legendas de um vídeo',
      'Legendas: o idioma de um ficheiro de legendas detetado a partir do texto, e as legendas de uma pasta Subs com o nome mudado junto com o vídeo',
      'S.O.K Server: converter os vídeos para MKV, sem perda de qualidade',
      'S.O.K Server: escrever o título, o ano, o cartaz e mais nos ficheiros de vídeo',
    ],
    laterItems: [
      'S.O.K Server: ir buscar as transferências a uma seedbox por SFTP',
      'Uma app móvel para o S.O.K Server',
    ],
  },
  guide: {
    title: 'Guia de utilização',
    description: 'Saiba como instalar e usar o S.O.K para arrumar a sua biblioteca multimédia.',
    titleSuffix: '{title} - Guia do S.O.K',
    heading: 'Guia de utilização',
    intro:
      'Tudo o que precisa para instalar o S.O.K e arrumar a sua biblioteca multimédia. É novo por aqui? Comece por <a href="/guide/getting-started">Primeiros passos</a>.',
    overview: 'Índice',
    label: 'Guia de utilização',
    previous: '← Anterior',
    next: 'Seguinte →',
  },
  notFound: {
    title: 'Página não encontrada - S.O.K',
    description: 'Esta página não existe.',
    heading: 'Este ficheiro perdeu-se na confusão',
    text: 'A página que procura não existe ou foi movida. Nem o S.O.K consegue arrumar o que não está lá.',
    home: 'Voltar ao início',
    guide: 'Ler o guia',
  },
};

export default pt;
