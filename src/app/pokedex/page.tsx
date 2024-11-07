import type { Metadata } from 'next'
import { PokedexPage } from "@/components";
import { getAllPokemons } from "@/utils/GetPokemons";

export const metadata: Metadata = {
  title: 'Pokemon List',
  description: 'Created by Juan',
}

export default async function Pokedex() {

const pokemons = await getAllPokemons();

return (
  <>
  <PokedexPage pokemons={pokemons}/>
  </>
)
}
