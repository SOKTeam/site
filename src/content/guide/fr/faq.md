---
title: FAQ et dépannage
description: Les réponses aux questions fréquentes et les solutions aux problèmes courants.
order: 7
---

## Général

### S.O.K est-il gratuit ?

Oui. S.O.K est gratuit et open source, sous licence MIT. Le code source est sur [GitHub](https://github.com/SOKTeam/S.O.K).

### S.O.K peut-il tourner sur un NAS ou un serveur maison ?

Oui : [S.O.K Server](/fr/guide/server) est une image Docker avec une interface web. Il range vos téléchargements avec des liens durs, pour que les torrents continuent de partager, et peut ranger les nouveaux téléchargements tout seul.

### S.O.K copie-t-il ou déplace-t-il mes fichiers ?

Par défaut, il les **déplace** : après un rangement, les fichiers ne sont plus dans le dossier source. Dans [Réglages → Comportement](/fr/guide/settings#comportement), le mode de fichier peut les **copier**, ou créer des **liens durs** : l'original reste où il est (un torrent continue de partager) sans prendre plus de place. Vérifiez l'aperçu avant de confirmer. En cas d'erreur, annulez le renommage depuis le message affiché à la fin ou depuis la page [Historique](/fr/guide/history).

### Ma bibliothèque est-elle compatible avec Plex, Jellyfin ou Kodi ?

Oui. Les noms et les dossiers par défaut (`Série/Saison 1/Série S01E01 Titre.mkv`, `Film (Année).mkv`) suivent les conventions attendues par ces serveurs multimédias.

### Faut-il un compte ou une clé d'API ?

Non, pas pour les séries et les films : TMDB et TVDB sont fournis avec une clé intégrée. Seuls certains services demandent une connexion (Spotify, IGDB) ou une clé personnelle (OMDb, Last.fm). Voir [Réglages → Clés API](/fr/guide/settings#clés-api).

### S.O.K a-t-il besoin d'une connexion internet ?

Oui, pour interroger les bases de données. Le renommage et le déplacement des fichiers se font sur votre ordinateur.

## Problèmes

### « Aucun fichier trouvé »

- Vérifiez que le dossier contient des fichiers dans un [format pris en charge](/fr/guide/tv-shows#avant-de-commencer).
- Vérifiez que vous êtes sur la bonne page : un dossier de vidéos ajouté à la page *Musique* ne trouve rien.

### La recherche ne trouve pas mon média

- Tapez au moins 2 caractères.
- Cherchez le titre original, ou le titre dans la langue choisie dans les *Réglages*.
- Sur la page *Films*, ajoutez l'année au texte de recherche : `Dune 2021`.
- Vérifiez votre connexion internet.

### Un nom de fichier est mal lu

Le titre, l'année ou le numéro de piste affiché n'est pas le bon : S.O.K ne sait pas comment vos fichiers sont nommés. Ajoutez un modèle dans [Réglages → Formats d'entrée](/fr/guide/settings#formats-dentrée) et vérifiez-le avec **Tester**.

### La mauvaise série ou le mauvais film a été choisi automatiquement

S.O.K choisit le premier résultat pour le nom deviné d'après le fichier. Tapez un autre nom dans le champ de recherche et cliquez sur le bon résultat. L'aperçu se met à jour immédiatement.

### Certains épisodes gardent leur nom d'origine

Le nom du fichier n'a pas de numéro de saison et d'épisode que S.O.K sait lire. Décrivez comment vos fichiers sont nommés dans [Réglages → Formats d'entrée](/fr/guide/settings#formats-dentrée), par exemple `{title} - Episode {episode}`, ou renommez le fichier pour qu'il contienne `S01E02` ou `1x02`. Ajoutez ensuite le dossier à nouveau.

### « Terminé avec erreurs »

Certains fichiers n'ont pas pu être déplacés. Les causes les plus fréquentes :

- **Un fichier est ouvert dans un autre programme** (un lecteur vidéo, par exemple). Fermez-le et réessayez.
- **Vous n'avez pas le droit** d'écrire dans le dossier de destination.
- **Le disque de destination est plein ou a été déconnecté** pendant le déplacement.

> Quand un fichier du même nom existe déjà dans la destination, S.O.K le remplace, sauf si *Ignorer les doublons* est activé (c'est le cas par défaut). Pour garder l'ancien fichier quand il est remplacé, activez *Sauvegarder avant renommage* dans [Réglages → Comportement](/fr/guide/settings#comportement).

### « Fichier(s) laissé(s) en place » après une annulation

Ces fichiers ont été déplacés ou supprimés depuis le renommage, ou un autre fichier porte maintenant leur ancien nom. S.O.K ne remplace jamais un fichier. Voir [Historique et annulation](/fr/guide/history#ce-que-fait-une-annulation).

### « Veuillez sélectionner un dossier de destination. »

La zone *Destination* est vide, ou le dossier n'existe plus. Choisissez-le à nouveau.

### Un service affiche « ⚠️ Clé manquante »

Ce service demande une clé ou une connexion. Configurez-le dans [Réglages → Clés API](/fr/guide/settings#clés-api), ou choisissez un autre service dans *API préférée*.

### Windows dit que l'installateur n'est pas sûr

Windows SmartScreen prévient quand il ne connaît pas encore un logiciel. Cliquez sur **Informations complémentaires**, puis sur **Exécuter quand même**. Téléchargez toujours S.O.K depuis la page [Télécharger](/fr/download) ou depuis les [versions sur GitHub](https://github.com/SOKTeam/S.O.K/releases).

### macOS dit que S.O.K ne peut pas être ouvert

S.O.K n'est pas encore notarié par Apple, donc macOS le bloque la première fois. Cliquez sur **Terminé**, puis allez dans **Réglages Système → Confidentialité et sécurité** et cliquez sur **Ouvrir quand même** à côté du message concernant S.O.K. Voir [Prise en main](/fr/guide/getting-started#macos).

### Rien ne se passe quand j'ouvre l'AppImage sur Linux

- Vérifiez que le fichier peut s'exécuter comme un programme : *Propriétés → Autoriser l'exécution du fichier comme un programme*, ou `chmod +x` dans un terminal. Voir [Prise en main](/fr/guide/getting-started#linux).
- Vérifiez que vous avez téléchargé la bonne version pour votre processeur (`uname -m` affiche `x86_64` pour Intel/AMD, `aarch64` pour ARM).
- Lancez-la depuis un terminal pour voir l'erreur. Si elle parle de FUSE, lancez-la avec `./SOK_Linux_*.AppImage --appimage-extract-and-run`.

## Toujours bloqué ?

[Ouvrez une issue sur GitHub](https://github.com/SOKTeam/S.O.K/issues) et décrivez ce que vous avez fait, ce que vous attendiez et ce qui s'est passé. Ajoutez votre version de S.O.K (affichée dans *Réglages → À propos*).
