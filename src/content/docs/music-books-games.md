---
title: Music, books and games
description: Search for albums, books and games and preview their new names.
order: 4
---

The **Music**, **Books** and **Games** pages work like the [TV Shows](/docs/tv-shows) page: add source folders, select the right result in the search, choose a destination and check the preview.

> **Early access:** in version 1.1, these pages let you search the databases and preview the new file names. Moving files is still being finished for these media types. Only use **Organize files** on the *TV Shows* and *Movies* pages for now. The [Roadmap](/roadmap) shows the progress.

## Music

**Search by:** *Album* or *Artist*.

**Supported formats:** `.mp3`, `.flac`, `.wav`, `.m4a`, `.aac`, `.ogg`, `.opus`, `.wma`, `.ape`, `.alac`, `.aiff`, `.dsd`, `.dsf`

S.O.K reads the track number and title from file names such as:

- `01 - Title.mp3`
- `01. Title.mp3`
- `Track 01 Title.mp3`
- `Artist - Album - 01 - Title.mp3`

The new name has the format `01 - Title.mp3`. You can change it in [Settings → File formats](/docs/settings#file-formats).

**Databases:** Deezer and MusicBrainz (free), Spotify and Last.fm (with a connection).

## Books

**Supported formats:** `.epub`, `.mobi`, `.azw`, `.azw3`, `.pdf`, `.djvu`, `.fb2`, `.cbz`, `.cbr`, `.lit`, `.pdb`, `.txt`, `.rtf`, `.doc`, `.docx`

S.O.K reads the author and title from file names such as:

- `Author - Title.epub`
- `Author - Title (2023).epub`
- `Author - [Series 01] - Title.epub`

Books are named `Author - Title` (or `Author - [Series 01] - Title` for a series), and sorted by author, then by series.

**Databases:** Google Books and Open Library (free).

## Games

**Supported formats:** disc images (`.iso`, `.bin`, `.cue`, `.img`, `.mdf`, `.nrg`, `.rvz`, `.wbfs`, `.cdi`...) and cartridge ROMs (`.nes`, `.sfc`, `.smc`, `.n64`, `.z64`, `.gb`, `.gbc`, `.gba`, `.nds`, `.3ds`, `.gen`, `.sms`, `.gg`...).

S.O.K keeps the region and the game code found in the file name, for example `Game Title (USA) [SLUS-12345].iso`, and sorts games by platform.

**Databases:** RAWG (free) and IGDB (with a connection).
