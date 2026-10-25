---
title: Filme
description: Benennen Sie viele Filmdateien auf einmal um, jede mit ihrem eigenen Film.
order: 3
---

Die Seite **Filme** benennt einen ganzen Stapel Filme auf einmal um. Anders als bei Serien wird jede Datei ihrem eigenen Film zugeordnet.

**Unterstützte Formate:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Schritt für Schritt

### 1. Filme hinzufügen

Ziehen Sie Ihre Videodateien oder Ordner auf **Quelldateien**, oder klicken Sie auf den Bereich, um Dateien auszuwählen. S.O.K sucht Videos in den abgelegten Ordnern, auch in Unterordnern. Weitere fügen Sie später mit **+ Weitere Filme hinzufügen** hinzu.

S.O.K sucht dann jede Datei von selbst, anhand ihres Namens.

### 2. Jeden Treffer prüfen

Jede Datei bekommt eine Zeile mit:

- dem **Suchtext**, den Sie ändern können (Titel, mit Jahr, wenn Sie es kennen);
- einer **Liste der Treffer** aus der Datenbank;
- einem **Status**.

| Status | Bedeutung | Was zu tun ist |
| --- | --- | --- |
| ✓ **Bereit** | Ein Treffer hat den Titel der Datei und, wenn die Datei eines nennt, ihr Jahr. | Nichts. |
| ⚠ **Auswählen** | Es gibt Treffer, aber keiner oder mehrere passen genau. Der wahrscheinlichste ist ausgewählt. | Öffnen Sie die Liste und wählen Sie den richtigen Film. |
| ✗ **Fehlend** | Kein Treffer gefunden. | Korrigieren Sie den Suchtext und klicken Sie dann auf die Schaltfläche für die erneute Suche in der Zeile. |

> **Tipp:** Mit dem Jahr im Suchtext (zum Beispiel `Dune 2021`) vermeiden Sie die meisten Verwechslungen zwischen Neuverfilmungen.

**Alle erneut suchen** startet die Suche für alle Dateien neu.

### 3. Ziel wählen

Ziehen Sie einen Ordner auf **Ziel**, oder klicken Sie darauf, um einen auszuwählen.

### 4. Umbenennen

Klicken Sie auf **Alle umbenennen** und bestätigen Sie. Nur die Zeilen *Bereit* werden umbenannt: Die noch auszuwählenden Zeilen bleiben in der Tabelle, damit Sie sie fertigstellen können. Als *Fehlend* markierte Dateien bleiben, wo sie sind.

Die Meldung am Ende hat eine Schaltfläche **Umbenennung rückgängig machen**. Die umbenannten Dateien kehren dann in ihren Ordner und in die Tabelle zurück.

## Ergebnis

Mit dem Standardformat heißt jede Datei `Titel (Jahr)` und wird in den Zielordner verschoben:

```text
Filme/
├── Dune (2021).mkv
├── Inception (2010).mp4
└── Matrix (1999).mkv
```

Das Format ändern Sie unter [Einstellungen → Ausgabeformate](/de/guide/settings#ausgabeformate), zum Beispiel um die Qualität mit `{quality}` hinzuzufügen.
