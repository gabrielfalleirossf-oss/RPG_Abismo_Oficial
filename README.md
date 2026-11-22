# RPG Abismo & Marvel

Site dos RPGs **Abismo** e **Marvel**, publicado pelo GitHub Pages e integrado ao Supabase.

## Estrutura do repositório

| Pasta/arquivo | Função |
|---|---|
| `index.html` | Página inicial que permite escolher o universo. |
| `login/` | Autenticação dos jogadores e mestres. |
| `rpg/` | Páginas do RPG Abismo. |
| `marvel/` | Páginas do RPG Marvel. |
| `assets/` | Imagens, ícones e artes compartilhadas. |
| `documentos/` | PDFs exibidos ou oferecidos pelo site. |
| `database/` | Scripts SQL do Supabase. Não é publicado como parte da interface. |
| `archive/` | Cópias e versões antigas preservadas apenas para consulta. |
| `docs/` | Guias técnicos e inventário do projeto. |
| Arquivos `.css` e `.js` na raiz | Módulos compartilhados pelas fichas dos dois RPGs. |

## Regras para novas atualizações

1. Não crie arquivos como `index (1).html` na raiz. Use o Git para recuperar versões anteriores.
2. Uma versão nova deve substituir a anterior somente depois de todos os HTML apontarem para ela.
3. Scripts SQL devem ficar em `database/`, nunca misturados aos arquivos do site.
4. Artes de raças ficam em `assets/racas/`; artes de estágios em `assets/estagios/`.
5. Antes de publicar, abra `docs/ARQUIVOS-ATIVOS.md` e confira se o arquivo alterado pertence ao site ativo.

## Publicação

Envie o conteúdo desta pasta para a raiz do repositório do GitHub. O GitHub Pages deve continuar apontando para a branch `main` e para a pasta raiz `/`.

Não é necessário executar novamente os arquivos SQL apenas por reorganizar o repositório.
