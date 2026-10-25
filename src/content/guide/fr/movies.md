---
title: Films
description: Renommez de nombreux films d'un coup, chacun associé à son propre film.
order: 3
---

La page **Films** renomme tout un lot de films d'un coup. Contrairement aux séries, chaque fichier est associé à son propre film.

**Formats pris en charge :** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Étape par étape

### 1. Ajoutez vos films

Glissez-déposez vos fichiers vidéo ou vos dossiers sur **Fichiers sources**, ou cliquez sur la zone pour choisir des fichiers. S.O.K cherche les vidéos dans les dossiers déposés, sous-dossiers compris. Vous pourrez en ajouter d'autres plus tard avec **+ Ajouter d'autres films**.

S.O.K cherche ensuite chaque fichier tout seul, d'après son nom.

### 2. Vérifiez chaque résultat

Chaque fichier a une ligne avec :

- le **texte de recherche**, que vous pouvez modifier (le titre, avec l'année si vous la connaissez) ;
- une **liste de résultats** trouvés dans la base de données ;
- un **statut**.

| Statut | Signification | Que faire |
| --- | --- | --- |
| ✓ **Prêt** | Un résultat a le titre du fichier et, quand le fichier en donne une, son année. | Rien. |
| ⚠ **À choisir** | Des résultats ont été trouvés, mais aucun ou plusieurs correspondent exactement. Le plus probable est sélectionné. | Ouvrez la liste et choisissez le bon film. |
| ✗ **Manquant** | Aucun résultat n'a été trouvé. | Corrigez le texte de recherche, puis cliquez sur le bouton de nouvelle recherche de la ligne. |

> **Astuce :** ajouter l'année au texte de recherche (par exemple `Dune 2021`) évite la plupart des confusions entre remakes.

**Tout re-scanner** relance la recherche pour tous les fichiers.

### 3. Choisissez la destination

Glissez-déposez un dossier sur **Destination**, ou cliquez dessus pour en choisir un.

### 4. Renommez

Cliquez sur **Tout renommer**, puis confirmez. Seules les lignes *Prêt* sont renommées : les lignes encore à choisir restent dans le tableau, pour que vous puissiez les terminer. Les fichiers marqués *Manquant* restent où ils sont.

Le message de fin propose un bouton **Annuler le renommage**. Les fichiers renommés retournent alors dans leur dossier et dans le tableau.

## Résultat

Avec le format par défaut, chaque fichier est renommé en `Titre (Année)` et déplacé dans le dossier de destination :

```text
Films/
├── Dune (2021).mkv
├── Inception (2010).mp4
└── Matrix (1999).mkv
```

Vous pouvez changer le format dans [Réglages → Formats de sortie](/fr/guide/settings#formats-de-sortie), par exemple pour ajouter la qualité avec `{quality}`.
