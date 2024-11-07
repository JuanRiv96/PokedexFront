import NextImage from "next/image";
import { PokemonStats } from "@/components";
import { PropsDetail } from "@/interfaces";
import title from "../../public/DetailTitle.png";

export const PokedexDetail = ({ pokemon }: PropsDetail) => {
  return (
    <div className="w-full flex flex-col items-center">
      <NextImage
        src={title}
        alt="Not Found"
        width={800}
        height={500}
        className="px-7 pb-3 pt-9 md:px-0"
      />
      <PokemonStats 
        id = { pokemon?.id } 
        name = { pokemon?. name } 
        img = { pokemon?.img } 
        types = { pokemon?.types } 
        hp = { pokemon?.hp }
        attack = { pokemon?.attack }
        defense = { pokemon?.defense }
        speed = { pokemon?.speed }
        height = { pokemon?.height }
        weight = { pokemon?.weight }
      />
    </div>
  )
};