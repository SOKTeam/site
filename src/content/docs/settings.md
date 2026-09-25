---
title: Settings
description: Theme, language, file name formats, databases, API keys and behavior options.
order: 5
---

Open **Settings** at the bottom of the sidebar. Every change is saved right away: there is no *Save* button.

## API keys

S.O.K gets its information from online databases. This section lists them by category (video, music, books, games, artwork) with their status.

| Type | Services | What you need to do |
| --- | --- | --- |
| **Built-in key** | TMDB, TVDB, Fanart.tv | Nothing. A key is included. You can enter your own key in the *Custom key (Optional)* field. |
| **Free** | Deezer, MusicBrainz, Google Books, Open Library, RAWG | Nothing. |
| **Connection** | Spotify, Last.fm, IGDB | Click **Connect** and follow the steps. |
| **Personal key** | OMDb (IMDb) | Create a free key on the service's website, then paste it. |

### Adding a personal key

1. Click **Get** next to the service. S.O.K opens the page where you can create a key.
2. Copy the key and paste it into the field.
3. Click **Test**. The status changes to *Operational* if the key works, or *Invalid key* if it does not.

### Connecting an account

1. Click **Connect** next to Spotify, Last.fm or IGDB.
2. S.O.K asks for the API key (and the secret, if the service needs one) and can open the service's page to create it.
3. When it succeeds, the status changes to *Connected*.

To remove the connection, click **Disconnect**.

> Your keys are stored encrypted on your computer.

## Preferred API

For each category, choose which database S.O.K uses first. A ⚠️ warning appears if the chosen service still needs a key.

## Default folders

Records the folder of each of your libraries (videos, music, books, games). Click **Browse** to choose one.

## File formats

Defines how files are renamed. Type a new pattern in the field. Words between braces are replaced with the media's information.

| Media | Default format | Available variables |
| --- | --- | --- |
| **TV series** | `{title} S{season}E{episode} {episode_title}` | `{title}`, `{season}`, `{episode}`, `{episode_title}` |
| **Movies** | `{title} ({year})` | `{title}`, `{year}`, `{quality}` |
| **Music** | `{track} - {title}` | `{artist}`, `{album}`, `{track}`, `{title}`, `{year}` |

**Examples:**

- `{title} - S{season}E{episode} - {episode_title}` gives `Breaking Bad - S01E01 - Pilot.mkv`
- `{title} ({year}) [{quality}]` gives `Inception (2010) [1080p].mkv`

Characters that Windows forbids in file names (`< > : " / \ | ? *`) are removed.

## Appearance

- **Dark mode**: switches between the dark theme and the orange theme.
- **Language**: English, Français, Deutsch, Español, Italiano, Português, Русский, Polski. The language also sets the words used in folder names (*Season*, *Saison*, *Staffel*...).

## Behavior

| Option | Effect |
| --- | --- |
| **Create missing folders** | Creates the series and season folders in the destination when they do not exist. |
| **Backup before rename** | If a file with the same name already exists in the destination, keeps a copy of it with the `.backup` extension before replacing it. |
| **Skip duplicates** | If a file with the same name already exists in the destination, leaves the source file where it is instead of replacing it. |
| **Log operations** | Writes every move to the log file. Useful to find where a file went. |

*Auto-organize* and *Download posters* are marked *Coming soon*.

## About

- **Version**: the version you are running.
- **Check for updates**: at launch, S.O.K tells you when a new version is available.
- **Discord Rich Presence**: shows what you are doing in S.O.K on your Discord profile.
- **Reset settings**: restores every setting to its default value, after confirmation.
