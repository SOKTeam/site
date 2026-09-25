---
title: Movies
description: Rename many movie files at once, each matched with its own movie.
order: 3
---

The **Movies** page renames a whole batch of movies at once. Unlike TV shows, each file is matched with its own movie.

**Supported formats:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Step by step

### 1. Add your movies

Drag and drop your video files onto **Source files**, or click the area to select them. You can add more later with **+ Add more movies**.

> This page accepts files, not folders. To add a whole folder, open it in the File Explorer, press **Ctrl+A** to select every file, then drag them into S.O.K.

S.O.K then searches for each file on its own, based on its name.

### 2. Check each match

Each file gets a row with:

- the **search text**, which you can edit (title, with the year if you know it);
- a **list of matches** found in the database;
- a **status**.

| Status | Meaning | What to do |
| --- | --- | --- |
| ✓ **Ready** | Exactly one match was found. | Nothing. |
| ⚠ **Pick one** | Several movies match. The first one is selected. | Open the list and choose the right movie. |
| ✗ **Missing** | No match was found. | Fix the search text, then click the re-scan button on the row. |

> **Tip:** adding the year to the search text (for example `Dune 2021`) avoids most mix-ups between remakes.

**Re-scan all** runs the search again for every file.

### 3. Choose the destination

Drag and drop a folder onto **Destination**, or click it to choose one.

### 4. Rename

Click **Rename all**, then confirm. Only the rows with a selected movie are processed. Files marked *Missing* stay where they are.

## Result

With the default format, each file is renamed to `Title (Year)` and moved to the destination folder:

```text
Movies/
├── Dune (2021).mkv
├── Inception (2010).mp4
└── The Matrix (1999).mkv
```

You can change the format in [Settings → File formats](/docs/settings#file-formats), for example to add the quality with `{quality}`.
