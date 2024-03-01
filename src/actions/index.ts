import axios from "axios";
import { getAllPokemons, getPokemonDetail } from "@/reducer";
import { AppDispatch } from "@/store";
import { Pokemons } from "@/interfaces";

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