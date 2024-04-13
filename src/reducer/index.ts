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
    getPokemonByName: (state, action) => {
      state.pokemons = [action.payload];
    },
    getPokemonDetail: (state, action) => {
      state.detail = action.payload;
    },
    filterPokemon: (state, action) => {
      state.pokemons = state.allPokemons;

      if (
        action.payload.status === "All" &&
        action.payload.order &&
        action.payload.poketypes
      ) {
        if (
          action.payload.order === "None" &&
          action.payload.poketypes === "None"
        ) {
          state.pokemons = state.allPokemons;
          return;
        } else if (
          action.payload.order === "None" &&
          action.payload.poketypes
        ) {
          const filterpokemons = state.pokemons.filter((pokemon) =>
            pokemon.types.includes(action.payload.poketypes)
          );
          state.pokemons = filterpokemons;
          return;
        } else if (
          action.payload.order === "A-Z" &&
          action.payload.poketypes === "None"
        ) {
          const filterpokemons = state.pokemons.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          state.pokemons = filterpokemons;
          return;
        } else if (action.payload.order === "A-Z" && action.payload.poketypes) {
          const filterpokemons = state.pokemons
            .filter((pokemon) =>
              pokemon.types.includes(action.payload.poketypes)
            )
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });
          state.pokemons = filterpokemons;
          return;
        } else if (
          action.payload.order === "Z-A" &&
          action.payload.poketypes === "None"
        ) {
          const filterpokemons = state.pokemons.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          state.pokemons = filterpokemons;
          return;
        } else if (action.payload.order === "Z-A" && action.payload.poketypes) {
          const filterpokemons = state.pokemons
            .filter((pokemon) =>
              pokemon.types.includes(action.payload.poketypes)
            )
            .sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
          state.pokemons = filterpokemons;
          return;
        }
      }
      if (
        action.payload.status === "Original" &&
        action.payload.order &&
        action.payload.poketypes
      ) {
        if (
          action.payload.order === "None" &&
          action.payload.poketypes === "None"
        ) {
          const originalPokemons = state.pokemons.filter(
            (pokemon) => !pokemon.createdInDB
          );
          state.pokemons = originalPokemons;
          return;
        } else if (
          action.payload.order === "None" &&
          action.payload.poketypes
        ) {
          const originalPokemons = state.pokemons
            .filter((pokemon) => !pokemon.createdInDB)
            .filter((pokemon) =>
              pokemon.types.includes(action.payload.poketypes)
            );
          state.pokemons = originalPokemons;
          return;
        } else if (
          action.payload.order === "A-Z" &&
          action.payload.poketypes === "None"
        ) {
          const originalPokemons = state.pokemons
            .filter((pokemon) => !pokemon.createdInDB)
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });
          state.pokemons = originalPokemons;
          return;
        } else if (action.payload.order === "A-Z" && action.payload.poketypes) {
          const filterpokemons = state.pokemons
            .filter((pokemon) =>
              pokemon.types.includes(action.payload.poketypes)
            )
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });
          state.pokemons = filterpokemons;
          return;
        } else if (
          action.payload.order === "Z-A" &&
          action.payload.poketypes === "None"
        ) {
          const filterpokemons = state.pokemons.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          state.pokemons = filterpokemons;
          return;
        } else if (action.payload.order === "Z-A" && action.payload.poketypes) {
          const filterpokemons = state.pokemons
            .filter((pokemon) =>
              pokemon.types.includes(action.payload.poketypes)
            )
            .sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
          state.pokemons = filterpokemons;
          return;
        }
      }
      if (
        action.payload.status === "Created" &&
        action.payload.order &&
        action.payload.poketypes
      ) {
        if (
          action.payload.order === "None" &&
          action.payload.poketypes === "None"
        ) {
          const createdPokemons = state.pokemons.filter(
            (pokemon) => pokemon.createdInDB
          );
          state.pokemons = createdPokemons;
          return;
        } else if (
          action.payload.order === "None" &&
          action.payload.poketypes
        ) {
          const createdPokemons = state.pokemons
            .filter((pokemon) => pokemon.createdInDB)
            .filter((pokemon) =>
              pokemon.types.includes(action.payload.poketypes)
            );
          state.pokemons = createdPokemons;
          return;
        } else if (
          action.payload.order === "A-Z" &&
          action.payload.poketypes === "None"
        ) {
          const filterpokemons = state.pokemons
            .filter((pokemon) => pokemon.createdInDB)
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });
          state.pokemons = filterpokemons;
          return;
        } else if (action.payload.order === "A-Z" && action.payload.poketypes) {
          const filterpokemons = state.pokemons
            .filter((pokemon) => pokemon.createdInDB)
            .filter((pokemon) =>
              pokemon.types.includes(action.payload.poketypes)
            )
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });
          state.pokemons = filterpokemons;
          return;
        } else if (
          action.payload.order === "Z-A" &&
          action.payload.poketypes === "None"
        ) {
          const filterpokemons = state.pokemons
            .filter((pokemon) => pokemon.createdInDB)
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });
          state.pokemons = filterpokemons;
          return;
        } else if (action.payload.order === "Z-A" && action.payload.poketypes) {
          const filterpokemons = state.pokemons
            .filter((pokemon) => pokemon.createdInDB)
            .filter((pokemon) =>
              pokemon.types.includes(action.payload.poketypes)
            )
            .sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
          state.pokemons = filterpokemons;
          return;
        }
      }
    },
  },
});

export const {
  getAllPokemons,
  getPokemonDetail,
  getPokemonByName,
  filterPokemon,
} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
