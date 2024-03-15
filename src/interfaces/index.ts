export interface Pokemons {
  id: string;
  name: string;
  img: string;
  types: string[];
  hp: string;
  attack: string;
  defense: string;
  speed: string;
  height: string;
  weight: string;
}

export interface StateOne {
  pokemons: Pokemons[];
  allPokemons: Pokemons[];
  detail: Pokemons;
}

export type PokeCard = Omit<
  Pokemons,
  "hp" | "defense" | "speed" | "height" | "weight"
>;

export type PokeCreate = Omit<Pokemons, "id">;
