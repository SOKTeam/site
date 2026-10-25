---
title: Ustawienia
description: Motyw, język, formaty wyjściowe i wejściowe, bazy danych, klucze API i zachowanie.
order: 5
---

**Ustawienia** otwiera się na dole paska bocznego. Każda zmiana zapisuje się od razu: nie ma przycisku *Zapisz*.

## Klucze API

S.O.K pobiera informacje z internetowych baz danych. Ta sekcja wymienia je według kategorii (wideo, muzyka, książki, gry, grafiki) wraz z ich statusem.

| Rodzaj | Usługi | Co należy zrobić |
| --- | --- | --- |
| **Wbudowany klucz** | TMDB, TVDB, Fanart.tv | Nic. Klucz jest dołączony. Własny klucz można wpisać w polu *Własny klucz (Opcjonalne)*. |
| **Darmowe** | Deezer, MusicBrainz, Google Books, Open Library, RAWG | Nic. |
| **Połączenie** | Spotify, IGDB | Kliknąć **Połącz** i wykonać kolejne kroki. |
| **Klucz osobisty** | OMDb (IMDb), Last.fm | Utworzyć darmowy klucz na stronie usługi i go wkleić. |

### Dodawanie klucza osobistego

1. Kliknięcie **Pobierz** obok usługi otwiera stronę, na której można utworzyć klucz.
2. Klucz należy skopiować i wkleić w pole. Zapisuje się po naciśnięciu <kbd>Enter</kbd> lub opuszczeniu pola; opróżnienie pola usuwa klucz.
3. Należy kliknąć **Testuj**. Status zmienia się na *Operacyjne*, jeśli klucz działa, lub na *Nieprawidłowy klucz*, jeśli nie.

### Łączenie konta

1. Należy kliknąć **Połącz** obok Spotify lub IGDB.
2. S.O.K prosi o klucz API (i sekret, jeśli usługa go wymaga) i może otworzyć stronę usługi, aby go utworzyć.
3. Po udanym połączeniu status zmienia się na *Połączono*.

Aby usunąć połączenie, należy kliknąć **Rozłącz**.

> Klucze są zapisywane na komputerze w postaci zaszyfrowanej.

## Preferowane API

Dla każdej kategorii można wybrać bazę danych, której S.O.K używa w pierwszej kolejności. Jeśli wybrana usługa wciąż wymaga klucza, pojawia się ostrzeżenie ⚠️.

## Domyślne foldery

Zapisuje folder każdej biblioteki (wideo, muzyka, książki, gry). Przycisk **Przeglądaj** pozwala go wybrać.

Gdy strona otwiera się z pustym *Celem*, S.O.K wpisuje domyślny folder dla danego typu multimediów. Nadal można wybrać inny folder.

## Formaty wyjściowe

Określają, jak zmieniane są nazwy plików. W polu należy wpisać nowy wzorzec. Słowa w nawiasach klamrowych są zastępowane informacjami o multimediach.

| Typ | Format domyślny | Dostępne zmienne |
| --- | --- | --- |
| **Serial TV** | `{title} S{season}E{episode} {episode_title}` | `{title}`, `{season}`, `{episode}`, `{episode_title}` |
| **Filmy** | `{title} ({year})` | `{title}`, `{year}`, `{quality}` |
| **Muzyka** | `{artist} - {album}/{track} - {title}` | `{artist}`, `{album}`, `{track}`, `{title}`, `{year}` |
| **Książka** | `{author} - {title} ({year})` | `{author}`, `{title}`, `{year}`, `{series}`, `{series_number}` |
| **Gra** | `{title} {tags}` | `{title}`, `{year}`, `{platform}`, `{tags}` |

**Przykłady:**

- `{title} - S{season}E{episode} - {episode_title}` daje `Breaking Bad - S01E01 - Pilot.mkv`
- `{title} ({year}) [{quality}]` daje `Incepcja (2010) [1080p].mkv`
- `{artist}/{year} - {album}/{track}. {title}` daje `Daft Punk/2001 - Discovery/01. One More Time.mp3`

W formacie muzyki każdy znak `/` tworzy folder. Wartość, której plik nie ma, jest pomijana razem z otoczeniem: bez roku `{title} ({year})` daje `Tytuł`. `{series}` i `{series_number}` pochodzą z pierwotnej nazwy książki (`Autor - [Dune 2] - Tytuł`). `{tags}` to tagi z pierwotnej nazwy gry, na przykład `(USA) (Rev 1)`.

Znaki zabronione przez Windows w nazwach plików (`< > : " / \ | ? *`) są usuwane.

## Formaty wejściowe

Opisują, jak nazwane są **Państwa** pliki, aby S.O.K odczytywał nazwy, których nie zna. Używa się zmiennych z formatów wyjściowych:

1. Należy wybrać typ (Serial TV, Filmy, Muzyka, Książka, Gra).
2. Wpisać wzorzec, na przykład `{artist} - {year} - {album} - {track} - {title}`, i kliknąć **Dodaj**.
3. Sprawdzić go przyciskiem **Test**: po wklejeniu nazwy pliku z rozszerzeniem S.O.K pokazuje, co odczytuje i którego wzorca użył.

Państwa wzorce są sprawdzane przed zapisami, które S.O.K już zna. Po najechaniu na **ⓘ** obok tytułu widać te zapisy i zmienne każdego typu.

- Spacje, kropki i podkreślenia to ten sam separator: `{title} {year}` odczytuje też `The.Matrix.1999`.
- `{ignore}` pomija część nazwy, na przykład jakość lub grupę wydającą: `{title} {year} {ignore}` odczytuje `Dune.2021.1080p.BluRay-GROUP`.
- `{year}` przyjmuje cztery cyfry, a numery sezonu, odcinka, utworu i płyty przyjmują cyfry.
- Wzorzec serialu TV wymaga `{episode}`, pozostałe wymagają `{title}`.

Wideo odczytane wzorcem serialu TV liczy się na stronie głównej jako odcinek, a odczytane wzorcem Filmy jako film.

## Wygląd

- **Tryb ciemny**: przełącza między motywem ciemnym a pomarańczowym.
- **Zgodnie z wyglądem systemu** (tylko macOS): podąża za trybem jasnym lub ciemnym wybranym w ustawieniach macOS.
- **Użyj koloru akcentu systemu** (tylko macOS): używa koloru akcentu wybranego w *Ustawienia systemowe → Wygląd*.
- **Język**: English, Français, Deutsch, Español, Italiano, Português, Русский, Polski. Język określa też słowa w nazwach folderów (*Season*, *Saison*, *Sezon*...).

## Zachowanie

| Opcja | Działanie |
| --- | --- |
| **Tryb plików** | **Przenieś** (domyślnie): pliki opuszczają folder źródłowy. **Twarde dowiązanie**: oryginał zostaje na miejscu, więc torrenty nadal są udostępniane, bez zajmowania dodatkowego miejsca; cel musi być na tym samym dysku. **Kopiuj**: oryginał zostaje, a kopia zajmuje miejsce drugi raz. |
| **Przenoś napisy razem z filmami** | Napisy o tej samej nazwie co ich wideo (`Film.srt`, `Film.pl.srt`, `Film.en.forced.srt`) zmieniają nazwę i są przenoszone razem z nim: `Dune (2021).pl.srt`. Domyślnie włączone. |
| **Utwórz brakujące foldery** | Tworzy w celu foldery serialu i sezonu, jeśli nie istnieją. |
| **Pobierz plakaty** | Po zmianie nazw zapisuje plakat lub okładkę każdego elementu tam, gdzie szukają ich Plex, Jellyfin i Kodi: `Film (Rok)-poster.jpg` obok filmu, `poster.jpg` w folderze serialu, `cover.jpg` w folderze albumu lub książki. Istniejący obraz zostaje zachowany. Gry nie dostają obrazów. Domyślnie wyłączone. |
| **Kopia zapasowa przed zmianą nazwy** | Jeśli w celu istnieje już plik o tej samej nazwie, przed jego zastąpieniem zachowuje kopię z rozszerzeniem `.backup`. |
| **Pomiń duplikaty** | Jeśli w celu istnieje już plik o tej samej nazwie, plik źródłowy zostaje na miejscu zamiast go zastępować. |
| **Loguj operacje** | Zapisuje każde przeniesienie w pliku dziennika. |

## O aplikacji

- **Wersja**: używana wersja.
- **Sprawdź aktualizacje**: przy uruchomieniu S.O.K informuje o nowej wersji. W Linuksie może zastąpić AppImage nową wersją i uruchomić się ponownie.
- **Discord Rich Presence**: pokazuje w profilu Discord, co robią Państwo w S.O.K.
- **Resetuj ustawienia**: po potwierdzeniu przywraca każde ustawienie do wartości domyślnej.
