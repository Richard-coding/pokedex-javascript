# Pokédex JavaScript

Pokédex feita com HTML, CSS e JavaScript puro, que consulta a [PokéAPI](https://pokeapi.co/) para mostrar
Pokémon pelo nome ou pelo número. Projeto independente que comecei para aplicar JavaScript na prática.

## Objetivo

Sair dos exercícios só de layout e praticar JavaScript de verdade: requisições a uma API, eventos e atualização da
página pelo DOM.

## Funcionalidades

- Busca por nome ou número: digite e pressione Enter.
- Botões de voltar e avançar para navegar pelos números.
- Exibe o número, o nome e a imagem do Pokémon.
- Tela de "não encontrado" quando a busca não tem resultado.
- Ao abrir, carrega o Pokémon nº 1.

## Como foi feito

- `fetch` com `async/await` e tratamento de erro (`try/catch`) para a PokéAPI.
- Código dividido em módulos ES: `api.js` (requisição), `dom.js` (atualização da tela) e `main.js` (eventos e
  estado da navegação).
- Eventos de teclado e de clique com `addEventListener`.
- CSS separado em reset, layout e componentes, com nomes de classes no padrão BEM.

## Tecnologias

- HTML
- CSS
- JavaScript (ES Modules)
- PokéAPI

## Como executar localmente

```bash
git clone https://github.com/Richard-coding/pokedex-javascript.git
cd pokedex-javascript
npx serve .
```

Acesse o endereço que o comando mostrar. Um servidor local é necessário porque o projeto usa módulos ES, que o
navegador não carrega abrindo o `index.html` direto do disco.

## Status

Projeto de estudo concluído no escopo atual (busca e navegação).

## Autoria

Desenvolvido por Richard Soares Mesquita — [GitHub](https://github.com/Richard-coding).
