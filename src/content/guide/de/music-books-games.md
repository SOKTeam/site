---
title: Musik, Bücher und Spiele
description: Benennen Sie Alben, Titel, Bücher und Spiele um und sortieren Sie sie in eine saubere Bibliothek.
order: 4
---

Alben funktionieren wie die Seite [Serien](/de/guide/tv-shows): Sie wählen ein Album, und S.O.K benennt seine Titel um. Einzelne Titel, Bücher und Spiele funktionieren wie die Seite [Filme](/de/guide/movies): Jede Datei bekommt ihren eigenen Treffer in einer Tabelle, mit dem Status *Bereit*, *Auswählen* oder *Fehlend*, und **Alle umbenennen** benennt die Zeilen *Bereit* um.

> **Wichtig:** Standardmäßig werden die Dateien **verschoben**, nicht kopiert (siehe den Dateimodus unter [Einstellungen → Verhalten](/de/guide/settings#verhalten)). Prüfen Sie die Vorschau, bevor Sie bestätigen. Eine Umbenennung können Sie auf der Seite [Verlauf](/de/guide/history) rückgängig machen.

## Musik

**Unterstützte Formate:** `.mp3`, `.flac`, `.wav`, `.m4a`, `.aac`, `.ogg`, `.opus`, `.wma`, `.ape`, `.alac`, `.aiff`, `.dsd`, `.dsf`

Die Seite **Musik** hat zwei Reiter.

### Alben

Fügen Sie den Ordner eines Albums hinzu, suchen Sie das Album und klicken Sie auf das richtige Ergebnis, wählen Sie ein Ziel, prüfen Sie die Vorschau und klicken Sie auf **Dateien organisieren**. S.O.K übernimmt Künstler, Album und Jahr des online gefundenen Albums sowie Titel und Nummer jedes Stücks aus seinen Tags (oder aus seinem Namen, etwa `01 - Titel.mp3` oder `Künstler - Album - 01 - Titel.mp3`).

### Titel

Legen Sie einzelne Titel ab, zum Beispiel heruntergeladene Singles. S.O.K liest zuerst ihre Tags, dann ihren Namen (`Künstler - Titel.mp3`), und sucht jeden einzeln. Ein Titel ist *Bereit*, wenn ein Treffer seinen Titel hat und, wenn die Datei sie nennt, seinen Künstler und sein Album. Ein Titel, der nur auf Compilations gefunden wird, ist nie *Bereit*: Wählen Sie die richtige Veröffentlichung selbst.

### Namen und Ordner

Titel folgen dem [Musikformat](/de/guide/settings#ausgabeformate), standardmäßig `{artist} - {album}/{track} - {title}`. Der `/` legt einen Ordner an:

```text
Musik/
└── Daft Punk - Discovery/
    ├── 01 - One More Time.mp3
    └── 02 - Aerodynamic.mp3
```

**Datenbanken:** Deezer und MusicBrainz (kostenlos), Spotify (mit einer Verbindung) und Last.fm (mit einem persönlichen Schlüssel).

## Bücher

**Unterstützte Formate:** `.epub`, `.mobi`, `.azw`, `.azw3`, `.pdf`, `.djvu`, `.fb2`, `.cbz`, `.cbr`, `.lit`, `.pdb`, `.txt`, `.rtf`, `.doc`, `.docx`

S.O.K liest Autor und Titel aus Dateinamen wie:

- `Autor - Titel.epub`
- `Autor - Titel (2023).epub`
- `Autor - [Reihe 01] - Titel.epub`

Der Suchtext jeder Zeile ist der Titel, mit dem Autor, wenn der Name einen nennt. Ein Buch ist *Bereit*, wenn ein Treffer seinen Titel und seinen Autor hat. Das Jahr wird nicht verglichen: Oft ist es das Jahr der Erstausgabe.

Jedes Buch kommt in einen Ordner für den Autor, dann in einen für das Buch, und wird nach dem [Buchformat](/de/guide/settings#ausgabeformate) benannt:

```text
Bücher/
└── Frank Herbert/
    └── Frank Herbert - Dune (1965)/
        └── Frank Herbert - Dune (1965).epub
```

**Datenbanken:** Google Books und Open Library (kostenlos).

## Spiele

**Unterstützte Formate:** Disc-Images (`.iso`, `.bin`, `.cue`, `.img`, `.mdf`, `.nrg`, `.rvz`, `.wbfs`, `.cdi`...) und Modul-ROMs (`.nes`, `.sfc`, `.smc`, `.n64`, `.z64`, `.gb`, `.gbc`, `.gba`, `.nds`, `.3ds`, `.gen`, `.sms`, `.gg`...).

Die Dateien eines Spiels, etwa eine `.cue` mit ihren `.bin`-Dateien oder mehrere Discs, teilen sich eine Zeile. Die Suche lässt die Tags des Namens weg (`(USA)`, `(Rev 1)`, `[SLUS-12345]`).

Spiele werden nach Plattform sortiert, erkannt an einem Tag `[SNES]` im Namen, an der Endung oder an einem Ordnernamen wie `PS1`. Ein Spiel aus einer Datei behält die Tags seines Namens, auf die ROM-Sammlungen angewiesen sind, und folgt dem [Spielformat](/de/guide/settings#ausgabeformate). Ein Spiel aus mehreren Dateien bekommt einen eigenen Ordner und behält seine Dateinamen, da eine `.cue` ihre `.bin`-Dateien beim Namen nennt:

```text
Spiele/
├── Super Nintendo/
│   └── Super Mario World (USA) (Rev 1).sfc
└── PlayStation/
    └── Final Fantasy VII (1997)/
        ├── Final Fantasy VII (USA) (Disc 1).cue
        └── Final Fantasy VII (USA) (Disc 1).bin
```

**Datenbanken:** RAWG (kostenlos) und IGDB (mit einer Verbindung).
