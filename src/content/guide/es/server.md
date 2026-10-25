---
title: S.O.K Server
description: Instale S.O.K en un NAS o un servidor doméstico con Docker y ordene sus descargas desde una página web.
order: 7
---

S.O.K Server es el mismo motor que la app, en una imagen Docker con interfaz web. Instálelo en un NAS o un servidor doméstico, indíquele sus carpetas de descargas y ordénelas desde cualquier navegador: identifica cada archivo, muestra los nuevos nombres en una tabla y lo renombra todo de una vez o fila por fila. O deje que [ordene las nuevas descargas por sí solo](#clasificación-automática) y avise a Discord, Jellyfin o Plex.

Usa **enlaces duros** por defecto: el archivo renombrado y la descarga son el mismo archivo en el disco, así sus torrents siguen compartiéndose sin ocupar más espacio.

**[Probar la demo](/demo?lang=es)**: la interfaz real en su navegador, con una biblioteca de ejemplo. Nada que instalar, y no se renombra ningún archivo.

## Instalarlo

S.O.K Server funciona en cualquier equipo con Docker, en Intel/AMD y ARM (`amd64`, `arm64`). Cree un `docker-compose.yml`:

```yaml
services:
  sok-server:
    image: ghcr.io/sokteam/sok-server:latest
    container_name: sok-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    volumes:
      - /srv/sok/config:/config
      - /mnt/storage:/data
    ports:
      - 8080:8080
    restart: unless-stopped
```

Luego inícielo con `docker compose up -d` y abra `http://<su-servidor>:8080`.

| Ajuste | Para qué sirve |
| --- | --- |
| `/config` | Los ajustes, la base de datos, el historial y los registros. Guárdelo en un disco con copia de seguridad. |
| `/data` (o la carpeta que quiera) | Sus descargas y su biblioteca, tal como las ve el servidor. |
| `PUID`, `PGID` | El usuario y el grupo con los que se ejecuta el servidor: los archivos que crea les pertenecen. Use los de su usuario del NAS (`id` en un terminal). |
| `TZ` | Su zona horaria, para las fechas que se muestran. |
| `8080:8080` | El puerto de la interfaz. Cambie el primer número para usar otro. |

### Monte una sola carpeta padre, para los enlaces duros

Un enlace duro solo funciona **dentro de un mismo montaje**. Si sus descargas están en `/mnt/storage/downloads` y su biblioteca en `/mnt/storage/media`, monte `/mnt/storage` una sola vez (`/mnt/storage:/data`) y use después `/data/downloads` y `/data/media` en los ajustes.

Montarlas por separado (`/mnt/storage/downloads:/downloads` y `/mnt/storage/media:/media`) crea dos montajes: los enlaces duros fallan entre ellos, incluso en el mismo disco. Los ajustes se lo indican antes de cualquier renombrado.

## Primera visita

La primera página le pide crear su cuenta: un nombre de usuario y una contraseña de 8 caracteres o más. La interfaz toma el idioma de su navegador; cámbielo en **Ajustes → Apariencia**.

Su sesión se mantiene 30 días en ese navegador. Tras 5 contraseñas incorrectas, los siguientes intentos esperan 30 segundos.

**¿Ha olvidado la contraseña?** Añada `SOK_RESET_PASSWORD=1` y su nueva contraseña en `SOK_PASSWORD` al `environment` del archivo compose, y reinicie el contenedor (`docker compose up -d`). Inicie sesión con la nueva contraseña y luego quite las dos líneas. Sus ajustes, su historial y sus elecciones se conservan.

## Ajustes

Abra **Ajustes** en la parte inferior de la barra lateral. Tienen cinco pestañas, y cada cambio se guarda al instante.

- **Carpetas**: sus **carpetas de origen** (las descargas) y las **carpetas de destino** de cada tipo (películas, series, música, libros, juegos). Haga clic en **Añadir una carpeta…** y escriba la ruta tal como la ve el servidor (`/data/downloads`, no la ruta de su NAS), o haga clic en **Examinar…** para elegirla entre las carpetas del servidor. Con varios destinos para un tipo, cada fila de su pestaña puede elegir uno.
  Debajo, el **modo de archivo**: **Enlace duro** (por defecto), **Copiar** o **Mover**. En modo enlace duro, si una carpeta que añade (o el propio modo) hace imposible un enlace duro, una ventana explica por qué y qué cambiar, con un botón para pasar a **Copiar**; una línea bajo las opciones la vuelve a abrir mientras el problema siga.
- **Automatización**: la [clasificación automática](#clasificación-automática) y las [notificaciones](#notificaciones).
- **Renombrado**: el **comportamiento** y los **formatos de salida**, los mismos que en la app (vea [Ajustes](/es/guide/settings)).
- **Claves API**: a diferencia de la app, la imagen **no tiene clave integrada**. TMDB (películas y series) necesita su propia clave, gratuita en [themoviedb.org](https://www.themoviedb.org/settings/api). Deezer, MusicBrainz y Open Library funcionan sin ella. Pegue una clave, haga clic en **Guardar** y luego en **Probar**. Las claves se guardan cifradas y no se vuelven a mostrar. Cada tipo tiene su **API preferida** en la parte superior de su grupo.
- **Apariencia**: el **idioma** y el **tema**: **Claro** (blanco, como en macOS), **Naranja** (como en Windows y Linux) u **Oscuro**. El tema se guarda en cada navegador; **Sistema** (por defecto) sigue el modo claro u oscuro de su dispositivo, en blanco en Mac y en naranja en los demás.

También puede dar las claves con variables de entorno, como `API_KEY_TMDB_V4`: aparecen entonces como *Definida por una variable de entorno* y no se pueden cambiar desde la interfaz.

## Analizar sus descargas

En la página **Análisis**, haga clic en **Analizar**. S.O.K clasifica los archivos de sus carpetas de origen por tipo y luego busca cada uno; el progreso se muestra en directo, y puede cerrar la página mientras tanto.

Arriba, una franja muestra sus carpetas de origen, el último análisis y la clasificación automática; un problema (una clave que falta, una cuota agotada, una carpeta no encontrada) aparece justo debajo. Después, una tabla da para cada tipo sus archivos y cuántos están **Listos**, **Por elegir** y **Faltantes**: **Abrir** lleva a su pestaña. Los **Archivos por revisar** son archivos cuyo tipo es una suposición (una imagen de disco, un vídeo entre episodios…): confirme el tipo o elija otro: el archivo pasa a su pestaña y se busca al momento, y los siguientes análisis lo recuerdan.

Cada nuevo análisis conserva sus elecciones: el resultado, el texto de búsqueda y el destino de una fila que vuelve a encontrar.

## Revisar y renombrar

Cada tipo tiene su pestaña, con su modo de archivo y su destino bajo el título. Las filas forman una tabla: el póster, el título y el archivo, el **nuevo nombre** (en verde cuando está Listo) y el estado. Una fila es una película, una canción, un libro o un juego, o bien toda una serie o todo un álbum con sus archivos; las pestañas sobre la tabla muestran las filas de un estado.

| Estado | Significado |
| --- | --- |
| **Listo** | Un único resultado seguro: el título y el año (o el autor, el artista) coinciden. |
| **Elige uno** | Varios resultados podrían encajar. Haga clic en la fila para verlos, con su póster y su resumen, y elija el correcto. |
| **Falta** | No se encontró nada. Haga clic en el icono de búsqueda y escriba otro título. |

Bajo el nuevo nombre aparece su carpeta; despliegue una serie para ver cada episodio con su nuevo nombre.

Haga clic en **Renombrar los listos**, arriba, o marque algunas filas (la casilla del encabezado las marca todas) y haga clic en **Renombrar la selección**, bajo la tabla. Una confirmación indica el número de archivos y el modo de archivo. Las filas renombradas salen de la tabla; un archivo que no se pudo renombrar se queda en su fila con el motivo.

Los subtítulos siguen a su vídeo (`Película.es.srt` pasa a `Dune (2021).es.srt`), como en la app.

## Clasificación automática

S.O.K Server puede hacer todo esto por sí solo. En **Ajustes → Automatización**, active **Clasificar automáticamente los archivos nuevos**: pide confirmación antes, porque las filas Listo se renombrarán sin usted, también las que ya están en las pestañas.

- Cada **5 minutos** (puede cambiarlo, de 1 a 1440), el servidor mira sus carpetas de origen.
- Un archivo se toma **una vez terminada su descarga**: cuando tiene el mismo tamaño que en la comprobación anterior. Los archivos que aún se están descargando (`.part`, `.!qB`, `.crdownload`…) se omiten.
- Los nuevos archivos terminados lanzan un análisis y luego se renombran las filas **Listo**. Las filas por elegir, las que faltan y los archivos por revisar **le esperan** en las pestañas, como tras un clic en **Analizar**.
- La franja de la página **Análisis** muestra que está activada y su última clasificación (los archivos renombrados; su última comprobación al pasar el ratón), y lo que la detuvo aparece debajo (un tipo sin carpeta de destino, una clave que falta…).

Todo lo que renombra está en el **Historial**, marcado como *automático*, y se puede deshacer como lo demás.

## Notificaciones

Tras cada renombrado, manual o automático, S.O.K Server puede avisar a sus otras apps. Configúrelas en **Ajustes → Automatización**, bajo la clasificación automática, y haga clic en **Probar**:

| Destino | Qué indicar | Qué hace |
| --- | --- | --- |
| **Discord** | La dirección de un webhook de un canal (ajustes del canal → Integraciones → Webhooks) | Publica los archivos renombrados |
| **Jellyfin** | Su dirección (`http://jellyfin:8096`) y una clave API (Panel de control → Claves de API) | Actualiza las bibliotecas |
| **Plex** | Su dirección (`http://plex:32400`) y su token de Plex | Actualiza las bibliotecas |
| **Webhook** | Cualquier dirección | Envía el renombrado en JSON (Home Assistant, n8n…) |

Las direcciones de los webhooks, la clave y el token no se vuelven a mostrar una vez guardados.

**Un script** también puede ejecutarse tras cada renombrado, con el renombrado en JSON en su entrada y `SOK_MEDIA_TYPE`, `SOK_RENAMED` y `SOK_AUTO` en su entorno. Por seguridad, no se puede configurar desde la página web: ponga el script en una carpeta montada e indique su ruta en el `environment` del contenedor, por ejemplo `SOK_AFTER_RENAME=/config/after-rename.sh`.

## Historial y deshacer

El **Historial** lista sus renombrados por día, con su hora, su tipo, sus archivos y su modo de archivo. **Deshacer** devuelve todos los archivos de un renombrado; abra un renombrado para ver cada archivo con su nuevo nombre, y haga clic en **Devolver** para devolver un solo archivo (con sus subtítulos).

- Un **enlace duro** o una **copia** se elimina: el original nunca se movió.
- Un archivo **movido** vuelve a su carpeta anterior.

Deshacer nunca sustituye un archivo, como en la app (vea [Historial y deshacer](/es/guide/history#lo-que-hace-deshacer)).

### Archivos ya procesados

Con los enlaces duros, un archivo renombrado se queda en sus descargas. S.O.K lo recuerda y lo excluye de los siguientes análisis, mientras no cambie. La pestaña **Ya procesados** de la página Historial los lista; marque uno y haga clic en **Volver a analizar la selección** para renombrarlo otra vez. Un archivo cuyo renombrado se deshizo también se vuelve a analizar.

## Actualizar

```sh
docker compose pull
docker compose up -d
```

Sus ajustes, su historial y sus elecciones se conservan en `/config`.

## Detrás de un proxy inverso

S.O.K Server funciona detrás de Nginx, Traefik o Caddy. Si su proxy ya pide un inicio de sesión (Authelia, Authentik…), puede desactivar el inicio de sesión de S.O.K con `SOK_AUTH=none`: un aviso recuerda entonces que el proxy protege el servidor.
