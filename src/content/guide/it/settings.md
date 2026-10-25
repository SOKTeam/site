---
title: Impostazioni
description: Tema, lingua, formati di uscita e di ingresso, database, chiavi API e comportamento.
order: 5
---

Apra **Impostazioni** in fondo alla barra laterale. Ogni modifica viene salvata subito: non c'è un pulsante *Salva*.

## Chiavi API

S.O.K ricava le sue informazioni da database online. Questa sezione li elenca per categoria (video, musica, libri, giochi, immagini), con il loro stato.

| Tipo | Servizi | Cosa deve fare |
| --- | --- | --- |
| **Chiave integrata** | TMDB, TVDB, Fanart.tv | Niente. Una chiave è inclusa. Può inserire la Sua chiave nel campo *Chiave personalizzata (Opzionale)*. |
| **Gratuito** | Deezer, MusicBrainz, Google Books, Open Library, RAWG | Niente. |
| **Connessione** | Spotify, IGDB | Clicchi su **Connetti** e segua i passaggi. |
| **Chiave personale** | OMDb (IMDb), Last.fm | Crei una chiave gratuita sul sito del servizio, poi la incolli. |

### Aggiungere una chiave personale

1. Clicchi su **Ottieni** accanto al servizio. S.O.K apre la pagina dove può creare una chiave.
2. Copi la chiave e la incolli nel campo. Viene salvata quando preme <kbd>Invio</kbd> o lascia il campo; svuoti il campo per rimuoverla.
3. Clicchi su **Testa**. Lo stato diventa *Operativo* se la chiave funziona, altrimenti *Chiave non valida*.

### Collegare un account

1. Clicchi su **Connetti** accanto a Spotify o IGDB.
2. S.O.K chiede la chiave API (e il segreto, se il servizio ne richiede uno) e può aprire la pagina del servizio per crearla.
3. Se riesce, lo stato diventa *Connesso*.

Per rimuovere la connessione, clicchi su **Disconnetti**.

> Le Sue chiavi sono salvate cifrate sul Suo computer.

## API preferita

Per ogni categoria, scelga quale database S.O.K usa per primo. Compare un avviso ⚠️ se il servizio scelto richiede ancora una chiave.

## Cartelle predefinite

Registra la cartella di ciascuna delle Sue librerie (video, musica, libri, giochi). Clicchi su **Sfoglia** per sceglierne una.

Quando una pagina si apre con la *Destinazione* vuota, S.O.K la compila con la cartella predefinita di quel tipo di media. Può comunque scegliere un'altra cartella.

## Formati di uscita

Definisce come vengono rinominati i file. Digiti un nuovo schema nel campo. Le parole tra parentesi graffe vengono sostituite con le informazioni del media.

| Media | Formato predefinito | Variabili disponibili |
| --- | --- | --- |
| **Serie TV** | `{title} S{season}E{episode} {episode_title}` | `{title}`, `{season}`, `{episode}`, `{episode_title}` |
| **Film** | `{title} ({year})` | `{title}`, `{year}`, `{quality}` |
| **Musica** | `{artist} - {album}/{track} - {title}` | `{artist}`, `{album}`, `{track}`, `{title}`, `{year}` |
| **Libro** | `{author} - {title} ({year})` | `{author}`, `{title}`, `{year}`, `{series}`, `{series_number}` |
| **Gioco** | `{title} {tags}` | `{title}`, `{year}`, `{platform}`, `{tags}` |

**Esempi:**

- `{title} - S{season}E{episode} - {episode_title}` dà `Breaking Bad - S01E01 - Questione di chimica.mkv`
- `{title} ({year}) [{quality}]` dà `Inception (2010) [1080p].mkv`
- `{artist}/{year} - {album}/{track}. {title}` dà `Daft Punk/2001 - Discovery/01. One More Time.mp3`

Nel formato musica, ogni `/` crea una cartella. Un valore che un file non ha viene tralasciato insieme a ciò che lo circonda: senza anno, `{title} ({year})` dà `Titolo`. `{series}` e `{series_number}` vengono dal nome originale del libro (`Autore - [Dune 2] - Titolo`). `{tags}` sono i tag del nome originale del gioco, come `(USA) (Rev 1)`.

I caratteri che Windows vieta nei nomi dei file (`< > : " / \ | ? *`) vengono rimossi.

## Formati di ingresso

Descrive come sono chiamati i **Suoi** file, così S.O.K legge nomi che non conosce. Usi le variabili dei formati di uscita:

1. Scelga il tipo (Serie TV, Film, Musica, Libro, Gioco).
2. Digiti uno schema, per esempio `{artist} - {year} - {album} - {track} - {title}`, e clicchi su **Aggiungi**.
3. Lo verifichi con **Prova**: incolli un nome di file, con la sua estensione, e S.O.K mostra cosa legge e quale schema ha usato.

I Suoi schemi vengono provati prima delle forme che S.O.K conosce già. Passi sopra la **ⓘ** accanto al titolo per vedere quelle forme e le variabili di ogni tipo.

- Spazi, punti e trattini bassi sono lo stesso separatore: `{title} {year}` legge anche `The.Matrix.1999`.
- `{ignore}` salta una parte del nome, come la qualità o il gruppo della release: `{title} {year} {ignore}` legge `Dune.2021.1080p.BluRay-GROUP`.
- `{year}` prende quattro cifre, e i numeri di stagione, episodio, traccia e disco prendono cifre.
- Uno schema per serie TV richiede `{episode}`, gli altri richiedono `{title}`.

Un video letto da uno schema per serie TV conta come episodio nella pagina Home, e uno letto da uno schema Film come film.

## Aspetto

- **Modalità scura**: passa dal tema scuro al tema arancione e viceversa.
- **Usa l'aspetto del sistema** (solo macOS): segue la modalità chiara o scura scelta nelle impostazioni di macOS.
- **Usa il colore di evidenziazione del sistema** (solo macOS): usa il colore scelto in *Impostazioni di Sistema → Aspetto*.
- **Lingua**: English, Français, Deutsch, Español, Italiano, Português, Русский, Polski. La lingua stabilisce anche le parole usate nei nomi delle cartelle (*Season*, *Saison*, *Stagione*...).

## Comportamento

| Opzione | Effetto |
| --- | --- |
| **Modalità file** | **Sposta** (predefinita): i file lasciano la cartella sorgente. **Collegamento fisico**: l'originale resta dov'è, così i torrent continuano a essere condivisi, senza occupare altro spazio; la destinazione deve trovarsi sullo stesso disco. **Copia**: l'originale resta, e la copia occupa il doppio dello spazio. |
| **Sposta i sottotitoli con i video** | I sottotitoli con lo stesso nome del loro video (`Film.srt`, `Film.it.srt`, `Film.en.forced.srt`) vengono rinominati e spostati con esso: `Dune (2021).it.srt`. Attiva per impostazione predefinita. |
| **Crea cartelle mancanti** | Crea le cartelle di serie e stagione nella destinazione se non esistono. |
| **Scarica poster** | Dopo una rinomina, salva il poster o la copertina di ogni elemento dove Plex, Jellyfin e Kodi la cercano: `Film (Anno)-poster.jpg` accanto a un film, `poster.jpg` nella cartella di una serie, `cover.jpg` nella cartella di un album o di un libro. Un'immagine già presente viene mantenuta. I giochi non ne hanno. Disattivata per impostazione predefinita. |
| **Backup prima della rinomina** | Se nella destinazione esiste già un file con lo stesso nome, ne conserva una copia con l'estensione `.backup` prima di sostituirlo. |
| **Salta duplicati** | Se nella destinazione esiste già un file con lo stesso nome, lascia il file sorgente dov'è invece di sostituirlo. |
| **Registra operazioni** | Scrive ogni spostamento nel file di log. |

## Informazioni

- **Versione**: la versione che sta usando.
- **Controlla aggiornamenti**: all'avvio, S.O.K La avvisa quando è disponibile una nuova versione. Su Linux, può sostituire l'AppImage con la nuova versione e riavviarsi.
- **Discord Rich Presence**: mostra nel Suo profilo Discord cosa sta facendo in S.O.K.
- **Reimposta impostazioni**: riporta ogni impostazione al suo valore predefinito, dopo una conferma.
