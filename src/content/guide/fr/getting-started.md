---
title: Prise en main
description: Installez S.O.K, découvrez l'interface et rangez votre premier dossier.
order: 1
---

S.O.K (Storage Organisation Kit) identifie vos fichiers multimédias grâce à des bases de données en ligne, puis les renomme et les range dans une bibliothèque propre, compatible avec Plex, Jellyfin et Kodi.

## Installation

S.O.K est disponible pour **Windows 10 et 11 (64 bits)**, **macOS sur Apple Silicon** (M1 ou plus récent) et **Linux** (64 bits, Intel/AMD ou ARM).

### Windows

1. Allez sur la page [Télécharger](/fr/download) et téléchargez l'installateur (`SOK_Setup_vX.Y.Z.exe`).
2. Lancez l'installateur. Vous pouvez cocher **Créer une icône sur le Bureau** si vous le souhaitez.
3. Lancez **S.O.K** depuis le menu Démarrer ou depuis votre Bureau.

> Windows SmartScreen peut afficher un avertissement au premier lancement de l'installateur. Cliquez sur **Informations complémentaires**, puis sur **Exécuter quand même**.

### macOS

1. Allez sur la page [Télécharger](/fr/download) et téléchargez l'image disque (`SOK_macOS_vX.Y.Z.dmg`).
2. Ouvrez l'image disque et faites glisser **S.O.K** sur le dossier **Applications**.
3. Lancez **S.O.K** depuis le dossier Applications ou depuis le Launchpad.

> La première fois que vous ouvrez S.O.K, macOS indique qu'il ne peut pas vérifier le développeur. Cliquez sur **Terminé**, puis ouvrez **Réglages Système → Confidentialité et sécurité**, faites défiler vers le bas et cliquez sur **Ouvrir quand même** à côté du message concernant S.O.K. Confirmez avec votre mot de passe. Vous n'avez à le faire qu'une seule fois.

### Linux

S.O.K est fourni en AppImage : un seul fichier, qui fonctionne sur la plupart des distributions, sans rien à installer.

1. Allez sur la page [Télécharger](/fr/download) et téléchargez l'AppImage de votre processeur :
   - **Intel/AMD** (`SOK_Linux_vX.Y.Z_x86_64.AppImage`) pour la plupart des PC.
   - **ARM** (`SOK_Linux_vX.Y.Z_aarch64.AppImage`) pour les PC ARM.

   Vous ne savez pas ? Tapez `uname -m` dans un terminal : il affiche `x86_64` ou `aarch64`.
2. Autorisez le fichier à s'exécuter : faites un clic droit dessus dans votre gestionnaire de fichiers, ouvrez **Propriétés** et activez **Autoriser l'exécution du fichier comme un programme** (le libellé dépend de votre bureau). Dans un terminal : `chmod +x SOK_Linux_*.AppImage`.
3. Double-cliquez sur le fichier pour lancer **S.O.K**. Il s'ajoute à votre menu d'applications : la prochaine fois, vous pourrez le lancer depuis ce menu.

> La version Intel/AMD demande Ubuntu 22.04, Debian 12, Fedora 35 ou une distribution plus récente. La version ARM demande Ubuntu 24.04, Debian 13, Fedora 40 ou plus récent.

S.O.K fonctionne sans aucune configuration : les principales bases de données (TMDB, TVDB) sont fournies avec une clé intégrée. Il vous faut seulement une connexion internet.

## L'interface

La fenêtre a deux zones :

- **La barre latérale (à gauche)** : elle permet de passer d'une page à l'autre. Cliquez sur l'icône de menu en haut pour la replier ou la déplier.
  - **Bibliothèque** : *Accueil*, *Séries*, *Films*, *Musique*, *Livres*, *Jeux*
  - **Général** : *Historique*, *Réglages*
- **La zone principale (à droite)** : la page choisie.

### La page d'accueil

- **La zone de dépôt** : déposez-y n'importe quels fichiers ou dossiers. S.O.K les trie par type (films, séries, albums, morceaux, livres, jeux) et affiche un groupe par série, par album et par type. Cliquez sur **Ouvrir** pour envoyer un groupe vers sa page ; quand tous les fichiers sont du même type, sa page s'ouvre directement. Les fichiers dont le type est une supposition, comme une image disque qui peut être un jeu ou une vidéo, sont listés sous *À vérifier* avec la raison : choisissez leur type et cliquez sur **Ajouter**.
- **Moniteurs de disques** affiche l'espace libre restant sur chacun de vos disques (sur Mac, le disque de démarrage et les volumes montés ; sur Linux, le disque système et les disques montés dans `/media`, `/run/media` ou `/mnt`). L'icône est verte au-dessus de 20 % d'espace libre, orange en dessous de 20 %, et rouge en dessous de 10 %.
- **Accès rapide** contient une carte par type de média. Cliquez sur une carte pour ouvrir sa page.

## Votre premier rangement

Le plus rapide pour voir S.O.K à l'œuvre, c'est une série :

1. Ouvrez **Séries** dans la barre latérale.
2. **Glissez-déposez** le dossier de vos épisodes sur **Dossiers sources**, ou cliquez dessus pour le choisir.
3. S.O.K devine le nom de la série d'après le premier fichier et lance une recherche tout seul. Si le premier résultat n'est pas le bon, tapez un autre nom et cliquez sur le bon résultat.
4. **Glissez-déposez** un dossier sur **Destination**, ou cliquez dessus pour le choisir. C'est là que votre bibliothèque sera créée.
5. Vérifiez l'**Aperçu** à droite, puis cliquez sur **Organiser les fichiers** et confirmez.

Un message indique ensuite combien de fichiers ont été rangés. Sur Mac, il propose d'afficher la destination dans le Finder. Cliquez sur **Annuler le renommage** en cas d'erreur : les fichiers reviennent là où ils étaient.

> **Important :** par défaut, les fichiers sont **déplacés** : ils quittent le dossier source et vont dans la destination. Choisissez **Lien dur** ou **Copier** dans [Réglages → Comportement](/fr/guide/settings#comportement) pour garder les originaux. Vous pouvez annuler un renommage depuis la page [Historique](/fr/guide/history), tant que les fichiers n'ont pas été déplacés entre-temps.

## Et ensuite

- [Séries](/fr/guide/tv-shows) : séries, saisons et épisodes
- [Films](/fr/guide/movies) : renommer tout un dossier de films d'un coup
- [Musique, livres et jeux](/fr/guide/music-books-games)
- [Historique et annulation](/fr/guide/history) : remettre en place des fichiers renommés
- [Réglages](/fr/guide/settings) : thème, langue, formats des noms, clés d'API
- [FAQ et dépannage](/fr/guide/faq)
