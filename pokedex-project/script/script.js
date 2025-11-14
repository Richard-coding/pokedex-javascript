const input = document.querySelector("#search");
const back = document.querySelector("#back");
const forward = document.querySelector("#forward");
const id = document.querySelector("#id");
const description = document.querySelector("#name");
const img = document.querySelector("#pokedex");

let idPokemon = 1;

async function getPokemon(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();

    id.innerHTML = data.order;
    description.innerHTML = "- " + data.name;
    img.src = data.sprites.front_default;
    idPokemon = data.id;
  } catch (err) {
    id.innerHTML = 404;
    img.src = "./img/notfound.svg";
    description.innerHTML = "- "`` + "Not found";
  }
}

async function init() {
  await getPokemon(idPokemon);
}

init();

async function showPokemon() {
  const value = input.value.toLowerCase();
  await getPokemon(value);
}

const handleForward = () => {
  idPokemon++;
  getPokemon(idPokemon);
};

const handleBack = () => {
  if (idPokemon > 1) {
    idPokemon--;
    getPokemon(idPokemon);
  }
};

input.addEventListener("keydown", (event) => {
  const valueKeyDown = event.key;
  const valueInput = input.value;

  if (valueKeyDown === "Enter") {
    event.preventDefault();
    getPokemon(valueInput);
  }
});

forward.addEventListener("click", () => {
  handleForward();
});
back.addEventListener("click", () => {
  handleBack();
});