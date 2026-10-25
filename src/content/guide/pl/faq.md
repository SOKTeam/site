---
title: FAQ i rozwiązywanie problemów
description: Odpowiedzi na częste pytania i rozwiązania typowych problemów.
order: 7
---

## Ogólne

### Czy S.O.K jest darmowy?

Tak. S.O.K jest darmowy i open source, na licencji MIT. Kod źródłowy jest na [GitHubie](https://github.com/SOKTeam/S.O.K).

### Czy S.O.K działa na serwerze NAS lub serwerze domowym?

Tak: [S.O.K Server](/pl/guide/server) to obraz Docker z interfejsem webowym. Porządkuje pobrane pliki za pomocą twardych dowiązań, więc torrenty nadal są udostępniane, i może sam porządkować nowe pliki.

### Czy S.O.K kopiuje, czy przenosi moje pliki?

Domyślnie je **przenosi**: po uporządkowaniu plików nie ma już w folderze źródłowym. W [Ustawienia → Zachowanie](/pl/guide/settings#zachowanie) tryb plików może je **kopiować** lub tworzyć **twarde dowiązania**: oryginał zostaje na miejscu (torrent nadal jest udostępniany) bez zajmowania dodatkowego miejsca. Przed potwierdzeniem warto sprawdzić podgląd. Jeśli coś poszło nie tak, zmianę nazw można cofnąć z komunikatu na końcu lub na stronie [Historia](/pl/guide/history).

### Czy moja biblioteka jest zgodna z Plex, Jellyfin lub Kodi?

Tak. Domyślne nazwy i foldery (`Serial/Sezon 1/Serial S01E01 Tytuł.mkv`, `Film (Rok).mkv`) są zgodne z konwencjami, których oczekują te serwery multimediów.

### Czy potrzebne jest konto lub klucz API?

Nie dla seriali i filmów: TMDB i TVDB mają wbudowany klucz. Tylko niektóre usługi wymagają połączenia (Spotify, IGDB) lub klucza osobistego (OMDb, Last.fm). Zob. [Ustawienia → Klucze API](/pl/guide/settings#klucze-api).

### Czy S.O.K potrzebuje połączenia z internetem?

Tak, do przeszukiwania baz danych. Zmiana nazw i przenoszenie plików odbywają się na komputerze.

## Problemy

### „Nie znaleziono plików”

- Należy sprawdzić, czy folder zawiera pliki w [obsługiwanym formacie](/pl/guide/tv-shows#zanim-państwo-zaczną).
- Należy sprawdzić, czy to właściwa strona: folder z filmami dodany na stronie *Muzyka* niczego nie znajdzie.

### Wyszukiwanie nie znajduje moich multimediów

- Wpisać co najmniej 2 znaki.
- Szukać tytułu oryginalnego lub tytułu w języku wybranym w *Ustawieniach*.
- Na stronie *Filmy* dodać rok do tekstu wyszukiwania: `Dune 2021`.
- Sprawdzić połączenie z internetem.

### Nazwa pliku jest odczytywana błędnie

Wyświetlany tytuł, rok lub numer utworu jest nieprawidłowy: S.O.K nie wie, jak nazwane są pliki. Należy dodać wzorzec w [Ustawienia → Formaty wejściowe](/pl/guide/settings#formaty-wejściowe) i sprawdzić go przyciskiem **Test**.

### Automatycznie wybrano niewłaściwy serial lub film

S.O.K wybiera pierwszy wynik dla nazwy odgadniętej z pliku. Należy wpisać inną nazwę w polu wyszukiwania i kliknąć właściwy wynik. Podgląd od razu się aktualizuje.

### Niektóre odcinki zachowują pierwotną nazwę

Nazwa pliku nie zawiera numeru sezonu i odcinka, który S.O.K potrafi odczytać. Należy opisać, jak nazwane są pliki, w [Ustawienia → Formaty wejściowe](/pl/guide/settings#formaty-wejściowe), na przykład `{title} - Episode {episode}`, albo zmienić nazwę pliku tak, aby zawierała `S01E02` lub `1x02`. Następnie ponownie dodać folder.

### „Zakończono z błędami”

Niektórych plików nie udało się przenieść. Najczęstsze przyczyny:

- **Plik jest otwarty w innym programie** (na przykład w odtwarzaczu). Należy go zamknąć i spróbować ponownie.
- **Brak uprawnień** do zapisu w folderze docelowym.
- **Dysk docelowy jest pełny lub został odłączony** podczas przenoszenia.

> Gdy w celu istnieje już plik o tej samej nazwie, S.O.K go zastępuje, chyba że włączona jest opcja *Pomiń duplikaty* (domyślnie jest). Aby zachować stary plik przy zastępowaniu, należy włączyć *Kopia zapasowa przed zmianą nazwy* w [Ustawienia → Zachowanie](/pl/guide/settings#zachowanie).

### „Pozostawiono na miejscu pliki” po cofnięciu

Te pliki zostały przeniesione lub usunięte od czasu zmiany nazw albo inny plik ma teraz ich poprzednią nazwę. S.O.K nigdy nie zastępuje pliku. Zob. [Historia i cofanie](/pl/guide/history#co-robi-cofnięcie).

### „Proszę wybrać folder docelowy.”

Obszar *Cel* jest pusty lub folder już nie istnieje. Należy wybrać go ponownie.

### Usługa pokazuje „⚠️ Brak klucza”

Ta usługa wymaga klucza lub połączenia. Należy ją skonfigurować w [Ustawienia → Klucze API](/pl/guide/settings#klucze-api) albo wybrać inną usługę w *Preferowane API*.

### Windows twierdzi, że instalator nie jest bezpieczny

Windows SmartScreen ostrzega przed programami, których jeszcze nie zna. Należy kliknąć **Więcej informacji**, a potem **Uruchom mimo to**. S.O.K zawsze warto pobierać ze strony [Pobierz](/pl/download) lub z [wydań na GitHubie](https://github.com/SOKTeam/S.O.K/releases).

### macOS twierdzi, że nie można otworzyć S.O.K

S.O.K nie jest jeszcze notaryzowany przez Apple, więc macOS blokuje go za pierwszym razem. Należy zamknąć komunikat, przejść do **Ustawienia systemowe → Prywatność i ochrona** i kliknąć **Otwórz mimo to** obok komunikatu o S.O.K. Zob. [Pierwsze kroki](/pl/guide/getting-started#macos).

### Nic się nie dzieje po otwarciu AppImage w Linuksie

- Należy sprawdzić, czy plik może działać jako program: *Właściwości → Zezwolenie na wykonywanie pliku jako programu* lub `chmod +x` w terminalu. Zob. [Pierwsze kroki](/pl/guide/getting-started#linux).
- Należy sprawdzić, czy pobrano wersję dla właściwego procesora (`uname -m` wypisuje `x86_64` dla Intel/AMD i `aarch64` dla ARM).
- Uruchomienie z terminala pokazuje błąd. Jeśli wspomina o FUSE, należy uruchomić plik poleceniem `./SOK_Linux_*.AppImage --appimage-extract-and-run`.

## Problem nadal występuje?

Prosimy [zgłosić problem na GitHubie](https://github.com/SOKTeam/S.O.K/issues) i opisać, co zostało zrobione, czego się oczekiwało i co się stało, podając wersję S.O.K (widoczną w *Ustawienia → O aplikacji*).
