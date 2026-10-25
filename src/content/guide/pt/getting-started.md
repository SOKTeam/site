---
title: Primeiros passos
description: Instale o S.O.K, conheça a interface e arrume a sua primeira pasta.
order: 1
---

O S.O.K (Storage Organisation Kit) identifica os seus ficheiros multimédia através de bases de dados online e depois renomeia-os e move-os para uma biblioteca limpa, compatível com Plex, Jellyfin e Kodi.

## Instalação

O S.O.K está disponível para **Windows 10 e 11 (64 bits)**, **macOS em Apple Silicon** (M1 ou posterior) e **Linux** (64 bits, Intel/AMD ou ARM).

### Windows

1. Vá à página [Transferir](/pt/download) e transfira o instalador (`SOK_Setup_vX.Y.Z.exe`).
2. Execute o instalador. Está em inglês; marque **Create a desktop shortcut** se quiser um atalho no ambiente de trabalho.
3. Inicie o **S.O.K** a partir do menu Iniciar ou do ambiente de trabalho.

> O Windows SmartScreen pode mostrar um aviso na primeira vez que executa o instalador. Clique em **Mais informações** e depois em **Executar mesmo assim**.

### macOS

1. Vá à página [Transferir](/pt/download) e transfira a imagem de disco (`SOK_macOS_vX.Y.Z.dmg`).
2. Abra a imagem de disco e arraste o **S.O.K** para a pasta **Aplicações**.
3. Inicie o **S.O.K** a partir da pasta Aplicações ou do Launchpad.

> Da primeira vez que abre o S.O.K, o macOS indica que não consegue verificar o programador. Feche a mensagem, abra **Definições do Sistema → Privacidade e segurança**, desça até ao fim e clique em **Abrir mesmo assim** junto à mensagem sobre o S.O.K. Confirme com a sua palavra-passe. Só precisa de o fazer uma vez.

### Linux

O S.O.K é distribuído como AppImage: um único ficheiro que funciona na maioria das distribuições, sem nada para instalar.

1. Vá à página [Transferir](/pt/download) e transfira a AppImage do seu processador:
   - **Intel/AMD** (`SOK_Linux_vX.Y.Z_x86_64.AppImage`) para a maioria dos PC.
   - **ARM** (`SOK_Linux_vX.Y.Z_aarch64.AppImage`) para os PC ARM.

   Não tem a certeza? Execute `uname -m` num terminal: mostra `x86_64` ou `aarch64`.
2. Permita que o ficheiro seja executado: clique nele com o botão direito no gestor de ficheiros, abra **Propriedades** e ative **Permitir executar o ficheiro como programa** (o texto depende do seu ambiente de trabalho). Num terminal: `chmod +x SOK_Linux_*.AppImage`.
3. Faça duplo clique no ficheiro para iniciar o **S.O.K**. Ele adiciona-se ao menu de aplicações, para que da próxima vez o possa iniciar a partir daí.

> A versão Intel/AMD precisa do Ubuntu 22.04, Debian 12, Fedora 35 ou de uma distribuição mais recente. A versão ARM precisa do Ubuntu 24.04, Debian 13, Fedora 40 ou mais recente.

O S.O.K funciona sem configuração: as principais bases de dados (TMDB, TVDB) incluem uma chave integrada. Só precisa de uma ligação à internet.

## A interface

A janela tem duas zonas:

- **Barra lateral (à esquerda)**: permite passar de uma página para outra. Clique no ícone de menu no topo para a recolher ou expandir.
  - **Biblioteca**: *Início*, *Séries*, *Filmes*, *Música*, *Livros*, *Jogos*
  - **Geral**: *Histórico*, *Definições*
- **Zona principal (à direita)**: a página escolhida.

### Página inicial

- **A zona de largar**: largue nela quaisquer ficheiros ou pastas. O S.O.K ordena-os por tipo (filmes, séries, álbuns, faixas, livros, jogos) e mostra um grupo por série, por álbum e por tipo. Clique em **Abrir** para enviar um grupo para a sua página; quando todos os ficheiros são do mesmo tipo, a página abre-se diretamente. Os ficheiros cujo tipo é uma suposição, como uma imagem de disco que pode ser um jogo ou um vídeo, aparecem em *Por verificar* com o motivo: escolha o tipo e clique em **Adicionar**.
- **Monitores de disco** mostra o espaço livre em cada disco (no Mac, o disco de arranque e os volumes montados; no Linux, o disco do sistema e os discos montados em `/media`, `/run/media` ou `/mnt`). O ícone fica verde acima de 20 % de espaço livre, laranja abaixo de 20 % e vermelho abaixo de 10 %.
- **Acesso rápido** tem um cartão por tipo de multimédia. Clique num cartão para abrir a sua página.

## A sua primeira arrumação

A forma mais rápida de ver o S.O.K em ação é com uma série:

1. Abra **Séries** na barra lateral.
2. **Arraste e largue** a pasta dos seus episódios em **Pastas de origem**, ou clique nela para a escolher.
3. O S.O.K deduz o nome da série a partir do primeiro ficheiro e inicia sozinho uma pesquisa. Se o primeiro resultado não for o certo, escreva outro nome e clique no resultado certo.
4. **Arraste e largue** uma pasta em **Destino**, ou clique nela para a escolher. É aí que a sua biblioteca vai ser criada.
5. Verifique a **Pré-visualização** à direita, depois clique em **Organizar ficheiros** e confirme.

Uma mensagem indica depois quantos ficheiros foram arrumados. No Mac, propõe mostrar o destino no Finder. Clique em **Anular a renomeação** se algo correu mal: os ficheiros voltam para onde estavam.

> **Importante:** por predefinição, os ficheiros são **movidos**: saem da pasta de origem e vão para o destino. Escolha **Ligação física** ou **Copiar** em [Definições → Comportamento](/pt/guide/settings#comportamento) para manter os originais. Pode anular uma renomeação a partir da página [Histórico](/pt/guide/history), desde que os ficheiros não tenham sido movidos entretanto.

## Próximos passos

- [Séries](/pt/guide/tv-shows): séries, temporadas e episódios
- [Filmes](/pt/guide/movies): renomear de uma vez uma pasta inteira de filmes
- [Música, livros e jogos](/pt/guide/music-books-games)
- [Histórico e anulação](/pt/guide/history): repor ficheiros renomeados
- [Definições](/pt/guide/settings): tema, idioma, formatos dos nomes, chaves API
- [Perguntas frequentes e resolução de problemas](/pt/guide/faq)
