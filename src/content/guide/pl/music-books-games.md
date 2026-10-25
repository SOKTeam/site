---
title: Muzyka, książki i gry
description: Zmiana nazw i porządkowanie albumów, utworów, książek i gier w czystej bibliotece.
order: 4
---

Albumy działają jak strona [Seriale](/pl/guide/tv-shows): wybiera się album, a S.O.K zmienia nazwy jego utworów. Pojedyncze utwory, książki i gry działają jak strona [Filmy](/pl/guide/movies): każdy plik ma własne dopasowanie w tabeli, ze statusem *Gotowe*, *Wybierz* lub *Brak*, a **Zmień nazwy wszystkim** zmienia nazwy wierszy *Gotowe*.

> **Ważne:** domyślnie pliki są **przenoszone**, a nie kopiowane (zob. tryb plików w [Ustawienia → Zachowanie](/pl/guide/settings#zachowanie)). Przed potwierdzeniem warto sprawdzić podgląd. Zmianę nazw można cofnąć na stronie [Historia](/pl/guide/history).

## Muzyka

**Obsługiwane formaty:** `.mp3`, `.flac`, `.wav`, `.m4a`, `.aac`, `.ogg`, `.opus`, `.wma`, `.ape`, `.alac`, `.aiff`, `.dsd`, `.dsf`

Strona **Muzyka** ma dwie karty.

### Albumy

Należy dodać folder albumu, wyszukać album i kliknąć właściwy wynik, wybrać cel, sprawdzić podgląd i kliknąć **Organizuj pliki**. S.O.K bierze wykonawcę, album i rok z albumu znalezionego w internecie, a tytuł i numer każdego utworu z jego tagów (lub z nazwy, na przykład `01 - Tytuł.mp3` albo `Wykonawca - Album - 01 - Tytuł.mp3`).

### Utwory

Można upuścić pojedyncze utwory, na przykład pobrane single. S.O.K najpierw odczytuje ich tagi, potem nazwę (`Wykonawca - Tytuł.mp3`), i wyszukuje każdy z nich. Utwór jest *Gotowe*, gdy dopasowanie ma jego tytuł oraz, jeśli plik je podaje, jego wykonawcę i album. Utwór znaleziony tylko na składankach nigdy nie jest *Gotowe*: właściwe wydanie trzeba wybrać samodzielnie.

### Nazwy i foldery

Utwory są nazywane według [formatu muzyki](/pl/guide/settings#formaty-wyjściowe), domyślnie `{artist} - {album}/{track} - {title}`. Znak `/` tworzy folder:

```text
Muzyka/
└── Daft Punk - Discovery/
    ├── 01 - One More Time.mp3
    └── 02 - Aerodynamic.mp3
```

**Bazy danych:** Deezer i MusicBrainz (darmowe), Spotify (z połączeniem) i Last.fm (z kluczem osobistym).

## Książki

**Obsługiwane formaty:** `.epub`, `.mobi`, `.azw`, `.azw3`, `.pdf`, `.djvu`, `.fb2`, `.cbz`, `.cbr`, `.lit`, `.pdb`, `.txt`, `.rtf`, `.doc`, `.docx`

S.O.K odczytuje autora i tytuł z nazw plików takich jak:

- `Autor - Tytuł.epub`
- `Autor - Tytuł (2023).epub`
- `Autor - [Seria 01] - Tytuł.epub`

Tekstem wyszukiwania każdego wiersza jest tytuł, z autorem, jeśli nazwa go podaje. Książka jest *Gotowe*, gdy dopasowanie ma jej tytuł i autora. Rok nie jest porównywany: często jest to rok pierwszego wydania.

Każda książka trafia do folderu autora, a potem do folderu książki, i otrzymuje nazwę według [formatu książki](/pl/guide/settings#formaty-wyjściowe):

```text
Książki/
└── Frank Herbert/
    └── Frank Herbert - Dune (1965)/
        └── Frank Herbert - Dune (1965).epub
```

**Bazy danych:** Google Books i Open Library (darmowe).

## Gry

**Obsługiwane formaty:** obrazy dysków (`.iso`, `.bin`, `.cue`, `.img`, `.mdf`, `.nrg`, `.rvz`, `.wbfs`, `.cdi`...) i ROM-y z kartridży (`.nes`, `.sfc`, `.smc`, `.n64`, `.z64`, `.gb`, `.gbc`, `.gba`, `.nds`, `.3ds`, `.gen`, `.sms`, `.gg`...).

Pliki jednej gry, na przykład plik `.cue` z plikami `.bin` albo kilka płyt, dzielą jeden wiersz. Wyszukiwanie pomija tagi z nazwy (`(USA)`, `(Rev 1)`, `[SLUS-12345]`).

Gry są sortowane według platformy, rozpoznawanej po tagu `[SNES]` w nazwie, po rozszerzeniu lub po nazwie folderu, na przykład `PS1`. Gra z jednego pliku zachowuje tagi swojej nazwy, na których polegają kolekcje ROM-ów, i jest nazywana według [formatu gry](/pl/guide/settings#formaty-wyjściowe). Gra z wielu plików dostaje własny folder i zachowuje nazwy swoich plików, ponieważ plik `.cue` wymienia swoje pliki `.bin` z nazwy:

```text
Gry/
├── Super Nintendo/
│   └── Super Mario World (USA) (Rev 1).sfc
└── PlayStation/
    └── Final Fantasy VII (1997)/
        ├── Final Fantasy VII (USA) (Disc 1).cue
        └── Final Fantasy VII (USA) (Disc 1).bin
```

**Bazy danych:** RAWG (darmowa) i IGDB (z połączeniem).
