---
title: S.O.K Server
description: Instalacja S.O.K na serwerze NAS lub serwerze domowym z Dockerem i porządkowanie pobranych plików ze strony internetowej.
order: 7
---

S.O.K Server to ten sam silnik co aplikacja, w obrazie Docker z interfejsem webowym. Po instalacji na serwerze NAS lub serwerze domowym i wskazaniu folderów z pobranymi plikami można je porządkować z dowolnej przeglądarki: rozpoznaje każdy plik, pokazuje nowe nazwy w tabeli i zmienia wszystko naraz lub wiersz po wierszu. Może też [sam porządkować nowe pobrane pliki](#automatyczne-sortowanie) i powiadamiać Discord, Jellyfin lub Plex.

Domyślnie używa **twardych dowiązań**: plik o zmienionej nazwie i pobrany plik to ten sam plik na dysku, więc torrenty nadal są udostępniane, bez zajmowania dodatkowego miejsca.

**[Wypróbuj demo](/demo?lang=pl)**: prawdziwy interfejs w przeglądarce, z przykładową biblioteką. Nie trzeba nic instalować i żaden plik nie zmienia nazwy.

## Instalacja

S.O.K Server działa na każdym komputerze z Dockerem, na Intel/AMD i ARM (`amd64`, `arm64`). Należy utworzyć plik `docker-compose.yml`:

```yaml
services:
  sok-server:
    image: ghcr.io/sokteam/sok-server:latest
    container_name: sok-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Warsaw
    volumes:
      - /srv/sok/config:/config
      - /mnt/storage:/data
    ports:
      - 8080:8080
    restart: unless-stopped
```

Następnie uruchomić go poleceniem `docker compose up -d` i otworzyć `http://<adres-serwera>:8080`.

| Ustawienie | Do czego służy |
| --- | --- |
| `/config` | Ustawienia, baza danych, historia i dzienniki. Najlepiej trzymać je na dysku z kopią zapasową. |
| `/data` (lub dowolny folder) | Pobrane pliki i biblioteka, tak jak widzi je serwer. |
| `PUID`, `PGID` | Użytkownik i grupa, z którymi działa serwer: do nich należą tworzone pliki. Warto użyć tych samych co użytkownik NAS (`id` w terminalu). |
| `TZ` | Strefa czasowa, dla wyświetlanych dat. |
| `8080:8080` | Port interfejsu. Zmiana pierwszej liczby pozwala użyć innego. |

### Jeden wspólny folder nadrzędny, dla twardych dowiązań

Twarde dowiązanie działa tylko **w obrębie jednego montowania**. Jeśli pobrane pliki są w `/mnt/storage/downloads`, a biblioteka w `/mnt/storage/media`, należy zamontować `/mnt/storage` jeden raz (`/mnt/storage:/data`), a w ustawieniach użyć `/data/downloads` i `/data/media`.

Osobne montowanie (`/mnt/storage/downloads:/downloads` i `/mnt/storage/media:/media`) tworzy dwa montowania: twarde dowiązania między nimi się nie udają, nawet na tym samym dysku. Ustawienia sygnalizują to przed jakąkolwiek zmianą nazw.

## Pierwsza wizyta

Pierwsza strona prosi o utworzenie konta: nazwy użytkownika i hasła o długości co najmniej 8 znaków. Interfejs przyjmuje język przeglądarki; można go zmienić w **Ustawienia → Wygląd**.

Sesja w tej przeglądarce trwa 30 dni. Po 5 błędnych hasłach kolejne próby czekają 30 sekund.

**Zapomniane hasło?** Należy dodać `SOK_RESET_PASSWORD=1` i nowe hasło w `SOK_PASSWORD` do sekcji `environment` pliku compose i ponownie uruchomić kontener (`docker compose up -d`). Po zalogowaniu nowym hasłem trzeba usunąć obie linie. Ustawienia, historia i wybory zostają zachowane.

## Ustawienia

**Ustawienia** otwiera się na dole paska bocznego. Mają pięć kart, a każda zmiana zapisuje się od razu.

- **Foldery**: **foldery źródłowe** (pobrane pliki) i **foldery docelowe** każdego typu (filmy, seriale, muzyka, książki, gry). Należy kliknąć **Dodaj folder…** i wpisać ścieżkę tak, jak widzi ją serwer (`/data/downloads`, a nie ścieżkę z NAS), albo kliknąć **Przeglądaj…**, aby wybrać ją spośród folderów serwera. Przy kilku celach dla jednego typu każdy wiersz jego karty może wybrać jeden z nich.
  Poniżej **tryb plików**: **Twarde dowiązanie** (domyślnie), **Kopiuj** lub **Przenieś**. W trybie twardego dowiązania, jeśli dodany folder (lub sam tryb) uniemożliwia twarde dowiązanie, okno wyjaśnia dlaczego i co zmienić, z przyciskiem przejścia na **Kopiuj**; wiersz pod opcjami otwiera je ponownie, dopóki problem istnieje.
- **Automatyzacja**: [automatyczne sortowanie](#automatyczne-sortowanie) i [powiadomienia](#powiadomienia).
- **Zmiana nazw**: **zachowanie** i **formaty wyjściowe**, takie same jak w aplikacji (zob. [Ustawienia](/pl/guide/settings)).
- **Klucze API**: w przeciwieństwie do aplikacji obraz **nie ma wbudowanego klucza**. TMDB (filmy i seriale) wymaga własnego klucza, darmowego na [themoviedb.org](https://www.themoviedb.org/settings/api). Deezer, MusicBrainz i Open Library działają bez klucza. Po wklejeniu klucza należy kliknąć **Zapisz**, a potem **Testuj**. Klucze są zapisywane w postaci zaszyfrowanej i nigdy więcej nie są wyświetlane. Każdy typ ma u góry swojej grupy **preferowane API**.
- **Wygląd**: **język** i **motyw**: **Jasny** (biały, jak w macOS), **Pomarańczowy** (jak w Windows i Linuksie) lub **Ciemny**. Motyw zapisuje się w każdej przeglądarce osobno; **Systemowy** (domyślnie) podąża za trybem jasnym lub ciemnym urządzenia: biały na Macu, pomarańczowy gdzie indziej.

Klucze można też podać zmiennymi środowiskowymi, na przykład `API_KEY_TMDB_V4`: wyświetlają się wtedy jako *Ustawiony przez zmienną środowiskową* i nie można ich zmienić w interfejsie.

## Analiza pobranych plików

Na stronie **Analiza** należy kliknąć **Analizuj**. S.O.K sortuje pliki z folderów źródłowych według typu, a potem wyszukuje każdy z nich; postęp widać na żywo, a stronę można w tym czasie zamknąć.

U góry pasek pokazuje foldery źródłowe, ostatnią analizę i automatyczne sortowanie; problem (brak klucza, wyczerpany limit, nieznaleziony folder) pojawia się tuż pod nim. Dalej tabela podaje dla każdego typu jego pliki i liczbę **Gotowe**, **Do wyboru** i **Brakujące**: **Otwórz** prowadzi do jego karty. **Pliki do sprawdzenia** to pliki, których typ jest tylko przypuszczeniem (obraz dysku, wideo wśród odcinków…): należy potwierdzić typ lub wybrać inny: plik trafia do swojej karty i od razu jest wyszukiwany, a kolejne analizy to pamiętają.

Każda nowa analiza zachowuje dokonane wybory: dopasowanie, tekst wyszukiwania i cel odnalezionego ponownie wiersza.

## Sprawdzanie i zmiana nazw

Każdy typ ma swoją kartę, z trybem plików i celem pod tytułem. Wiersze tworzą tabelę: plakat, tytuł i plik, **nowa nazwa** (na zielono, gdy jest Gotowe) i status. Wiersz to film, utwór, książka lub gra albo cały serial lub cały album z plikami; karty nad tabelą pokazują wiersze o danym statusie.

| Status | Znaczenie |
| --- | --- |
| **Gotowe** | Jedno pewne dopasowanie: tytuł i rok (lub autor, wykonawca) się zgadzają. |
| **Wybierz** | Pasować może kilka wyników. Kliknięcie wiersza pokazuje je z plakatem i opisem; należy wybrać właściwy. |
| **Brak** | Nic nie znaleziono. Należy kliknąć ikonę wyszukiwania i wpisać inny tytuł. |

Pod nową nazwą widać jej folder; po rozwinięciu serialu widać każdy odcinek z nową nazwą.

Należy kliknąć **Zmień nazwy gotowych** u góry albo zaznaczyć wybrane wiersze (pole w nagłówku zaznacza wszystkie) i kliknąć **Zmień nazwy zaznaczonych** pod tabelą. Potwierdzenie podaje liczbę plików i tryb plików. Wiersze ze zmienionymi nazwami znikają z tabeli; plik, którego nazwy nie udało się zmienić, zostaje w swoim wierszu z podaniem powodu.

Napisy idą za swoim wideo (`Film.pl.srt` staje się `Dune (2021).pl.srt`), jak w aplikacji.

## Automatyczne sortowanie

S.O.K Server może zrobić to wszystko sam. W **Ustawienia → Automatyzacja** należy włączyć **Automatycznie sortuj nowe pliki**: najpierw pyta o potwierdzenie, ponieważ wiersze Gotowe będą zmieniane bez Państwa udziału, także te, które już są w kartach.

- Co **5 minut** (można to zmienić, od 1 do 1440) serwer zagląda do folderów źródłowych.
- Plik jest brany **po zakończeniu pobierania**: gdy ma ten sam rozmiar co przy poprzednim sprawdzeniu. Pliki wciąż pobierane (`.part`, `.!qB`, `.crdownload`…) są pomijane.
- Nowe ukończone pliki uruchamiają analizę, a potem zmieniane są nazwy wierszy **Gotowe**. Wiersze do wyboru, brakujące i pliki do sprawdzenia **czekają** w kartach, jak po kliknięciu **Analizuj**.
- Pasek strony **Analiza** pokazuje, że sortowanie jest włączone, i jego ostatnie wykonanie (pliki o zmienionych nazwach; ostatnie sprawdzenie po najechaniu), a to, co je zatrzymało, pojawia się poniżej (typ bez folderu docelowego, brak klucza…).

Wszystko, czego nazwy zmienia, trafia do **Historii** z oznaczeniem *automatyczna* i można to cofnąć jak resztę.

## Powiadomienia

Po każdej zmianie nazw, ręcznej lub automatycznej, S.O.K Server może powiadomić inne aplikacje. Konfiguruje się je w **Ustawienia → Automatyzacja**, pod automatycznym sortowaniem, a potem klika **Testuj**:

| Cel | Co podać | Co robi |
| --- | --- | --- |
| **Discord** | Adres webhooka kanału (ustawienia kanału → Integracje → Webhooki) | Publikuje pliki o zmienionych nazwach |
| **Jellyfin** | Jego adres (`http://jellyfin:8096`) i klucz API (Panel → Klucze API) | Odświeża biblioteki |
| **Plex** | Jego adres (`http://plex:32400`) i token Plex | Odświeża biblioteki |
| **Webhook** | Dowolny adres | Wysyła zmianę nazw w formacie JSON (Home Assistant, n8n…) |

Adresy webhooków, klucz i token po zapisaniu nigdy więcej nie są wyświetlane.

**Skrypt** również może działać po każdej zmianie nazw, z danymi zmiany w JSON na wejściu i zmiennymi `SOK_MEDIA_TYPE`, `SOK_RENAMED` i `SOK_AUTO` w środowisku. Ze względów bezpieczeństwa nie można go ustawić na stronie internetowej: skrypt należy umieścić w zamontowanym folderze i podać jego ścieżkę w sekcji `environment` kontenera, na przykład `SOK_AFTER_RENAME=/config/after-rename.sh`.

## Historia i cofanie

**Historia** pokazuje zmiany nazw według dni, z godziną, typem, plikami i trybem plików. **Cofnij** przywraca wszystkie pliki danej zmiany; po otwarciu zmiany widać każdy plik z nową nazwą, a przycisk **Przywróć** przywraca jeden plik (z jego napisami).

- **Twarde dowiązanie** lub **kopia** są usuwane: oryginał nigdy się nie przesunął.
- **Przeniesiony** plik wraca do swojego poprzedniego folderu.

Cofnięcie nigdy nie zastępuje pliku, tak jak w aplikacji (zob. [Historia i cofanie](/pl/guide/history#co-robi-cofnięcie)).

### Pliki już przetworzone

Przy twardych dowiązaniach plik o zmienionej nazwie zostaje w pobranych plikach. S.O.K go pamięta i pomija w kolejnych analizach, dopóki się nie zmieni. Karta **Już przetworzone** na stronie Historia je wymienia; po zaznaczeniu pliku przycisk **Przeanalizuj zaznaczone ponownie** pozwala jeszcze raz zmienić jego nazwę. Plik, którego zmianę nazwy cofnięto, również jest analizowany ponownie.

## Aktualizacja

```sh
docker compose pull
docker compose up -d
```

Ustawienia, historia i wybory zostają w `/config`.

## Za odwrotnym proxy

S.O.K Server działa za Nginx, Traefik lub Caddy. Jeśli proxy już wymaga logowania (Authelia, Authentik…), logowanie S.O.K można wyłączyć przez `SOK_AUTH=none`: baner przypomina wtedy, że serwer chroni proxy.
