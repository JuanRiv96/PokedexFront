"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Select, SelectItem, Button, Input } from "@nextui-org/react";
import { createPokemon } from "@/pokemons/actions/pokemon-actions";
import  toast  from "react-hot-toast";

const mytypes: string[] = [
  "None", "normal", "fighting", "flying", 
  "poison", "ground", "rock", "bug", 
  "ghost", "steel", "fire", "water", 
  "grass", "electric", "psychic", "ice", 
  "dragon", "dark", "fairy", "unknown", 
  "shadow"
];

export const PokedexCreate = () => {
  const router = useRouter();
  const [datos, setDatos] = useState({
    name: "",
    hp: "",
    attack:"",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [""]
  });
  const handleDatos = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setDatos({
        ...datos,
        [e.target.name]: e.target.value
    })
  };
  const handleTypes = (e: ChangeEvent<HTMLSelectElement>) => {
    setDatos({
      ...datos,
      types: e.target.value.split(",")
  })};
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await createPokemon(datos);
    setDatos({
      name: "",
      hp: "",
      attack:"",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      img: "",
      types: [""]
    });
    if(result?.success !== undefined && result.success) {
      toast.success(result.message);
      router.push("/pokedex");

    }else if(result?.success !== undefined && !result.success){
      toast.error(result.message);
      router.push("/pokedex");
    }
  };

  return (
    <div className="w-full md:w-3/5">
      <form className="
        w-full
        px-9
        space-y-10
        md:space-y-6 md:pt-0 md:px-0"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-row space-x-4 md:space-x-6 px-4 md:px-0">
          <Input 
            label="Name" 
            id="Name"
            name="name"
            placeholder="Enter the name of your pokemon" 
            size="sm"
            autoComplete="off"
            className="w-1/2 font-fantasy" 
            isRequired 
            type="text"
            value={datos.name}
            onChange={handleDatos}
          />
           <Input 
            label="Image(URL)" 
            id="img"
            name="img"
            placeholder="http..." 
            size="sm"
            autoComplete="off"
            className="w-1/2 font-fantasy" 
            isRequired 
            type="text"
            value={datos.img}
            onChange={handleDatos}
          />
        </div>
       
        <div className="
          px-4
          flex flex-col space-y-10 
          md:flex md:flex-row md:space-x-6 md:space-y-0 md:px-0">
          <div className="
            w-full
            space-y-1
            flex flex-col
            md:w-1/2 md:space-y-4"
          >
            <div className="flex flex-col">
              <label className="text-pretty text-white font-fantasy" htmlFor="hp">Hp: {datos.hp}</label>
              <input
                type="range" 
                value={datos.hp}
                name="hp" 
                min="0" 
                max="200"
                id="hp"
                className="font-fantasy"
                onChange={handleDatos} 
              />
            </div>  
            <div className="flex flex-col">
              <label className="text-pretty text-white font-fantasy" htmlFor="attack">Attack: {datos.attack}</label>
              <input
                type="range" 
                value={datos.attack}
                name="attack" 
                min="0" 
                max="200"
                id="attack"
                className="font-fantasy"
                onChange={handleDatos} 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-pretty text-white font-fantasy" htmlFor="defense">Defense: {datos.defense}</label>
              <input
                type="range" 
                value={datos.defense}
                name="defense" 
                min="0" 
                max="200"
                id="defense"
                className="font-fantasy"
                onChange={handleDatos} 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-pretty text-white font-fantasy" htmlFor="speed">Speed: {datos.speed}</label>
              <input
                type="range" 
                value={datos.speed}
                name="speed" 
                min="0" 
                max="200"
                id="speed"
                className="font-fantasy"
                onChange={handleDatos} 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-pretty text-white font-fantasy" htmlFor="hp">Height: {datos.height}</label>
              <input
                type="range" 
                value={datos.height}
                name="height" 
                min="0" 
                max="200"
                id="height"
                className="font-fantasy"
                onChange={handleDatos} 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-pretty text-white font-fantasy" htmlFor="weight">Weight: {datos.weight}</label>
              <input
                type="range" 
                value={datos.weight}
                name="weight" 
                min="0" 
                max="200"
                id="weight"
                className="font-fantasy"
                onChange={handleDatos} 
              />
            </div>
          </div>
          <div className="
            w-full
            md:w-1/2"
          >
            <Select
              selectionMode="multiple"
              label="Types"
              placeholder="Select types"
              items={mytypes}
              size="sm"
              isRequired
              onChange={handleTypes}
              className="font-fantasy"
            >
            {mytypes?.map(type => {
                return (
                  <SelectItem key={type} value={type} id={type}>
                    {type}
                  </SelectItem>
                )
              })}
            </Select>
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <Button
            type="submit"
            size="md"
            variant="faded"
            color="default" 
            className="font-fantasy font-bold"
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  )
};