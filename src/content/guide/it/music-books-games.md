---
title: Musica, libri e giochi
description: Rinomini e ordini album, brani, libri e giochi in una libreria pulita.
order: 4
---

Gli album funzionano come la pagina [Serie TV](/it/guide/tv-shows): sceglie un album e S.O.K ne rinomina i brani. I brani singoli, i libri e i giochi funzionano come la pagina [Film](/it/guide/movies): ogni file ha il proprio risultato in una tabella, con lo stato *Pronto*, *Scegli* o *Mancante*, e **Rinomina tutto** rinomina le righe *Pronto*.

> **Importante:** per impostazione predefinita, i file vengono **spostati**, non copiati (veda la modalità file in [Impostazioni → Comportamento](/it/guide/settings#comportamento)). Controlli l'anteprima prima di confermare. Può annullare una rinomina dalla pagina [Cronologia](/it/guide/history).

## Musica

**Formati supportati:** `.mp3`, `.flac`, `.wav`, `.m4a`, `.aac`, `.ogg`, `.opus`, `.wma`, `.ape`, `.alac`, `.aiff`, `.dsd`, `.dsf`

La pagina **Musica** ha due schede.

### Album

Aggiunga la cartella di un album, cerchi l'album e clicchi sul risultato giusto, scelga una destinazione, controlli l'anteprima e clicchi su **Organizza file**. S.O.K prende l'artista, l'album e l'anno dell'album trovato online, e il titolo e il numero di ogni brano dai suoi tag (o dal suo nome, come `01 - Titolo.mp3` o `Artista - Album - 01 - Titolo.mp3`).

### Brani

Trascini dei brani singoli, per esempio singoli scaricati. S.O.K legge prima i loro tag, poi il loro nome (`Artista - Titolo.mp3`), e cerca ciascuno. Un brano è *Pronto* quando un risultato ha il suo titolo e, se il file li indica, il suo artista e il suo album. Un brano trovato solo in raccolte non è mai *Pronto*: scelga Lei l'edizione giusta.

### Nomi e cartelle

I brani seguono il [formato musica](/it/guide/settings#formati-di-uscita), `{artist} - {album}/{track} - {title}` per impostazione predefinita. La `/` crea una cartella:

```text
Musica/
└── Daft Punk - Discovery/
    ├── 01 - One More Time.mp3
    └── 02 - Aerodynamic.mp3
```

**Database:** Deezer e MusicBrainz (gratuiti), Spotify (con una connessione) e Last.fm (con una chiave personale).

## Libri

**Formati supportati:** `.epub`, `.mobi`, `.azw`, `.azw3`, `.pdf`, `.djvu`, `.fb2`, `.cbz`, `.cbr`, `.lit`, `.pdb`, `.txt`, `.rtf`, `.doc`, `.docx`

S.O.K legge l'autore e il titolo da nomi di file come:

- `Autore - Titolo.epub`
- `Autore - Titolo (2023).epub`
- `Autore - [Saga 01] - Titolo.epub`

Il testo di ricerca di ogni riga è il titolo, con l'autore se il nome ne indica uno. Un libro è *Pronto* quando un risultato ha il suo titolo e il suo autore. L'anno non viene confrontato: spesso è quello della prima edizione.

Ogni libro va in una cartella dell'autore, poi in una del libro, e prende il nome secondo il [formato libro](/it/guide/settings#formati-di-uscita):

```text
Libri/
└── Frank Herbert/
    └── Frank Herbert - Dune (1965)/
        └── Frank Herbert - Dune (1965).epub
```

**Database:** Google Books e Open Library (gratuiti).

## Giochi

**Formati supportati:** immagini disco (`.iso`, `.bin`, `.cue`, `.img`, `.mdf`, `.nrg`, `.rvz`, `.wbfs`, `.cdi`...) e ROM di cartucce (`.nes`, `.sfc`, `.smc`, `.n64`, `.z64`, `.gb`, `.gbc`, `.gba`, `.nds`, `.3ds`, `.gen`, `.sms`, `.gg`...).

I file di uno stesso gioco, come un `.cue` con i suoi file `.bin` o più dischi, condividono una riga. La ricerca tralascia i tag del nome (`(USA)`, `(Rev 1)`, `[SLUS-12345]`).

I giochi sono ordinati per piattaforma, riconosciuta da un tag `[SNES]` nel nome, dall'estensione o da un nome di cartella come `PS1`. Un gioco di un solo file mantiene i tag del suo nome, su cui contano le collezioni di ROM, e segue il [formato giochi](/it/guide/settings#formati-di-uscita). Un gioco di più file ha la propria cartella e mantiene i nomi dei suoi file, perché un `.cue` cita i suoi file `.bin` per nome:

```text
Giochi/
├── Super Nintendo/
│   └── Super Mario World (USA) (Rev 1).sfc
└── PlayStation/
    └── Final Fantasy VII (1997)/
        ├── Final Fantasy VII (USA) (Disc 1).cue
        └── Final Fantasy VII (USA) (Disc 1).bin
```

**Database:** RAWG (gratuito) e IGDB (con una connessione).
