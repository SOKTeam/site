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

The first page asks you to create your account: a user name and a password of 8 characters or more. The interface takes the language of your browser; change it in **Settings → Appearance**.

You stay logged in for 30 days on that browser. After 5 wrong passwords, the next attempts wait 30 seconds.

**Forgotten password?** Add `SOK_RESET_PASSWORD=1` and your new password in `SOK_PASSWORD` to the `environment` of the compose file, then restart the container (`docker compose up -d`). Log in with the new password, then remove both lines. Your settings, history and choices are kept.

## Settings

Open **Settings** at the bottom of the sidebar. They have five tabs, and every change is saved right away.

- **Folders**: your **source folders** (the downloads) and the **destination folders** of each type (movies, TV shows, music, books, games). Click **Add a folder…**, then type the path as the server sees it (`/data/downloads`, not the path of your NAS) or click **Browse…** to pick it in the folders of the server. With several destinations for a type, each row of its tab can pick one.
  Below, the **file mode**: **Hard link** (the default), **Copy** or **Move**. In hard link mode, if a folder you add (or the mode itself) makes a hard link impossible, a window explains why and what to change, with a button to switch to **Copy**; a line under the choices opens it again as long as the problem stays.
- **Automation**: the [automatic sorting](#automatic-sorting) and the [notifications](#notifications).
- **Renaming**: the **behavior** and the **output formats**, the same as in the app (see [Settings](/guide/settings)).
- **API Keys**: unlike the app, the image has **no built-in key**. TMDB (movies and TV shows) needs your own key, free on [themoviedb.org](https://www.themoviedb.org/settings/api). Deezer, MusicBrainz and Open Library work without one. Paste a key, click **Save**, then **Test**. Keys are stored encrypted, and never shown again. Each type has its **preferred API** at the top of its group.
- **Appearance**: the **language** and the **theme**: **Light** (white, as on macOS), **Orange** (as on Windows and Linux) or **Dark**. The theme is kept in each browser; **System** (the default) follows the light or dark mode of your device, white on a Mac and orange elsewhere.

You can also give keys with environment variables, such as `API_KEY_TMDB_V4`: they then show as *Set by an environment variable* and cannot be changed from the interface.

## Analyze your downloads

On the **Analysis** page, click **Analyze**. S.O.K sorts the files of your source folders by type, then searches each one; the progress shows live, and you can close the page meanwhile.

At the top, a strip shows your source folders, the last analysis and the automatic sorting; a problem (a missing key, a quota used, a folder not found) shows just below. Then a table gives, for each type, its files and how many are **Ready**, **to pick** and **missing**: **Open** goes to its tab. **Files to check** are files whose type is a guess (a disc image, a video among episodes…): confirm the type or pick another: the file joins its tab and is searched right away, and the next analyses remember it.

Each new analysis keeps what you chose: the match, the search text and the destination of a row found again.

## Review and rename

Each type has its tab, with its file mode and destination under the title. The rows are a table: the poster, the title and the file, the **new name** (in green when it is Ready), and the status. A row is a movie, a track, a book or a game, or a whole series or album with its files; the tabs above the table show the rows of one status.

| Status | Meaning |
| --- | --- |
| **Ready** | One sure match: the title and the year (or the author, the artist) match. |
| **Pick one** | Several results could fit. Click the row to see them, with their poster and summary, and pick the right one. |
| **Missing** | Nothing found. Click the search icon and type another title. |

Under the new name is its folder; unfold a series to see each episode with its new name.

Click **Rename the Ready ones**, at the top, or tick some rows (the box of the header ticks them all) and click **Rename the selection**, under the table. A confirmation gives the number of files and the file mode. The renamed rows leave the table; a file that could not be renamed stays on its row with the reason.

Subtitles follow their video (`Movie.fr.srt` becomes `Dune (2021).fr.srt`), as in the app.

## Automatic sorting

S.O.K Server can do all of this on its own. In **Settings → Automation**, turn on **Sort the new files automatically**: it asks first, because the Ready rows will be renamed without you, those already in the tabs too.

- Every **5 minutes** (you can change it, from 1 to 1440), the server looks at your source folders.
- A file is taken **once its download is finished**: the same size as at the check before. Files still downloading (`.part`, `.!qB`, `.crdownload`…) are left out.
- New finished files start an analysis, then the **Ready** rows are renamed. The rows to pick, the missing ones and the files to check **wait for you** in the tabs, as after a click on **Analyze**.
- The strip of the **Analysis** page shows that it is on and its last sorting (the files renamed; its last check when you point at it), and what stopped it shows below (a type without a destination folder, a missing key…).

Everything it renames is in the **History**, marked *automatic*, and can be undone like the rest.

## Notifications

After each rename, by hand or automatic, S.O.K Server can tell your other apps. Set them in **Settings → Automation**, under the automatic sorting, then click **Test**:

| Target | What to give | What it does |
| --- | --- | --- |
| **Discord** | The address of a webhook of a channel (settings of the channel → Integrations → Webhooks) | Posts the files renamed |
| **Jellyfin** | Its address (`http://jellyfin:8096`) and an API key (Dashboard → API Keys) | Refreshes the libraries |
| **Plex** | Its address (`http://plex:32400`) and your Plex token | Refreshes the libraries |
| **Webhook** | Any address | Sends the rename as JSON (Home Assistant, n8n…) |

The webhook addresses, the key and the token are never shown again once saved.

**A script** can run after each rename too, with the rename as JSON on its input and `SOK_MEDIA_TYPE`, `SOK_RENAMED` and `SOK_AUTO` in its environment. For safety, it cannot be set from the web page: put the script in a mounted folder and give its path in the `environment` of the container, for example `SOK_AFTER_RENAME=/config/after-rename.sh`.

## History and undo

**History** lists your renames by day, with their time, type, files and file mode. **Undo** puts all the files of a rename back; open a rename to see each file with its new name, and click **Put back** to put back one file only (with its subtitles).

- A **hard link** or a **copy** is deleted: the original never moved.
- A **moved** file goes back to its old folder.

An undo never replaces a file, as in the app (see [History and undo](/guide/history#what-an-undo-does)).

### Files already processed

With hard links, a renamed file stays in your downloads. S.O.K remembers it and leaves it out of the next analyses, as long as it does not change. The **Already processed** tab of the History page lists them; tick one and click **Analyze the selection again** to rename it once more. An undone file is analyzed again too.

## Update

```sh
docker compose pull
docker compose up -d
```

Your settings, history and choices are kept in `/config`.

## Behind a reverse proxy

S.O.K Server works behind Nginx, Traefik or Caddy. If your proxy already asks for a login (Authelia, Authentik…), you can turn the login of S.O.K off with `SOK_AUTH=none`: a banner then reminds you that the proxy protects the server.
