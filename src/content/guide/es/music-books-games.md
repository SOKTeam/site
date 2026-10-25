---
title: Música, libros y juegos
description: Renombre y ordene álbumes, canciones, libros y juegos en una biblioteca limpia.
order: 4
---

Los álbumes funcionan como la página [Series](/es/guide/tv-shows): elige un álbum y S.O.K renombra sus canciones. Las canciones sueltas, los libros y los juegos funcionan como la página [Películas](/es/guide/movies): cada archivo tiene su propio resultado en una tabla, con el estado *Listo*, *Elige uno* o *Falta*, y **Renombrar todo** renombra las filas *Listo*.

> **Importante:** por defecto, los archivos se **mueven**, no se copian (vea el modo de archivo en [Ajustes → Comportamiento](/es/guide/settings#comportamiento)). Compruebe la vista previa antes de confirmar. Puede deshacer un renombrado desde la página [Historial](/es/guide/history).

## Música

**Formatos compatibles:** `.mp3`, `.flac`, `.wav`, `.m4a`, `.aac`, `.ogg`, `.opus`, `.wma`, `.ape`, `.alac`, `.aiff`, `.dsd`, `.dsf`

La página **Música** tiene dos pestañas.

### Álbumes

Añada la carpeta de un álbum, busque el álbum y haga clic en el resultado correcto, elija un destino, compruebe la vista previa y haga clic en **Organizar archivos**. S.O.K toma el artista, el álbum y el año del álbum encontrado en línea, y el título y el número de cada canción de sus etiquetas (o de su nombre, como `01 - Título.mp3` o `Artista - Álbum - 01 - Título.mp3`).

### Canciones

Suelte canciones sueltas, por ejemplo sencillos descargados. S.O.K lee primero sus etiquetas y luego su nombre (`Artista - Título.mp3`), y busca cada una. Una canción está *Listo* cuando un resultado tiene su título y, si el archivo los indica, su artista y su álbum. Una canción encontrada solo en recopilatorios nunca está *Listo*: elija usted la edición correcta.

### Nombres y carpetas

Las canciones siguen el [formato de música](/es/guide/settings#formatos-de-salida), `{artist} - {album}/{track} - {title}` por defecto. La `/` crea una carpeta:

```text
Música/
└── Daft Punk - Discovery/
    ├── 01 - One More Time.mp3
    └── 02 - Aerodynamic.mp3
```

**Bases de datos:** Deezer y MusicBrainz (gratuitas), Spotify (con una conexión) y Last.fm (con una clave personal).

## Libros

**Formatos compatibles:** `.epub`, `.mobi`, `.azw`, `.azw3`, `.pdf`, `.djvu`, `.fb2`, `.cbz`, `.cbr`, `.lit`, `.pdb`, `.txt`, `.rtf`, `.doc`, `.docx`

S.O.K lee el autor y el título en nombres de archivo como:

- `Autor - Título.epub`
- `Autor - Título (2023).epub`
- `Autor - [Saga 01] - Título.epub`

El texto de búsqueda de cada fila es el título, con el autor si el nombre lo indica. Un libro está *Listo* cuando un resultado tiene su título y su autor. El año no se compara: suele ser el de la primera edición.

Cada libro va a una carpeta del autor, luego a una del libro, y recibe un nombre según el [formato de libro](/es/guide/settings#formatos-de-salida):

```text
Libros/
└── Frank Herbert/
    └── Frank Herbert - Dune (1965)/
        └── Frank Herbert - Dune (1965).epub
```

**Bases de datos:** Google Books y Open Library (gratuitas).

## Juegos

**Formatos compatibles:** imágenes de disco (`.iso`, `.bin`, `.cue`, `.img`, `.mdf`, `.nrg`, `.rvz`, `.wbfs`, `.cdi`...) y ROM de cartucho (`.nes`, `.sfc`, `.smc`, `.n64`, `.z64`, `.gb`, `.gbc`, `.gba`, `.nds`, `.3ds`, `.gen`, `.sms`, `.gg`...).

Los archivos de un mismo juego, como un `.cue` y sus archivos `.bin` o varios discos, comparten una fila. La búsqueda omite las etiquetas del nombre (`(USA)`, `(Rev 1)`, `[SLUS-12345]`).

Los juegos se ordenan por plataforma, detectada por una etiqueta `[SNES]` en el nombre, por la extensión o por un nombre de carpeta como `PS1`. Un juego de un solo archivo conserva las etiquetas de su nombre, de las que dependen las colecciones de ROM, y sigue el [formato de juego](/es/guide/settings#formatos-de-salida). Un juego de varios archivos tiene su propia carpeta y conserva los nombres de sus archivos, ya que un `.cue` cita sus archivos `.bin` por su nombre:

```text
Juegos/
├── Super Nintendo/
│   └── Super Mario World (USA) (Rev 1).sfc
└── PlayStation/
    └── Final Fantasy VII (1997)/
        ├── Final Fantasy VII (USA) (Disc 1).cue
        └── Final Fantasy VII (USA) (Disc 1).bin
```

**Bases de datos:** RAWG (gratuita) e IGDB (con una conexión).
