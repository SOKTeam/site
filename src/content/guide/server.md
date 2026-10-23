---
title: S.O.K Server
description: Install S.O.K on a NAS or a home server with Docker, and organize your downloads from a web page.
order: 7
---

S.O.K Server is the same engine as the app, in a Docker image with a web interface. Install it on a NAS or a home server, point it at your download folders, and organize them from any browser: it finds what each file is, shows the new names in a table, and renames everything at once or row by row. Or let it [sort new downloads on its own](#automatic-sorting), and tell Discord, Jellyfin or Plex.

It uses **hard links** by default: the renamed file and the download are the same file on the disk, so your torrents keep seeding without taking more space.

## Install it

S.O.K Server runs on any machine with Docker, on Intel/AMD and ARM (`amd64`, `arm64`). Create a `docker-compose.yml`:

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

Then start it with `docker compose up -d`, and open `http://<your-server>:8080`.

| Setting | What it does |
| --- | --- |
| `/config` | The settings, the database, the history and the logs. Keep it on a disk that is backed up. |
| `/data` (or any folder you want) | Your downloads and your library, as the server sees them. |
| `PUID`, `PGID` | The user and group the server runs as: the files it creates belong to them. Use those of your NAS user (`id` in a terminal). |
| `TZ` | Your time zone, for the dates shown. |
| `8080:8080` | The port of the interface. Change the first number to use another one. |

### Mount one parent folder, for hard links

A hard link only works **inside one mount**. If your downloads are in `/mnt/storage/downloads` and your library in `/mnt/storage/media`, mount `/mnt/storage` once (`/mnt/storage:/data`), then use `/data/downloads` and `/data/media` in the settings.

Mounting them separately (`/mnt/storage/downloads:/downloads` and `/mnt/storage/media:/media`) makes two mounts: hard links fail between them, even on the same disk. The settings tell you when it is the case, before any rename.

## First visit

The first page asks you to create your account: a user name and a password of 8 characters or more. The interface takes the language of your browser; change it in the settings.

You stay logged in for 30 days on that browser. After 5 wrong passwords, the next attempts wait 30 seconds.

**Forgotten password?** Add `SOK_RESET_PASSWORD=1` and your new password in `SOK_PASSWORD` to the `environment` of the compose file, then restart the container (`docker compose up -d`). Log in with the new password, then remove both lines. Your settings, history and choices are kept.

## Settings

Open **Settings** at the bottom of the sidebar. Every change is saved right away.

- **Folders**: your **source folders** (the downloads) and the **destination folders** of each type (movies, TV shows, music, books, games). Click **Browse…** to pick them in the folders of the server, or type the paths as the server sees them: `/data/downloads`, not the path of your NAS. With several destinations for a type, each row of its tab can pick one.
- **File mode**: **Hard link** (the default), **Copy** or **Move**. In hard link mode, a line under the choices says whether hard links work between each source and destination, and why not.
- **Behavior**, **output formats** and **preferred API**: the same as in the app (see [Settings](/guide/settings)).
- **API keys**: unlike the app, the image has **no built-in key**. TMDB (movies and TV shows) needs your own key, free on [themoviedb.org](https://www.themoviedb.org/settings/api). Deezer, MusicBrainz and Open Library work without one. Paste a key, click **Save**, then **Test**. Keys are stored encrypted, and never shown again.

You can also give keys with environment variables, such as `API_KEY_TMDB_V4`: they then show as *Set by an environment variable* and cannot be changed from the interface.

## Analyze your downloads

On the **Analysis** page, click **Analyze**. S.O.K sorts the files of your source folders by type, then searches each one; the progress shows live, and you can close the page meanwhile.

The summary gives the number of items per type and their status. **Files to check** are files whose type is a guess (a disc image, a video among episodes…): confirm the type or pick another: the file joins its tab and is searched right away, and the next analyses remember it.

Each new analysis keeps what you chose: the match, the search text and the destination of a row found again.

## Review and rename

Each type has its tab. A row is a movie, a track, a book or a game, or a whole series or album with its files.

| Status | Meaning |
| --- | --- |
| **Ready** | One sure match: the title and the year (or the author, the artist) match. |
| **Pick one** | Several results could fit. Click the row to see them, with their poster and summary, and pick the right one. |
| **Missing** | Nothing found. Click the search icon and type another title. |

The new name shows next to each file; unfold a series to see each episode in its season folder.

Click **Rename the Ready ones**, or tick some rows and click **Rename the selection**. A confirmation gives the number of files and the file mode. The renamed rows leave the table; a file that could not be renamed stays on its row with the reason.

Subtitles follow their video (`Movie.fr.srt` becomes `Dune (2021).fr.srt`), as in the app.

## Automatic sorting

S.O.K Server can do all of this on its own. In **Settings → Automatic sorting**, turn on **Sort the new files automatically**: it asks first, because the Ready rows will be renamed without you, those already in the tabs too.

- Every **5 minutes** (you can change it, from 1 to 1440), the server looks at your source folders.
- A file is taken **once its download is finished**: the same size as at the check before. Files still downloading (`.part`, `.!qB`, `.crdownload`…) are left out.
- New finished files start an analysis, then the **Ready** rows are renamed. The rows to pick, the missing ones and the files to check **wait for you** in the tabs, as after a click on **Analyze**.
- The **Analysis** page shows that it is on, its last check and its last sorting: the files renamed, and what stopped it (a type without a destination folder, a missing key…).

Everything it renames is in the **History**, and can be undone like the rest.

## Notifications

After each rename, by hand or automatic, S.O.K Server can tell your other apps. Set them in **Settings → Notifications**, then click **Test**:

| Target | What to give | What it does |
| --- | --- | --- |
| **Discord** | The address of a webhook of a channel (settings of the channel → Integrations → Webhooks) | Posts the files renamed |
| **Jellyfin** | Its address (`http://jellyfin:8096`) and an API key (Dashboard → API Keys) | Refreshes the libraries |
| **Plex** | Its address (`http://plex:32400`) and your Plex token | Refreshes the libraries |
| **Webhook** | Any address | Sends the rename as JSON (Home Assistant, n8n…) |

The webhook addresses, the key and the token are never shown again once saved.

**A script** can run after each rename too, with the rename as JSON on its input and `SOK_MEDIA_TYPE`, `SOK_RENAMED` and `SOK_AUTO` in its environment. For safety, it cannot be set from the web page: put the script in a mounted folder and give its path in the `environment` of the container, for example `SOK_AFTER_RENAME=/config/after-rename.sh`.

## History and undo

**History** lists your renames. **Undo the rename** puts all its files back; open a rename to put back one file only (with its subtitles).

- A **hard link** or a **copy** is deleted: the original never moved.
- A **moved** file goes back to its old folder.

An undo never replaces a file, as in the app (see [History and undo](/guide/history#what-an-undo-does)).

### Files already processed

With hard links, a renamed file stays in your downloads. S.O.K remembers it and leaves it out of the next analyses, as long as it does not change. The **Already processed** tab of the History page lists them; tick one and click **Analyze again** to rename it once more. An undone file is analyzed again too.

## Update

```sh
docker compose pull
docker compose up -d
```

Your settings, history and choices are kept in `/config`.

## Behind a reverse proxy

S.O.K Server works behind Nginx, Traefik or Caddy. If your proxy already asks for a login (Authelia, Authentik…), you can turn the login of S.O.K off with `SOK_AUTH=none`: a banner then reminds you that the proxy protects the server.
