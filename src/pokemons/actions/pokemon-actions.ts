"use server";
import {
  PokeCreate,
  Pokemons,
  SearchResponse,
  CreateResponse,
} from "@/interfaces";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const SearchPokemon = async (name: string) => {
  try {
    const response = await axios.get<SearchResponse>(
      `http://localhost:3001/pokedex?name=${name}`
    );
    const result = response.data.data;
    return { data: result, notfound: { err: false, msg: "", server: false } };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      const err: boolean = error.response?.data.error;
      const msg: string = error.response?.data.message;
      return {
        data: {
          id: "",
          name: "",
          img: "",
          types: [""],
          attack: "",
        },
        notfound: { err, msg, server: false },
      };
    } else {
      return {
        data: {
          id: "",
          name: "",
          img: "",
          types: [""],
          attack: "",
        },
        notfound: {
          err: true,
          msg: "Whoops, something went wrong in our server !!!",
          server: true,
        },
      };
    }
  }
};

export const createPokemon = async (values: PokeCreate) => {
  try {
    const response = await axios.post<CreateResponse>(
      "http://localhost:3001/pokedex/create",
      values
    );
    revalidatePath("/pokedex");
    if (!response.data.error)
      return {
        success: true,
        message: "Pokemon created successfully",
      };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message:
          typeof error.response?.data.message === "string"
            ? (error.response?.data.message as string)
            : "Whoops, something went wrong in our server !!!",
      };
    }
  }
};

export const filterPokemons = async (
  pokemons: Pokemons[] | undefined,
  values: {
    status: string;
    order: string;
    poketypes: string;
  }
) => {
  if (pokemons === undefined) return;
  if (values.status === "All" && values.order && values.poketypes) {
    if (values.order === "None" && values.poketypes === "None") {
      return pokemons;
    } else if (values.order === "None" && values.poketypes) {
      const filterpokemons = pokemons.filter((pokemon) =>
        pokemon.types.includes(values.poketypes)
      );
      return filterpokemons;
    } else if (values.order === "A-Z" && values.poketypes === "None") {
      const filterpokemons = pokemons.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
      return filterpokemons;
    } else if (values.order === "A-Z" && values.poketypes) {
      const filterpokemons = pokemons
        .filter((pokemon) => pokemon.types.includes(values.poketypes))
        .sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      return filterpokemons;
    } else if (values.order === "Z-A" && values.poketypes === "None") {
      const filterpokemons = pokemons.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      return filterpokemons;
    } else if (values.order === "Z-A" && values.poketypes) {
      const filterpokemons = pokemons
        .filter((pokemon) => pokemon.types.includes(values.poketypes))
        .sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      return filterpokemons;
    }
  }
  if (values.status === "Original" && values.order && values.poketypes) {
    if (values.order === "None" && values.poketypes === "None") {
      const filterpokemons = pokemons.filter((pokemon) => !pokemon.createdInDB);
      console.log("Estoy en server actions", pokemons);
      return filterpokemons;
    } else if (values.order === "None" && values.poketypes) {
      const filterpokemons = pokemons
        .filter((pokemon) => !pokemon.createdInDB)
        .filter((pokemon) => pokemon.types.includes(values.poketypes));
      return filterpokemons;
    } else if (values.order === "A-Z" && values.poketypes === "None") {
      const filterpokemons = pokemons
        .filter((pokemon) => !pokemon.createdInDB)
        .sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      return filterpokemons;
    } else if (values.order === "A-Z" && values.poketypes) {
      const filterpokemons = pokemons
        .filter((pokemon) => pokemon.types.includes(values.poketypes))
        .sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      return filterpokemons;
    } else if (values.order === "Z-A" && values.poketypes === "None") {
      const filterpokemons = pokemons.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      return filterpokemons;
    } else if (values.order === "Z-A" && values.poketypes) {
      const filterpokemons = pokemons
        .filter((pokemon) => pokemon.types.includes(values.poketypes))
        .sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      return filterpokemons;
    }
  }
  if (values.status === "Created" && values.order && values.poketypes) {
    if (values.order === "None" && values.poketypes === "None") {
      const filterpokemons = pokemons.filter((pokemon) => pokemon.createdInDB);
      return filterpokemons;
    } else if (values.order === "None" && values.poketypes) {
      const filterpokemons = pokemons
        .filter((pokemon) => pokemon.createdInDB)
        .filter((pokemon) => pokemon.types.includes(values.poketypes));
      return filterpokemons;
    } else if (values.order === "A-Z" && values.poketypes === "None") {
      const filterpokemons = pokemons
        .filter((pokemon) => pokemon.createdInDB)
        .sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      return filterpokemons;
    } else if (values.order === "A-Z" && values.poketypes) {
      const filterpokemons = pokemons
        .filter((pokemon) => pokemon.createdInDB)
        .filter((pokemon) => pokemon.types.includes(values.poketypes))
        .sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      return filterpokemons;
    } else if (values.order === "Z-A" && values.poketypes === "None") {
      const filterpokemons = pokemons
        .filter((pokemon) => pokemon.createdInDB)
        .sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      return filterpokemons;
    } else if (values.order === "Z-A" && values.poketypes) {
      const filterpokemons = pokemons
        .filter((pokemon) => pokemon.createdInDB)
        .filter((pokemon) => pokemon.types.includes(values.poketypes))
        .sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      return filterpokemons;
    }
  }
};
