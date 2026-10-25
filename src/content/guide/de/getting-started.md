---
title: Erste Schritte
description: Installieren Sie S.O.K, lernen Sie die Oberfläche kennen und ordnen Sie Ihren ersten Ordner.
order: 1
---

S.O.K (Storage Organisation Kit) erkennt Ihre Mediendateien mithilfe von Online-Datenbanken, benennt sie um und verschiebt sie in eine saubere Bibliothek, die mit Plex, Jellyfin und Kodi funktioniert.

## Installation

S.O.K gibt es für **Windows 10 und 11 (64 Bit)**, **macOS auf Apple Silicon** (M1 oder neuer) und **Linux** (64 Bit, Intel/AMD oder ARM).

### Windows

1. Öffnen Sie die Seite [Download](/de/download) und laden Sie das Installationsprogramm herunter (`SOK_Setup_vX.Y.Z.exe`).
2. Starten Sie das Installationsprogramm. Es ist auf Englisch; setzen Sie bei Bedarf den Haken bei **Create a desktop shortcut**, um eine Desktop-Verknüpfung anzulegen.
3. Starten Sie **S.O.K** über das Startmenü oder vom Desktop aus.

> Windows SmartScreen kann beim ersten Start des Installationsprogramms eine Warnung anzeigen. Klicken Sie auf **Weitere Informationen** und dann auf **Trotzdem ausführen**.

### macOS

1. Öffnen Sie die Seite [Download](/de/download) und laden Sie das Festplattenabbild herunter (`SOK_macOS_vX.Y.Z.dmg`).
2. Öffnen Sie das Abbild und ziehen Sie **S.O.K** in den Ordner **Programme**.
3. Starten Sie **S.O.K** aus dem Ordner Programme oder über das Launchpad.

> Beim ersten Öffnen meldet macOS, dass der Entwickler nicht überprüft werden kann. Schließen Sie die Meldung, öffnen Sie dann **Systemeinstellungen → Datenschutz & Sicherheit**, scrollen Sie nach unten und klicken Sie neben der Meldung zu S.O.K auf **Dennoch öffnen**. Bestätigen Sie mit Ihrem Passwort. Das ist nur einmal nötig.

### Linux

S.O.K wird als AppImage geliefert: eine einzige Datei, die auf den meisten Distributionen läuft, ohne Installation.

1. Öffnen Sie die Seite [Download](/de/download) und laden Sie das AppImage für Ihren Prozessor herunter:
   - **Intel/AMD** (`SOK_Linux_vX.Y.Z_x86_64.AppImage`) für die meisten PCs.
   - **ARM** (`SOK_Linux_vX.Y.Z_aarch64.AppImage`) für ARM-PCs.

   Nicht sicher? Führen Sie `uname -m` in einem Terminal aus: Es gibt `x86_64` oder `aarch64` aus.
2. Erlauben Sie das Ausführen der Datei: Klicken Sie sie im Dateimanager mit der rechten Maustaste an, öffnen Sie **Eigenschaften** und aktivieren Sie **Ausführen der Datei als Programm erlauben** (die Bezeichnung hängt von Ihrer Desktop-Umgebung ab). Im Terminal: `chmod +x SOK_Linux_*.AppImage`.
3. Doppelklicken Sie auf die Datei, um **S.O.K** zu starten. Es trägt sich in Ihr Anwendungsmenü ein, sodass Sie es beim nächsten Mal dort starten können.

> Die Intel/AMD-Version braucht Ubuntu 22.04, Debian 12, Fedora 35 oder eine neuere Distribution. Die ARM-Version braucht Ubuntu 24.04, Debian 13, Fedora 40 oder neuer.

S.O.K funktioniert ohne Einrichtung: Die wichtigsten Datenbanken (TMDB, TVDB) haben einen eingebauten Schlüssel. Sie brauchen nur eine Internetverbindung.

## Die Oberfläche

Das Fenster hat zwei Bereiche:

- **Seitenleiste (links)**: zum Wechseln zwischen den Seiten. Klicken Sie oben auf das Menüsymbol, um sie ein- oder auszuklappen.
  - **Bibliothek**: *Startseite*, *Serien*, *Filme*, *Musik*, *Bücher*, *Spiele*
  - **Allgemein**: *Verlauf*, *Einstellungen*
- **Hauptbereich (rechts)**: die gewählte Seite.

### Startseite

- **Die Ablagefläche**: Legen Sie beliebige Dateien oder Ordner darauf ab. S.O.K sortiert sie nach Typ (Filme, Serien, Alben, Titel, Bücher, Spiele) und zeigt eine Gruppe pro Serie, pro Album und pro Typ. Klicken Sie auf **Öffnen**, um eine Gruppe an ihre Seite zu schicken; sind alle Dateien vom selben Typ, öffnet sich ihre Seite direkt. Dateien, deren Typ nur vermutet wird, etwa ein Disc-Image, das ein Spiel oder ein Video sein kann, stehen unter *Zu prüfen* mit dem Grund: Wählen Sie ihren Typ und klicken Sie auf **Hinzufügen**.
- **Laufwerksüberwachung** zeigt den freien Speicher auf jedem Laufwerk (auf dem Mac das Startvolume und die eingebundenen Volumes, unter Linux die Systemplatte und die in `/media`, `/run/media` oder `/mnt` eingebundenen Platten). Das Symbol ist grün bei mehr als 20 % freiem Speicher, orange unter 20 % und rot unter 10 %.
- **Schnellzugriff** hat eine Karte pro Medientyp. Klicken Sie auf eine Karte, um ihre Seite zu öffnen.

## Ihre erste Ordnung

Am schnellsten sehen Sie S.O.K bei einer Serie in Aktion:

1. Öffnen Sie **Serien** in der Seitenleiste.
2. Ziehen Sie den Ordner mit Ihren Folgen auf **Quellordner**, oder klicken Sie darauf, um ihn auszuwählen.
3. S.O.K errät den Seriennamen aus der ersten Datei und startet von selbst eine Suche. Ist das erste Ergebnis falsch, geben Sie einen anderen Namen ein und klicken Sie auf das richtige Ergebnis.
4. Ziehen Sie einen Ordner auf **Ziel**, oder klicken Sie darauf, um ihn auszuwählen. Dort entsteht Ihre Bibliothek.
5. Prüfen Sie die **Vorschau** rechts, klicken Sie dann auf **Dateien organisieren** und bestätigen Sie.

Eine Meldung zeigt anschließend, wie viele Dateien geordnet wurden. Auf dem Mac bietet sie an, das Ziel im Finder zu zeigen. Klicken Sie auf **Umbenennung rückgängig machen**, wenn etwas schiefgelaufen ist: Die Dateien kehren an ihren Platz zurück.

> **Wichtig:** Standardmäßig werden die Dateien **verschoben**: Sie verlassen den Quellordner und landen im Ziel. Wählen Sie **Hardlink** oder **Kopieren** unter [Einstellungen → Verhalten](/de/guide/settings#verhalten), um die Originale zu behalten. Sie können eine Umbenennung auf der Seite [Verlauf](/de/guide/history) rückgängig machen, solange die Dateien seitdem nicht verschoben wurden.

## Wie es weitergeht

- [Serien](/de/guide/tv-shows): Serien, Staffeln und Folgen
- [Filme](/de/guide/movies): einen ganzen Ordner mit Filmen auf einmal umbenennen
- [Musik, Bücher und Spiele](/de/guide/music-books-games)
- [Verlauf und Rückgängig](/de/guide/history): umbenannte Dateien zurücklegen
- [Einstellungen](/de/guide/settings): Design, Sprache, Namensformate, API-Schlüssel
- [FAQ und Fehlerbehebung](/de/guide/faq)
