---
title: FAQ and troubleshooting
description: Answers to common questions and solutions to common problems.
order: 6
---

## General

### Is S.O.K free?

Yes. S.O.K is free and open source, under the MIT license. The source code is on [GitHub](https://github.com/SOKTeam/S.O.K).

### Does S.O.K copy or move my files?

It **moves** them. After an organization, the files are no longer in the source folder. There is no undo button, so check the preview before you confirm.

### Is my library compatible with Plex, Jellyfin or Kodi?

Yes. The default names and folders (`Series/Season 1/Series S01E01 Title.mkv`, `Movie (Year).mkv`) follow the conventions these media servers expect.

### Do I need an account or an API key?

No, not for TV shows and movies: TMDB and TVDB come with a built-in key. Only some services, such as Spotify, Last.fm, IGDB and OMDb, need a connection or a personal key. See [Settings → API keys](/docs/settings#api-keys).

### Does S.O.K need an internet connection?

Yes, to search the databases. Renaming and moving files happen on your computer.

## Problems

### "No files found"

- Check that the folder contains files in a [supported format](/docs/tv-shows#before-you-start).
- Check that you are on the right page: a video folder added to the *Music* page finds nothing.

### The search does not find my media

- Type at least 2 characters.
- Search for the original title, or the title in the language selected in *Settings*.
- On the *Movies* page, add the year to the search text: `Dune 2021`.
- Check your internet connection.

### The wrong series or movie was selected automatically

S.O.K selects the first result for the name it guessed from the file. Type another name in the search field and click the right result. The preview updates immediately.

### Some episodes keep their original name

The file name has no season and episode number that S.O.K can read. Rename the file so it contains `S01E02` or `1x02`, then add the folder again.

### "Finished with errors"

Some files could not be moved. The most common causes:

- **A file is open in another program** (a media player, for example). Close it and try again.
- **You do not have permission** to write to the destination folder.
- **The destination drive is full or was disconnected** during the move.

> When a file with the same name already exists in the destination, S.O.K replaces it. To keep the old file, turn on *Skip duplicates* or *Backup before rename* in [Settings → Behavior](/docs/settings#behavior).

### "Please select a destination folder."

The *Destination* area is empty, or the folder no longer exists. Choose it again.

### A service shows "⚠️ Missing key"

This service needs a key or a connection. Configure it in [Settings → API keys](/docs/settings#api-keys), or choose another service in *Preferred API*.

### Windows says the installer is unsafe

Windows SmartScreen warns about software it does not know yet. Click **More info**, then **Run anyway**. Always download S.O.K from the [Download](/download) page or from the [GitHub releases](https://github.com/SOKTeam/S.O.K/releases).

### macOS says S.O.K cannot be opened

S.O.K is not yet notarized by Apple, so macOS blocks it the first time. Click **Done**, then go to **System Settings → Privacy & Security** and click **Open Anyway** next to the S.O.K message. See [Getting started](/docs/getting-started#macos).

## Still stuck?

[Open an issue on GitHub](https://github.com/SOKTeam/S.O.K/issues) and describe what you did, what you expected and what happened. Add your S.O.K version (shown in *Settings → About*).
