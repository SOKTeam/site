---
title: Verlauf und Rückgängig
description: Sehen Sie Ihre Umbenennungen und legen Sie die Dateien zurück, wo sie waren.
order: 6
---

S.O.K merkt sich Ihre letzten 100 Umbenennungen. Jede lässt sich rückgängig machen, ganz oder Datei für Datei.

## Direkt nach einer Umbenennung

Die Meldung am Ende einer Umbenennung hat eine Schaltfläche **Umbenennung rückgängig machen**. Klicken Sie darauf, und die Dateien kehren mit ihrem alten Namen in ihren Ordner zurück. Auf den Seiten *Filme*, *Bücher*, *Spiele* und *Titel* kommen sie auch in die Tabelle zurück, damit Sie einen anderen Treffer wählen und sie erneut umbenennen können.

## Die Seite Verlauf

Öffnen Sie **Verlauf** in der Seitenleiste, über *Einstellungen* (auf dem Mac auch über **Darstellung → Verlauf** oder <kbd>Cmd</kbd>+<kbd>Y</kbd>). Jede Umbenennung ist eine Karte mit der Seite, auf der sie stattfand, der Anzahl der Dateien und dem Datum.

- **Rückgängig** legt nach einer Bestätigung alle Dateien der Umbenennung zurück.
- Klicken Sie auf die Karte, um ihre Dateien zu sehen, alter Name → neuer Name. Die Schaltfläche **↺** neben einer Datei legt nur diese Datei zurück.
- Eine rückgängig gemachte Umbenennung ist mit *Rückgängig gemacht* markiert, oder mit *Teilweise rückgängig gemacht*, wenn nur einige ihrer Dateien zurückgekehrt sind.
- **Verlauf leeren** vergisst nach einer Bestätigung alle Umbenennungen. Die Dateien bleiben, wo sie sind, aber die Umbenennungen lassen sich nicht mehr rückgängig machen.

## Was Rückgängig bewirkt

- Jede Datei kehrt mit ihrem alten Namen in ihren alten Ordner zurück. Ihre Untertitel kommen mit.
- Eine Datei, die per **Hardlink** oder **Kopie** umbenannt wurde, wird gelöscht, wenn das Original noch da ist: Das Original hat sich nie bewegt.
- Hat eine Umbenennung eine Datei ersetzt und war *Backup vor dem Umbenennen* aktiv, wird die ersetzte Datei zurückgelegt.
- Die bei der Umbenennung gespeicherten Poster und Cover werden gelöscht, sobald alle ihre Dateien zurück sind. Bilder, die schon vorher da waren, werden nie angefasst.
- Die von der Umbenennung angelegten Ordner werden gelöscht, wenn sie leer zurückbleiben.

Rückgängig **ersetzt nie eine Datei**. Eine Datei bleibt, wo sie ist, und steht mit dem Grund in der Meldung, wenn:

- sie seit der Umbenennung **verschoben oder gelöscht** wurde;
- **eine andere Datei ihren alten Namen trägt** im alten Ordner.

Verschieben oder benennen Sie diese Datei selbst um und klicken Sie dann erneut auf **Rückgängig**: Bereits zurückgelegte Dateien werden übersprungen.
