---
title: Séries
description: Renommez vos épisodes et rangez-les dans des dossiers de série et de saison.
order: 2
---

La page **Séries** prend un dossier d'épisodes et en fait une bibliothèque rangée par série et par saison.

## Avant de commencer

S.O.K trouve le numéro de saison et d'épisode dans chaque nom de fichier. Les formes les plus courantes sont :

| Forme | Exemple |
| --- | --- |
| `S01E02` | `breaking.bad.s01e02.720p.mkv` |
| `1x02` | `Breaking Bad 1x02.mkv` |
| `Season 1 Episode 2` | `Breaking Bad Season 1 Episode 2.mkv` |

Les fichiers sans numéro de saison et d'épisode gardent leur nom d'origine.

**Formats pris en charge :** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Étape par étape

### 1. Ajoutez vos dossiers sources

Glissez-déposez un ou plusieurs dossiers sur **Dossiers sources**, ou cliquez sur la zone pour les choisir. S.O.K parcourt aussi les sous-dossiers.

Le titre de l'aperçu indique combien de fichiers ont été trouvés, par exemple *Aperçu (10 fichiers de Season 1)*.

### 2. Choisissez la série

S.O.K lit le nom du premier fichier, devine la série et choisit tout seul le premier résultat de la recherche.

Si ce n'est pas la bonne série :

1. Tapez son nom dans le champ de recherche. La recherche démarre à partir de 2 caractères.
2. Cliquez sur le bon résultat dans la liste. L'affiche et l'année aident à distinguer les remakes.

Une fois la série choisie, S.O.K télécharge la liste de ses épisodes. Le message *Chargement des épisodes...* s'affiche un instant.

### 3. Choisissez la destination

Glissez-déposez un dossier sur **Destination**, ou cliquez dessus pour le choisir. C'est en général la racine de votre bibliothèque de séries (par exemple `D:\Médias\Séries`).

### 4. Vérifiez l'aperçu

Le panneau **Aperçu** montre le nom actuel de chaque fichier et son nouveau nom. Seuls les 15 premiers fichiers sont listés ; une ligne comme *+ 12 autres...* résume le reste.

### 5. Rangez

Cliquez sur **Organiser les fichiers**, puis confirmez. Une barre de progression montre chaque fichier au fur et à mesure.

## Résultat

Avec les réglages par défaut, vous obtenez :

```text
Séries/
└── Breaking Bad/
    ├── Saison 1/
    │   ├── Breaking Bad S01E01 Chute libre.mkv
    │   └── Breaking Bad S01E02 Le Choix.mkv
    └── Saison 2/
        └── ...
```

Vous pouvez changer le format des noms de fichiers dans [Réglages → Formats de sortie](/fr/guide/settings#formats-de-sortie). Le message de fin propose un bouton **Annuler le renommage**, et chaque rangement est listé sur la page [Historique](/fr/guide/history).

## Créer les dossiers de la série

Une fois la série et la destination choisies, le bouton **Créer les dossiers de la série** apparaît. Il crée le dossier de la série et un dossier vide par saison, sans déplacer aucun fichier. C'est utile pour préparer une bibliothèque avant d'y ajouter des épisodes.
