---
title: Pierwsze kroki
description: Instalacja S.O.K, przegląd interfejsu i porządkowanie pierwszego folderu.
order: 1
---

S.O.K (Storage Organisation Kit) rozpoznaje pliki multimedialne za pomocą internetowych baz danych, a następnie zmienia ich nazwy i przenosi je do czystej biblioteki, zgodnej z Plex, Jellyfin i Kodi.

## Instalacja

S.O.K jest dostępny dla **Windows 10 i 11 (64-bit)**, **macOS na Apple Silicon** (M1 lub nowszy) oraz **Linux** (64-bit, Intel/AMD lub ARM).

### Windows

1. Na stronie [Pobierz](/pl/download) należy pobrać instalator (`SOK_Setup_vX.Y.Z.exe`).
2. Następnie należy uruchomić instalator. Jest w języku angielskim; opcja **Create a desktop shortcut** tworzy skrót na pulpicie.
3. **S.O.K** uruchamia się z menu Start lub z pulpitu.

> Przy pierwszym uruchomieniu instalatora Windows SmartScreen może wyświetlić ostrzeżenie. Wystarczy kliknąć **Więcej informacji**, a potem **Uruchom mimo to**.

### macOS

1. Na stronie [Pobierz](/pl/download) należy pobrać obraz dysku (`SOK_macOS_vX.Y.Z.dmg`).
2. Po otwarciu obrazu dysku należy przeciągnąć **S.O.K** do folderu **Aplikacje**.
3. **S.O.K** uruchamia się z folderu Aplikacje lub z Launchpada.

> Przy pierwszym otwarciu S.O.K macOS informuje, że nie może zweryfikować dewelopera. Należy zamknąć komunikat, otworzyć **Ustawienia systemowe → Prywatność i ochrona**, przewinąć w dół i kliknąć **Otwórz mimo to** obok komunikatu o S.O.K, a następnie potwierdzić hasłem. Wystarczy zrobić to raz.

### Linux

S.O.K jest dostarczany jako AppImage: jeden plik, który działa na większości dystrybucji, bez instalacji.

1. Na stronie [Pobierz](/pl/download) należy pobrać AppImage dla swojego procesora:
   - **Intel/AMD** (`SOK_Linux_vX.Y.Z_x86_64.AppImage`) dla większości komputerów.
   - **ARM** (`SOK_Linux_vX.Y.Z_aarch64.AppImage`) dla komputerów ARM.

   W razie wątpliwości polecenie `uname -m` w terminalu wypisuje `x86_64` lub `aarch64`.
2. Plik musi mieć prawo do uruchamiania: w menedżerze plików należy kliknąć go prawym przyciskiem, otworzyć **Właściwości** i włączyć **Zezwolenie na wykonywanie pliku jako programu** (nazwa zależy od środowiska). W terminalu: `chmod +x SOK_Linux_*.AppImage`.
3. Dwukrotne kliknięcie pliku uruchamia **S.O.K**. Aplikacja dodaje się do menu aplikacji, więc następnym razem można ją uruchomić stamtąd.

> Wersja Intel/AMD wymaga Ubuntu 22.04, Debiana 12, Fedory 35 lub nowszej dystrybucji. Wersja ARM wymaga Ubuntu 24.04, Debiana 13, Fedory 40 lub nowszej.

S.O.K działa bez konfiguracji: główne bazy danych (TMDB, TVDB) mają wbudowany klucz. Potrzebne jest tylko połączenie z internetem.

## Interfejs

Okno ma dwie części:

- **Pasek boczny (po lewej)**: służy do przechodzenia między stronami. Ikona menu u góry zwija go lub rozwija.
  - **Biblioteka**: *Strona główna*, *Seriale*, *Filmy*, *Muzyka*, *Książki*, *Gry*
  - **Ogólne**: *Historia*, *Ustawienia*
- **Obszar główny (po prawej)**: wybrana strona.

### Strona główna

- **Strefa upuszczania**: można na nią upuścić dowolne pliki lub foldery. S.O.K sortuje je według typu (filmy, seriale, albumy, utwory, książki, gry) i pokazuje jedną grupę na serial, na album i na typ. Przycisk **Otwórz** wysyła grupę na jej stronę; gdy wszystkie pliki są jednego typu, jego strona otwiera się od razu. Pliki, których typ jest tylko przypuszczeniem, na przykład obraz dysku, który może być grą lub filmem, trafiają do sekcji *Do sprawdzenia* z podaniem powodu: należy wybrać ich typ i kliknąć **Dodaj**.
- **Monitorowanie dysków** pokazuje wolne miejsce na każdym dysku (na Macu dysk startowy i zamontowane woluminy; w Linuksie dysk systemowy i dyski zamontowane w `/media`, `/run/media` lub `/mnt`). Ikona jest zielona przy ponad 20 % wolnego miejsca, pomarańczowa poniżej 20 % i czerwona poniżej 10 %.
- **Szybki dostęp** ma jedną kartę na każdy typ multimediów. Kliknięcie karty otwiera jej stronę.

## Pierwsze porządki

Najszybciej można zobaczyć S.O.K w działaniu na przykładzie serialu:

1. W pasku bocznym należy otworzyć **Seriale**.
2. Folder z odcinkami należy **przeciągnąć i upuścić** na **Foldery źródłowe** lub kliknąć ten obszar, aby go wybrać.
3. S.O.K odgaduje nazwę serialu na podstawie pierwszego pliku i sam uruchamia wyszukiwanie. Jeśli pierwszy wynik jest błędny, wystarczy wpisać inną nazwę i kliknąć właściwy wynik.
4. Folder docelowy należy **przeciągnąć i upuścić** na **Cel** lub kliknąć ten obszar, aby go wybrać. Tam powstanie biblioteka.
5. Po sprawdzeniu **Podglądu** po prawej należy kliknąć **Organizuj pliki** i potwierdzić.

Następnie komunikat pokazuje, ile plików uporządkowano. Na Macu proponuje pokazanie celu w Finderze. Jeśli coś poszło nie tak, przycisk **Cofnij zmianę nazw** przywraca pliki na miejsce.

> **Ważne:** domyślnie pliki są **przenoszone**: opuszczają folder źródłowy i trafiają do celu. Aby zachować oryginały, należy wybrać **Twarde dowiązanie** lub **Kopiuj** w [Ustawienia → Zachowanie](/pl/guide/settings#zachowanie). Zmianę nazw można cofnąć na stronie [Historia](/pl/guide/history), o ile pliki nie zostały w międzyczasie przeniesione.

## Co dalej

- [Seriale](/pl/guide/tv-shows): seriale, sezony i odcinki
- [Filmy](/pl/guide/movies): zmiana nazw całego folderu filmów naraz
- [Muzyka, książki i gry](/pl/guide/music-books-games)
- [Historia i cofanie](/pl/guide/history): przywracanie plików o zmienionych nazwach
- [Ustawienia](/pl/guide/settings): motyw, język, formaty nazw, klucze API
- [FAQ i rozwiązywanie problemów](/pl/guide/faq)
