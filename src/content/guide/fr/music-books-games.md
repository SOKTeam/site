---
title: Musique, livres et jeux
description: Renommez et rangez albums, morceaux, livres et jeux dans une bibliothèque propre.
order: 4
---

Les albums fonctionnent comme la page [Séries](/fr/guide/tv-shows) : vous choisissez un album et S.O.K renomme ses morceaux. Les morceaux seuls, les livres et les jeux fonctionnent comme la page [Films](/fr/guide/movies) : chaque fichier a son propre résultat dans un tableau, avec un statut *Prêt*, *À choisir* ou *Manquant*, et **Tout renommer** renomme les lignes *Prêt*.

> **Important :** par défaut, les fichiers sont **déplacés**, pas copiés (voir le mode de fichier dans [Réglages → Comportement](/fr/guide/settings#comportement)). Vérifiez l'aperçu avant de confirmer. Vous pouvez annuler un renommage depuis la page [Historique](/fr/guide/history).

## Musique

**Formats pris en charge :** `.mp3`, `.flac`, `.wav`, `.m4a`, `.aac`, `.ogg`, `.opus`, `.wma`, `.ape`, `.alac`, `.aiff`, `.dsd`, `.dsf`

La page **Musique** a deux onglets.

### Albums

Ajoutez le dossier d'un album, cherchez l'album et cliquez sur le bon résultat, choisissez une destination, vérifiez l'aperçu et cliquez sur **Organiser les fichiers**. S.O.K prend l'artiste, l'album et l'année de l'album trouvé en ligne, et le titre et le numéro de chaque morceau dans ses tags (ou dans son nom, comme `01 - Titre.mp3` ou `Artiste - Album - 01 - Titre.mp3`).

### Titres

Déposez des morceaux seuls, par exemple des singles téléchargés. S.O.K lit d'abord leurs tags, puis leur nom (`Artiste - Titre.mp3`), et cherche chacun d'eux. Un morceau est *Prêt* quand un résultat a son titre et, quand le fichier les donne, son artiste et son album. Un morceau trouvé seulement sur des compilations n'est jamais *Prêt* : choisissez vous-même la bonne sortie.

### Noms et dossiers

Les morceaux suivent le [format musique](/fr/guide/settings#formats-de-sortie), `{artist} - {album}/{track} - {title}` par défaut. Le `/` crée un dossier :

```text
Musique/
└── Daft Punk - Discovery/
    ├── 01 - One More Time.mp3
    └── 02 - Aerodynamic.mp3
```

**Bases de données :** Deezer et MusicBrainz (gratuites), Spotify (avec une connexion) et Last.fm (avec une clé personnelle).

## Livres

**Formats pris en charge :** `.epub`, `.mobi`, `.azw`, `.azw3`, `.pdf`, `.djvu`, `.fb2`, `.cbz`, `.cbr`, `.lit`, `.pdb`, `.txt`, `.rtf`, `.doc`, `.docx`

S.O.K lit l'auteur et le titre dans des noms de fichiers comme :

- `Auteur - Titre.epub`
- `Auteur - Titre (2023).epub`
- `Auteur - [Série 01] - Titre.epub`

Le texte de recherche de chaque ligne est le titre, avec l'auteur si le nom en donne un. Un livre est *Prêt* quand un résultat a son titre et son auteur. L'année n'est pas comparée : c'est souvent celle de la première édition.

Chaque livre va dans un dossier pour l'auteur, puis un dossier pour le livre, et prend un nom selon le [format livre](/fr/guide/settings#formats-de-sortie) :

```text
Livres/
└── Frank Herbert/
    └── Frank Herbert - Dune (1965)/
        └── Frank Herbert - Dune (1965).epub
```

**Bases de données :** Google Books et Open Library (gratuites).

## Jeux

**Formats pris en charge :** images disque (`.iso`, `.bin`, `.cue`, `.img`, `.mdf`, `.nrg`, `.rvz`, `.wbfs`, `.cdi`...) et ROM de cartouches (`.nes`, `.sfc`, `.smc`, `.n64`, `.z64`, `.gb`, `.gbc`, `.gba`, `.nds`, `.3ds`, `.gen`, `.sms`, `.gg`...).

Les fichiers d'un même jeu, comme un `.cue` et ses fichiers `.bin` ou plusieurs disques, partagent une ligne. La recherche ignore les étiquettes du nom (`(USA)`, `(Rev 1)`, `[SLUS-12345]`).

Les jeux sont rangés par plateforme, trouvée grâce à une étiquette `[SNES]` dans le nom, à l'extension ou à un nom de dossier comme `PS1`. Un jeu d'un seul fichier garde les étiquettes de son nom, dont les collections de ROM ont besoin, et suit le [format jeux](/fr/guide/settings#formats-de-sortie). Un jeu de plusieurs fichiers a son propre dossier et garde les noms de ses fichiers, car un `.cue` cite ses fichiers `.bin` par leur nom :

```text
Jeux/
├── Super Nintendo/
│   └── Super Mario World (USA) (Rev 1).sfc
└── PlayStation/
    └── Final Fantasy VII (1997)/
        ├── Final Fantasy VII (USA) (Disc 1).cue
        └── Final Fantasy VII (USA) (Disc 1).bin
```

**Bases de données :** RAWG (gratuite) et IGDB (avec une connexion).
