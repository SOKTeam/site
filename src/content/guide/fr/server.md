---
title: S.O.K Server
description: Installez S.O.K sur un NAS ou un serveur maison avec Docker, et rangez vos téléchargements depuis une page web.
order: 7
---

S.O.K Server, c'est le même moteur que l'app, dans une image Docker avec une interface web. Installez-le sur un NAS ou un serveur maison, indiquez-lui vos dossiers de téléchargement, et rangez-les depuis n'importe quel navigateur : il trouve ce qu'est chaque fichier, affiche les nouveaux noms dans un tableau, et renomme tout d'un coup ou ligne par ligne. Ou laissez-le [ranger les nouveaux téléchargements tout seul](#tri-automatique), et prévenir Discord, Jellyfin ou Plex.

Il utilise des **liens durs** par défaut : le fichier renommé et le téléchargement sont le même fichier sur le disque, donc vos torrents continuent de partager sans prendre plus de place.

**[Essayer la démo](/demo?lang=fr)** : la vraie interface dans votre navigateur, avec une bibliothèque d'exemple. Rien à installer, et aucun fichier n'est renommé.

## L'installer

S.O.K Server tourne sur toute machine avec Docker, en Intel/AMD et en ARM (`amd64`, `arm64`). Créez un fichier `docker-compose.yml` :

```yaml
services:
  sok-server:
    image: ghcr.io/sokteam/sok-server:latest
    container_name: sok-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Paris
    volumes:
      - /srv/sok/config:/config
      - /mnt/storage:/data
    ports:
      - 8080:8080
    restart: unless-stopped
```

Lancez-le ensuite avec `docker compose up -d`, et ouvrez `http://<votre-serveur>:8080`.

| Réglage | Rôle |
| --- | --- |
| `/config` | Les réglages, la base de données, l'historique et les journaux. Gardez-le sur un disque sauvegardé. |
| `/data` (ou le dossier de votre choix) | Vos téléchargements et votre bibliothèque, tels que le serveur les voit. |
| `PUID`, `PGID` | L'utilisateur et le groupe sous lesquels tourne le serveur : les fichiers qu'il crée leur appartiennent. Prenez ceux de votre utilisateur du NAS (`id` dans un terminal). |
| `TZ` | Votre fuseau horaire, pour les dates affichées. |
| `8080:8080` | Le port de l'interface. Changez le premier nombre pour en utiliser un autre. |

### Montez un seul dossier parent, pour les liens durs

Un lien dur ne fonctionne qu'**à l'intérieur d'un même montage**. Si vos téléchargements sont dans `/mnt/storage/downloads` et votre bibliothèque dans `/mnt/storage/media`, montez `/mnt/storage` une seule fois (`/mnt/storage:/data`), puis utilisez `/data/downloads` et `/data/media` dans les réglages.

Les monter séparément (`/mnt/storage/downloads:/downloads` et `/mnt/storage/media:/media`) crée deux montages : les liens durs échouent entre eux, même sur le même disque. Les réglages vous le signalent, avant tout renommage.

## Première visite

La première page vous demande de créer votre compte : un nom d'utilisateur et un mot de passe de 8 caractères ou plus. L'interface prend la langue de votre navigateur ; changez-la dans **Réglages → Apparence**.

Vous restez connecté 30 jours sur ce navigateur. Après 5 mots de passe erronés, les tentatives suivantes attendent 30 secondes.

**Mot de passe oublié ?** Ajoutez `SOK_RESET_PASSWORD=1` et votre nouveau mot de passe dans `SOK_PASSWORD` à l'`environment` du fichier compose, puis redémarrez le conteneur (`docker compose up -d`). Connectez-vous avec le nouveau mot de passe, puis retirez ces deux lignes. Vos réglages, votre historique et vos choix sont conservés.

## Réglages

Ouvrez **Réglages** en bas de la barre latérale. Ils ont cinq onglets, et chaque modification est enregistrée tout de suite.

- **Dossiers** : vos **dossiers sources** (les téléchargements) et les **dossiers de destination** de chaque type (films, séries, musique, livres, jeux). Cliquez sur **Ajouter un dossier…**, puis tapez le chemin tel que le serveur le voit (`/data/downloads`, pas le chemin de votre NAS) ou cliquez sur **Parcourir…** pour le choisir parmi les dossiers du serveur. Avec plusieurs destinations pour un type, chaque ligne de son onglet peut en choisir une.
  En dessous, le **mode de fichier** : **Lien dur** (par défaut), **Copier** ou **Déplacer**. En mode lien dur, si un dossier que vous ajoutez (ou le mode lui-même) rend un lien dur impossible, une fenêtre explique pourquoi et quoi changer, avec un bouton pour passer en **Copier** ; une ligne sous les choix la rouvre tant que le problème reste.
- **Automatisation** : le [tri automatique](#tri-automatique) et les [notifications](#notifications).
- **Renommage** : le **comportement** et les **formats de sortie**, les mêmes que dans l'app (voir [Réglages](/fr/guide/settings)).
- **Clés API** : contrairement à l'app, l'image n'a **aucune clé intégrée**. TMDB (films et séries) demande votre propre clé, gratuite sur [themoviedb.org](https://www.themoviedb.org/settings/api). Deezer, MusicBrainz et Open Library fonctionnent sans. Collez une clé, cliquez sur **Enregistrer**, puis sur **Tester**. Les clés sont enregistrées chiffrées et ne sont plus jamais affichées. Chaque type a son **API préférée** en haut de son groupe.
- **Apparence** : la **langue** et le **thème** : **Clair** (blanc, comme sur macOS), **Orange** (comme sur Windows et Linux) ou **Sombre**. Le thème est gardé dans chaque navigateur ; **Système** (par défaut) suit le mode clair ou sombre de votre appareil, en blanc sur Mac et en orange ailleurs.

Vous pouvez aussi donner les clés par des variables d'environnement, comme `API_KEY_TMDB_V4` : elles s'affichent alors comme *Définie par une variable d'environnement* et ne peuvent pas être modifiées depuis l'interface.

## Analyser vos téléchargements

Sur la page **Analyse**, cliquez sur **Analyser**. S.O.K trie les fichiers de vos dossiers sources par type, puis cherche chacun d'eux ; la progression s'affiche en direct, et vous pouvez fermer la page en attendant.

En haut, un bandeau montre vos dossiers sources, la dernière analyse et le tri automatique ; un problème (une clé manquante, un quota épuisé, un dossier introuvable) s'affiche juste en dessous. Un tableau donne ensuite, pour chaque type, ses fichiers et combien sont **Prêt**, **À choisir** et **Manquant** : **Ouvrir** mène à son onglet. Les **Fichiers à vérifier** sont des fichiers dont le type est une supposition (une image disque, une vidéo parmi des épisodes…) : confirmez le type ou choisissez-en un autre : le fichier rejoint son onglet et il est cherché tout de suite, et les analyses suivantes s'en souviennent.

Chaque nouvelle analyse garde vos choix : le résultat, le texte de recherche et la destination d'une ligne retrouvée.

## Vérifier et renommer

Chaque type a son onglet, avec son mode de fichier et sa destination sous le titre. Les lignes forment un tableau : l'affiche, le titre et le fichier, le **nouveau nom** (en vert quand il est Prêt), et le statut. Une ligne est un film, un morceau, un livre ou un jeu, ou bien toute une série ou tout un album avec ses fichiers ; les onglets au-dessus du tableau montrent les lignes d'un statut.

| Statut | Signification |
| --- | --- |
| **Prêt** | Un seul résultat sûr : le titre et l'année (ou l'auteur, l'artiste) correspondent. |
| **À choisir** | Plusieurs résultats pourraient convenir. Cliquez sur la ligne pour les voir, avec leur affiche et leur résumé, et choisissez le bon. |
| **Manquant** | Rien n'a été trouvé. Cliquez sur l'icône de recherche et tapez un autre titre. |

Sous le nouveau nom se trouve son dossier ; dépliez une série pour voir chaque épisode avec son nouveau nom.

Cliquez sur **Renommer les prêts**, en haut, ou cochez des lignes (la case de l'en-tête les coche toutes) et cliquez sur **Renommer la sélection**, sous le tableau. Une confirmation indique le nombre de fichiers et le mode de fichier. Les lignes renommées quittent le tableau ; un fichier qui n'a pas pu être renommé reste sur sa ligne, avec la raison.

Les sous-titres suivent leur vidéo (`Film.fr.srt` devient `Dune (2021).fr.srt`), comme dans l'app.

## Tri automatique

S.O.K Server peut faire tout cela tout seul. Dans **Réglages → Automatisation**, activez **Trier automatiquement les nouveaux fichiers** : il demande d'abord confirmation, car les lignes Prêt seront renommées sans vous, y compris celles déjà dans les onglets.

- Toutes les **5 minutes** (vous pouvez changer ce délai, de 1 à 1 440), le serveur regarde vos dossiers sources.
- Un fichier est pris **une fois son téléchargement terminé** : quand il a la même taille qu'à la vérification précédente. Les fichiers encore en téléchargement (`.part`, `.!qB`, `.crdownload`…) sont ignorés.
- Les nouveaux fichiers terminés lancent une analyse, puis les lignes **Prêt** sont renommées. Les lignes à choisir, les manquantes et les fichiers à vérifier **vous attendent** dans les onglets, comme après un clic sur **Analyser**.
- Le bandeau de la page **Analyse** montre qu'il est activé et son dernier tri (les fichiers renommés ; sa dernière vérification quand vous pointez dessus), et ce qui l'a arrêté s'affiche en dessous (un type sans dossier de destination, une clé manquante…).

Tout ce qu'il renomme est dans l'**Historique**, marqué *automatique*, et s'annule comme le reste.

## Notifications

Après chaque renommage, manuel ou automatique, S.O.K Server peut prévenir vos autres apps. Réglez-les dans **Réglages → Automatisation**, sous le tri automatique, puis cliquez sur **Tester** :

| Cible | Ce qu'il faut donner | Ce qu'elle fait |
| --- | --- | --- |
| **Discord** | L'adresse d'un webhook d'un salon (paramètres du salon → Intégrations → Webhooks) | Publie les fichiers renommés |
| **Jellyfin** | Son adresse (`http://jellyfin:8096`) et une clé d'API (Tableau de bord → Clés API) | Actualise les bibliothèques |
| **Plex** | Son adresse (`http://plex:32400`) et votre jeton Plex | Actualise les bibliothèques |
| **Webhook** | N'importe quelle adresse | Envoie le renommage en JSON (Home Assistant, n8n…) |

Les adresses des webhooks, la clé et le jeton ne sont plus jamais affichés une fois enregistrés.

**Un script** peut aussi être lancé après chaque renommage, avec le renommage en JSON sur son entrée et `SOK_MEDIA_TYPE`, `SOK_RENAMED` et `SOK_AUTO` dans son environnement. Par sécurité, il ne peut pas être réglé depuis la page web : placez le script dans un dossier monté et donnez son chemin dans l'`environment` du conteneur, par exemple `SOK_AFTER_RENAME=/config/after-rename.sh`.

## Historique et annulation

L'**Historique** liste vos renommages par jour, avec leur heure, leur type, leurs fichiers et leur mode de fichier. **Annuler** remet en place tous les fichiers d'un renommage ; ouvrez un renommage pour voir chaque fichier avec son nouveau nom, et cliquez sur **Remettre** pour remettre un seul fichier (avec ses sous-titres).

- Un **lien dur** ou une **copie** est supprimé : l'original n'a jamais bougé.
- Un fichier **déplacé** retourne dans son ancien dossier.

Une annulation ne remplace jamais un fichier, comme dans l'app (voir [Historique et annulation](/fr/guide/history#ce-que-fait-une-annulation)).

### Fichiers déjà traités

Avec les liens durs, un fichier renommé reste dans vos téléchargements. S.O.K s'en souvient et l'écarte des analyses suivantes, tant qu'il ne change pas. L'onglet **Déjà traités** de la page Historique les liste ; cochez-en un et cliquez sur **Réanalyser la sélection** pour le renommer à nouveau. Un fichier dont le renommage a été annulé est lui aussi analysé à nouveau.

## Mettre à jour

```sh
docker compose pull
docker compose up -d
```

Vos réglages, votre historique et vos choix sont gardés dans `/config`.

## Derrière un reverse proxy

S.O.K Server fonctionne derrière Nginx, Traefik ou Caddy. Si votre proxy demande déjà une connexion (Authelia, Authentik…), vous pouvez désactiver la connexion de S.O.K avec `SOK_AUTH=none` : un bandeau rappelle alors que c'est le proxy qui protège le serveur.
