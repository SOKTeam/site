---
title: Séries
description: Renomeie os seus episódios e arrume-os em pastas de série e de temporada.
order: 2
---

A página **Séries** pega numa pasta de episódios e transforma-a numa biblioteca arrumada por série e temporada.

## Antes de começar

O S.O.K encontra o número da temporada e do episódio em cada nome de ficheiro. As formas mais comuns são:

| Forma | Exemplo |
| --- | --- |
| `S01E02` | `breaking.bad.s01e02.720p.mkv` |
| `1x02` | `Breaking Bad 1x02.mkv` |
| `Season 1 Episode 2` | `Breaking Bad Season 1 Episode 2.mkv` |

Os ficheiros sem número de temporada e de episódio mantêm o nome original.

**Formatos suportados:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Passo a passo

### 1. Adicione as pastas de origem

Arraste e largue uma ou várias pastas em **Pastas de origem**, ou clique na zona para as escolher. O S.O.K percorre também as subpastas.

O título da pré-visualização indica quantos ficheiros foram encontrados, por exemplo *Pré-visualização (10 ficheiros de Season 1)*.

### 2. Escolha a série

O S.O.K lê o nome do primeiro ficheiro, deduz a série e escolhe sozinho o primeiro resultado da pesquisa.

Se não for a série certa:

1. Escreva o nome no campo de pesquisa. A pesquisa começa a partir de 2 caracteres.
2. Clique no resultado certo da lista. O cartaz e o ano ajudam a distinguir os remakes.

Depois de escolhida a série, o S.O.K transfere a lista dos seus episódios. A mensagem *A carregar episódios...* aparece por um momento.

### 3. Escolha o destino

Arraste e largue uma pasta em **Destino**, ou clique nela para a escolher. É normalmente a raiz da sua biblioteca de séries (por exemplo `D:\Multimédia\Séries`).

### 4. Verifique a pré-visualização

O painel **Pré-visualização** mostra o nome atual de cada ficheiro e o novo nome. Só são listados os 15 primeiros ficheiros; uma linha como *+ 12 outros...* resume o resto.

### 5. Organize

Clique em **Organizar ficheiros** e confirme. Uma barra de progresso mostra cada ficheiro à medida que é movido.

## Resultado

Com as definições predefinidas, obtém:

```text
Séries/
└── Breaking Bad/
    ├── Temporada 1/
    │   ├── Breaking Bad S01E01 Piloto.mkv
    │   └── Breaking Bad S01E02 O gato está no saco.mkv
    └── Temporada 2/
        └── ...
```

Pode alterar o formato dos nomes dos ficheiros em [Definições → Formatos de saída](/pt/guide/settings#formatos-de-saída). A mensagem final tem um botão **Anular a renomeação**, e cada arrumação aparece na página [Histórico](/pt/guide/history).

## Criar pastas da série

Depois de escolhidos a série e o destino, aparece o botão **Criar pastas da série**. Cria a pasta da série e uma pasta vazia por temporada, sem mover nenhum ficheiro. É útil para preparar uma biblioteca antes de lhe adicionar episódios.
