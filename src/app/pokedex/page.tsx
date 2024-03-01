"use client"
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect, useState } from 'react';
import { getPokemons } from '@/actions';
import { PokemonCard }  from '@/components/PokemonCard';
import { NavBar } from '@/components/NavBar';
import {Select, SelectItem, Pagination} from "@nextui-org/react";

const filters: string[] = ["All", "Created", "Original"];
const orders: string[] = ["None","A-Z", "Z-A", "Attack"];
const types: string[] = ["None", "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"];


const Pokedex = () => {
  
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((state) => state?.pokemons.pokemons);
  const pokemonsPerPage: number = 12;
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const indexLastPokemon: number = currentPage * pokemonsPerPage;
  const indexFirstPokemon: number = indexLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexFirstPokemon, indexLastPokemon);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    dispatch(getPokemons());
    const page_num = [];
        for(let i = 1; i <= Math.ceil(pokemons?.length/pokemonsPerPage); i++){  // Math.cail(40/12) = Math.ceil(3.33333) = 4
            page_num.push(i); // [1, 2, 3, 4]
        }
        setPageNumbers(page_num); // Seteo mi estado 
  },[dispatch, pokemons.length, pokemonsPerPage]);

  return (
    <div className="w-full">
      <NavBar/>
      <div className="
        px-5
        w-full
        pt-14 
        space-x-5
        flex justify-center 
        md:px-2"
      >
        <Select 
          name="Pokemons" 
          id="Pokemons" 
          label="Pokemons" 
          defaultSelectedKeys={["All"]}
          className="w-32 text-black"
          radius="lg"
          size="sm" 
          color="default" 
          variant="faded" 
          classNames={{
            label:[
              "text-black"
            ]
          }}
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
          name="Order" 
          id="Order" 
          label="Order" 
          defaultSelectedKeys={["None"]} 
          className="w-32 text-black"
          radius="lg"
          size="sm" 
          color="default" 
          variant="faded"
          classNames={{
            label:[
              "text-black"
            ]
          }}
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
          name="Types" 
          id="Types" 
          label="Types" 
          defaultSelectedKeys={["None"]} 
          className="w-32 text-black"
          radius="lg"
          size="sm" 
          color="default" 
          variant="faded"
          classNames={{
            label:[
              "text-black"
            ]
          }}
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
      <div className="
        w-full
        gap-3 
        pt-14
        mt-20
        grid
        grid-cols-1
        justify-items-center
        md:grid-cols-3"
        >
        {currentPokemons?.map((pokemon, idx) => {
            return (
              <PokemonCard 
                key={idx}
                id = {pokemon?.id}
                name ={pokemon?.name}
                types ={pokemon?.types.map(t => t + (' '))}
                attack ={pokemon?.attack}
                img ={pokemon?.img}
              />
            );
          })}
      </div>
       {pageNumbers.length === 0 ? null 
        : 
        <Pagination   
          total={pageNumbers.length}
          variant="bordered"
          color="primary"
          page={currentPage}
          onChange={setCurrentPage}
          className="
            pt-10 mt-4 
            flex justify-center
            container mx-auto"
        />
      }     
    </div>
  )
};

export default Pokedex;
