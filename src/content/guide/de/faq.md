---
title: FAQ und Fehlerbehebung
description: Antworten auf häufige Fragen und Lösungen für häufige Probleme.
order: 7
---

## Allgemein

### Ist S.O.K kostenlos?

Ja. S.O.K ist kostenlos und Open Source, unter der MIT-Lizenz. Der Quellcode liegt auf [GitHub](https://github.com/SOKTeam/S.O.K).

### Läuft S.O.K auf einem NAS oder einem Heimserver?

Ja: [S.O.K Server](/de/guide/server) ist ein Docker-Image mit Weboberfläche. Es ordnet Ihre Downloads mit Hardlinks, damit Torrents weiter geseedet werden, und kann neue Downloads von selbst sortieren.

### Kopiert oder verschiebt S.O.K meine Dateien?

Standardmäßig **verschiebt** es sie: Nach einer Ordnung sind die Dateien nicht mehr im Quellordner. Unter [Einstellungen → Verhalten](/de/guide/settings#verhalten) kann der Dateimodus sie **kopieren** oder **Hardlinks** anlegen: Das Original bleibt, wo es ist (ein Torrent wird weiter geseedet), ohne zusätzlichen Platz zu belegen. Prüfen Sie die Vorschau, bevor Sie bestätigen. Ist etwas schiefgelaufen, machen Sie die Umbenennung in der Meldung am Ende oder auf der Seite [Verlauf](/de/guide/history) rückgängig.

### Ist meine Bibliothek mit Plex, Jellyfin oder Kodi kompatibel?

Ja. Die Standardnamen und -ordner (`Serie/Staffel 1/Serie S01E01 Titel.mkv`, `Film (Jahr).mkv`) folgen den Konventionen, die diese Medienserver erwarten.

### Brauche ich ein Konto oder einen API-Schlüssel?

Nein, nicht für Serien und Filme: TMDB und TVDB haben einen eingebauten Schlüssel. Nur manche Dienste brauchen eine Verbindung (Spotify, IGDB) oder einen persönlichen Schlüssel (OMDb, Last.fm). Siehe [Einstellungen → API-Schlüssel](/de/guide/settings#api-schlüssel).

### Braucht S.O.K eine Internetverbindung?

Ja, um die Datenbanken zu durchsuchen. Umbenennen und Verschieben finden auf Ihrem Rechner statt.

## Probleme

### „Keine Dateien gefunden“

- Prüfen Sie, ob der Ordner Dateien in einem [unterstützten Format](/de/guide/tv-shows#bevor-sie-beginnen) enthält.
- Prüfen Sie, ob Sie auf der richtigen Seite sind: Ein Videoordner auf der Seite *Musik* findet nichts.

### Die Suche findet mein Medium nicht

- Geben Sie mindestens 2 Zeichen ein.
- Suchen Sie nach dem Originaltitel oder nach dem Titel in der Sprache, die in den *Einstellungen* gewählt ist.
- Fügen Sie auf der Seite *Filme* das Jahr zum Suchtext hinzu: `Dune 2021`.
- Prüfen Sie Ihre Internetverbindung.

### Ein Dateiname wird falsch gelesen

Der angezeigte Titel, das Jahr oder die Titelnummer stimmt nicht: S.O.K weiß nicht, wie Ihre Dateien benannt sind. Fügen Sie ein Muster unter [Einstellungen → Eingabeformate](/de/guide/settings#eingabeformate) hinzu und prüfen Sie es mit **Testen**.

### Die falsche Serie oder der falsche Film wurde automatisch gewählt

S.O.K wählt das erste Ergebnis für den Namen, den es aus der Datei erraten hat. Geben Sie einen anderen Namen ins Suchfeld ein und klicken Sie auf das richtige Ergebnis. Die Vorschau aktualisiert sich sofort.

### Manche Folgen behalten ihren ursprünglichen Namen

Der Dateiname hat keine Staffel- und Folgennummer, die S.O.K lesen kann. Beschreiben Sie unter [Einstellungen → Eingabeformate](/de/guide/settings#eingabeformate), wie Ihre Dateien benannt sind, zum Beispiel `{title} - Episode {episode}`, oder benennen Sie die Datei so um, dass sie `S01E02` oder `1x02` enthält. Fügen Sie den Ordner dann erneut hinzu.

### „Mit Fehlern abgeschlossen“

Manche Dateien konnten nicht verschoben werden. Die häufigsten Ursachen:

- **Eine Datei ist in einem anderen Programm geöffnet** (zum Beispiel einem Mediaplayer). Schließen Sie es und versuchen Sie es erneut.
- **Ihnen fehlt die Berechtigung**, in den Zielordner zu schreiben.
- **Das Ziellaufwerk ist voll oder wurde getrennt**, während verschoben wurde.

> Gibt es im Ziel schon eine Datei mit demselben Namen, ersetzt S.O.K sie, außer *Duplikate überspringen* ist aktiv (das ist der Standard). Um die alte Datei beim Ersetzen zu behalten, aktivieren Sie *Backup vor dem Umbenennen* unter [Einstellungen → Verhalten](/de/guide/settings#verhalten).

### „Datei(en) an Ort und Stelle gelassen“ nach einem Rückgängig

Diese Dateien wurden seit der Umbenennung verschoben oder gelöscht, oder eine andere Datei trägt jetzt ihren alten Namen. S.O.K ersetzt nie eine Datei. Siehe [Verlauf und Rückgängig](/de/guide/history#was-rückgängig-bewirkt).

### „Bitte wählen Sie einen Zielordner aus.“

Der Bereich *Ziel* ist leer, oder der Ordner existiert nicht mehr. Wählen Sie ihn erneut.

### Ein Dienst zeigt „⚠️ Fehlender Schlüssel“

Dieser Dienst braucht einen Schlüssel oder eine Verbindung. Richten Sie ihn unter [Einstellungen → API-Schlüssel](/de/guide/settings#api-schlüssel) ein, oder wählen Sie unter *Bevorzugte API* einen anderen Dienst.

### Windows hält das Installationsprogramm für unsicher

Windows SmartScreen warnt vor Software, die es noch nicht kennt. Klicken Sie auf **Weitere Informationen** und dann auf **Trotzdem ausführen**. Laden Sie S.O.K immer von der Seite [Download](/de/download) oder aus den [Releases auf GitHub](https://github.com/SOKTeam/S.O.K/releases) herunter.

### macOS sagt, S.O.K kann nicht geöffnet werden

S.O.K ist noch nicht von Apple notarisiert, deshalb blockiert macOS es beim ersten Mal. Schließen Sie die Meldung, öffnen Sie dann **Systemeinstellungen → Datenschutz & Sicherheit** und klicken Sie neben der Meldung zu S.O.K auf **Dennoch öffnen**. Siehe [Erste Schritte](/de/guide/getting-started#macos).

### Beim Öffnen des AppImage unter Linux passiert nichts

- Prüfen Sie, ob die Datei als Programm laufen darf: *Eigenschaften → Ausführen der Datei als Programm erlauben*, oder `chmod +x` im Terminal. Siehe [Erste Schritte](/de/guide/getting-started#linux).
- Prüfen Sie, ob Sie die richtige Version für Ihren Prozessor geladen haben (`uname -m` gibt `x86_64` für Intel/AMD aus, `aarch64` für ARM).
- Starten Sie es aus einem Terminal, um den Fehler zu sehen. Erwähnt er FUSE, starten Sie es mit `./SOK_Linux_*.AppImage --appimage-extract-and-run`.

## Weiterhin Probleme?

[Eröffnen Sie ein Issue auf GitHub](https://github.com/SOKTeam/S.O.K/issues) und beschreiben Sie, was Sie getan haben, was Sie erwartet haben und was passiert ist. Geben Sie Ihre S.O.K-Version an (zu sehen unter *Einstellungen → Über*).
