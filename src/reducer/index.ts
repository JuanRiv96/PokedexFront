import { createSlice } from "@reduxjs/toolkit";
import { StateOne } from "@/interfaces";

const initialState: StateOne = {
  pokemons: [],
  allPokemons: [],
  detail: {
    id: "",
    name: "",
    img: "",
    types: [],
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: initialState,
  reducers: {
    getAllPokemons: (state, action) => {
      (state.pokemons = [...action.payload]),
        (state.allPokemons = [...action.payload]);
    },
    getPokemonDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { getAllPokemons, getPokemonDetail } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
