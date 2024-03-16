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
        (state.allPokemons = [...action.payload]),
        (state.detail = {
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
        });
    },
    getPokemonDetail: (state, action) => {
      state.detail = action.payload;
    },
    filterPokemon: (state, action) => {
      const filterPokemons = state.pokemons.filter((pokemon) =>
        pokemon.types.includes(action.payload)
      );
      state.pokemons =
        action.payload === "None" ? state.allPokemons : filterPokemons;
    },
  },
});

export const { getAllPokemons, getPokemonDetail, filterPokemon } =
  pokemonsSlice.actions;
export default pokemonsSlice.reducer;
