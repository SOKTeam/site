---
title: S.O.K Server
description: Instale o S.O.K num NAS ou num servidor doméstico com Docker e arrume as suas transferências a partir de uma página web.
order: 7
---

O S.O.K Server é o mesmo motor da app, numa imagem Docker com interface web. Instale-o num NAS ou num servidor doméstico, indique-lhe as suas pastas de transferências e arrume-as a partir de qualquer navegador: identifica cada ficheiro, mostra os novos nomes numa tabela e renomeia tudo de uma vez ou linha a linha. Ou deixe-o [arrumar sozinho as novas transferências](#organização-automática) e avisar o Discord, o Jellyfin ou o Plex.

Usa **ligações físicas** por predefinição: o ficheiro renomeado e a transferência são o mesmo ficheiro no disco, por isso os seus torrents continuam a ser partilhados sem ocupar mais espaço.

**[Experimentar a demo](/demo?lang=pt)**: a verdadeira interface no seu navegador, com uma biblioteca de exemplo. Nada para instalar, e nenhum ficheiro é renomeado.

## Instalá-lo

O S.O.K Server funciona em qualquer computador com Docker, em Intel/AMD e ARM (`amd64`, `arm64`). Crie um `docker-compose.yml`:

```yaml
services:
  sok-server:
    image: ghcr.io/sokteam/sok-server:latest
    container_name: sok-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Lisbon
    volumes:
      - /srv/sok/config:/config
      - /mnt/storage:/data
    ports:
      - 8080:8080
    restart: unless-stopped
```

Depois inicie-o com `docker compose up -d` e abra `http://<o-seu-servidor>:8080`.

| Definição | Para que serve |
| --- | --- |
| `/config` | As definições, a base de dados, o histórico e os registos. Guarde-o num disco com cópia de segurança. |
| `/data` (ou a pasta que quiser) | As suas transferências e a sua biblioteca, tal como o servidor as vê. |
| `PUID`, `PGID` | O utilizador e o grupo com que o servidor corre: os ficheiros que cria pertencem-lhes. Use os do seu utilizador do NAS (`id` num terminal). |
| `TZ` | O seu fuso horário, para as datas mostradas. |
| `8080:8080` | A porta da interface. Altere o primeiro número para usar outra. |

### Monte uma única pasta-mãe, para as ligações físicas

Uma ligação física só funciona **dentro de uma mesma montagem**. Se as suas transferências estão em `/mnt/storage/downloads` e a sua biblioteca em `/mnt/storage/media`, monte `/mnt/storage` uma única vez (`/mnt/storage:/data`) e use depois `/data/downloads` e `/data/media` nas definições.

Montá-las separadamente (`/mnt/storage/downloads:/downloads` e `/mnt/storage/media:/media`) cria duas montagens: as ligações físicas falham entre elas, mesmo no mesmo disco. As definições avisam-no antes de qualquer renomeação.

## Primeira visita

A primeira página pede-lhe que crie a sua conta: um nome de utilizador e uma palavra-passe com 8 caracteres ou mais. A interface usa o idioma do seu navegador; altere-o em **Definições → Aparência**.

A sessão mantém-se 30 dias nesse navegador. Após 5 palavras-passe erradas, as tentativas seguintes esperam 30 segundos.

**Esqueceu-se da palavra-passe?** Adicione `SOK_RESET_PASSWORD=1` e a nova palavra-passe em `SOK_PASSWORD` ao `environment` do ficheiro compose e reinicie o contentor (`docker compose up -d`). Inicie sessão com a nova palavra-passe e depois retire as duas linhas. As suas definições, o seu histórico e as suas escolhas são mantidos.

## Definições

Abra **Definições** no fundo da barra lateral. Têm cinco separadores, e cada alteração é guardada de imediato.

- **Pastas**: as suas **pastas de origem** (as transferências) e as **pastas de destino** de cada tipo (filmes, séries, música, livros, jogos). Clique em **Adicionar uma pasta…** e escreva o caminho tal como o servidor o vê (`/data/downloads`, não o caminho do seu NAS), ou clique em **Procurar…** para o escolher entre as pastas do servidor. Com vários destinos para um tipo, cada linha do seu separador pode escolher um.
  Por baixo, o **modo de ficheiro**: **Ligação física** (predefinição), **Copiar** ou **Mover**. No modo de ligação física, se uma pasta que adiciona (ou o próprio modo) tornar impossível uma ligação física, uma janela explica porquê e o que alterar, com um botão para passar a **Copiar**; uma linha por baixo das opções volta a abri-la enquanto o problema persistir.
- **Automatização**: a [organização automática](#organização-automática) e as [notificações](#notificações).
- **Renomeação**: o **comportamento** e os **formatos de saída**, os mesmos da app (veja [Definições](/pt/guide/settings)).
- **Chaves API**: ao contrário da app, a imagem **não tem chave integrada**. O TMDB (filmes e séries) precisa da sua própria chave, gratuita em [themoviedb.org](https://www.themoviedb.org/settings/api). O Deezer, o MusicBrainz e o Open Library funcionam sem ela. Cole uma chave, clique em **Guardar** e depois em **Testar**. As chaves são guardadas cifradas e nunca mais são mostradas. Cada tipo tem a sua **API preferida** no topo do seu grupo.
- **Aparência**: o **idioma** e o **tema**: **Claro** (branco, como no macOS), **Laranja** (como no Windows e no Linux) ou **Escuro**. O tema é guardado em cada navegador; **Sistema** (predefinição) segue o modo claro ou escuro do seu dispositivo, branco no Mac e laranja nos restantes.

Também pode fornecer as chaves através de variáveis de ambiente, como `API_KEY_TMDB_V4`: aparecem então como *Definida por uma variável de ambiente* e não podem ser alteradas na interface.

## Analisar as suas transferências

Na página **Análise**, clique em **Analisar**. O S.O.K ordena por tipo os ficheiros das suas pastas de origem e depois pesquisa cada um; o progresso aparece em direto, e pode fechar a página entretanto.

No topo, uma faixa mostra as suas pastas de origem, a última análise e a organização automática; um problema (uma chave em falta, uma quota esgotada, uma pasta não encontrada) aparece logo por baixo. Depois, uma tabela indica, para cada tipo, os seus ficheiros e quantos estão **Prontos**, **A escolher** e **Em falta**: **Abrir** leva ao seu separador. Os **Ficheiros a verificar** são ficheiros cujo tipo é uma suposição (uma imagem de disco, um vídeo entre episódios…): confirme o tipo ou escolha outro: o ficheiro passa para o seu separador e é pesquisado de imediato, e as análises seguintes lembram-se disso.

Cada nova análise mantém as suas escolhas: o resultado, o texto de pesquisa e o destino de uma linha encontrada de novo.

## Verificar e renomear

Cada tipo tem o seu separador, com o modo de ficheiro e o destino por baixo do título. As linhas formam uma tabela: o cartaz, o título e o ficheiro, o **novo nome** (a verde quando está Pronto) e o estado. Uma linha é um filme, uma faixa, um livro ou um jogo, ou então uma série inteira ou um álbum inteiro com os seus ficheiros; os separadores por cima da tabela mostram as linhas de um estado.

| Estado | Significado |
| --- | --- |
| **Pronto** | Um único resultado seguro: o título e o ano (ou o autor, o artista) correspondem. |
| **Escolher** | Vários resultados podem servir. Clique na linha para os ver, com o cartaz e o resumo, e escolha o certo. |
| **Em falta** | Não foi encontrado nada. Clique no ícone de pesquisa e escreva outro título. |

Por baixo do novo nome aparece a sua pasta; expanda uma série para ver cada episódio com o novo nome.

Clique em **Renomear os prontos**, no topo, ou marque algumas linhas (a caixa do cabeçalho marca-as todas) e clique em **Renomear a seleção**, por baixo da tabela. Uma confirmação indica o número de ficheiros e o modo de ficheiro. As linhas renomeadas saem da tabela; um ficheiro que não foi possível renomear fica na sua linha com o motivo.

As legendas seguem o seu vídeo (`Filme.pt.srt` passa a `Dune (2021).pt.srt`), como na app.

## Organização automática

O S.O.K Server pode fazer tudo isto sozinho. Em **Definições → Automatização**, ative **Organizar automaticamente os novos ficheiros**: pede confirmação antes, porque as linhas Pronto serão renomeadas sem si, incluindo as que já estão nos separadores.

- A cada **5 minutos** (pode alterar, de 1 a 1440), o servidor olha para as suas pastas de origem.
- Um ficheiro é tratado **quando a transferência termina**: quando tem o mesmo tamanho que na verificação anterior. Os ficheiros ainda em transferência (`.part`, `.!qB`, `.crdownload`…) são ignorados.
- Os novos ficheiros terminados lançam uma análise, e depois as linhas **Pronto** são renomeadas. As linhas a escolher, as em falta e os ficheiros a verificar **ficam à sua espera** nos separadores, como depois de um clique em **Analisar**.
- A faixa da página **Análise** mostra que está ativada e a sua última arrumação (os ficheiros renomeados; a última verificação ao passar o rato), e o que a parou aparece por baixo (um tipo sem pasta de destino, uma chave em falta…).

Tudo o que renomeia fica no **Histórico**, marcado como *automática*, e pode ser anulado como o resto.

## Notificações

Depois de cada renomeação, manual ou automática, o S.O.K Server pode avisar as suas outras apps. Configure-as em **Definições → Automatização**, por baixo da organização automática, e clique em **Testar**:

| Destino | O que indicar | O que faz |
| --- | --- | --- |
| **Discord** | O endereço de um webhook de um canal (definições do canal → Integrações → Webhooks) | Publica os ficheiros renomeados |
| **Jellyfin** | O seu endereço (`http://jellyfin:8096`) e uma chave API (Painel de controlo → Chaves de API) | Atualiza as bibliotecas |
| **Plex** | O seu endereço (`http://plex:32400`) e o seu token do Plex | Atualiza as bibliotecas |
| **Webhook** | Qualquer endereço | Envia a renomeação em JSON (Home Assistant, n8n…) |

Os endereços dos webhooks, a chave e o token nunca mais são mostrados depois de guardados.

**Um script** também pode correr depois de cada renomeação, com a renomeação em JSON na sua entrada e `SOK_MEDIA_TYPE`, `SOK_RENAMED` e `SOK_AUTO` no seu ambiente. Por segurança, não pode ser definido na página web: coloque o script numa pasta montada e indique o seu caminho no `environment` do contentor, por exemplo `SOK_AFTER_RENAME=/config/after-rename.sh`.

## Histórico e anulação

O **Histórico** lista as suas renomeações por dia, com a hora, o tipo, os ficheiros e o modo de ficheiro. **Anular** repõe todos os ficheiros de uma renomeação; abra uma renomeação para ver cada ficheiro com o novo nome, e clique em **Repor** para repor um único ficheiro (com as suas legendas).

- Uma **ligação física** ou uma **cópia** é eliminada: o original nunca se mexeu.
- Um ficheiro **movido** volta para a pasta anterior.

Uma anulação nunca substitui um ficheiro, como na app (veja [Histórico e anulação](/pt/guide/history#o-que-faz-a-anulação)).

### Ficheiros já processados

Com as ligações físicas, um ficheiro renomeado fica nas suas transferências. O S.O.K lembra-se dele e deixa-o fora das análises seguintes, enquanto não mudar. O separador **Já processados** da página Histórico lista-os; marque um e clique em **Analisar a seleção de novo** para o renomear outra vez. Um ficheiro cuja renomeação foi anulada também volta a ser analisado.

## Atualizar

```sh
docker compose pull
docker compose up -d
```

As suas definições, o seu histórico e as suas escolhas ficam guardados em `/config`.

## Atrás de um proxy inverso

O S.O.K Server funciona atrás do Nginx, do Traefik ou do Caddy. Se o seu proxy já pede um início de sessão (Authelia, Authentik…), pode desativar o início de sessão do S.O.K com `SOK_AUTH=none`: um aviso lembra então que é o proxy que protege o servidor.
