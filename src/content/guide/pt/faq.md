---
title: Perguntas frequentes e resolução de problemas
description: Respostas às perguntas mais comuns e soluções para os problemas habituais.
order: 7
---

## Geral

### O S.O.K é gratuito?

Sim. O S.O.K é gratuito e de código aberto, com licença MIT. O código-fonte está no [GitHub](https://github.com/SOKTeam/S.O.K).

### O S.O.K funciona num NAS ou num servidor doméstico?

Sim: o [S.O.K Server](/pt/guide/server) é uma imagem Docker com interface web. Arruma as suas transferências com ligações físicas, para que os torrents continuem a ser partilhados, e pode arrumar sozinho as novas transferências.

### O S.O.K copia ou move os meus ficheiros?

Por predefinição, **move-os**: depois de uma arrumação, os ficheiros já não estão na pasta de origem. Em [Definições → Comportamento](/pt/guide/settings#comportamento), o modo de ficheiro pode **copiá-los** ou criar **ligações físicas**: o original fica onde está (um torrent continua a ser partilhado) sem ocupar mais espaço. Verifique a pré-visualização antes de confirmar. Se algo correu mal, anule a renomeação a partir da mensagem final ou da página [Histórico](/pt/guide/history).

### A minha biblioteca é compatível com Plex, Jellyfin ou Kodi?

Sim. Os nomes e as pastas predefinidos (`Série/Temporada 1/Série S01E01 Título.mkv`, `Filme (Ano).mkv`) seguem as convenções que estes servidores multimédia esperam.

### Preciso de uma conta ou de uma chave API?

Não, não para séries e filmes: o TMDB e o TVDB incluem uma chave integrada. Só alguns serviços precisam de uma ligação (Spotify, IGDB) ou de uma chave pessoal (OMDb, Last.fm). Veja [Definições → Chaves API](/pt/guide/settings#chaves-api).

### O S.O.K precisa de ligação à internet?

Sim, para pesquisar nas bases de dados. A renomeação e a deslocação dos ficheiros acontecem no seu computador.

## Problemas

### «Nenhum ficheiro encontrado»

- Verifique se a pasta contém ficheiros num [formato suportado](/pt/guide/tv-shows#antes-de-começar).
- Verifique se está na página certa: uma pasta de vídeos adicionada à página *Música* não encontra nada.

### A pesquisa não encontra o meu conteúdo

- Escreva pelo menos 2 caracteres.
- Pesquise o título original, ou o título no idioma escolhido nas *Definições*.
- Na página *Filmes*, junte o ano ao texto de pesquisa: `Dune 2021`.
- Verifique a sua ligação à internet.

### Um nome de ficheiro é mal lido

O título, o ano ou o número de faixa mostrado não é o certo: o S.O.K não sabe como se chamam os seus ficheiros. Adicione um padrão em [Definições → Formatos de entrada](/pt/guide/settings#formatos-de-entrada) e verifique-o com **Testar**.

### Foi escolhida automaticamente a série ou o filme errado

O S.O.K escolhe o primeiro resultado para o nome deduzido do ficheiro. Escreva outro nome no campo de pesquisa e clique no resultado certo. A pré-visualização é atualizada de imediato.

### Alguns episódios mantêm o nome original

O nome do ficheiro não tem um número de temporada e de episódio que o S.O.K consiga ler. Descreva como se chamam os seus ficheiros em [Definições → Formatos de entrada](/pt/guide/settings#formatos-de-entrada), por exemplo `{title} - Episode {episode}`, ou renomeie o ficheiro para que contenha `S01E02` ou `1x02`. Depois adicione a pasta de novo.

### «Terminado com erros»

Alguns ficheiros não puderam ser movidos. As causas mais comuns:

- **Um ficheiro está aberto noutro programa** (um leitor multimédia, por exemplo). Feche-o e tente de novo.
- **Não tem permissão** para escrever na pasta de destino.
- **O disco de destino está cheio ou foi desligado** durante a deslocação.

> Quando já existe um ficheiro com o mesmo nome no destino, o S.O.K substitui-o, a não ser que *Ignorar duplicados* esteja ativado (está, por predefinição). Para manter o ficheiro antigo quando é substituído, ative *Backup antes de renomear* em [Definições → Comportamento](/pt/guide/settings#comportamento).

### «Ficheiro(s) deixado(s) no lugar» depois de uma anulação

Estes ficheiros foram movidos ou eliminados desde a renomeação, ou outro ficheiro tem agora o seu nome anterior. O S.O.K nunca substitui um ficheiro. Veja [Histórico e anulação](/pt/guide/history#o-que-faz-a-anulação).

### «Por favor selecione uma pasta de destino.»

A zona *Destino* está vazia, ou a pasta já não existe. Escolha-a de novo.

### Um serviço mostra «⚠️ Chave em falta»

Este serviço precisa de uma chave ou de uma ligação. Configure-o em [Definições → Chaves API](/pt/guide/settings#chaves-api), ou escolha outro serviço em *API preferida*.

### O Windows diz que o instalador não é seguro

O Windows SmartScreen avisa sobre programas que ainda não conhece. Clique em **Mais informações** e depois em **Executar mesmo assim**. Transfira sempre o S.O.K a partir da página [Transferir](/pt/download) ou das [versões no GitHub](https://github.com/SOKTeam/S.O.K/releases).

### O macOS diz que o S.O.K não pode ser aberto

O S.O.K ainda não está notarizado pela Apple, por isso o macOS bloqueia-o da primeira vez. Feche a mensagem, vá a **Definições do Sistema → Privacidade e segurança** e clique em **Abrir mesmo assim** junto à mensagem sobre o S.O.K. Veja [Primeiros passos](/pt/guide/getting-started#macos).

### Não acontece nada ao abrir a AppImage no Linux

- Verifique se o ficheiro pode ser executado como programa: *Propriedades → Permitir executar o ficheiro como programa*, ou `chmod +x` num terminal. Veja [Primeiros passos](/pt/guide/getting-started#linux).
- Verifique se transferiu a versão certa para o seu processador (`uname -m` mostra `x86_64` para Intel/AMD e `aarch64` para ARM).
- Inicie-a a partir de um terminal para ver o erro. Se mencionar FUSE, inicie-a com `./SOK_Linux_*.AppImage --appimage-extract-and-run`.

## Ainda com problemas?

[Abra uma issue no GitHub](https://github.com/SOKTeam/S.O.K/issues) e descreva o que fez, o que esperava e o que aconteceu. Indique a sua versão do S.O.K (mostrada em *Definições → Sobre*).
