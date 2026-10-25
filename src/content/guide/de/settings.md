---
title: Einstellungen
description: Design, Sprache, Aus- und Eingabeformate, Datenbanken, API-Schlüssel und Verhalten.
order: 5
---

Öffnen Sie **Einstellungen** unten in der Seitenleiste. Jede Änderung wird sofort gespeichert: Es gibt keine Schaltfläche *Speichern*.

## API-Schlüssel

S.O.K bezieht seine Informationen aus Online-Datenbanken. Dieser Bereich listet sie nach Kategorie (Video, Musik, Bücher, Spiele, Bilder) mit ihrem Status auf.

| Art | Dienste | Was Sie tun müssen |
| --- | --- | --- |
| **Eingebauter Schlüssel** | TMDB, TVDB, Fanart.tv | Nichts. Ein Schlüssel ist dabei. Sie können Ihren eigenen Schlüssel im Feld *Benutzerdefinierter Schlüssel (Optional)* eingeben. |
| **Kostenlos** | Deezer, MusicBrainz, Google Books, Open Library, RAWG | Nichts. |
| **Verbindung** | Spotify, IGDB | Klicken Sie auf **Verbinden** und folgen Sie den Schritten. |
| **Persönlicher Schlüssel** | OMDb (IMDb), Last.fm | Erstellen Sie einen kostenlosen Schlüssel auf der Website des Dienstes und fügen Sie ihn ein. |

### Einen persönlichen Schlüssel hinzufügen

1. Klicken Sie neben dem Dienst auf **Holen**. S.O.K öffnet die Seite, auf der Sie einen Schlüssel erstellen können.
2. Kopieren Sie den Schlüssel und fügen Sie ihn ins Feld ein. Er wird gespeichert, wenn Sie <kbd>Eingabe</kbd> drücken oder das Feld verlassen; leeren Sie das Feld, um ihn zu entfernen.
3. Klicken Sie auf **Testen**. Der Status wechselt zu *Betriebsbereit*, wenn der Schlüssel funktioniert, sonst zu *Ungültiger Schlüssel*.

### Ein Konto verbinden

1. Klicken Sie neben Spotify oder IGDB auf **Verbinden**.
2. S.O.K fragt nach dem API-Schlüssel (und dem Secret, falls der Dienst eines braucht) und kann die Seite des Dienstes öffnen, um ihn zu erstellen.
3. Bei Erfolg wechselt der Status zu *Verbunden*.

Um die Verbindung zu entfernen, klicken Sie auf **Trennen**.

> Ihre Schlüssel werden verschlüsselt auf Ihrem Rechner gespeichert.

## Bevorzugte API

Wählen Sie für jede Kategorie, welche Datenbank S.O.K zuerst nutzt. Eine Warnung ⚠️ erscheint, wenn der gewählte Dienst noch einen Schlüssel braucht.

## Standardordner

Speichert den Ordner jeder Ihrer Bibliotheken (Videos, Musik, Bücher, Spiele). Klicken Sie auf **Durchsuchen**, um einen zu wählen.

Öffnet sich eine Seite mit leerem *Ziel*, füllt S.O.K es mit dem Standardordner dieses Medientyps. Sie können trotzdem einen anderen Ordner wählen.

## Ausgabeformate

Legt fest, wie Dateien umbenannt werden. Geben Sie ein neues Muster ins Feld ein. Wörter in geschweiften Klammern werden durch die Angaben des Mediums ersetzt.

| Medium | Standardformat | Verfügbare Variablen |
| --- | --- | --- |
| **TV-Serie** | `{title} S{season}E{episode} {episode_title}` | `{title}`, `{season}`, `{episode}`, `{episode_title}` |
| **Filme** | `{title} ({year})` | `{title}`, `{year}`, `{quality}` |
| **Musik** | `{artist} - {album}/{track} - {title}` | `{artist}`, `{album}`, `{track}`, `{title}`, `{year}` |
| **Buch** | `{author} - {title} ({year})` | `{author}`, `{title}`, `{year}`, `{series}`, `{series_number}` |
| **Spiel** | `{title} {tags}` | `{title}`, `{year}`, `{platform}`, `{tags}` |

**Beispiele:**

- `{title} - S{season}E{episode} - {episode_title}` ergibt `Breaking Bad - S01E01 - Der Einstieg.mkv`
- `{title} ({year}) [{quality}]` ergibt `Inception (2010) [1080p].mkv`
- `{artist}/{year} - {album}/{track}. {title}` ergibt `Daft Punk/2001 - Discovery/01. One More Time.mp3`

Im Musikformat legt jeder `/` einen Ordner an. Ein Wert, den eine Datei nicht hat, wird samt Umgebung weggelassen: Ohne Jahr ergibt `{title} ({year})` nur `Titel`. `{series}` und `{series_number}` stammen aus dem ursprünglichen Namen des Buchs (`Autor - [Dune 2] - Titel`). `{tags}` sind die Tags im ursprünglichen Namen des Spiels, etwa `(USA) (Rev 1)`.

Zeichen, die Windows in Dateinamen verbietet (`< > : " / \ | ? *`), werden entfernt.

## Eingabeformate

Beschreibt, wie **Ihre** Dateien benannt sind, damit S.O.K Namen liest, die es nicht kennt. Nutzen Sie die Variablen der Ausgabeformate:

1. Wählen Sie den Typ (TV-Serie, Filme, Musik, Buch, Spiel).
2. Geben Sie ein Muster ein, zum Beispiel `{artist} - {year} - {album} - {track} - {title}`, und klicken Sie auf **Hinzufügen**.
3. Prüfen Sie es mit **Testen**: Fügen Sie einen Dateinamen mit Endung ein, und S.O.K zeigt, was es liest und welches Muster es verwendet hat.

Ihre Muster werden vor den Schreibweisen probiert, die S.O.K schon kennt. Fahren Sie mit der Maus über das **ⓘ** neben dem Titel, um diese Schreibweisen und die Variablen jedes Typs zu sehen.

- Leerzeichen, Punkte und Unterstriche sind dasselbe Trennzeichen: `{title} {year}` liest auch `The.Matrix.1999`.
- `{ignore}` überspringt einen Teil des Namens, etwa die Qualität oder die Release-Gruppe: `{title} {year} {ignore}` liest `Dune.2021.1080p.BluRay-GROUP`.
- `{year}` nimmt vier Ziffern, und die Nummern von Staffel, Folge, Titel und Disc nehmen Ziffern.
- Ein Muster für TV-Serien braucht `{episode}`, die anderen brauchen `{title}`.

Ein Video, das ein TV-Serien-Muster liest, zählt auf der Startseite als Folge, und eines, das ein Filme-Muster liest, als Film.

## Erscheinungsbild

- **Dunkelmodus**: wechselt zwischen dem dunklen und dem orangen Design.
- **Systemdarstellung verwenden** (nur macOS): folgt dem hellen oder dunklen Modus aus den macOS-Einstellungen.
- **Akzentfarbe des Systems verwenden** (nur macOS): nutzt die Akzentfarbe aus *Systemeinstellungen → Erscheinungsbild*.
- **Sprache**: English, Français, Deutsch, Español, Italiano, Português, Русский, Polski. Die Sprache bestimmt auch die Wörter in Ordnernamen (*Season*, *Saison*, *Staffel*...).

## Verhalten

| Option | Wirkung |
| --- | --- |
| **Dateimodus** | **Verschieben** (Standard): Die Dateien verlassen den Quellordner. **Hardlink**: Das Original bleibt, wo es ist, damit Torrents weiter geseedet werden, ohne zusätzlichen Platz; das Ziel muss auf demselben Laufwerk liegen. **Kopieren**: Das Original bleibt, und die Kopie belegt den Platz doppelt. |
| **Untertitel mit den Videos verschieben** | Untertitel, die wie ihr Video heißen (`Film.srt`, `Film.de.srt`, `Film.en.forced.srt`), werden mit ihm umbenannt und verschoben: `Dune (2021).de.srt`. Standardmäßig aktiv. |
| **Fehlende Ordner erstellen** | Legt Serien- und Staffelordner im Ziel an, wenn es sie nicht gibt. |
| **Poster herunterladen** | Speichert nach einer Umbenennung das Poster oder Cover jedes Elements dort, wo Plex, Jellyfin und Kodi es suchen: `Film (Jahr)-poster.jpg` neben einem Film, `poster.jpg` in einem Serienordner, `cover.jpg` in einem Album- oder Buchordner. Ein vorhandenes Bild bleibt erhalten. Spiele bekommen keines. Standardmäßig aus. |
| **Backup vor dem Umbenennen** | Gibt es im Ziel schon eine Datei mit demselben Namen, wird vor dem Ersetzen eine Kopie mit der Endung `.backup` behalten. |
| **Duplikate überspringen** | Gibt es im Ziel schon eine Datei mit demselben Namen, bleibt die Quelldatei, wo sie ist, statt sie zu ersetzen. |
| **Operationen protokollieren** | Schreibt jede Verschiebung in die Protokolldatei. |

## Über

- **Version**: die Version, die Sie nutzen.
- **Nach Updates suchen**: Beim Start meldet S.O.K, wenn eine neue Version verfügbar ist. Unter Linux kann es das AppImage durch die neue Version ersetzen und neu starten.
- **Discord Rich Presence**: zeigt in Ihrem Discord-Profil, was Sie gerade in S.O.K tun.
- **Einstellungen zurücksetzen**: setzt nach einer Bestätigung jede Einstellung auf ihren Standardwert zurück.
