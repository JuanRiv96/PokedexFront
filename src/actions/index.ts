import axios from "axios";
import {
  getAllPokemons,
  getPokemonDetail,
  filterPokemon,
  getPokemonByName,
} from "@/reducer";
import { AppDispatch } from "@/store";
import { Pokemons, PokeCreate } from "@/interfaces";

export const getPokemons = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(
      `https://pokedex-production-d9a1.up.railway.app/pokedex`
    );
    const pokemons = response.data.data;
    return dispatch(getAllPokemons(pokemons));
  } catch (error) {
    console.log(error);
  }
};

export const getDetail = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(
      `https://pokedex-production-d9a1.up.railway.app/pokedex/${id}`
    );
    const pokemons: Pokemons = response.data.data;
    return dispatch(getPokemonDetail(pokemons));
  } catch (error) {
    console.log(error);
  }
};

export const searchPokemon =
  (name: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        `https://pokedex-production-d9a1.up.railway.app/pokedex?name=${name}`
      );
      const pokemon: Pokemons = response.data.data;
      return dispatch(getPokemonByName(pokemon));
    } catch (error) {
      console.log(error);
    }
  };

export const createPokemon = (values: PokeCreate) => {
  return async function () {
    try {
      const response = await axios.post(
        "https://pokedex-production-d9a1.up.railway.app/pokedex/create",
        values
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

//////////////////////////////// Filtro/////////////////////////////////////

export const getPokemonFilter =
  (values: { status: string; order: string; poketypes: string }) =>
  async (dispatch: AppDispatch) => {
    return dispatch(filterPokemon(values));
  };
