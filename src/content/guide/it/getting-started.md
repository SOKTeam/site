---
title: Primi passi
description: Installi S.O.K, scopra l'interfaccia e ordini la Sua prima cartella.
order: 1
---

S.O.K (Storage Organisation Kit) riconosce i Suoi file multimediali grazie a database online, poi li rinomina e li sposta in una libreria pulita, compatibile con Plex, Jellyfin e Kodi.

## Installazione

S.O.K è disponibile per **Windows 10 e 11 (64 bit)**, **macOS su Apple Silicon** (M1 o successivo) e **Linux** (64 bit, Intel/AMD o ARM).

### Windows

1. Vada alla pagina [Download](/it/download) e scarichi il programma di installazione (`SOK_Setup_vX.Y.Z.exe`).
2. Avvii il programma di installazione. È in inglese; spunti **Create a desktop shortcut** se desidera un collegamento sul desktop.
3. Avvii **S.O.K** dal menu Start o dal desktop.

> Windows SmartScreen può mostrare un avviso al primo avvio del programma di installazione. Clicchi su **Ulteriori informazioni**, poi su **Esegui comunque**.

### macOS

1. Vada alla pagina [Download](/it/download) e scarichi l'immagine disco (`SOK_macOS_vX.Y.Z.dmg`).
2. Apra l'immagine disco e trascini **S.O.K** nella cartella **Applicazioni**.
3. Avvii **S.O.K** dalla cartella Applicazioni o dal Launchpad.

> La prima volta che apre S.O.K, macOS dice che non può verificare lo sviluppatore. Chiuda il messaggio, poi apra **Impostazioni di Sistema → Privacy e sicurezza**, scorra verso il basso e clicchi su **Apri comunque** accanto al messaggio su S.O.K. Confermi con la Sua password. Va fatto una sola volta.

### Linux

S.O.K è distribuito come AppImage: un unico file che funziona sulla maggior parte delle distribuzioni, senza nulla da installare.

1. Vada alla pagina [Download](/it/download) e scarichi l'AppImage per il Suo processore:
   - **Intel/AMD** (`SOK_Linux_vX.Y.Z_x86_64.AppImage`) per la maggior parte dei PC.
   - **ARM** (`SOK_Linux_vX.Y.Z_aarch64.AppImage`) per i PC ARM.

   Non è sicuro? Esegua `uname -m` in un terminale: stampa `x86_64` o `aarch64`.
2. Consenta l'esecuzione del file: lo apra con il tasto destro nel gestore di file, apra **Proprietà** e attivi **Consenti l'esecuzione del file come programma** (la dicitura dipende dal Suo desktop). In un terminale: `chmod +x SOK_Linux_*.AppImage`.
3. Faccia doppio clic sul file per avviare **S.O.K**. Si aggiunge al menu delle applicazioni, così la prossima volta potrà avviarlo da lì.

> La versione Intel/AMD richiede Ubuntu 22.04, Debian 12, Fedora 35 o una distribuzione più recente. La versione ARM richiede Ubuntu 24.04, Debian 13, Fedora 40 o più recente.

S.O.K funziona senza configurazione: i database principali (TMDB, TVDB) hanno una chiave integrata. Serve solo una connessione a internet.

## L'interfaccia

La finestra ha due zone:

- **Barra laterale (a sinistra)**: per passare da una pagina all'altra. Clicchi sull'icona del menu in alto per comprimerla o espanderla.
  - **Biblioteca**: *Home*, *Serie TV*, *Film*, *Musica*, *Libri*, *Giochi*
  - **Generale**: *Cronologia*, *Impostazioni*
- **Zona principale (a destra)**: la pagina scelta.

### Pagina Home

- **La zona di rilascio**: vi trascini qualsiasi file o cartella. S.O.K li ordina per tipo (film, serie TV, album, brani, libri, giochi) e mostra un gruppo per serie, per album e per tipo. Clicchi su **Apri** per inviare un gruppo alla sua pagina; quando tutti i file sono dello stesso tipo, la sua pagina si apre direttamente. I file il cui tipo è solo un'ipotesi, come un'immagine disco che può essere un gioco o un video, compaiono sotto *Da verificare* con il motivo: scelga il loro tipo e clicchi su **Aggiungi**.
- **Monitor dischi** mostra lo spazio libero su ciascun disco (su Mac, il disco di avvio e i volumi montati; su Linux, il disco di sistema e i dischi montati in `/media`, `/run/media` o `/mnt`). L'icona è verde oltre il 20 % di spazio libero, arancione sotto il 20 % e rossa sotto il 10 %.
- **Accesso rapido** ha una scheda per tipo di media. Clicchi su una scheda per aprirne la pagina.

## Il Suo primo riordino

Il modo più rapido per vedere S.O.K all'opera è una serie TV:

1. Apra **Serie TV** nella barra laterale.
2. **Trascini** la cartella dei Suoi episodi su **Cartelle sorgenti**, oppure ci clicchi sopra per sceglierla.
3. S.O.K deduce il nome della serie dal primo file e avvia da solo una ricerca. Se il primo risultato non è quello giusto, digiti un altro nome e clicchi sul risultato corretto.
4. **Trascini** una cartella su **Destinazione**, oppure ci clicchi sopra per sceglierla. Lì verrà creata la Sua libreria.
5. Controlli l'**Anteprima** a destra, poi clicchi su **Organizza file** e confermi.

Un messaggio indica poi quanti file sono stati riordinati. Su Mac, propone di mostrare la destinazione nel Finder. Clicchi su **Annulla la rinominazione** se qualcosa è andato storto: i file tornano dove erano.

> **Importante:** per impostazione predefinita, i file vengono **spostati**: lasciano la cartella sorgente e vanno nella destinazione. Scelga **Collegamento fisico** o **Copia** in [Impostazioni → Comportamento](/it/guide/settings#comportamento) per tenere gli originali. Può annullare una rinomina dalla pagina [Cronologia](/it/guide/history), purché i file non siano stati spostati nel frattempo.

## Passi successivi

- [Serie TV](/it/guide/tv-shows): serie, stagioni ed episodi
- [Film](/it/guide/movies): rinominare in una volta un'intera cartella di film
- [Musica, libri e giochi](/it/guide/music-books-games)
- [Cronologia e annullamento](/it/guide/history): rimettere a posto i file rinominati
- [Impostazioni](/it/guide/settings): tema, lingua, formati dei nomi, chiavi API
- [FAQ e risoluzione dei problemi](/it/guide/faq)
