---
title: Películas
description: Renombre muchos archivos de película de una vez, cada uno con su propia película.
order: 3
---

La página **Películas** renombra todo un lote de películas de una vez. A diferencia de las series, cada archivo se asocia a su propia película.

**Formatos compatibles:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Paso a paso

### 1. Añada sus películas

Arrastre y suelte sus archivos de vídeo o carpetas en **Archivos de origen**, o haga clic en la zona para elegir archivos. S.O.K busca vídeos dentro de las carpetas que suelte, subcarpetas incluidas. Puede añadir más después con **+ Añadir más películas**.

Luego S.O.K busca cada archivo por sí solo, según su nombre.

### 2. Compruebe cada resultado

Cada archivo tiene una fila con:

- el **texto de búsqueda**, que puede editar (el título, con el año si lo conoce);
- una **lista de resultados** encontrados en la base de datos;
- un **estado**.

| Estado | Significado | Qué hacer |
| --- | --- | --- |
| ✓ **Listo** | Un resultado tiene el título del archivo y, si el archivo indica uno, su año. | Nada. |
| ⚠ **Elige uno** | Se encontraron resultados, pero ninguno o varios coinciden exactamente. Se selecciona el más probable. | Abra la lista y elija la película correcta. |
| ✗ **Falta** | No se encontró ningún resultado. | Corrija el texto de búsqueda y haga clic en el botón de nueva búsqueda de la fila. |

> **Consejo:** añadir el año al texto de búsqueda (por ejemplo `Dune 2021`) evita la mayoría de las confusiones entre remakes.

**Reescanear todo** vuelve a lanzar la búsqueda de todos los archivos.

### 3. Elija el destino

Arrastre y suelte una carpeta en **Destino**, o haga clic en ella para elegir una.

### 4. Renombre

Haga clic en **Renombrar todo** y confirme. Solo se renombran las filas *Listo*: las filas por elegir se quedan en la tabla para que pueda terminarlas. Los archivos marcados como *Falta* se quedan donde están.

El mensaje final tiene un botón **Deshacer el renombrado**. Los archivos renombrados vuelven entonces a su carpeta y a la tabla.

## Resultado

Con el formato por defecto, cada archivo se renombra a `Título (Año)` y se mueve a la carpeta de destino:

```text
Películas/
├── Dune (2021).mkv
├── Origen (2010).mp4
└── Matrix (1999).mkv
```

Puede cambiar el formato en [Ajustes → Formatos de salida](/es/guide/settings#formatos-de-salida), por ejemplo para añadir la calidad con `{quality}`.
