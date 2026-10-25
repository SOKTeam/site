---
title: Series
description: Renombre sus episodios y ordénelos en carpetas de serie y de temporada.
order: 2
---

La página **Series** toma una carpeta de episodios y la convierte en una biblioteca ordenada por serie y temporada.

## Antes de empezar

S.O.K encuentra el número de temporada y de episodio en cada nombre de archivo. Las formas más habituales son:

| Forma | Ejemplo |
| --- | --- |
| `S01E02` | `breaking.bad.s01e02.720p.mkv` |
| `1x02` | `Breaking Bad 1x02.mkv` |
| `Season 1 Episode 2` | `Breaking Bad Season 1 Episode 2.mkv` |

Los archivos sin número de temporada y de episodio conservan su nombre original.

**Formatos compatibles:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Paso a paso

### 1. Añada sus carpetas de origen

Arrastre y suelte una o varias carpetas en **Carpetas de origen**, o haga clic en la zona para elegirlas. S.O.K también recorre las subcarpetas.

El título de la vista previa indica cuántos archivos se han encontrado, por ejemplo *Vista previa (10 archivos de Season 1)*.

### 2. Elija la serie

S.O.K lee el nombre del primer archivo, deduce la serie y elige por sí solo el primer resultado de la búsqueda.

Si no es la serie correcta:

1. Escriba su nombre en el campo de búsqueda. La búsqueda empieza a partir de 2 caracteres.
2. Haga clic en el resultado correcto de la lista. El póster y el año ayudan a distinguir los remakes.

Una vez elegida la serie, S.O.K descarga su lista de episodios. El mensaje *Cargando episodios...* aparece un momento.

### 3. Elija el destino

Arrastre y suelte una carpeta en **Destino**, o haga clic en ella para elegirla. Suele ser la raíz de su biblioteca de series (por ejemplo `D:\Medios\Series`).

### 4. Compruebe la vista previa

El panel **Vista previa** muestra el nombre actual de cada archivo y su nuevo nombre. Solo se listan los 15 primeros archivos; una línea como *+ 12 otros...* resume el resto.

### 5. Organice

Haga clic en **Organizar archivos** y confirme. Una barra de progreso muestra cada archivo a medida que se mueve.

## Resultado

Con los ajustes por defecto, obtiene:

```text
Series/
└── Breaking Bad/
    ├── Temporada 1/
    │   ├── Breaking Bad S01E01 Piloto.mkv
    │   └── Breaking Bad S01E02 El gato está en la bolsa.mkv
    └── Temporada 2/
        └── ...
```

Puede cambiar el formato de los nombres de archivo en [Ajustes → Formatos de salida](/es/guide/settings#formatos-de-salida). El mensaje final tiene un botón **Deshacer el renombrado**, y cada organización aparece en la página [Historial](/es/guide/history).

## Crear carpetas de la serie

Una vez elegidos la serie y el destino, aparece el botón **Crear carpetas de la serie**. Crea la carpeta de la serie y una carpeta vacía por temporada, sin mover ningún archivo. Es útil para preparar una biblioteca antes de añadirle episodios.
