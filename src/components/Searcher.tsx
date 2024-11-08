"use client"
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Skeleton, Card, CardHeader, CardBody } from "@nextui-org/react";
import { PokemonCard } from "@/components";
import { SearchPokemon } from "@/pokemons/actions/pokemon-actions";
import { GrSearch } from "react-icons/gr";
import { SearchState } from "@/interfaces";
import { toast } from "react-hot-toast";

export const Searcher = () => {
  const router = useRouter()
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState<SearchState>(
    {
      data: {
        id: "",
        name: "",
        img: "",
        types: [""],
        attack: "",
      },
      notfound: { err: false, msg: "", server: false}
    }
  );

  const handleName = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setName(e.target.value);
  }
  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const result = await SearchPokemon(name);
      if(result.notfound.server){
        toast.error(result.notfound.msg)
        router.push("/pokedex");
      } 
      else if(result !== undefined){
        setPokemon(result);
      }
  }
   
  return (
    <div className="
      flex flex-col justify-center items-center
      space-y-6
      block
      md:flex-row md:space-x-4 md:space-y-0"
    >
      <div className="space-y-4 md:w-full">
        <p className="w-56 text-md font-fantasy text-white md:w-96 md:text-3xl md:block">
          Introduce el nombre del pokemon que quieres encontrar &#129488;
        </p>
        <div className="flex flex-row items-center justify-center space-x-2 md:w-80">
            <Input
                id="name"
                name="name"
                type="text"
                isRequired
                placeholder="Pokemon name..." 
                size="sm"
                radius="lg"
                autoComplete="off"
                className="w-44 md:w-full font-fantasy"
                classNames={{
                  inputWrapper: [
                    "h-8 md:h-11"
                  ]}}
                onChange={(e) => handleName(e)}
            />
            <Button radius="full" variant="faded"  isIconOnly  className="font-fantasy scale-[.80] md:scale-100" onClick={(e) => onSubmit(e)}>
                <GrSearch size={20}/>
            </Button>
        </div>
      </div>
      <div>
        { pokemon.data.id ? 
            <PokemonCard  
              key={pokemon.data?.id}
              id = {pokemon.data?.id}
              name ={pokemon.data?.name}
              types ={pokemon.data?.types.map(t => t + (' '))}
              attack ={pokemon.data?.attack}
              img ={pokemon.data?.img}
            />
            :
            pokemon && pokemon.notfound.err ?
              <Card className="border-1 border-white bg-transparent w-56 py-2 h-40">
              <CardBody className="flex justify-center items-center">
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12">
                  { pokemon.notfound.msg }
                </div>
              </CardBody>
            </Card>
            :
            <Card className="relative border-1 border-white bg-transparent w-56 py-2 h-40">
              <CardHeader className="pb-0 pt-1 px-4 flex-col items-start space-y-1">
                <Skeleton className="rounded-lg w-16 h-2 bg-zinc-800 opacity-20"/>
                <Skeleton className="rounded-lg w-11 h-1 bg-zinc-800 opacity-20"/>
                <Skeleton className="rounded-lg w-8 h-1 bg-zinc-800 opacity-20"/>
              </CardHeader>
              <CardBody className="absolute top-10 left-28">
                <Skeleton className="rounded-lg w-[85px] h-[85px] bg-zinc-800 opacity-20"/>
              </CardBody>
            </Card>
        }
      </div>
    </div>
  )
}

