---
title: TV shows
description: Rename your episodes and sort them into series and season folders.
order: 2
---

The **TV Shows** page takes a folder of episodes and turns it into a library organized by series and season.

## Before you start

S.O.K finds the season and episode number in each file name. Your files must contain one of these patterns:

| Pattern | Example |
| --- | --- |
| `S01E02` | `breaking.bad.s01e02.720p.mkv` |
| `1x02` | `Breaking Bad 1x02.mkv` |

Files without a season and episode number keep their original name.

**Supported formats:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Step by step

### 1. Add your source folders

Drag and drop one or more folders onto **Source folders**, or click the area to browse. S.O.K also scans subfolders.

The preview title shows how many files were found, for example *Preview (10 files from Season 1)*.

### 2. Select the series

S.O.K reads the first file name, guesses the series and selects the first search result on its own.

If that is not the right series:

1. Type the name in the search field. The search starts after 2 characters.
2. Click the right result in the list. Check the poster and year to tell remakes apart.

When a series is selected, S.O.K downloads its episode list. The message *Loading episodes...* appears for a moment.

### 3. Choose the destination

Drag and drop a folder onto **Destination**, or click it to browse. This is usually the root of your TV library (for example `D:\Media\TV Shows`).

### 4. Check the preview

The **Preview** panel shows the current name of each file and its new name. Only the first 15 files are listed; a line such as *+ 12 others...* sums up the rest.

### 5. Organize

Click **Organize files**, then **Yes** in the confirmation window. A progress bar shows each file as it moves.

## Result

With the default settings, you get:

```text
TV Shows/
└── Breaking Bad/
    ├── Season 1/
    │   ├── Breaking Bad S01E01 Pilot.mkv
    │   └── Breaking Bad S01E02 Cat's in the Bag.mkv
    └── Season 2/
        └── ...
```

You can change the file name format in [Settings → File formats](/docs/settings#file-formats).

## Create series folders

After you select a series and a destination, the **Create series folders** button appears. It creates the series folder and one empty folder per season, without moving any files. This is useful to prepare a library before you add episodes to it.
