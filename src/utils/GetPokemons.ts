import { notFound } from "next/navigation";
import axios from "axios";
import { PokedexResponse, DetailResponse } from "@/interfaces";

export const getAllPokemons = async () => {
  try {
    const response = await fetch("http://localhost:3001/pokedex");
    const pokemons = (await response.json()) as PokedexResponse;
    return pokemons.data;
  } catch (error) {
    console.log(error);
    throw new Error("Whoops, something went wrong in our server !!!");
  }
};

export const getDetail = async (id: string) => {
  try {
    const response = await axios.get<DetailResponse>(
      `http://localhost:3001/pokedex/${id}`
    );
    const pokemon = response.data.data;
    return pokemon;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.message === "Pokemon not found") notFound();
      else throw new Error("Whoops, something went wrong in our server !!!");
    }
  }
};
