---
title: S.O.K Server
description: Installieren Sie S.O.K mit Docker auf einem NAS oder Heimserver und ordnen Sie Ihre Downloads über eine Webseite.
order: 7
---

S.O.K Server ist dieselbe Engine wie die App, in einem Docker-Image mit Weboberfläche. Installieren Sie es auf einem NAS oder Heimserver, geben Sie ihm Ihre Download-Ordner und ordnen Sie sie von jedem Browser aus: Es erkennt jede Datei, zeigt die neuen Namen in einer Tabelle und benennt alles auf einmal oder Zeile für Zeile um. Oder lassen Sie es [neue Downloads von selbst sortieren](#automatische-sortierung) und Discord, Jellyfin oder Plex benachrichtigen.

Standardmäßig nutzt es **Hardlinks**: Die umbenannte Datei und der Download sind dieselbe Datei auf der Platte, also werden Ihre Torrents weiter geseedet, ohne zusätzlichen Platz zu belegen.

**[Demo ausprobieren](/demo?lang=de)**: die echte Oberfläche in Ihrem Browser, mit einer Beispielbibliothek. Nichts zu installieren, und keine Datei wird umbenannt.

## Installation

S.O.K Server läuft auf jedem Rechner mit Docker, auf Intel/AMD und ARM (`amd64`, `arm64`). Legen Sie eine `docker-compose.yml` an:

```yaml
services:
  sok-server:
    image: ghcr.io/sokteam/sok-server:latest
    container_name: sok-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Berlin
    volumes:
      - /srv/sok/config:/config
      - /mnt/storage:/data
    ports:
      - 8080:8080
    restart: unless-stopped
```

Starten Sie es dann mit `docker compose up -d` und öffnen Sie `http://<ihr-server>:8080`.

| Einstellung | Wirkung |
| --- | --- |
| `/config` | Die Einstellungen, die Datenbank, der Verlauf und die Protokolle. Legen Sie es auf eine Platte mit Backup. |
| `/data` (oder ein beliebiger Ordner) | Ihre Downloads und Ihre Bibliothek, so wie der Server sie sieht. |
| `PUID`, `PGID` | Benutzer und Gruppe, unter denen der Server läuft: Ihnen gehören die Dateien, die er anlegt. Nehmen Sie die Ihres NAS-Benutzers (`id` im Terminal). |
| `TZ` | Ihre Zeitzone, für die angezeigten Daten. |
| `8080:8080` | Der Port der Oberfläche. Ändern Sie die erste Zahl, um einen anderen zu nutzen. |

### Einen gemeinsamen Ordner einbinden, für Hardlinks

Ein Hardlink funktioniert nur **innerhalb einer Einbindung**. Liegen Ihre Downloads in `/mnt/storage/downloads` und Ihre Bibliothek in `/mnt/storage/media`, binden Sie `/mnt/storage` einmal ein (`/mnt/storage:/data`) und nutzen Sie dann `/data/downloads` und `/data/media` in den Einstellungen.

Getrennt eingebunden (`/mnt/storage/downloads:/downloads` und `/mnt/storage/media:/media`) sind es zwei Einbindungen: Hardlinks zwischen ihnen schlagen fehl, selbst auf derselben Platte. Die Einstellungen sagen es Ihnen, bevor etwas umbenannt wird.

## Erster Besuch

Die erste Seite bittet Sie, Ihr Konto anzulegen: ein Benutzername und ein Passwort mit mindestens 8 Zeichen. Die Oberfläche übernimmt die Sprache Ihres Browsers; ändern Sie sie unter **Einstellungen → Erscheinungsbild**.

Sie bleiben in diesem Browser 30 Tage angemeldet. Nach 5 falschen Passwörtern warten die nächsten Versuche 30 Sekunden.

**Passwort vergessen?** Fügen Sie `SOK_RESET_PASSWORD=1` und Ihr neues Passwort in `SOK_PASSWORD` zum `environment` der Compose-Datei hinzu und starten Sie den Container neu (`docker compose up -d`). Melden Sie sich mit dem neuen Passwort an und entfernen Sie dann beide Zeilen. Ihre Einstellungen, Ihr Verlauf und Ihre Auswahl bleiben erhalten.

## Einstellungen

Öffnen Sie **Einstellungen** unten in der Seitenleiste. Sie haben fünf Reiter, und jede Änderung wird sofort gespeichert.

- **Ordner**: Ihre **Quellordner** (die Downloads) und die **Zielordner** jedes Typs (Filme, Serien, Musik, Bücher, Spiele). Klicken Sie auf **Ordner hinzufügen…** und geben Sie den Pfad so ein, wie der Server ihn sieht (`/data/downloads`, nicht den Pfad Ihres NAS), oder klicken Sie auf **Durchsuchen…**, um ihn in den Ordnern des Servers auszuwählen. Mit mehreren Zielen für einen Typ kann jede Zeile seines Reiters eines wählen.
  Darunter der **Dateimodus**: **Hardlink** (Standard), **Kopieren** oder **Verschieben**. Macht ein hinzugefügter Ordner (oder der Modus selbst) im Hardlink-Modus einen Hardlink unmöglich, erklärt ein Fenster, warum und was zu ändern ist, mit einer Schaltfläche zum Wechsel auf **Kopieren**; eine Zeile unter der Auswahl öffnet es erneut, solange das Problem besteht.
- **Automatisierung**: die [automatische Sortierung](#automatische-sortierung) und die [Benachrichtigungen](#benachrichtigungen).
- **Umbenennung**: das **Verhalten** und die **Ausgabeformate**, wie in der App (siehe [Einstellungen](/de/guide/settings)).
- **API-Schlüssel**: Anders als die App hat das Image **keinen eingebauten Schlüssel**. TMDB (Filme und Serien) braucht Ihren eigenen Schlüssel, kostenlos auf [themoviedb.org](https://www.themoviedb.org/settings/api). Deezer, MusicBrainz und Open Library funktionieren ohne. Fügen Sie einen Schlüssel ein, klicken Sie auf **Speichern** und dann auf **Testen**. Schlüssel werden verschlüsselt gespeichert und nie wieder angezeigt. Jeder Typ hat oben in seiner Gruppe seine **bevorzugte API**.
- **Erscheinungsbild**: die **Sprache** und das **Design**: **Hell** (weiß, wie unter macOS), **Orange** (wie unter Windows und Linux) oder **Dunkel**. Das Design wird pro Browser gespeichert; **System** (Standard) folgt dem hellen oder dunklen Modus Ihres Geräts, weiß auf dem Mac und orange sonst.

Schlüssel können Sie auch über Umgebungsvariablen setzen, etwa `API_KEY_TMDB_V4`: Sie erscheinen dann als *Durch eine Umgebungsvariable gesetzt* und lassen sich in der Oberfläche nicht ändern.

## Downloads analysieren

Klicken Sie auf der Seite **Analyse** auf **Analysieren**. S.O.K sortiert die Dateien Ihrer Quellordner nach Typ und sucht dann jede einzelne; der Fortschritt wird live angezeigt, und Sie können die Seite währenddessen schließen.

Oben zeigt ein Streifen Ihre Quellordner, die letzte Analyse und die automatische Sortierung; ein Problem (ein fehlender Schlüssel, ein aufgebrauchtes Kontingent, ein nicht gefundener Ordner) erscheint direkt darunter. Dann zeigt eine Tabelle für jeden Typ seine Dateien und wie viele **Bereit**, **Auszuwählen** und **Fehlend** sind: **Öffnen** führt zu seinem Reiter. **Zu prüfende Dateien** sind Dateien, deren Typ nur vermutet wird (ein Disc-Image, ein Video zwischen Folgen…): Bestätigen Sie den Typ oder wählen Sie einen anderen: Die Datei kommt in ihren Reiter und wird sofort gesucht, und die nächsten Analysen merken es sich.

Jede neue Analyse behält Ihre Auswahl: den Treffer, den Suchtext und das Ziel einer wiedergefundenen Zeile.

## Prüfen und umbenennen

Jeder Typ hat seinen Reiter, mit Dateimodus und Ziel unter dem Titel. Die Zeilen bilden eine Tabelle: das Poster, der Titel und die Datei, der **neue Name** (grün, wenn er Bereit ist) und der Status. Eine Zeile ist ein Film, ein Titel, ein Buch oder ein Spiel, oder eine ganze Serie oder ein ganzes Album mit seinen Dateien; die Reiter über der Tabelle zeigen die Zeilen eines Status.

| Status | Bedeutung |
| --- | --- |
| **Bereit** | Ein sicherer Treffer: Titel und Jahr (oder Autor, Künstler) passen. |
| **Auswählen** | Mehrere Ergebnisse kommen infrage. Klicken Sie auf die Zeile, um sie mit Poster und Zusammenfassung zu sehen, und wählen Sie das richtige. |
| **Fehlend** | Nichts gefunden. Klicken Sie auf das Suchsymbol und geben Sie einen anderen Titel ein. |

Unter dem neuen Namen steht sein Ordner; klappen Sie eine Serie auf, um jede Folge mit ihrem neuen Namen zu sehen.

Klicken Sie oben auf **Fertige umbenennen**, oder haken Sie Zeilen an (das Kästchen der Kopfzeile hakt alle an) und klicken Sie unter der Tabelle auf **Auswahl umbenennen**. Eine Bestätigung nennt die Anzahl der Dateien und den Dateimodus. Die umbenannten Zeilen verlassen die Tabelle; eine Datei, die nicht umbenannt werden konnte, bleibt mit dem Grund in ihrer Zeile.

Untertitel folgen ihrem Video (`Film.de.srt` wird zu `Dune (2021).de.srt`), wie in der App.

## Automatische Sortierung

S.O.K Server kann all das von selbst erledigen. Aktivieren Sie unter **Einstellungen → Automatisierung** die Option **Neue Dateien automatisch sortieren**: Es fragt erst nach, denn die Zeilen Bereit werden ohne Sie umbenannt, auch die schon in den Reitern.

- Alle **5 Minuten** (änderbar, von 1 bis 1440) schaut der Server in Ihre Quellordner.
- Eine Datei wird übernommen, **sobald ihr Download fertig ist**: wenn sie dieselbe Größe wie bei der vorigen Prüfung hat. Dateien, die noch geladen werden (`.part`, `.!qB`, `.crdownload`…), werden ausgelassen.
- Neue fertige Dateien starten eine Analyse, dann werden die Zeilen **Bereit** umbenannt. Die auszuwählenden Zeilen, die fehlenden und die zu prüfenden Dateien **warten auf Sie** in den Reitern, wie nach einem Klick auf **Analysieren**.
- Der Streifen der Seite **Analyse** zeigt, dass sie aktiv ist, und ihre letzte Sortierung (die umbenannten Dateien; ihre letzte Prüfung, wenn Sie darauf zeigen), und was sie gestoppt hat, erscheint darunter (ein Typ ohne Zielordner, ein fehlender Schlüssel…).

Alles, was sie umbenennt, steht im **Verlauf**, markiert als *automatisch*, und lässt sich wie der Rest rückgängig machen.

## Benachrichtigungen

Nach jeder Umbenennung, manuell oder automatisch, kann S.O.K Server Ihre anderen Apps informieren. Richten Sie sie unter **Einstellungen → Automatisierung** ein, unter der automatischen Sortierung, und klicken Sie dann auf **Testen**:

| Ziel | Was anzugeben ist | Was es tut |
| --- | --- | --- |
| **Discord** | Die Adresse eines Webhooks eines Kanals (Kanaleinstellungen → Integrationen → Webhooks) | Postet die umbenannten Dateien |
| **Jellyfin** | Seine Adresse (`http://jellyfin:8096`) und ein API-Schlüssel (Dashboard → API-Schlüssel) | Aktualisiert die Bibliotheken |
| **Plex** | Seine Adresse (`http://plex:32400`) und Ihr Plex-Token | Aktualisiert die Bibliotheken |
| **Webhook** | Eine beliebige Adresse | Sendet die Umbenennung als JSON (Home Assistant, n8n…) |

Die Webhook-Adressen, der Schlüssel und der Token werden nach dem Speichern nie wieder angezeigt.

**Ein Skript** kann ebenfalls nach jeder Umbenennung laufen, mit der Umbenennung als JSON auf seiner Eingabe und `SOK_MEDIA_TYPE`, `SOK_RENAMED` und `SOK_AUTO` in seiner Umgebung. Aus Sicherheitsgründen lässt es sich nicht auf der Webseite einrichten: Legen Sie das Skript in einen eingebundenen Ordner und geben Sie seinen Pfad im `environment` des Containers an, zum Beispiel `SOK_AFTER_RENAME=/config/after-rename.sh`.

## Verlauf und Rückgängig

Der **Verlauf** listet Ihre Umbenennungen nach Tagen, mit Uhrzeit, Typ, Dateien und Dateimodus. **Rückgängig** legt alle Dateien einer Umbenennung zurück; öffnen Sie eine Umbenennung, um jede Datei mit ihrem neuen Namen zu sehen, und klicken Sie auf **Zurücklegen**, um nur eine Datei zurückzulegen (mit ihren Untertiteln).

- Ein **Hardlink** oder eine **Kopie** wird gelöscht: Das Original hat sich nie bewegt.
- Eine **verschobene** Datei kehrt in ihren alten Ordner zurück.

Rückgängig ersetzt nie eine Datei, wie in der App (siehe [Verlauf und Rückgängig](/de/guide/history#was-rückgängig-bewirkt)).

### Bereits verarbeitete Dateien

Mit Hardlinks bleibt eine umbenannte Datei in Ihren Downloads. S.O.K merkt sie sich und lässt sie bei den nächsten Analysen aus, solange sie sich nicht ändert. Der Reiter **Bereits verarbeitet** der Seite Verlauf listet sie auf; haken Sie eine an und klicken Sie auf **Auswahl erneut analysieren**, um sie noch einmal umzubenennen. Eine rückgängig gemachte Datei wird ebenfalls wieder analysiert.

## Aktualisieren

```sh
docker compose pull
docker compose up -d
```

Ihre Einstellungen, Ihr Verlauf und Ihre Auswahl bleiben in `/config` erhalten.

## Hinter einem Reverse Proxy

S.O.K Server funktioniert hinter Nginx, Traefik oder Caddy. Fragt Ihr Proxy schon nach einer Anmeldung (Authelia, Authentik…), können Sie die Anmeldung von S.O.K mit `SOK_AUTH=none` abschalten: Ein Banner erinnert dann daran, dass der Proxy den Server schützt.
