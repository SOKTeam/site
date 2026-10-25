---
title: S.O.K Server
description: Installi S.O.K su un NAS o un server domestico con Docker e riordini i Suoi download da una pagina web.
order: 7
---

S.O.K Server è lo stesso motore dell'app, in un'immagine Docker con interfaccia web. Lo installi su un NAS o un server domestico, gli indichi le cartelle dei download e le riordini da qualsiasi browser: riconosce ogni file, mostra i nuovi nomi in una tabella e rinomina tutto in una volta o riga per riga. Oppure lo lasci [ordinare da solo i nuovi download](#ordinamento-automatico) e avvisare Discord, Jellyfin o Plex.

Usa i **collegamenti fisici** per impostazione predefinita: il file rinominato e il download sono lo stesso file sul disco, così i Suoi torrent continuano a essere condivisi senza occupare altro spazio.

**[Provi la demo](/demo?lang=it)**: la vera interfaccia nel Suo browser, con una libreria di esempio. Niente da installare, e nessun file viene rinominato.

## Installarlo

S.O.K Server funziona su qualsiasi computer con Docker, su Intel/AMD e ARM (`amd64`, `arm64`). Crei un `docker-compose.yml`:

```yaml
services:
  sok-server:
    image: ghcr.io/sokteam/sok-server:latest
    container_name: sok-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Rome
    volumes:
      - /srv/sok/config:/config
      - /mnt/storage:/data
    ports:
      - 8080:8080
    restart: unless-stopped
```

Poi lo avvii con `docker compose up -d` e apra `http://<il-suo-server>:8080`.

| Impostazione | A cosa serve |
| --- | --- |
| `/config` | Le impostazioni, il database, la cronologia e i log. Lo tenga su un disco con backup. |
| `/data` (o la cartella che preferisce) | I Suoi download e la Sua libreria, come li vede il server. |
| `PUID`, `PGID` | L'utente e il gruppo con cui gira il server: i file che crea appartengono a loro. Usi quelli del Suo utente del NAS (`id` in un terminale). |
| `TZ` | Il Suo fuso orario, per le date mostrate. |
| `8080:8080` | La porta dell'interfaccia. Cambi il primo numero per usarne un'altra. |

### Monti una sola cartella genitore, per i collegamenti fisici

Un collegamento fisico funziona solo **all'interno di uno stesso montaggio**. Se i Suoi download sono in `/mnt/storage/downloads` e la Sua libreria in `/mnt/storage/media`, monti `/mnt/storage` una sola volta (`/mnt/storage:/data`), poi usi `/data/downloads` e `/data/media` nelle impostazioni.

Montarle separatamente (`/mnt/storage/downloads:/downloads` e `/mnt/storage/media:/media`) crea due montaggi: i collegamenti fisici tra loro falliscono, anche sullo stesso disco. Le impostazioni glielo segnalano prima di qualsiasi rinomina.

## Prima visita

La prima pagina Le chiede di creare il Suo account: un nome utente e una password di almeno 8 caratteri. L'interfaccia prende la lingua del Suo browser; la cambi in **Impostazioni → Aspetto**.

Resta connesso per 30 giorni in quel browser. Dopo 5 password errate, i tentativi successivi attendono 30 secondi.

**Password dimenticata?** Aggiunga `SOK_RESET_PASSWORD=1` e la Sua nuova password in `SOK_PASSWORD` all'`environment` del file compose, poi riavvii il container (`docker compose up -d`). Acceda con la nuova password, poi tolga entrambe le righe. Le Sue impostazioni, la cronologia e le Sue scelte vengono mantenute.

## Impostazioni

Apra **Impostazioni** in fondo alla barra laterale. Hanno cinque schede, e ogni modifica viene salvata subito.

- **Cartelle**: le Sue **cartelle sorgenti** (i download) e le **cartelle di destinazione** di ogni tipo (film, serie TV, musica, libri, giochi). Clicchi su **Aggiungi una cartella…**, poi digiti il percorso come lo vede il server (`/data/downloads`, non il percorso del Suo NAS) o clicchi su **Sfoglia…** per sceglierlo tra le cartelle del server. Con più destinazioni per un tipo, ogni riga della sua scheda può sceglierne una.
  Sotto, la **modalità file**: **Collegamento fisico** (predefinita), **Copia** o **Sposta**. In modalità collegamento fisico, se una cartella aggiunta (o la modalità stessa) rende impossibile un collegamento fisico, una finestra spiega perché e cosa cambiare, con un pulsante per passare a **Copia**; una riga sotto le scelte la riapre finché il problema resta.
- **Automazione**: l'[ordinamento automatico](#ordinamento-automatico) e le [notifiche](#notifiche).
- **Rinomina**: il **comportamento** e i **formati di uscita**, come nell'app (veda [Impostazioni](/it/guide/settings)).
- **Chiavi API**: a differenza dell'app, l'immagine **non ha una chiave integrata**. TMDB (film e serie TV) richiede la Sua chiave, gratuita su [themoviedb.org](https://www.themoviedb.org/settings/api). Deezer, MusicBrainz e Open Library funzionano senza. Incolli una chiave, clicchi su **Salva**, poi su **Testa**. Le chiavi sono salvate cifrate e non vengono più mostrate. Ogni tipo ha la sua **API preferita** in cima al suo gruppo.
- **Aspetto**: la **lingua** e il **tema**: **Chiaro** (bianco, come su macOS), **Arancione** (come su Windows e Linux) o **Scuro**. Il tema viene salvato in ogni browser; **Sistema** (predefinito) segue la modalità chiara o scura del Suo dispositivo, bianco su Mac e arancione altrove.

Può anche fornire le chiavi con variabili d'ambiente, come `API_KEY_TMDB_V4`: compaiono allora come *Impostata da una variabile d'ambiente* e non si possono cambiare dall'interfaccia.

## Analizzare i download

Nella pagina **Analisi**, clicchi su **Analizza**. S.O.K ordina per tipo i file delle Sue cartelle sorgenti, poi cerca ciascuno; l'avanzamento si vede in diretta, e può chiudere la pagina nel frattempo.

In alto, una striscia mostra le Sue cartelle sorgenti, l'ultima analisi e l'ordinamento automatico; un problema (una chiave mancante, una quota esaurita, una cartella non trovata) compare subito sotto. Poi una tabella indica, per ogni tipo, i suoi file e quanti sono **Pronti**, **Da scegliere** e **Mancanti**: **Apri** porta alla sua scheda. I **File da verificare** sono file il cui tipo è un'ipotesi (un'immagine disco, un video tra degli episodi…): confermi il tipo o ne scelga un altro: il file passa alla sua scheda e viene cercato subito, e le analisi successive se ne ricordano.

Ogni nuova analisi mantiene le Sue scelte: il risultato, il testo di ricerca e la destinazione di una riga ritrovata.

## Controllare e rinominare

Ogni tipo ha la sua scheda, con la modalità file e la destinazione sotto il titolo. Le righe formano una tabella: il poster, il titolo e il file, il **nuovo nome** (in verde quando è Pronto) e lo stato. Una riga è un film, un brano, un libro o un gioco, oppure un'intera serie o un intero album con i suoi file; le schede sopra la tabella mostrano le righe di uno stato.

| Stato | Significato |
| --- | --- |
| **Pronto** | Un unico risultato sicuro: il titolo e l'anno (o l'autore, l'artista) corrispondono. |
| **Scegli** | Più risultati potrebbero andare bene. Clicchi sulla riga per vederli, con il poster e il riassunto, e scelga quello giusto. |
| **Mancante** | Nessun risultato. Clicchi sull'icona di ricerca e digiti un altro titolo. |

Sotto il nuovo nome c'è la sua cartella; espanda una serie per vedere ogni episodio con il suo nuovo nome.

Clicchi su **Rinomina i pronti**, in alto, oppure spunti alcune righe (la casella dell'intestazione le spunta tutte) e clicchi su **Rinomina la selezione**, sotto la tabella. Una conferma indica il numero di file e la modalità file. Le righe rinominate lasciano la tabella; un file che non è stato possibile rinominare resta sulla sua riga con il motivo.

I sottotitoli seguono il loro video (`Film.it.srt` diventa `Dune (2021).it.srt`), come nell'app.

## Ordinamento automatico

S.O.K Server può fare tutto questo da solo. In **Impostazioni → Automazione**, attivi **Ordina automaticamente i nuovi file**: chiede prima conferma, perché le righe Pronto verranno rinominate senza di Lei, anche quelle già nelle schede.

- Ogni **5 minuti** (può cambiarlo, da 1 a 1440), il server guarda le Sue cartelle sorgenti.
- Un file viene preso **una volta finito il suo download**: quando ha la stessa dimensione del controllo precedente. I file ancora in download (`.part`, `.!qB`, `.crdownload`…) vengono tralasciati.
- I nuovi file finiti avviano un'analisi, poi le righe **Pronto** vengono rinominate. Le righe da scegliere, quelle mancanti e i file da verificare **La aspettano** nelle schede, come dopo un clic su **Analizza**.
- La striscia della pagina **Analisi** mostra che è attivo e il suo ultimo ordinamento (i file rinominati; il suo ultimo controllo passandoci sopra), e ciò che lo ha fermato compare sotto (un tipo senza cartella di destinazione, una chiave mancante…).

Tutto ciò che rinomina è nella **Cronologia**, segnato come *automatica*, e si annulla come il resto.

## Notifiche

Dopo ogni rinomina, manuale o automatica, S.O.K Server può avvisare le Sue altre app. Le imposti in **Impostazioni → Automazione**, sotto l'ordinamento automatico, poi clicchi su **Testa**:

| Destinazione | Cosa indicare | Cosa fa |
| --- | --- | --- |
| **Discord** | L'indirizzo di un webhook di un canale (impostazioni del canale → Integrazioni → Webhook) | Pubblica i file rinominati |
| **Jellyfin** | Il suo indirizzo (`http://jellyfin:8096`) e una chiave API (Pannello di controllo → Chiavi API) | Aggiorna le librerie |
| **Plex** | Il suo indirizzo (`http://plex:32400`) e il Suo token Plex | Aggiorna le librerie |
| **Webhook** | Un indirizzo qualsiasi | Invia la rinomina in JSON (Home Assistant, n8n…) |

Gli indirizzi dei webhook, la chiave e il token non vengono più mostrati una volta salvati.

**Uno script** può anche essere eseguito dopo ogni rinomina, con la rinomina in JSON sul suo input e `SOK_MEDIA_TYPE`, `SOK_RENAMED` e `SOK_AUTO` nel suo ambiente. Per sicurezza, non si può impostare dalla pagina web: metta lo script in una cartella montata e indichi il suo percorso nell'`environment` del container, per esempio `SOK_AFTER_RENAME=/config/after-rename.sh`.

## Cronologia e annullamento

La **Cronologia** elenca le Sue rinomine per giorno, con ora, tipo, file e modalità file. **Annulla** rimette a posto tutti i file di una rinomina; apra una rinomina per vedere ogni file con il suo nuovo nome, e clicchi su **Rimetti** per rimettere a posto un solo file (con i suoi sottotitoli).

- Un **collegamento fisico** o una **copia** viene eliminato: l'originale non si è mai mosso.
- Un file **spostato** torna nella sua cartella precedente.

L'annullamento non sostituisce mai un file, come nell'app (veda [Cronologia e annullamento](/it/guide/history#cosa-fa-lannullamento)).

### File già elaborati

Con i collegamenti fisici, un file rinominato resta nei Suoi download. S.O.K se lo ricorda e lo esclude dalle analisi successive, finché non cambia. La scheda **Già elaborati** della pagina Cronologia li elenca; ne spunti uno e clicchi su **Rianalizza la selezione** per rinominarlo di nuovo. Anche un file la cui rinomina è stata annullata viene analizzato di nuovo.

## Aggiornare

```sh
docker compose pull
docker compose up -d
```

Le Sue impostazioni, la cronologia e le Sue scelte restano in `/config`.

## Dietro un reverse proxy

S.O.K Server funziona dietro Nginx, Traefik o Caddy. Se il Suo proxy chiede già un accesso (Authelia, Authentik…), può disattivare l'accesso di S.O.K con `SOK_AUTH=none`: un banner ricorda allora che è il proxy a proteggere il server.
