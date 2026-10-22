---
title: History and undo
description: See the renames you made and put the files back where they were.
order: 6
---

S.O.K remembers your last 100 renames. Each one can be undone, all at once or file by file.

## Right after a rename

The message shown at the end of a rename has an **Undo rename** button. Click it and the files go back to their folder with their old name. On the *Movies*, *Books*, *Games* and *Tracks* pages, they also go back to the table, so you can pick another match and rename them again.

## The History page

Open **History** in the sidebar, above *Settings* (on a Mac, also **View → History** or <kbd>Cmd</kbd>+<kbd>Y</kbd>). Each rename is a card with the page it was made on, the number of files and the date.

- **Undo** puts back every file of the rename, after a confirmation.
- Click the card to see its files, old name → new name. The **↺** button next to a file puts back that file only.
- A rename that was undone is marked *Undone*, or *Partly undone* when only some of its files went back.
- **Clear history** forgets every rename, after a confirmation. The files stay where they are, but the renames can no longer be undone.

## What an undo does

- Each file goes back to its old folder, with its old name. Its subtitles go back with it.
- A file renamed with a **hard link** or a **copy** is deleted, if the original is still there: the original never moved.
- If a rename replaced a file and *Backup before rename* was on, the replaced file is put back.
- The posters and covers saved by the rename are deleted once all their files are back. Images that were already there are never touched.
- The folders the rename created are deleted when they are left empty.

An undo **never replaces a file**. A file is left where it is, and listed in the message with the reason, when:

- it was **moved or deleted** since the rename;
- **another file has its old name** in the old folder.

Move or rename that file yourself, then click **Undo** again: the files already back are skipped.
