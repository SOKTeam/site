---
title: Ajustes
description: Tema, idioma, formatos de salida y de entrada, bases de datos, claves API y comportamiento.
order: 5
---

Abra **Ajustes** en la parte inferior de la barra lateral. Cada cambio se guarda al instante: no hay botón *Guardar*.

## Claves API

S.O.K obtiene su información de bases de datos en línea. Esta sección las lista por categoría (vídeo, música, libros, juegos, imágenes), con su estado.

| Tipo | Servicios | Qué tiene que hacer |
| --- | --- | --- |
| **Clave integrada** | TMDB, TVDB, Fanart.tv | Nada. Se incluye una clave. Puede introducir su propia clave en el campo *Clave personalizada (Opcional)*. |
| **Gratuito** | Deezer, MusicBrainz, Google Books, Open Library, RAWG | Nada. |
| **Conexión** | Spotify, IGDB | Haga clic en **Conectar** y siga los pasos. |
| **Clave personal** | OMDb (IMDb), Last.fm | Cree una clave gratuita en el sitio del servicio y péguela. |

### Añadir una clave personal

1. Haga clic en **Obtener** junto al servicio. S.O.K abre la página donde puede crear una clave.
2. Copie la clave y péguela en el campo. Se guarda al pulsar <kbd>Intro</kbd> o al salir del campo; vacíe el campo para eliminarla.
3. Haga clic en **Probar**. El estado pasa a *Operativo* si la clave funciona, o a *Clave inválida* si no.

### Conectar una cuenta

1. Haga clic en **Conectar** junto a Spotify o IGDB.
2. S.O.K pide la clave API (y el secreto, si el servicio lo necesita) y puede abrir la página del servicio para crearla.
3. Si todo va bien, el estado pasa a *Conectado*.

Para quitar la conexión, haga clic en **Desconectar**.

> Sus claves se guardan cifradas en su equipo.

## API preferida

Para cada categoría, elija qué base de datos usa S.O.K primero. Aparece un aviso ⚠️ si el servicio elegido todavía necesita una clave.

## Carpetas por defecto

Guarda la carpeta de cada una de sus bibliotecas (vídeos, música, libros, juegos). Haga clic en **Examinar** para elegir una.

Cuando una página se abre con el *Destino* vacío, S.O.K lo rellena con la carpeta por defecto de ese tipo de medio. Puede elegir otra carpeta igualmente.

## Formatos de salida

Define cómo se renombran los archivos. Escriba un nuevo patrón en el campo. Las palabras entre llaves se sustituyen por la información del medio.

| Medio | Formato por defecto | Variables disponibles |
| --- | --- | --- |
| **Serie de TV** | `{title} S{season}E{episode} {episode_title}` | `{title}`, `{season}`, `{episode}`, `{episode_title}` |
| **Películas** | `{title} ({year})` | `{title}`, `{year}`, `{quality}` |
| **Música** | `{artist} - {album}/{track} - {title}` | `{artist}`, `{album}`, `{track}`, `{title}`, `{year}` |
| **Libro** | `{author} - {title} ({year})` | `{author}`, `{title}`, `{year}`, `{series}`, `{series_number}` |
| **Juego** | `{title} {tags}` | `{title}`, `{year}`, `{platform}`, `{tags}` |

**Ejemplos:**

- `{title} - S{season}E{episode} - {episode_title}` da `Breaking Bad - S01E01 - Piloto.mkv`
- `{title} ({year}) [{quality}]` da `Origen (2010) [1080p].mkv`
- `{artist}/{year} - {album}/{track}. {title}` da `Daft Punk/2001 - Discovery/01. One More Time.mp3`

En el formato de música, cada `/` crea una carpeta. Un valor que un archivo no tiene se omite junto con lo que lo rodea: sin año, `{title} ({year})` da `Título`. `{series}` y `{series_number}` vienen del nombre original del libro (`Autor - [Dune 2] - Título`). `{tags}` son las etiquetas del nombre original del juego, como `(USA) (Rev 1)`.

Los caracteres que Windows prohíbe en los nombres de archivo (`< > : " / \ | ? *`) se eliminan.

## Formatos de entrada

Describe cómo se llaman **sus** archivos, para que S.O.K lea nombres que no conoce. Use las variables de los formatos de salida:

1. Elija el tipo (Serie de TV, Películas, Música, Libro, Juego).
2. Escriba un patrón, por ejemplo `{artist} - {year} - {album} - {track} - {title}`, y haga clic en **Añadir**.
3. Compruébelo con **Probar**: pegue un nombre de archivo, con su extensión, y S.O.K muestra lo que lee y qué patrón ha usado.

Sus patrones se prueban antes que las formas que S.O.K ya conoce. Pase el ratón por la **ⓘ** junto al título para ver esas formas y las variables de cada tipo.

- Los espacios, los puntos y los guiones bajos son el mismo separador: `{title} {year}` también lee `The.Matrix.1999`.
- `{ignore}` salta una parte del nombre, como la calidad o el grupo de la release: `{title} {year} {ignore}` lee `Dune.2021.1080p.BluRay-GROUP`.
- `{year}` toma cuatro cifras, y los números de temporada, episodio, pista y disco toman cifras.
- Un patrón de serie de TV necesita `{episode}`; los demás necesitan `{title}`.

Un vídeo leído por un patrón de serie de TV cuenta como episodio en la página de inicio, y uno leído por un patrón de Películas como película.

## Apariencia

- **Modo oscuro**: cambia entre el tema oscuro y el tema naranja.
- **Usar la apariencia del sistema** (solo macOS): sigue el modo claro u oscuro elegido en los ajustes de macOS.
- **Usar el color de acento del sistema** (solo macOS): usa el color de acento elegido en *Ajustes del Sistema → Apariencia*.
- **Idioma**: English, Français, Deutsch, Español, Italiano, Português, Русский, Polski. El idioma también fija las palabras usadas en los nombres de carpeta (*Season*, *Saison*, *Temporada*...).

## Comportamiento

| Opción | Efecto |
| --- | --- |
| **Modo de archivo** | **Mover** (por defecto): los archivos salen de la carpeta de origen. **Enlace duro**: el original se queda donde está, así los torrents siguen compartiéndose, sin ocupar más espacio; el destino debe estar en el mismo disco. **Copiar**: el original se queda, y la copia ocupa el doble de espacio. |
| **Mover los subtítulos con los vídeos** | Los subtítulos con el mismo nombre que su vídeo (`Película.srt`, `Película.es.srt`, `Película.en.forced.srt`) se renombran y se mueven con él: `Dune (2021).es.srt`. Activado por defecto. |
| **Crear carpetas faltantes** | Crea las carpetas de serie y de temporada en el destino si no existen. |
| **Descargar pósters** | Tras un renombrado, guarda el póster o la portada de cada elemento donde Plex, Jellyfin y Kodi lo buscan: `Película (Año)-poster.jpg` junto a una película, `poster.jpg` en la carpeta de una serie, `cover.jpg` en la carpeta de un álbum o de un libro. Una imagen que ya existe se conserva. Los juegos no tienen. Desactivado por defecto. |
| **Copia de seguridad antes de renombrar** | Si ya existe un archivo con el mismo nombre en el destino, conserva una copia con la extensión `.backup` antes de sustituirlo. |
| **Omitir duplicados** | Si ya existe un archivo con el mismo nombre en el destino, deja el archivo de origen donde está en lugar de sustituirlo. |
| **Registrar operaciones** | Escribe cada movimiento en el archivo de registro. |

## Acerca de

- **Versión**: la versión que está usando.
- **Buscar actualizaciones**: al iniciarse, S.O.K le avisa cuando hay una nueva versión. En Linux, puede sustituir la AppImage por la nueva versión y reiniciarse.
- **Discord Rich Presence**: muestra en su perfil de Discord lo que está haciendo en S.O.K.
- **Restablecer ajustes**: devuelve cada ajuste a su valor por defecto, tras una confirmación.
