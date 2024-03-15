"use client"
import { useState, ChangeEvent, SyntheticEvent } from "react";
import { useAppDispatch } from "@/hooks";
import { createPokemon } from "@/actions";
import { useRouter } from "next/navigation";
import { Select, SelectItem, Button, Input, Link} from "@nextui-org/react";
import { GrLinkPrevious } from "react-icons/gr";

const mytypes: string[] = ["none", "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"];

const Create = () => {

  const dispatch = useAppDispatch();
  const navigate = useRouter()
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
  // const [types, setTypes] = useState<string[]>([]);
  const handleDatos = (e: ChangeEvent<HTMLInputElement>): void => {
    setDatos({
        ...datos,
        [e.target.name]: e.target.value
    })
  }
  const handleTypes = (e: ChangeEvent<HTMLSelectElement>) => {
    setDatos({
      ...datos,
      types: e.target.value.split(",")
  })
    // setTypes(e.target.value.split(","));
  }
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createPokemon(datos))
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
    alert('CHECK IF YOUR POKEMON WAS CREATED !!');
    navigate.push("/pokedex");
  }
  console.log(datos.types)

  return (
    <div className="
      w-full 
      h-screen 
      flex flex-col items-center
      md:justify-center"
      >
      <Button isIconOnly variant="faded" size="sm" as={Link} href="/pokedex" className='absolute top-4 left-4 md:top-12 md:left-14'>
        <GrLinkPrevious size={20}/>
      </Button>
      <h1 className="
        text-white 
        text-pretty 
        font-bold
        text-3xl
        pt-20
        animate-pulse
        md:text-4xl md:pb-6"
      >
          Create your Pokemon
      </h1>
      <form className="
        w-full
        h-[495px] 
        py-5 px-4 pt-11
        space-y-10
        md:w-3/5 md:space-y-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-row space-x-4 md:space-x-6 px-4 md:px-0">
          <Input 
            label="Name" 
            id="Name"
            name="name"
            placeholder="Enter the name of your pokemon" 
            size="sm" 
            className="w-1/2" 
            isRequired 
            type="text"
            value={datos.name}
            onChange={handleDatos}
          />
           <Input 
            label="Image(URL)" 
            id="img"
            name="img"
            placeholder="Enter the image url" 
            size="sm" 
            className="w-1/2" 
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
              <label className="text-pretty text-white" htmlFor="hp">Hp: {datos.hp}</label>
              <input
                type="range" 
                value={datos.hp}
                name="hp" 
                min="0" 
                max="200"
                id="hp"
                onChange={handleDatos} 
              />
            </div>  
            <div className="flex flex-col">
              <label className="text-pretty text-white" htmlFor="attack">Attack: {datos.attack}</label>
              <input
                type="range" 
                value={datos.attack}
                name="attack" 
                min="0" 
                max="200"
                id="attack"
                onChange={handleDatos} 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-pretty text-white" htmlFor="defense">Defense: {datos.defense}</label>
              <input
                type="range" 
                value={datos.defense}
                name="defense" 
                min="0" 
                max="200"
                id="defense"
                onChange={handleDatos} 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-pretty text-white" htmlFor="speed">Speed: {datos.speed}</label>
              <input
                type="range" 
                value={datos.speed}
                name="speed" 
                min="0" 
                max="200"
                id="speed"
                onChange={handleDatos} 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-pretty text-white" htmlFor="hp">Height: {datos.height}</label>
              <input
                type="range" 
                value={datos.height}
                name="height" 
                min="0" 
                max="200"
                id="height"
                onChange={handleDatos} 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-pretty text-white" htmlFor="weight">Weight: {datos.weight}</label>
              <input
                type="range" 
                value={datos.weight}
                name="weight" 
                min="0" 
                max="200"
                id="weight"
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
        <div className="flex justify-center pb-2">
          <Button
            type="submit"
            size="md"
            variant="faded"
            color="default" 
            className="text-pretty font-bold"
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  )
};

export default Create;
