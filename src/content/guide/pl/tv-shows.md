---
title: Seriale
description: Zmiana nazw odcinków i porządkowanie ich w folderach serialu i sezonu.
order: 2
---

Strona **Seriale** zamienia folder z odcinkami w bibliotekę uporządkowaną według serialu i sezonu.

## Zanim Państwo zaczną

S.O.K odczytuje numer sezonu i odcinka z każdej nazwy pliku. Najczęstsze zapisy to:

| Zapis | Przykład |
| --- | --- |
| `S01E02` | `breaking.bad.s01e02.720p.mkv` |
| `1x02` | `Breaking Bad 1x02.mkv` |
| `Season 1 Episode 2` | `Breaking Bad Season 1 Episode 2.mkv` |

Pliki bez numeru sezonu i odcinka zachowują swoją pierwotną nazwę.

**Obsługiwane formaty:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Krok po kroku

### 1. Dodanie folderów źródłowych

Jeden lub kilka folderów należy przeciągnąć i upuścić na **Foldery źródłowe** albo kliknąć ten obszar, aby je wybrać. S.O.K przegląda też podfoldery.

Tytuł podglądu pokazuje, ile plików znaleziono, na przykład *Podgląd (10 pliki z Season 1)*.

### 2. Wybór serialu

S.O.K odczytuje nazwę pierwszego pliku, odgaduje serial i sam wybiera pierwszy wynik wyszukiwania.

Jeśli to nie ten serial:

1. Należy wpisać nazwę w polu wyszukiwania. Wyszukiwanie zaczyna się od 2 znaków.
2. Następnie kliknąć właściwy wynik na liście. Plakat i rok pomagają odróżnić nowe wersje.

Po wybraniu serialu S.O.K pobiera listę jego odcinków. Na chwilę pojawia się komunikat *Ładowanie odcinków...*.

### 3. Wybór celu

Folder należy przeciągnąć i upuścić na **Cel** albo kliknąć ten obszar, aby go wybrać. Zwykle jest to główny folder biblioteki seriali (na przykład `D:\Multimedia\Seriale`).

### 4. Sprawdzenie podglądu

Panel **Podgląd** pokazuje obecną i nową nazwę każdego pliku. Wyświetla się tylko pierwszych 15 plików; wiersz w rodzaju *+ 12 inne...* podsumowuje resztę.

### 5. Porządkowanie

Należy kliknąć **Organizuj pliki** i potwierdzić. Pasek postępu pokazuje każdy przenoszony plik.

## Wynik

Przy ustawieniach domyślnych powstaje:

```text
Seriale/
└── Breaking Bad/
    ├── Sezon 1/
    │   ├── Breaking Bad S01E01 Pilot.mkv
    │   └── Breaking Bad S01E02 Ptaszek w klatce.mkv
    └── Sezon 2/
        └── ...
```

Format nazw plików można zmienić w [Ustawienia → Formaty wyjściowe](/pl/guide/settings#formaty-wyjściowe). Komunikat na końcu ma przycisk **Cofnij zmianę nazw**, a każde porządkowanie jest widoczne na stronie [Historia](/pl/guide/history).

## Tworzenie folderów serialu

Po wybraniu serialu i celu pojawia się przycisk **Utwórz foldery serii**. Tworzy on folder serialu i pusty folder dla każdego sezonu, bez przenoszenia plików. Przydaje się do przygotowania biblioteki przed dodaniem odcinków.
