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
  createdInDb: boolean;
}

export type Detail = Omit<Pokemons, "createdInDb">;

export type PokeCard = Omit<
  Pokemons,
  "hp" | "defense" | "speed" | "height" | "weight" | "createdInDb"
>;

export type PokeCreate = Omit<Pokemons, "id" | "createdInDb">;

export interface PagiProps {
  pokemonsPerPage: number;
  pokeLength: number;
  paginado: (pageNum: number) => void;
  page: number;
}

export interface StateOne {
  pokemons: Pokemons[];
  allPokemons: Pokemons[];
  detail: Detail;
}
