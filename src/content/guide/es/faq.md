---
title: Preguntas frecuentes y solución de problemas
description: Respuestas a las preguntas habituales y soluciones a los problemas comunes.
order: 7
---

## General

### ¿S.O.K es gratuito?

Sí. S.O.K es gratuito y de código abierto, con licencia MIT. El código fuente está en [GitHub](https://github.com/SOKTeam/S.O.K).

### ¿Puede S.O.K funcionar en un NAS o en un servidor doméstico?

Sí: [S.O.K Server](/es/guide/server) es una imagen Docker con interfaz web. Ordena sus descargas con enlaces duros, para que los torrents sigan compartiéndose, y puede ordenar las nuevas descargas por sí solo.

### ¿S.O.K copia o mueve mis archivos?

Por defecto los **mueve**: tras una organización, los archivos ya no están en la carpeta de origen. En [Ajustes → Comportamiento](/es/guide/settings#comportamiento), el modo de archivo puede **copiarlos** o crear **enlaces duros**: el original se queda donde está (un torrent sigue compartiéndose) sin ocupar más espacio. Compruebe la vista previa antes de confirmar. Si algo ha salido mal, deshaga el renombrado desde el mensaje final o desde la página [Historial](/es/guide/history).

### ¿Mi biblioteca es compatible con Plex, Jellyfin o Kodi?

Sí. Los nombres y carpetas por defecto (`Serie/Temporada 1/Serie S01E01 Título.mkv`, `Película (Año).mkv`) siguen las convenciones que esperan estos servidores multimedia.

### ¿Necesito una cuenta o una clave API?

No, no para series y películas: TMDB y TVDB incluyen una clave integrada. Solo algunos servicios necesitan una conexión (Spotify, IGDB) o una clave personal (OMDb, Last.fm). Vea [Ajustes → Claves API](/es/guide/settings#claves-api).

### ¿S.O.K necesita conexión a internet?

Sí, para buscar en las bases de datos. El renombrado y el movimiento de los archivos se hacen en su equipo.

## Problemas

### «No se encontraron archivos»

- Compruebe que la carpeta contiene archivos en un [formato compatible](/es/guide/tv-shows#antes-de-empezar).
- Compruebe que está en la página correcta: una carpeta de vídeos añadida a la página *Música* no encuentra nada.

### La búsqueda no encuentra mi medio

- Escriba al menos 2 caracteres.
- Busque el título original, o el título en el idioma elegido en los *Ajustes*.
- En la página *Películas*, añada el año al texto de búsqueda: `Dune 2021`.
- Compruebe su conexión a internet.

### Un nombre de archivo se lee mal

El título, el año o el número de pista que aparece no es el correcto: S.O.K no sabe cómo se llaman sus archivos. Añada un patrón en [Ajustes → Formatos de entrada](/es/guide/settings#formatos-de-entrada) y compruébelo con **Probar**.

### Se eligió automáticamente la serie o la película equivocada

S.O.K elige el primer resultado para el nombre deducido del archivo. Escriba otro nombre en el campo de búsqueda y haga clic en el resultado correcto. La vista previa se actualiza al instante.

### Algunos episodios conservan su nombre original

El nombre del archivo no tiene un número de temporada y de episodio que S.O.K pueda leer. Describa cómo se llaman sus archivos en [Ajustes → Formatos de entrada](/es/guide/settings#formatos-de-entrada), por ejemplo `{title} - Episode {episode}`, o renombre el archivo para que contenga `S01E02` o `1x02`. Luego añada de nuevo la carpeta.

### «Terminado con errores»

Algunos archivos no se pudieron mover. Las causas más habituales:

- **Un archivo está abierto en otro programa** (un reproductor, por ejemplo). Ciérrelo y vuelva a intentarlo.
- **No tiene permiso** para escribir en la carpeta de destino.
- **El disco de destino está lleno o se desconectó** durante el movimiento.

> Cuando ya existe un archivo con el mismo nombre en el destino, S.O.K lo sustituye, salvo si *Omitir duplicados* está activado (lo está por defecto). Para conservar el archivo anterior cuando se sustituye, active *Copia de seguridad antes de renombrar* en [Ajustes → Comportamiento](/es/guide/settings#comportamiento).

### «Archivo(s) dejado(s) en su sitio» tras deshacer

Estos archivos se movieron o eliminaron desde el renombrado, u otro archivo tiene ahora su nombre anterior. S.O.K nunca sustituye un archivo. Vea [Historial y deshacer](/es/guide/history#lo-que-hace-deshacer).

### «Por favor seleccione una carpeta de destino.»

La zona *Destino* está vacía, o la carpeta ya no existe. Elíjala de nuevo.

### Un servicio muestra «⚠️ Clave faltante»

Este servicio necesita una clave o una conexión. Configúrelo en [Ajustes → Claves API](/es/guide/settings#claves-api), o elija otro servicio en *API preferida*.

### Windows dice que el instalador no es seguro

Windows SmartScreen avisa de los programas que aún no conoce. Haga clic en **Más información** y luego en **Ejecutar de todas formas**. Descargue siempre S.O.K desde la página [Descargar](/es/download) o desde las [versiones de GitHub](https://github.com/SOKTeam/S.O.K/releases).

### macOS dice que S.O.K no se puede abrir

S.O.K aún no está notarizado por Apple, así que macOS lo bloquea la primera vez. Cierre el mensaje, vaya a **Ajustes del Sistema → Privacidad y seguridad** y haga clic en **Abrir igualmente** junto al mensaje sobre S.O.K. Vea [Primeros pasos](/es/guide/getting-started#macos).

### No pasa nada al abrir la AppImage en Linux

- Compruebe que el archivo puede ejecutarse como programa: *Propiedades → Permitir ejecutar el archivo como un programa*, o `chmod +x` en un terminal. Vea [Primeros pasos](/es/guide/getting-started#linux).
- Compruebe que ha descargado la versión correcta para su procesador (`uname -m` muestra `x86_64` para Intel/AMD y `aarch64` para ARM).
- Iníciela desde un terminal para ver el error. Si menciona FUSE, iníciela con `./SOK_Linux_*.AppImage --appimage-extract-and-run`.

## ¿Sigue atascado?

[Abra una issue en GitHub](https://github.com/SOKTeam/S.O.K/issues) y describa lo que hizo, lo que esperaba y lo que pasó. Añada su versión de S.O.K (aparece en *Ajustes → Acerca de*).
