"use client"
import { ChangeEvent, useState, MouseEvent } from 'react';
import {Select, SelectItem, Button } from "@nextui-org/react";
import { filterPokemons } from "@/pokemons/actions/pokemon-actions";
import { FilterProps } from "@/interfaces";

const filters: string[] = ["All","Original", "Created"];
const orders: string[] = ["None","A-Z", "Z-A"];
const types: string[] = [
  "None", "normal", "fighting", "flying", 
  "poison", "ground", "rock", "bug", 
  "ghost", "steel", "fire", "water", 
  "grass", "electric", "psychic", "ice", 
  "dragon", "dark", "fairy", "unknown", 
  "shadow"
];

export const Filter = ({ list, setList, setPages }: FilterProps) => {

    const [values, setValues] = useState({
        status: "All",
        order: "None",
        poketypes: "None"
      });
      const handleStatus = (e: ChangeEvent<HTMLSelectElement>): void =>{
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };
    
      const myfilter = async (e: MouseEvent<HTMLButtonElement>) => {
        const result = await filterPokemons(list, values);
        setList(result);
        setPages(1);
      }
    
  return (
    <div className="flex flex-col items-center space-y-5 pt-6">
        <Button
          variant="faded"
          radius="lg"
          size="sm"
          onClick={(e) => myfilter(e)}
          className="block font-fantasy text-sm"
        >
          Filter
        </Button>
        <div 
          className="
          px-5
          w-full
          
          space-x-2
          flex justify-center items-center
          md:px-2 md:space-x-5"
        >
          <Select 
            name="status" 
            id="Pokemons" 
            label="Pokemons" 
            defaultSelectedKeys={["All"]}
            className="w-32 text-black font-fantasy"
            radius="lg"
            size="sm" 
            color="default" 
            variant="faded" 
            classNames={{
              label:[
                "text-black"
              ]
            }}
            onChange={(e) => handleStatus(e)}
          >
            {filters.map(fil => {
              return (
                <SelectItem key={fil} value={fil} id={fil}>
                 {fil}
                </SelectItem>
              )
            })}
          </Select>
          <Select 
            name="order" 
            id="Order" 
            label="Order" 
            defaultSelectedKeys={["None"]} 
            className="w-32 text-black font-fantasy"
            radius="lg"
            size="sm" 
            color="default" 
            variant="faded"
            classNames={{
              label:[
                "text-black"
              ]
            }}
            onChange={(e) => handleStatus(e)}
            >
              {orders.map(ord => {
                return (
                  <SelectItem key={ord} value={ord} id={ord}>
                    {ord}
                  </SelectItem>
                )
              })}
          </Select>
          <Select 
            name="poketypes" 
            id="Types" 
            label="Types" 
            defaultSelectedKeys={["None"]} 
            className="w-32 text-black font-fantasy"
            radius="lg"
            size="sm"
            color="default" 
            variant="faded"
            classNames={{
              label:[
                "text-black"
              ]
            }}
            onChange = {(e) => handleStatus(e)}
          >
              {types.map(type => {
                return (
                  <SelectItem key={type} value={type}  id={type}>
                    {type}
                  </SelectItem>
                )
              })}
          </Select>
        </div>
    </div>
  )
}
