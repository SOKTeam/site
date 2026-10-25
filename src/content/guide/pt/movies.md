---
title: Filmes
description: Renomeie muitos ficheiros de filmes de uma vez, cada um associado ao seu próprio filme.
order: 3
---

A página **Filmes** renomeia um lote inteiro de filmes de uma vez. Ao contrário das séries, cada ficheiro é associado ao seu próprio filme.

**Formatos suportados:** `.mkv`, `.mp4`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`, `.m4v`, `.mpg`, `.mpeg`, `.3gp`, `.ogv`, `.ts`, `.m2ts`

## Passo a passo

### 1. Adicione os seus filmes

Arraste e largue os seus ficheiros de vídeo ou pastas em **Ficheiros de origem**, ou clique na zona para escolher ficheiros. O S.O.K procura vídeos dentro das pastas largadas, incluindo as subpastas. Pode adicionar mais depois com **+ Adicionar mais filmes**.

Depois, o S.O.K pesquisa sozinho cada ficheiro, com base no seu nome.

### 2. Verifique cada resultado

Cada ficheiro tem uma linha com:

- o **texto de pesquisa**, que pode editar (o título, com o ano se o souber);
- uma **lista de resultados** encontrados na base de dados;
- um **estado**.

| Estado | Significado | O que fazer |
| --- | --- | --- |
| ✓ **Pronto** | Um resultado tem o título do ficheiro e, se o ficheiro indicar um, o seu ano. | Nada. |
| ⚠ **Escolher** | Foram encontrados resultados, mas nenhum ou vários correspondem exatamente. O mais provável está selecionado. | Abra a lista e escolha o filme certo. |
| ✗ **Em falta** | Não foi encontrado nenhum resultado. | Corrija o texto de pesquisa e clique no botão de nova pesquisa da linha. |

> **Dica:** juntar o ano ao texto de pesquisa (por exemplo `Dune 2021`) evita a maioria das confusões entre remakes.

**Re-scanear tudo** volta a pesquisar todos os ficheiros.

### 3. Escolha o destino

Arraste e largue uma pasta em **Destino**, ou clique nela para escolher uma.

### 4. Renomeie

Clique em **Renomear tudo** e confirme. Só as linhas *Pronto* são renomeadas: as linhas por escolher ficam na tabela, para as poder terminar. Os ficheiros marcados como *Em falta* ficam onde estão.

A mensagem final tem um botão **Anular a renomeação**. Os ficheiros renomeados voltam então para a sua pasta e para a tabela.

## Resultado

Com o formato predefinido, cada ficheiro passa a chamar-se `Título (Ano)` e é movido para a pasta de destino:

```text
Filmes/
├── A Origem (2010).mp4
├── Dune - Duna (2021).mkv
└── Matrix (1999).mkv
```

Pode alterar o formato em [Definições → Formatos de saída](/pt/guide/settings#formatos-de-saída), por exemplo para acrescentar a qualidade com `{quality}`.
