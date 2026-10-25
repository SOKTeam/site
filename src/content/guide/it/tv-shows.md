---
title: Serie TV
description: Rinomini i Suoi episodi e li ordini in cartelle per serie e stagione.
order: 2
---

La pagina **Serie TV** prende una cartella di episodi e la trasforma in una libreria ordinata per serie e stagione.

## Prima di iniziare

S.O.K trova il numero di stagione e di episodio in ogni nome di file. Le forme più comuni sono:

| Forma | Esempio |
| --- | --- |
| `S01E02` | `breaking.bad.s01e02.720p.mkv` |
| `1x02` | `Breaking Bad 1x02.mkv` |
| `Season 1 Episode 2` | `Breaking Bad Season 1 Episode 2.mkv` |

I file senza numero di stagione e di episodio mantengono il loro nome originale.

**Formati supportati:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Passo dopo passo

### 1. Aggiunga le cartelle sorgenti

Trascini una o più cartelle su **Cartelle sorgenti**, oppure clicchi sulla zona per sceglierle. S.O.K esamina anche le sottocartelle.

Il titolo dell'anteprima indica quanti file sono stati trovati, per esempio *Anteprima (10 file da Season 1)*.

### 2. Scelga la serie

S.O.K legge il nome del primo file, deduce la serie e sceglie da solo il primo risultato della ricerca.

Se non è la serie giusta:

1. Digiti il nome nel campo di ricerca. La ricerca parte da 2 caratteri.
2. Clicchi sul risultato giusto nell'elenco. Il poster e l'anno aiutano a distinguere i remake.

Una volta scelta la serie, S.O.K scarica l'elenco dei suoi episodi. Il messaggio *Caricamento episodi...* compare per un momento.

### 3. Scelga la destinazione

Trascini una cartella su **Destinazione**, oppure ci clicchi sopra per sceglierla. Di solito è la radice della Sua libreria di serie (per esempio `D:\Media\Serie TV`).

### 4. Controlli l'anteprima

Il pannello **Anteprima** mostra il nome attuale di ogni file e il suo nuovo nome. Vengono elencati solo i primi 15 file; una riga come *+ 12 altri...* riassume il resto.

### 5. Organizzi

Clicchi su **Organizza file** e confermi. Una barra di avanzamento mostra ogni file mentre viene spostato.

## Risultato

Con le impostazioni predefinite, ottiene:

```text
Serie TV/
└── Breaking Bad/
    ├── Stagione 1/
    │   ├── Breaking Bad S01E01 Questione di chimica.mkv
    │   └── Breaking Bad S01E02 Senza ritorno.mkv
    └── Stagione 2/
        └── ...
```

Può cambiare il formato dei nomi dei file in [Impostazioni → Formati di uscita](/it/guide/settings#formati-di-uscita). Il messaggio finale ha un pulsante **Annulla la rinominazione**, e ogni riordino compare nella pagina [Cronologia](/it/guide/history).

## Creare le cartelle della serie

Una volta scelte la serie e la destinazione, compare il pulsante **Crea cartelle serie**. Crea la cartella della serie e una cartella vuota per stagione, senza spostare alcun file. È utile per preparare una libreria prima di aggiungervi episodi.
