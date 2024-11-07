import { PokedexProps } from "@/interfaces"
import { PokemonCard } from "./PokemonCard"

export const PokedexGrid = ({ pokemons }: PokedexProps) => {
  return (
    <div className="
        w-full
        gap-3 pt-3
        grid grid-cols-1
        justify-items-center
        md:grid-cols-3 md:pt-4 md:pb-4"
    >
     {pokemons?.map(pokemon => {
        return (
            <PokemonCard 
                key={pokemon.id}
                id = {pokemon?.id}
                name ={pokemon?.name}
                types ={pokemon?.types.map(t => t + (' '))}
                attack ={pokemon?.attack}
                img ={pokemon?.img}
            />
        )
     })}   
    </div>
  )
}
