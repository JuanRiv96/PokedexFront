import type { Metadata } from 'next'
import { PokedexDetail } from "@/components";
import { getDetail } from "@/utils/GetPokemons";

export const metadata: Metadata = {
  title: 'Pokemon Detail',
  description: 'Created by Juan',
}

interface DetailParams {
  params: { id: string }
}

const Detail = async ({ params }: DetailParams) => {
  const id = params.id;
  const pokemon = await getDetail(id);
  return (
    <PokedexDetail pokemon = { pokemon }/>
  )
}
export default Detail;
