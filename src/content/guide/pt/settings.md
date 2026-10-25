---
title: Definições
description: Tema, idioma, formatos de saída e de entrada, bases de dados, chaves API e comportamento.
order: 5
---

Abra **Definições** no fundo da barra lateral. Cada alteração é guardada de imediato: não há botão *Guardar*.

## Chaves API

O S.O.K obtém as suas informações de bases de dados online. Esta secção lista-as por categoria (vídeo, música, livros, jogos, imagens), com o seu estado.

| Tipo | Serviços | O que tem de fazer |
| --- | --- | --- |
| **Chave integrada** | TMDB, TVDB, Fanart.tv | Nada. Está incluída uma chave. Pode introduzir a sua própria chave no campo *Chave personalizada (Opcional)*. |
| **Gratuito** | Deezer, MusicBrainz, Google Books, Open Library, RAWG | Nada. |
| **Ligação** | Spotify, IGDB | Clique em **Conectar** e siga os passos. |
| **Chave pessoal** | OMDb (IMDb), Last.fm | Crie uma chave gratuita no site do serviço e cole-a. |

### Adicionar uma chave pessoal

1. Clique em **Obter** junto ao serviço. O S.O.K abre a página onde pode criar uma chave.
2. Copie a chave e cole-a no campo. É guardada quando prime <kbd>Enter</kbd> ou sai do campo; esvazie o campo para a remover.
3. Clique em **Testar**. O estado passa a *Operacional* se a chave funcionar, ou a *Chave inválida* se não funcionar.

### Ligar uma conta

1. Clique em **Conectar** junto ao Spotify ou ao IGDB.
2. O S.O.K pede a chave API (e o segredo, se o serviço precisar) e pode abrir a página do serviço para a criar.
3. Se tudo correr bem, o estado passa a *Conectado*.

Para remover a ligação, clique em **Desconectar**.

> As suas chaves são guardadas cifradas no seu computador.

## API preferida

Para cada categoria, escolha que base de dados o S.O.K usa primeiro. Aparece um aviso ⚠️ se o serviço escolhido ainda precisar de uma chave.

## Pastas predefinidas

Guarda a pasta de cada uma das suas bibliotecas (vídeos, música, livros, jogos). Clique em **Procurar** para escolher uma.

Quando uma página abre com o *Destino* vazio, o S.O.K preenche-o com a pasta predefinida desse tipo de multimédia. Pode sempre escolher outra pasta.

## Formatos de saída

Define como os ficheiros são renomeados. Escreva um novo padrão no campo. As palavras entre chavetas são substituídas pelas informações do conteúdo.

| Conteúdo | Formato predefinido | Variáveis disponíveis |
| --- | --- | --- |
| **Série de TV** | `{title} S{season}E{episode} {episode_title}` | `{title}`, `{season}`, `{episode}`, `{episode_title}` |
| **Filmes** | `{title} ({year})` | `{title}`, `{year}`, `{quality}` |
| **Música** | `{artist} - {album}/{track} - {title}` | `{artist}`, `{album}`, `{track}`, `{title}`, `{year}` |
| **Livro** | `{author} - {title} ({year})` | `{author}`, `{title}`, `{year}`, `{series}`, `{series_number}` |
| **Jogo** | `{title} {tags}` | `{title}`, `{year}`, `{platform}`, `{tags}` |

**Exemplos:**

- `{title} - S{season}E{episode} - {episode_title}` dá `Breaking Bad - S01E01 - Piloto.mkv`
- `{title} ({year}) [{quality}]` dá `A Origem (2010) [1080p].mkv`
- `{artist}/{year} - {album}/{track}. {title}` dá `Daft Punk/2001 - Discovery/01. One More Time.mp3`

No formato de música, cada `/` cria uma pasta. Um valor que um ficheiro não tem é omitido juntamente com o que o rodeia: sem ano, `{title} ({year})` dá `Título`. `{series}` e `{series_number}` vêm do nome original do livro (`Autor - [Dune 2] - Título`). `{tags}` são as etiquetas do nome original do jogo, como `(USA) (Rev 1)`.

Os caracteres que o Windows proíbe nos nomes de ficheiro (`< > : " / \ | ? *`) são removidos.

## Formatos de entrada

Descreve como se chamam os **seus** ficheiros, para que o S.O.K leia nomes que não conhece. Use as variáveis dos formatos de saída:

1. Escolha o tipo (Série de TV, Filmes, Música, Livro, Jogo).
2. Escreva um padrão, por exemplo `{artist} - {year} - {album} - {track} - {title}`, e clique em **Adicionar**.
3. Verifique-o com **Testar**: cole um nome de ficheiro, com a extensão, e o S.O.K mostra o que lê e que padrão usou.

Os seus padrões são experimentados antes das formas que o S.O.K já conhece. Passe o rato sobre o **ⓘ** junto ao título para ver essas formas e as variáveis de cada tipo.

- Os espaços, os pontos e os sublinhados são o mesmo separador: `{title} {year}` também lê `The.Matrix.1999`.
- `{ignore}` salta uma parte do nome, como a qualidade ou o grupo da release: `{title} {year} {ignore}` lê `Dune.2021.1080p.BluRay-GROUP`.
- `{year}` aceita quatro algarismos, e os números de temporada, episódio, faixa e disco aceitam algarismos.
- Um padrão de série de TV precisa de `{episode}`; os outros precisam de `{title}`.

Um vídeo lido por um padrão de série de TV conta como episódio na página inicial, e um vídeo lido por um padrão de Filmes como filme.

## Aparência

- **Modo escuro**: alterna entre o tema escuro e o tema laranja.
- **Usar a aparência do sistema** (só macOS): segue o modo claro ou escuro escolhido nas definições do macOS.
- **Usar a cor de destaque do sistema** (só macOS): usa a cor de destaque escolhida em *Definições do Sistema → Aparência*.
- **Idioma**: English, Français, Deutsch, Español, Italiano, Português, Русский, Polski. O idioma define também as palavras usadas nos nomes das pastas (*Season*, *Saison*, *Temporada*...).

## Comportamento

| Opção | Efeito |
| --- | --- |
| **Modo de ficheiro** | **Mover** (predefinição): os ficheiros saem da pasta de origem. **Ligação física**: o original fica onde está, para que os torrents continuem a ser partilhados, sem ocupar mais espaço; o destino tem de estar no mesmo disco. **Copiar**: o original fica, e a cópia ocupa o espaço a dobrar. |
| **Mover as legendas com os vídeos** | As legendas com o mesmo nome do vídeo (`Filme.srt`, `Filme.pt.srt`, `Filme.en.forced.srt`) são renomeadas e movidas com ele: `Dune (2021).pt.srt`. Ativado por predefinição. |
| **Criar pastas em falta** | Cria as pastas de série e de temporada no destino, se não existirem. |
| **Transferir cartazes** | Depois de uma renomeação, guarda o cartaz ou a capa de cada elemento onde o Plex, o Jellyfin e o Kodi a procuram: `Filme (Ano)-poster.jpg` junto a um filme, `poster.jpg` na pasta de uma série, `cover.jpg` na pasta de um álbum ou de um livro. Uma imagem que já exista é mantida. Os jogos não recebem nenhuma. Desativado por predefinição. |
| **Backup antes de renomear** | Se já existir um ficheiro com o mesmo nome no destino, guarda uma cópia dele com a extensão `.backup` antes de o substituir. |
| **Ignorar duplicados** | Se já existir um ficheiro com o mesmo nome no destino, deixa o ficheiro de origem onde está em vez de o substituir. |
| **Registar operações** | Escreve cada movimento no ficheiro de registo. |

## Sobre

- **Versão**: a versão que está a usar.
- **Verificar atualizações**: ao iniciar, o S.O.K avisa quando há uma nova versão. No Linux, pode substituir a AppImage pela nova versão e reiniciar.
- **Discord Rich Presence**: mostra no seu perfil do Discord o que está a fazer no S.O.K.
- **Repor definições**: repõe cada definição no seu valor predefinido, após confirmação.
