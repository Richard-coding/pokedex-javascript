export async function fetchPokemon(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (!response.ok) throw new Error("Pokemon not found");
  return response.json();
}
