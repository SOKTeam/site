---
title: Música, livros e jogos
description: Renomeie e arrume álbuns, faixas, livros e jogos numa biblioteca limpa.
order: 4
---

Os álbuns funcionam como a página [Séries](/pt/guide/tv-shows): escolhe um álbum e o S.O.K renomeia as suas faixas. As faixas soltas, os livros e os jogos funcionam como a página [Filmes](/pt/guide/movies): cada ficheiro tem o seu próprio resultado numa tabela, com o estado *Pronto*, *Escolher* ou *Em falta*, e **Renomear tudo** renomeia as linhas *Pronto*.

> **Importante:** por predefinição, os ficheiros são **movidos**, não copiados (veja o modo de ficheiro em [Definições → Comportamento](/pt/guide/settings#comportamento)). Verifique a pré-visualização antes de confirmar. Pode anular uma renomeação a partir da página [Histórico](/pt/guide/history).

## Música

**Formatos suportados:** `.mp3`, `.flac`, `.wav`, `.m4a`, `.aac`, `.ogg`, `.opus`, `.wma`, `.ape`, `.alac`, `.aiff`, `.dsd`, `.dsf`

A página **Música** tem dois separadores.

### Álbuns

Adicione a pasta de um álbum, pesquise o álbum e clique no resultado certo, escolha um destino, verifique a pré-visualização e clique em **Organizar ficheiros**. O S.O.K usa o artista, o álbum e o ano do álbum encontrado online, e o título e o número de cada faixa a partir das suas etiquetas (ou do seu nome, como `01 - Título.mp3` ou `Artista - Álbum - 01 - Título.mp3`).

### Faixas

Largue faixas soltas, por exemplo singles transferidos. O S.O.K lê primeiro as suas etiquetas, depois o seu nome (`Artista - Título.mp3`), e pesquisa cada uma. Uma faixa está *Pronto* quando um resultado tem o seu título e, se o ficheiro os indicar, o seu artista e o seu álbum. Uma faixa encontrada apenas em compilações nunca está *Pronto*: escolha a edição certa.

### Nomes e pastas

As faixas seguem o [formato de música](/pt/guide/settings#formatos-de-saída), `{artist} - {album}/{track} - {title}` por predefinição. A `/` cria uma pasta:

```text
Música/
└── Daft Punk - Discovery/
    ├── 01 - One More Time.mp3
    └── 02 - Aerodynamic.mp3
```

**Bases de dados:** Deezer e MusicBrainz (gratuitas), Spotify (com uma ligação) e Last.fm (com uma chave pessoal).

## Livros

**Formatos suportados:** `.epub`, `.mobi`, `.azw`, `.azw3`, `.pdf`, `.djvu`, `.fb2`, `.cbz`, `.cbr`, `.lit`, `.pdb`, `.txt`, `.rtf`, `.doc`, `.docx`

O S.O.K lê o autor e o título em nomes de ficheiro como:

- `Autor - Título.epub`
- `Autor - Título (2023).epub`
- `Autor - [Série 01] - Título.epub`

O texto de pesquisa de cada linha é o título, com o autor se o nome o indicar. Um livro está *Pronto* quando um resultado tem o seu título e o seu autor. O ano não é comparado: é muitas vezes o da primeira edição.

Cada livro vai para uma pasta do autor, depois para uma do livro, e recebe um nome segundo o [formato de livro](/pt/guide/settings#formatos-de-saída):

```text
Livros/
└── Frank Herbert/
    └── Frank Herbert - Dune (1965)/
        └── Frank Herbert - Dune (1965).epub
```

**Bases de dados:** Google Books e Open Library (gratuitas).

## Jogos

**Formatos suportados:** imagens de disco (`.iso`, `.bin`, `.cue`, `.img`, `.mdf`, `.nrg`, `.rvz`, `.wbfs`, `.cdi`...) e ROM de cartuchos (`.nes`, `.sfc`, `.smc`, `.n64`, `.z64`, `.gb`, `.gbc`, `.gba`, `.nds`, `.3ds`, `.gen`, `.sms`, `.gg`...).

Os ficheiros de um mesmo jogo, como um `.cue` e os seus ficheiros `.bin` ou vários discos, partilham uma linha. A pesquisa ignora as etiquetas do nome (`(USA)`, `(Rev 1)`, `[SLUS-12345]`).

Os jogos são arrumados por plataforma, detetada por uma etiqueta `[SNES]` no nome, pela extensão ou por um nome de pasta como `PS1`. Um jogo de um só ficheiro mantém as etiquetas do seu nome, de que dependem as coleções de ROM, e segue o [formato de jogo](/pt/guide/settings#formatos-de-saída). Um jogo de vários ficheiros tem a sua própria pasta e mantém os nomes dos seus ficheiros, pois um `.cue` refere os seus ficheiros `.bin` pelo nome:

```text
Jogos/
├── Super Nintendo/
│   └── Super Mario World (USA) (Rev 1).sfc
└── PlayStation/
    └── Final Fantasy VII (1997)/
        ├── Final Fantasy VII (USA) (Disc 1).cue
        └── Final Fantasy VII (USA) (Disc 1).bin
```

**Bases de dados:** RAWG (gratuita) e IGDB (com uma ligação).
