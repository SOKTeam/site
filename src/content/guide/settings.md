---
title: Settings
description: Theme, language, output and input formats, databases, API keys and behavior options.
order: 5
---

Open **Settings** at the bottom of the sidebar. Every change is saved right away: there is no *Save* button.

## API keys

S.O.K gets its information from online databases. This section lists them by category (video, music, books, games, artwork) with their status.

| Type | Services | What you need to do |
| --- | --- | --- |
| **Built-in key** | TMDB, TVDB, Fanart.tv | Nothing. A key is included. You can enter your own key in the *Custom key (Optional)* field. |
| **Free** | Deezer, MusicBrainz, Google Books, Open Library, RAWG | Nothing. |
| **Connection** | Spotify, IGDB | Click **Connect** and follow the steps. |
| **Personal key** | OMDb (IMDb), Last.fm | Create a free key on the service's website, then paste it. |

### Adding a personal key

1. Click **Get** next to the service. S.O.K opens the page where you can create a key.
2. Copy the key and paste it into the field. It is saved when you press <kbd>Enter</kbd> or leave the field; empty the field to remove it.
3. Click **Test**. The status changes to *Operational* if the key works, or *Invalid key* if it does not.

### Connecting an account

1. Click **Connect** next to Spotify or IGDB.
2. S.O.K asks for the API key (and the secret, if the service needs one) and can open the service's page to create it.
3. When it succeeds, the status changes to *Connected*.

To remove the connection, click **Disconnect**.

> Your keys are stored encrypted on your computer.

## Preferred API

For each category, choose which database S.O.K uses first. A ⚠️ warning appears if the chosen service still needs a key.

## Default folders

Records the folder of each of your libraries (videos, music, books, games). Click **Browse** to choose one.

When a page opens with an empty *Destination*, S.O.K fills it with the default folder for that media type. You can still choose another folder.

## Output formats

Defines how files are renamed. Type a new pattern in the field. Words between braces are replaced with the media's information.

| Media | Default format | Available variables |
| --- | --- | --- |
| **TV series** | `{title} S{season}E{episode} {episode_title}` | `{title}`, `{season}`, `{episode}`, `{episode_title}` |
| **Movies** | `{title} ({year})` | `{title}`, `{year}`, `{quality}` |
| **Music** | `{artist} - {album}/{track} - {title}` | `{artist}`, `{album}`, `{track}`, `{title}`, `{year}` |
| **Book** | `{author} - {title} ({year})` | `{author}`, `{title}`, `{year}`, `{series}`, `{series_number}` |
| **Game** | `{title} {tags}` | `{title}`, `{year}`, `{platform}`, `{tags}` |

**Examples:**

- `{title} - S{season}E{episode} - {episode_title}` gives `Breaking Bad - S01E01 - Pilot.mkv`
- `{title} ({year}) [{quality}]` gives `Inception (2010) [1080p].mkv`
- `{artist}/{year} - {album}/{track}. {title}` gives `Daft Punk/2001 - Discovery/01. One More Time.mp3`

In the music format, each `/` makes a folder. A value that a file does not have is left out with what surrounds it: without a year, `{title} ({year})` gives `Title`. `{series}` and `{series_number}` come from the original name of the book (`Author - [Dune 2] - Title`). `{tags}` are the tags of the original name of the game, such as `(USA) (Rev 1)`.

Characters that Windows forbids in file names (`< > : " / \ | ? *`) are removed.

## Input formats

Describes how **your** files are named, so S.O.K reads names it does not know. Use the variables of the output formats:

1. Choose the type (TV series, Movies, Music, Book, Game).
2. Type a pattern, for example `{artist} - {year} - {album} - {track} - {title}`, and click **Add**.
3. Check it with **Test**: paste a file name, with its extension, and S.O.K shows what it reads and which pattern it used.

Your patterns are tried before the forms S.O.K already knows. Hover the **ⓘ** next to the title to see those forms and the variables of each type.

- Spaces, dots and underscores are the same separator: `{title} {year}` also reads `The.Matrix.1999`.
- `{ignore}` skips a part of the name, such as the quality or the release group: `{title} {year} {ignore}` reads `Dune.2021.1080p.BluRay-GROUP`.
- `{year}` takes four digits, and the season, episode, track and disc numbers take digits.
- A TV series pattern needs `{episode}`, the others need `{title}`.

A video read by a TV series pattern counts as an episode on the home page, and one read by a Movies pattern as a movie.

## Appearance

- **Dark mode**: switches between the dark theme and the orange theme.
- **Match system appearance** (macOS only): follows the light or dark mode chosen in the macOS settings.
- **Use system accent color** (macOS only): uses the accent color chosen in *System Settings → Appearance*.
- **Language**: English, Français, Deutsch, Español, Italiano, Português, Русский, Polski. The language also sets the words used in folder names (*Season*, *Saison*, *Staffel*...).

## Behavior

| Option | Effect |
| --- | --- |
| **File mode** | **Move** (the default): the files leave the source folder. **Hard link**: the original stays where it is, so torrents keep seeding, without using more space; the destination must be on the same drive. **Copy**: the original stays, and the copy takes the space twice. |
| **Move subtitles with videos** | Subtitles named like their video (`Movie.srt`, `Movie.fr.srt`, `Movie.en.forced.srt`) are renamed and moved with it: `Dune (2021).fr.srt`. On by default. |
| **Create missing folders** | Creates the series and season folders in the destination when they do not exist. |
| **Download posters** | After a rename, saves the poster or cover of each item where Plex, Jellyfin and Kodi look for it: `Movie (Year)-poster.jpg` next to a movie, `poster.jpg` in a series folder, `cover.jpg` in an album or book folder. An image already there is kept. Games get none. Off by default. |
| **Backup before rename** | If a file with the same name already exists in the destination, keeps a copy of it with the `.backup` extension before replacing it. |
| **Skip duplicates** | If a file with the same name already exists in the destination, leaves the source file where it is instead of replacing it. |
| **Log operations** | Writes every move to the log file. |

## About

- **Version**: the version you are running.
- **Check for updates**: at launch, S.O.K tells you when a new version is available. On Linux, it can replace the AppImage with the new version and restart.
- **Discord Rich Presence**: shows what you are doing in S.O.K on your Discord profile.
- **Reset settings**: restores every setting to its default value, after confirmation.
