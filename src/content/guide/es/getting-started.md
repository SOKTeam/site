---
title: Primeros pasos
description: Instale S.O.K, conozca la interfaz y ordene su primera carpeta.
order: 1
---

S.O.K (Storage Organisation Kit) identifica sus archivos multimedia mediante bases de datos en línea y luego los renombra y los mueve a una biblioteca limpia, compatible con Plex, Jellyfin y Kodi.

## Instalación

S.O.K está disponible para **Windows 10 y 11 (64 bits)**, **macOS en Apple Silicon** (M1 o posterior) y **Linux** (64 bits, Intel/AMD o ARM).

### Windows

1. Vaya a la página [Descargar](/es/download) y descargue el instalador (`SOK_Setup_vX.Y.Z.exe`).
2. Ejecute el instalador. Está en inglés; marque **Create a desktop shortcut** si quiere un acceso directo en el escritorio.
3. Inicie **S.O.K** desde el menú Inicio o desde el escritorio.

> Windows SmartScreen puede mostrar una advertencia la primera vez que ejecute el instalador. Haga clic en **Más información** y luego en **Ejecutar de todas formas**.

### macOS

1. Vaya a la página [Descargar](/es/download) y descargue la imagen de disco (`SOK_macOS_vX.Y.Z.dmg`).
2. Abra la imagen de disco y arrastre **S.O.K** a la carpeta **Aplicaciones**.
3. Inicie **S.O.K** desde la carpeta Aplicaciones o desde el Launchpad.

> La primera vez que abra S.O.K, macOS indica que no puede verificar al desarrollador. Cierre el mensaje, abra **Ajustes del Sistema → Privacidad y seguridad**, desplácese hacia abajo y haga clic en **Abrir igualmente** junto al mensaje sobre S.O.K. Confirme con su contraseña. Solo hay que hacerlo una vez.

### Linux

S.O.K se distribuye como AppImage: un único archivo que funciona en la mayoría de las distribuciones, sin nada que instalar.

1. Vaya a la página [Descargar](/es/download) y descargue la AppImage de su procesador:
   - **Intel/AMD** (`SOK_Linux_vX.Y.Z_x86_64.AppImage`) para la mayoría de los PC.
   - **ARM** (`SOK_Linux_vX.Y.Z_aarch64.AppImage`) para los PC ARM.

   ¿No está seguro? Ejecute `uname -m` en un terminal: muestra `x86_64` o `aarch64`.
2. Permita que el archivo se ejecute: haga clic derecho sobre él en su gestor de archivos, abra **Propiedades** y active **Permitir ejecutar el archivo como un programa** (el texto depende de su escritorio). En un terminal: `chmod +x SOK_Linux_*.AppImage`.
3. Haga doble clic en el archivo para iniciar **S.O.K**. Se añade a su menú de aplicaciones, así la próxima vez podrá iniciarlo desde allí.

> La versión Intel/AMD necesita Ubuntu 22.04, Debian 12, Fedora 35 o una distribución más reciente. La versión ARM necesita Ubuntu 24.04, Debian 13, Fedora 40 o más reciente.

S.O.K funciona sin configuración: las bases de datos principales (TMDB, TVDB) incluyen una clave integrada. Solo necesita una conexión a internet.

## La interfaz

La ventana tiene dos zonas:

- **Barra lateral (izquierda)**: permite pasar de una página a otra. Haga clic en el icono de menú de arriba para plegarla o desplegarla.
  - **Biblioteca**: *Inicio*, *Series*, *Películas*, *Música*, *Libros*, *Juegos*
  - **General**: *Historial*, *Ajustes*
- **Zona principal (derecha)**: la página elegida.

### Página de inicio

- **La zona para soltar**: suelte en ella cualquier archivo o carpeta. S.O.K los clasifica por tipo (películas, series, álbumes, canciones, libros, juegos) y muestra un grupo por serie, por álbum y por tipo. Haga clic en **Abrir** para enviar un grupo a su página; cuando todos los archivos son del mismo tipo, su página se abre directamente. Los archivos cuyo tipo es una suposición, como una imagen de disco que puede ser un juego o un vídeo, aparecen en *Por revisar* con el motivo: elija su tipo y haga clic en **Añadir**.
- **Monitores de disco** muestra el espacio libre de cada disco (en Mac, el disco de arranque y los volúmenes montados; en Linux, el disco del sistema y los discos montados en `/media`, `/run/media` o `/mnt`). El icono se pone verde con más del 20 % libre, naranja por debajo del 20 % y rojo por debajo del 10 %.
- **Acceso rápido** tiene una tarjeta por tipo de medio. Haga clic en una tarjeta para abrir su página.

## Su primera organización

La forma más rápida de ver S.O.K en acción es con una serie:

1. Abra **Series** en la barra lateral.
2. **Arrastre y suelte** la carpeta de sus episodios en **Carpetas de origen**, o haga clic en ella para elegirla.
3. S.O.K deduce el nombre de la serie a partir del primer archivo y lanza una búsqueda por sí solo. Si el primer resultado no es el correcto, escriba otro nombre y haga clic en el resultado correcto.
4. **Arrastre y suelte** una carpeta en **Destino**, o haga clic en ella para elegirla. Ahí se creará su biblioteca.
5. Compruebe la **Vista previa** de la derecha, haga clic en **Organizar archivos** y confirme.

Un mensaje indica después cuántos archivos se han organizado. En Mac, ofrece mostrar el destino en el Finder. Haga clic en **Deshacer el renombrado** si algo ha salido mal: los archivos vuelven a donde estaban.

> **Importante:** por defecto, los archivos se **mueven**: salen de la carpeta de origen y van al destino. Elija **Enlace duro** o **Copiar** en [Ajustes → Comportamiento](/es/guide/settings#comportamiento) para conservar los originales. Puede deshacer un renombrado desde la página [Historial](/es/guide/history), siempre que los archivos no se hayan movido desde entonces.

## Siguientes pasos

- [Series](/es/guide/tv-shows): series, temporadas y episodios
- [Películas](/es/guide/movies): renombrar de una vez toda una carpeta de películas
- [Música, libros y juegos](/es/guide/music-books-games)
- [Historial y deshacer](/es/guide/history): devolver los archivos renombrados
- [Ajustes](/es/guide/settings): tema, idioma, formatos de nombre, claves API
- [Preguntas frecuentes y solución de problemas](/es/guide/faq)
