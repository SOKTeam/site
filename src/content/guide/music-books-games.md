---
title: Music, books and games
description: Rename and sort albums, tracks, books and games into a clean library.
order: 4
---

Albums work like the [TV Shows](/guide/tv-shows) page: you select one album and S.O.K renames its tracks. Single tracks, books and games work like the [Movies](/guide/movies) page: each file gets its own match in a table, with a *Ready*, *Pick one* or *Missing* status, and **Rename all** renames the *Ready* rows.

> **Important:** by default, files are **moved**, not copied (see the file mode in [Settings → Behavior](/guide/settings#behavior)). Check the preview before you confirm. You can undo a rename from the [History](/guide/history) page.

## Music

**Supported formats:** `.mp3`, `.flac`, `.wav`, `.m4a`, `.aac`, `.ogg`, `.opus`, `.wma`, `.ape`, `.alac`, `.aiff`, `.dsd`, `.dsf`

The **Music** page has two tabs.

### Albums

Add the folder of an album, search for the album and click the right result, choose a destination, check the preview and click **Organize files**. S.O.K takes the artist, album and year of the album found online, and the title and number of each track from its tags (or from its name, such as `01 - Title.mp3` or `Artist - Album - 01 - Title.mp3`).

### Tracks

Drop single tracks, for example downloaded singles. S.O.K reads their tags first, then their name (`Artist - Title.mp3`), and searches each one. A track is *Ready* when a match has its title and, when the file gives them, its artist and album. A track found only on compilations is never *Ready*: pick the right release yourself.

### Names and folders

Tracks follow the [music format](/guide/settings#output-formats), `{artist} - {album}/{track} - {title}` by default. The `/` makes a folder:

```text
Music/
└── Daft Punk - Discovery/
    ├── 01 - One More Time.mp3
    └── 02 - Aerodynamic.mp3
```

**Databases:** Deezer and MusicBrainz (free), Spotify (with a connection) and Last.fm (with a personal key).

## Books

**Supported formats:** `.epub`, `.mobi`, `.azw`, `.azw3`, `.pdf`, `.djvu`, `.fb2`, `.cbz`, `.cbr`, `.lit`, `.pdb`, `.txt`, `.rtf`, `.doc`, `.docx`

S.O.K reads the author and title from file names such as:

- `Author - Title.epub`
- `Author - Title (2023).epub`
- `Author - [Series 01] - Title.epub`

The search text of each row is the title, with the author if the name gives one. A book is *Ready* when a match has its title and author. The year is not compared: it is often the year of the first edition.

Each book goes into a folder for the author, then one for the book, and is named with the [book format](/guide/settings#output-formats):

```text
Books/
└── Frank Herbert/
    └── Frank Herbert - Dune (1965)/
        └── Frank Herbert - Dune (1965).epub
```

**Databases:** Google Books and Open Library (free).

## Games

**Supported formats:** disc images (`.iso`, `.bin`, `.cue`, `.img`, `.mdf`, `.nrg`, `.rvz`, `.wbfs`, `.cdi`...) and cartridge ROMs (`.nes`, `.sfc`, `.smc`, `.n64`, `.z64`, `.gb`, `.gbc`, `.gba`, `.nds`, `.3ds`, `.gen`, `.sms`, `.gg`...).

The files of one game, such as a `.cue` and its `.bin` files or several discs, share one row. The search leaves out the tags of the name (`(USA)`, `(Rev 1)`, `[SLUS-12345]`).

Games are sorted by platform, found from a `[SNES]` tag in the name, the extension, or a folder name such as `PS1`. A game of one file keeps the tags of its name, which ROM collections rely on, and follows the [game format](/guide/settings#output-formats). A game of several files gets its own folder and keeps its file names, since a `.cue` lists its `.bin` files by name:

```text
Games/
├── Super Nintendo/
│   └── Super Mario World (USA) (Rev 1).sfc
└── PlayStation/
    └── Final Fantasy VII (1997)/
        ├── Final Fantasy VII (USA) (Disc 1).cue
        └── Final Fantasy VII (USA) (Disc 1).bin
```

**Databases:** RAWG (free) and IGDB (with a connection).
