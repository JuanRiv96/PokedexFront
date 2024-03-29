import axios from "axios";
import { getAllPokemons, getPokemonDetail, filterPokemon } from "@/reducer";
import { AppDispatch } from "@/store";
import { Pokemons, PokeCreate } from "@/interfaces";

export const getPokemons = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/pokedex`);
    const pokemons = response.data.data;
    return dispatch(getAllPokemons(pokemons));
  } catch (error) {
    console.log(error);
  }
};

export const getDetail = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/pokedex/${id}`);
    const pokemons: Pokemons = response.data.data;
    return dispatch(getPokemonDetail(pokemons));
  } catch (error) {
    console.log(error);
  }
};

export const createPokemon = (values: PokeCreate) => {
  return async function () {
    try {
      const response = await axios.post(
        "http://localhost:3001/pokedex/create",
        values
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPokemonsByStatus =
  (value: string) => async (dispatch: AppDispatch) => {
    return dispatch(filterPokemon(value));
  };

// export const getPokemonByOrder = (value) => {
//   return {
//       type: FILTER_BY_ORDER,
//       payload: value
//   }
// };

// export const getPokemonsByType = (value) => {
//   return {
//       type: FILTER_BY_TYPE,
//       payload: value
//   }
// }
