---
title: Filmy
description: Zmiana nazw wielu plików filmowych naraz, każdy dopasowany do własnego filmu.
order: 3
---

Strona **Filmy** zmienia nazwy całej partii filmów naraz. W odróżnieniu od seriali każdy plik jest dopasowywany do własnego filmu.

**Obsługiwane formaty:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Krok po kroku

### 1. Dodanie filmów

Pliki wideo lub foldery należy przeciągnąć i upuścić na **Pliki źródłowe** albo kliknąć ten obszar, aby wybrać pliki. S.O.K szuka filmów w upuszczonych folderach, łącznie z podfolderami. Kolejne można dodać później przyciskiem **+ Dodaj więcej filmów**.

Następnie S.O.K sam wyszukuje każdy plik na podstawie jego nazwy.

### 2. Sprawdzenie każdego dopasowania

Każdy plik ma wiersz z:

- **tekstem wyszukiwania**, który można edytować (tytuł, z rokiem, jeśli jest znany);
- **listą dopasowań** znalezionych w bazie danych;
- **statusem**.

| Status | Znaczenie | Co zrobić |
| --- | --- | --- |
| ✓ **Gotowe** | Jedno dopasowanie ma tytuł pliku oraz, jeśli plik go podaje, jego rok. | Nic. |
| ⚠ **Wybierz** | Znaleziono dopasowania, ale żadne lub kilka pasuje dokładnie. Zaznaczone jest najbardziej prawdopodobne. | Otworzyć listę i wybrać właściwy film. |
| ✗ **Brak** | Nie znaleziono dopasowania. | Poprawić tekst wyszukiwania, a potem kliknąć przycisk ponownego wyszukiwania w wierszu. |

> **Wskazówka:** dodanie roku do tekstu wyszukiwania (na przykład `Dune 2021`) zapobiega większości pomyłek między nowymi wersjami.

**Skanuj wszystko ponownie** uruchamia wyszukiwanie dla wszystkich plików od nowa.

### 3. Wybór celu

Folder należy przeciągnąć i upuścić na **Cel** albo kliknąć ten obszar, aby go wybrać.

### 4. Zmiana nazw

Należy kliknąć **Zmień nazwy wszystkim** i potwierdzić. Zmieniane są tylko wiersze *Gotowe*: wiersze do wyboru zostają w tabeli, aby można je było dokończyć. Pliki oznaczone jako *Brak* zostają na miejscu.

Komunikat na końcu ma przycisk **Cofnij zmianę nazw**. Pliki wracają wtedy do swojego folderu i do tabeli.

## Wynik

Przy formacie domyślnym każdy plik otrzymuje nazwę `Tytuł (Rok)` i trafia do folderu docelowego:

```text
Filmy/
├── Diuna (2021).mkv
├── Incepcja (2010).mp4
└── Matrix (1999).mkv
```

Format można zmienić w [Ustawienia → Formaty wyjściowe](/pl/guide/settings#formaty-wyjściowe), na przykład aby dodać jakość za pomocą `{quality}`.
