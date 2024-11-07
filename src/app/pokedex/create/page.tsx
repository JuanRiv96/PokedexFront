import type { Metadata } from 'next'
import NextImage from "next/image";
import { PokedexCreate } from "@/components";
import title from "../../../../public/CreateTitle.png";
import { prueba } from '../../../pokemons/actions/pokemon-actions';

export const metadata: Metadata = {
  title: 'Pokemon Creator',
  description: 'Created by Juan',
}

const Create = async () => {
  return (
    <div className="
      w-full 
      flex flex-col items-center 
      md:justify-center"
    >
      <NextImage
        src={title}
        alt=""
        width={800}
        height={500}
        className="px-7 pb-3 pt-9 md:px-0"
      />
      <PokedexCreate/>
    </div>
    
  )
}
export default Create;

