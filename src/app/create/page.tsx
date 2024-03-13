"use client"
import { useState, ChangeEvent } from "react";
import { useAppDispatch } from "@/hooks";
import { Input } from "@nextui-org/react";
import { Select, SelectItem, Selection } from "@nextui-org/react";

const mytypes: string[] = ["none", "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"];

const Create = () => {

  const dispatch = useAppDispatch();
  const [datos, setDatos] = useState({
    name: "",
    hp: "",
    attack:"",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
  });
  const [types, setTypes] = useState<Selection>(new Set(["none"]));
  const handleDatos = (e: ChangeEvent<HTMLInputElement>): void => {
    setDatos({
        ...datos,
        [e.target.name]: e.target.value
    })
  }
  const handleTypes = (e: ChangeEvent<HTMLSelectElement>) => {
    setTypes(new Set(e.target.value.split(",")))
  }
  const handleSubmit = () => {

  }
  console.log(types)

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-pretty text-3xl">Create your Pokemon</h1>
      <form className="border w-1/2 h-[440px] py-5 px-4 space-y-6">
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
        <div className="flex flex-row space-x-6">
          <div className="w-1/2 space-y-4 flex flex-col">
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
          <div className="w-1/2">
            <Select
              selectionMode="multiple"
              label="Types"
              placeholder="Select types"
              items={mytypes}
              defaultSelectedKeys={["none"]}
              selectedKeys={types}
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
       
      </form>
    </div>
  )
};

export default Create;


{/* <Listbox className="border h-auto" selectionMode="multiple">
             {types?.map(type => {
                return (
                  <ListboxItem key={type}>
                    {type}
                  </ListboxItem>
                )
             })}
            </Listbox> */}