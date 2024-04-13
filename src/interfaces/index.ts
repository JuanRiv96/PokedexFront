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
  createdInDB: boolean;
}

export type Detail = Omit<Pokemons, "createdInDB">;

export type PokeCard = Omit<
  Pokemons,
  "hp" | "defense" | "speed" | "height" | "weight" | "createdInDB"
>;

export type PokeCreate = Omit<Pokemons, "id" | "createdInDB">;

export interface PagiProps {
  pokemonsPerPage: number;
  pokeLength: number;
  paginado: (pageNum: number) => void;
  mypage: number;
}

export interface StateOne {
  pokemons: Pokemons[];
  allPokemons: Pokemons[];
  detail: Detail;
}
