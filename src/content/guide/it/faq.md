---
title: FAQ e risoluzione dei problemi
description: Risposte alle domande frequenti e soluzioni ai problemi comuni.
order: 7
---

## Generale

### S.O.K è gratuito?

Sì. S.O.K è gratuito e open source, con licenza MIT. Il codice sorgente è su [GitHub](https://github.com/SOKTeam/S.O.K).

### S.O.K funziona su un NAS o un server domestico?

Sì: [S.O.K Server](/it/guide/server) è un'immagine Docker con interfaccia web. Riordina i Suoi download con collegamenti fisici, così i torrent continuano a essere condivisi, e può ordinare da solo i nuovi download.

### S.O.K copia o sposta i miei file?

Per impostazione predefinita li **sposta**: dopo un riordino, i file non sono più nella cartella sorgente. In [Impostazioni → Comportamento](/it/guide/settings#comportamento), la modalità file può **copiarli** o creare **collegamenti fisici**: l'originale resta dov'è (un torrent continua a essere condiviso) senza occupare altro spazio. Controlli l'anteprima prima di confermare. Se qualcosa è andato storto, annulli la rinomina dal messaggio finale o dalla pagina [Cronologia](/it/guide/history).

### La mia libreria è compatibile con Plex, Jellyfin o Kodi?

Sì. I nomi e le cartelle predefiniti (`Serie/Stagione 1/Serie S01E01 Titolo.mkv`, `Film (Anno).mkv`) seguono le convenzioni attese da questi server multimediali.

### Servono un account o una chiave API?

No, non per serie TV e film: TMDB e TVDB hanno una chiave integrata. Solo alcuni servizi richiedono una connessione (Spotify, IGDB) o una chiave personale (OMDb, Last.fm). Veda [Impostazioni → Chiavi API](/it/guide/settings#chiavi-api).

### S.O.K ha bisogno di una connessione a internet?

Sì, per interrogare i database. La rinomina e lo spostamento dei file avvengono sul Suo computer.

## Problemi

### «Nessun file trovato»

- Verifichi che la cartella contenga file in un [formato supportato](/it/guide/tv-shows#prima-di-iniziare).
- Verifichi di essere sulla pagina giusta: una cartella di video aggiunta alla pagina *Musica* non trova nulla.

### La ricerca non trova il mio media

- Digiti almeno 2 caratteri.
- Cerchi il titolo originale, o il titolo nella lingua scelta nelle *Impostazioni*.
- Nella pagina *Film*, aggiunga l'anno al testo di ricerca: `Dune 2021`.
- Verifichi la Sua connessione a internet.

### Un nome di file viene letto male

Il titolo, l'anno o il numero di traccia mostrato non è quello giusto: S.O.K non sa come sono chiamati i Suoi file. Aggiunga uno schema in [Impostazioni → Formati di ingresso](/it/guide/settings#formati-di-ingresso) e lo verifichi con **Prova**.

### È stata scelta automaticamente la serie o il film sbagliato

S.O.K sceglie il primo risultato per il nome dedotto dal file. Digiti un altro nome nel campo di ricerca e clicchi sul risultato giusto. L'anteprima si aggiorna subito.

### Alcuni episodi mantengono il nome originale

Il nome del file non ha un numero di stagione e di episodio che S.O.K sa leggere. Descriva come sono chiamati i Suoi file in [Impostazioni → Formati di ingresso](/it/guide/settings#formati-di-ingresso), per esempio `{title} - Episode {episode}`, oppure rinomini il file perché contenga `S01E02` o `1x02`. Poi aggiunga di nuovo la cartella.

### «Terminato con errori»

Alcuni file non sono stati spostati. Le cause più comuni:

- **Un file è aperto in un altro programma** (un lettore multimediale, per esempio). Lo chiuda e riprovi.
- **Non ha il permesso** di scrivere nella cartella di destinazione.
- **Il disco di destinazione è pieno o è stato scollegato** durante lo spostamento.

> Quando nella destinazione esiste già un file con lo stesso nome, S.O.K lo sostituisce, a meno che *Salta duplicati* non sia attivo (lo è per impostazione predefinita). Per tenere il vecchio file quando viene sostituito, attivi *Backup prima della rinomina* in [Impostazioni → Comportamento](/it/guide/settings#comportamento).

### «File lasciati al loro posto» dopo un annullamento

Questi file sono stati spostati o eliminati dopo la rinomina, oppure un altro file ora ha il loro nome precedente. S.O.K non sostituisce mai un file. Veda [Cronologia e annullamento](/it/guide/history#cosa-fa-lannullamento).

### «Si prega di selezionare una cartella di destinazione.»

La zona *Destinazione* è vuota, o la cartella non esiste più. La scelga di nuovo.

### Un servizio mostra «⚠️ Chiave mancante»

Questo servizio richiede una chiave o una connessione. Lo configuri in [Impostazioni → Chiavi API](/it/guide/settings#chiavi-api), oppure scelga un altro servizio in *API preferita*.

### Windows dice che il programma di installazione non è sicuro

Windows SmartScreen avvisa per i programmi che non conosce ancora. Clicchi su **Ulteriori informazioni**, poi su **Esegui comunque**. Scarichi sempre S.O.K dalla pagina [Download](/it/download) o dalle [versioni su GitHub](https://github.com/SOKTeam/S.O.K/releases).

### macOS dice che S.O.K non può essere aperto

S.O.K non è ancora autenticato da Apple, quindi macOS lo blocca la prima volta. Chiuda il messaggio, poi vada in **Impostazioni di Sistema → Privacy e sicurezza** e clicchi su **Apri comunque** accanto al messaggio su S.O.K. Veda [Primi passi](/it/guide/getting-started#macos).

### Non succede nulla quando apro l'AppImage su Linux

- Verifichi che il file possa essere eseguito come programma: *Proprietà → Consenti l'esecuzione del file come programma*, oppure `chmod +x` in un terminale. Veda [Primi passi](/it/guide/getting-started#linux).
- Verifichi di aver scaricato la versione giusta per il Suo processore (`uname -m` stampa `x86_64` per Intel/AMD, `aarch64` per ARM).
- La avvii da un terminale per vedere l'errore. Se cita FUSE, la avvii con `./SOK_Linux_*.AppImage --appimage-extract-and-run`.

## Ancora bloccato?

[Apra una issue su GitHub](https://github.com/SOKTeam/S.O.K/issues) e descriva cosa ha fatto, cosa si aspettava e cosa è successo. Aggiunga la Sua versione di S.O.K (mostrata in *Impostazioni → Informazioni*).
