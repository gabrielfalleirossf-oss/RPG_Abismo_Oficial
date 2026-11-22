# Arquivos ativos do site

Este documento separa o que compõe o site atual do que foi guardado apenas como histórico.

## Páginas

- `index.html`: entrada principal;
- `login/index.html`: login;
- `rpg/`: seleção, jogadores, mestre, fichas, NPCs e confrontos do Abismo;
- `marvel/`: seleção, jogadores, mestre, fichas, NPCs e confrontos da Marvel.

## Módulos compartilhados

Os arquivos CSS e JavaScript mantidos na raiz são carregados por mais de um caminho do site. Eles permanecem ali propositalmente para preservar as referências relativas existentes.

## Banco de dados

Todos os scripts `.sql` foram transferidos para `database/`. Eles são ferramentas de manutenção do Supabase e não são carregados pelo navegador.

## Arquivo histórico

`archive/` contém:

- cópias antigas de páginas `index`;
- versões anteriores do combate;
- versões substituídas de estilos raciais;
- notas de correções antigas.

Nada dentro de `archive/` é necessário para o funcionamento normal do site.

## Importante

Não apague módulos da raiz apenas porque não aparecem diretamente em um HTML. Alguns são carregados dinamicamente por outros arquivos JavaScript.
