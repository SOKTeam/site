---
title: Film
description: Rinomini molti file di film in una volta, ognuno associato al proprio film.
order: 3
---

La pagina **Film** rinomina un intero lotto di film in una volta. A differenza delle serie TV, ogni file è associato al proprio film.

**Formati supportati:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Passo dopo passo

### 1. Aggiunga i Suoi film

Trascini i Suoi file video o le cartelle su **File sorgente**, oppure clicchi sulla zona per scegliere i file. S.O.K cerca i video nelle cartelle trascinate, sottocartelle comprese. Potrà aggiungerne altri in seguito con **+ Aggiungi altri film**.

Poi S.O.K cerca da solo ogni file, in base al suo nome.

### 2. Controlli ogni risultato

Ogni file ha una riga con:

- il **testo di ricerca**, che può modificare (il titolo, con l'anno se lo conosce);
- un **elenco di risultati** trovati nel database;
- uno **stato**.

| Stato | Significato | Cosa fare |
| --- | --- | --- |
| ✓ **Pronto** | Un risultato ha il titolo del file e, se il file ne indica uno, il suo anno. | Niente. |
| ⚠ **Scegli** | Sono stati trovati risultati, ma nessuno o più di uno corrispondono esattamente. È selezionato il più probabile. | Apra l'elenco e scelga il film giusto. |
| ✗ **Mancante** | Nessun risultato trovato. | Corregga il testo di ricerca, poi clicchi sul pulsante di nuova ricerca della riga. |

> **Consiglio:** aggiungere l'anno al testo di ricerca (per esempio `Dune 2021`) evita la maggior parte delle confusioni tra remake.

**Riscansiona tutto** rilancia la ricerca per tutti i file.

### 3. Scelga la destinazione

Trascini una cartella su **Destinazione**, oppure ci clicchi sopra per sceglierne una.

### 4. Rinomini

Clicchi su **Rinomina tutto** e confermi. Vengono rinominate solo le righe *Pronto*: le righe ancora da scegliere restano nella tabella, così può completarle. I file segnati come *Mancante* restano dove sono.

Il messaggio finale ha un pulsante **Annulla la rinominazione**. I file rinominati tornano allora nella loro cartella e nella tabella.

## Risultato

Con il formato predefinito, ogni file viene rinominato in `Titolo (Anno)` e spostato nella cartella di destinazione:

```text
Film/
├── Dune (2021).mkv
├── Inception (2010).mp4
└── Matrix (1999).mkv
```

Può cambiare il formato in [Impostazioni → Formati di uscita](/it/guide/settings#formati-di-uscita), per esempio per aggiungere la qualità con `{quality}`.
