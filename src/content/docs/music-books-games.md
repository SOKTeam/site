---
title: Music, books and games
description: Rename and sort albums, books and games into a clean library.
order: 4
---

The **Music**, **Books** and **Games** pages work like the [TV Shows](/docs/tv-shows) page: add source folders, select the right result in the search, choose a destination, check the preview and click **Organize files**.

S.O.K renames each file and moves it into a folder named after the album, book or game you selected.

> **Important:** files are **moved**, not copied. Check the preview before you confirm.

## Music

**Search by:** *Album* or *Artist*.

**Supported formats:** `.mp3`, `.flac`, `.wav`, `.m4a`, `.aac`, `.ogg`, `.opus`, `.wma`, `.ape`, `.alac`, `.aiff`, `.dsd`, `.dsf`

S.O.K reads the track number and title from file names such as:

- `01 - Title.mp3`
- `01. Title.mp3`
- `Track 01 Title.mp3`
- `Artist - Album - 01 - Title.mp3`

The new name has the format `01 - Title.mp3`. You can change it in [Settings → File formats](/docs/settings#file-formats).

When you select an album, the tracks go into a folder for the artist, then one for the album:

```text
Music/
└── Daft Punk/
    └── Daft Punk - Discovery (2001)/
        ├── 01 - One More Time.mp3
        └── 02 - Aerodynamic.mp3
```

When you search by *Artist*, the tracks go directly into the artist folder.

**Databases:** Deezer and MusicBrainz (free), Spotify and Last.fm (with a connection).

## Books

**Supported formats:** `.epub`, `.mobi`, `.azw`, `.azw3`, `.pdf`, `.djvu`, `.fb2`, `.cbz`, `.cbr`, `.lit`, `.pdb`, `.txt`, `.rtf`, `.doc`, `.docx`

S.O.K reads the author and title from file names such as:

- `Author - Title.epub`
- `Author - Title (2023).epub`
- `Author - [Series 01] - Title.epub`

Books are named `Author - Title` (or `Author - [Series 01] - Title` for a series). They go into a folder for the author, then one for the book you selected:

```text
Books/
└── Frank Herbert/
    └── Frank Herbert - Dune (1965)/
        └── Frank Herbert - Dune.epub
```

**Databases:** Google Books and Open Library (free).

## Games

**Supported formats:** disc images (`.iso`, `.bin`, `.cue`, `.img`, `.mdf`, `.nrg`, `.rvz`, `.wbfs`, `.cdi`...) and cartridge ROMs (`.nes`, `.sfc`, `.smc`, `.n64`, `.z64`, `.gb`, `.gbc`, `.gba`, `.nds`, `.3ds`, `.gen`, `.sms`, `.gg`...).

S.O.K keeps the region and the game code found in the file name, for example `Game Title (USA) [SLUS-12345].iso`. The files go into one folder per game, named with its title, year and platform:

```text
Games/
└── Shadow of the Colossus (2005) [PlayStation 2]/
    └── Shadow of the Colossus (USA) [SCUS-97472].iso
```

**Databases:** RAWG (free) and IGDB (with a connection).
