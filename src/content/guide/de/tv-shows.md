---
title: Serien
description: Benennen Sie Ihre Folgen um und sortieren Sie sie in Serien- und Staffelordner.
order: 2
---

Die Seite **Serien** macht aus einem Ordner mit Folgen eine nach Serie und Staffel geordnete Bibliothek.

## Bevor Sie beginnen

S.O.K findet die Staffel- und Folgennummer in jedem Dateinamen. Die häufigsten Schreibweisen sind:

| Schreibweise | Beispiel |
| --- | --- |
| `S01E02` | `breaking.bad.s01e02.720p.mkv` |
| `1x02` | `Breaking Bad 1x02.mkv` |
| `Season 1 Episode 2` | `Breaking Bad Season 1 Episode 2.mkv` |

Dateien ohne Staffel- und Folgennummer behalten ihren ursprünglichen Namen.

**Unterstützte Formate:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Schritt für Schritt

### 1. Quellordner hinzufügen

Ziehen Sie einen oder mehrere Ordner auf **Quellordner**, oder klicken Sie auf den Bereich, um sie auszuwählen. S.O.K durchsucht auch die Unterordner.

Der Titel der Vorschau zeigt, wie viele Dateien gefunden wurden, zum Beispiel *Vorschau (10 Dateien von Season 1)*.

### 2. Serie auswählen

S.O.K liest den Namen der ersten Datei, errät die Serie und wählt von selbst das erste Suchergebnis.

Wenn es nicht die richtige Serie ist:

1. Geben Sie den Namen ins Suchfeld ein. Die Suche startet ab 2 Zeichen.
2. Klicken Sie auf das richtige Ergebnis in der Liste. Poster und Jahr helfen, Neuverfilmungen zu unterscheiden.

Sobald eine Serie gewählt ist, lädt S.O.K ihre Folgenliste. Die Meldung *Lade Episoden...* erscheint kurz.

### 3. Ziel wählen

Ziehen Sie einen Ordner auf **Ziel**, oder klicken Sie darauf, um ihn auszuwählen. Meist ist das der Stammordner Ihrer Serienbibliothek (zum Beispiel `D:\Medien\Serien`).

### 4. Vorschau prüfen

Der Bereich **Vorschau** zeigt den aktuellen und den neuen Namen jeder Datei. Nur die ersten 15 Dateien werden aufgelistet; eine Zeile wie *+ 12 andere...* fasst den Rest zusammen.

### 5. Organisieren

Klicken Sie auf **Dateien organisieren** und bestätigen Sie. Ein Fortschrittsbalken zeigt jede Datei, während sie verschoben wird.

## Ergebnis

Mit den Standardeinstellungen erhalten Sie:

```text
Serien/
└── Breaking Bad/
    ├── Staffel 1/
    │   ├── Breaking Bad S01E01 Der Einstieg.mkv
    │   └── Breaking Bad S01E02 Die Katze ist im Sack.mkv
    └── Staffel 2/
        └── ...
```

Das Format der Dateinamen ändern Sie unter [Einstellungen → Ausgabeformate](/de/guide/settings#ausgabeformate). Die Meldung am Ende hat eine Schaltfläche **Umbenennung rückgängig machen**, und jede Ordnung steht auf der Seite [Verlauf](/de/guide/history).

## Serienordner erstellen

Sobald Serie und Ziel gewählt sind, erscheint die Schaltfläche **Serienordner erstellen**. Sie legt den Serienordner und einen leeren Ordner pro Staffel an, ohne Dateien zu verschieben. Das ist praktisch, um eine Bibliothek vorzubereiten, bevor Folgen hinzukommen.
