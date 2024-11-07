import { Dispatch, SetStateAction } from "react";

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

export interface PokedexResponse {
  error: boolean;
  data: Pokemons[];
}

export interface DetailResponse {
  error: boolean;
  data: Pokemons;
}

export interface CreateResponse {
  error: boolean;
  data: {
    message: string;
  };
}

export interface PokedexProps {
  pokemons?: Pokemons[];
}

export interface PropsDetail {
  pokemon?: Pokemons;
}

export type Detail = Omit<Pokemons, "createdInDB">;

export type PokeCard = Omit<
  Pokemons,
  "hp" | "defense" | "speed" | "height" | "weight" | "createdInDB"
>;

export type PokeCreate = Omit<Pokemons, "id" | "createdInDB">;

interface PokemonSearch {
  id: string;
  name: string;
  img: string;
  types: string[];
  attack: string;
}

export interface SearchResponse {
  error: boolean;
  data: PokemonSearch;
}

export interface SearchState {
  data: PokemonSearch;
  notfound: {
    err: boolean;
    msg: string;
    server: boolean;
  };
}

export interface PagiProps {
  pokemonsPerPage: number;
  pokeLength: number;
  paginado: (pageNum: number) => void;
  mypage: number;
}

export interface FilterProps {
  list: Pokemons[] | undefined;
  setList: Dispatch<SetStateAction<Pokemons[] | undefined>>;
  setPages: Dispatch<SetStateAction<number>>;
}

export interface StatsProps {
  id?: string;
  name?: string;
  img?: string;
  types?: string[];
  hp?: string;
  attack?: string;
  defense?: string;
  speed?: string;
  height?: string;
  weight?: string;
}
