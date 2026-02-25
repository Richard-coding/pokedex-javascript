import { fetchPokemon } from "./api.js";
import { updatePokemonView, showNotFound } from "./dom.js";

const input = document.querySelector("#search");
const back = document.querySelector("#back");
const forward = document.querySelector("#forward");
const idEl = document.querySelector("#id");
const nameEl = document.querySelector("#name");
const imgEl = document.querySelector("#pokedex");

const elements = { idEl, nameEl, imgEl };

let currentId = 1;

async function getPokemon(pokemon) {
  try {
    const data = await fetchPokemon(pokemon);
    console.log(data);
    updatePokemonView(elements, data);
    currentId = data.id;
  } catch {
    showNotFound(elements);
  }
}

function init() {
  getPokemon(currentId);
}

function handleForward() {
  currentId++;
  getPokemon(currentId);
}

function handleBack() {
  if (currentId > 1) {
    currentId--;
    getPokemon(currentId);
  }
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getPokemon(input.value.trim().toLowerCase());
  }
});

forward.addEventListener("click", handleForward);
back.addEventListener("click", handleBack);

init();
