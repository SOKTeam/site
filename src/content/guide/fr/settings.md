---
title: Réglages
description: Thème, langue, formats de sortie et d'entrée, bases de données, clés d'API et comportement.
order: 5
---

Ouvrez **Réglages** en bas de la barre latérale. Chaque modification est enregistrée tout de suite : il n'y a pas de bouton *Enregistrer*.

## Clés API

S.O.K tire ses informations de bases de données en ligne. Cette section les liste par catégorie (vidéo, musique, livres, jeux, illustrations), avec leur statut.

| Type | Services | Ce que vous devez faire |
| --- | --- | --- |
| **Clé intégrée** | TMDB, TVDB, Fanart.tv | Rien. Une clé est fournie. Vous pouvez saisir votre propre clé dans le champ *Clé perso (Optionnel)*. |
| **Gratuit** | Deezer, MusicBrainz, Google Books, Open Library, RAWG | Rien. |
| **Connexion** | Spotify, IGDB | Cliquez sur **Se connecter** et suivez les étapes. |
| **Clé personnelle** | OMDb (IMDb), Last.fm | Créez une clé gratuite sur le site du service, puis collez-la. |

### Ajouter une clé personnelle

1. Cliquez sur **Obtenir** à côté du service. S.O.K ouvre la page où vous pouvez créer une clé.
2. Copiez la clé et collez-la dans le champ. Elle est enregistrée quand vous appuyez sur <kbd>Entrée</kbd> ou quittez le champ ; videz le champ pour la supprimer.
3. Cliquez sur **Tester**. Le statut passe à *Opérationnel* si la clé fonctionne, ou à *Clé invalide* sinon.

### Connecter un compte

1. Cliquez sur **Se connecter** à côté de Spotify ou d'IGDB.
2. S.O.K demande la clé d'API (et le secret, si le service en demande un) et peut ouvrir la page du service pour la créer.
3. Une fois la connexion réussie, le statut passe à *Connecté*.

Pour supprimer la connexion, cliquez sur **Déconnecter**.

> Vos clés sont enregistrées chiffrées sur votre ordinateur.

## API préférée

Pour chaque catégorie, choisissez la base de données que S.O.K utilise en premier. Un avertissement ⚠️ apparaît si le service choisi demande encore une clé.

## Dossiers par défaut

Enregistre le dossier de chacune de vos bibliothèques (vidéos, musique, livres, jeux). Cliquez sur **Parcourir** pour en choisir un.

Quand une page s'ouvre avec une *Destination* vide, S.O.K la remplit avec le dossier par défaut de ce type de média. Vous pouvez toujours choisir un autre dossier.

## Formats de sortie

Définit comment les fichiers sont renommés. Tapez un nouveau modèle dans le champ. Les mots entre accolades sont remplacés par les informations du média.

| Média | Format par défaut | Variables disponibles |
| --- | --- | --- |
| **Série TV** | `{title} S{season}E{episode} {episode_title}` | `{title}`, `{season}`, `{episode}`, `{episode_title}` |
| **Films** | `{title} ({year})` | `{title}`, `{year}`, `{quality}` |
| **Musique** | `{artist} - {album}/{track} - {title}` | `{artist}`, `{album}`, `{track}`, `{title}`, `{year}` |
| **Livre** | `{author} - {title} ({year})` | `{author}`, `{title}`, `{year}`, `{series}`, `{series_number}` |
| **Jeu** | `{title} {tags}` | `{title}`, `{year}`, `{platform}`, `{tags}` |

**Exemples :**

- `{title} - S{season}E{episode} - {episode_title}` donne `Breaking Bad - S01E01 - Chute libre.mkv`
- `{title} ({year}) [{quality}]` donne `Inception (2010) [1080p].mkv`
- `{artist}/{year} - {album}/{track}. {title}` donne `Daft Punk/2001 - Discovery/01. One More Time.mp3`

Dans le format musique, chaque `/` crée un dossier. Une valeur qu'un fichier n'a pas est retirée avec ce qui l'entoure : sans année, `{title} ({year})` donne `Titre`. `{series}` et `{series_number}` viennent du nom d'origine du livre (`Auteur - [Dune 2] - Titre`). `{tags}` sont les étiquettes du nom d'origine du jeu, comme `(USA) (Rev 1)`.

Les caractères interdits par Windows dans les noms de fichiers (`< > : " / \ | ? *`) sont retirés.

## Formats d'entrée

Décrit comment **vos** fichiers sont nommés, pour que S.O.K lise des noms qu'il ne connaît pas. Utilisez les variables des formats de sortie :

1. Choisissez le type (Série TV, Films, Musique, Livre, Jeu).
2. Tapez un modèle, par exemple `{artist} - {year} - {album} - {track} - {title}`, et cliquez sur **Ajouter**.
3. Vérifiez-le avec **Tester** : collez un nom de fichier, avec son extension, et S.O.K montre ce qu'il lit et quel modèle il a utilisé.

Vos modèles sont essayés avant les formes que S.O.K connaît déjà. Survolez le **ⓘ** à côté du titre pour voir ces formes et les variables de chaque type.

- Les espaces, les points et les tirets bas sont un même séparateur : `{title} {year}` lit aussi `The.Matrix.1999`.
- `{ignore}` saute une partie du nom, comme la qualité ou le groupe de release : `{title} {year} {ignore}` lit `Dune.2021.1080p.BluRay-GROUP`.
- `{year}` prend quatre chiffres, et les numéros de saison, d'épisode, de piste et de disque prennent des chiffres.
- Un modèle de série TV demande `{episode}`, les autres demandent `{title}`.

Une vidéo lue par un modèle de série TV compte comme un épisode sur la page d'accueil, et une vidéo lue par un modèle Films comme un film.

## Apparence

- **Mode sombre** : passe du thème sombre au thème orange, et inversement.
- **Suivre l'apparence du système** (macOS uniquement) : suit le mode clair ou sombre choisi dans les réglages de macOS.
- **Utiliser la couleur d'accentuation du système** (macOS uniquement) : utilise la couleur d'accentuation choisie dans *Réglages Système → Apparence*.
- **Langue** : English, Français, Deutsch, Español, Italiano, Português, Русский, Polski. La langue fixe aussi les mots utilisés dans les noms de dossiers (*Season*, *Saison*, *Staffel*...).

## Comportement

| Option | Effet |
| --- | --- |
| **Mode de fichier** | **Déplacer** (par défaut) : les fichiers quittent le dossier source. **Lien dur** : l'original reste où il est, pour que les torrents continuent de partager, sans prendre plus de place ; la destination doit être sur le même disque. **Copier** : l'original reste, et la copie prend deux fois la place. |
| **Déplacer les sous-titres avec les vidéos** | Les sous-titres nommés comme leur vidéo (`Film.srt`, `Film.fr.srt`, `Film.en.forced.srt`) sont renommés et déplacés avec elle : `Dune (2021).fr.srt`. Activé par défaut. |
| **Créer les dossiers manquants** | Crée les dossiers de série et de saison dans la destination s'ils n'existent pas. |
| **Télécharger les affiches** | Après un renommage, enregistre l'affiche ou la pochette de chaque élément là où Plex, Jellyfin et Kodi la cherchent : `Film (Année)-poster.jpg` à côté d'un film, `poster.jpg` dans le dossier d'une série, `cover.jpg` dans le dossier d'un album ou d'un livre. Une image déjà présente est gardée. Les jeux n'en ont pas. Désactivé par défaut. |
| **Sauvegarder avant renommage** | Si un fichier du même nom existe déjà dans la destination, en garde une copie avec l'extension `.backup` avant de le remplacer. |
| **Ignorer les doublons** | Si un fichier du même nom existe déjà dans la destination, laisse le fichier source où il est au lieu de le remplacer. |
| **Journaliser les opérations** | Écrit chaque déplacement dans le fichier journal. |

## À propos

- **Version** : la version que vous utilisez.
- **Vérifier les mises à jour** : au lancement, S.O.K vous prévient quand une nouvelle version est disponible. Sur Linux, il peut remplacer l'AppImage par la nouvelle version et redémarrer.
- **Discord Rich Presence** : affiche ce que vous faites dans S.O.K sur votre profil Discord.
- **Réinitialiser les paramètres** : remet chaque réglage à sa valeur par défaut, après confirmation.
