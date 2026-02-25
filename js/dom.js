export function updatePokemonView({ idEl, nameEl, imgEl }, data) {
  idEl.innerHTML = data.id;
  nameEl.innerHTML = `- ${data.name}`;
  imgEl.src = data.sprites.front_default;
}

export function showNotFound({ idEl, nameEl, imgEl }) {
  idEl.innerHTML = 404;
  nameEl.innerHTML = "- Not found";
  imgEl.src = "./assets/img/notfound.svg";
}