"use client"
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ChangeEvent, useEffect, useState, MouseEvent } from 'react';
import { getPokemons, getPokemonFilter } from '@/actions';
import { PokemonCard }  from '@/components';
import { Paginado } from '@/components';
import {Select, SelectItem, Button, Navbar, NavbarContent, NavbarItem, Link, Input, } from "@nextui-org/react";
import { searchPokemon, getTypes } from "@/actions";
import { GrSearch } from "react-icons/gr";
import { RiArrowGoBackFill } from "react-icons/ri";

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

const Pokedex = () => {
  
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((state) => state?.pokemons.pokemons);
  const [name, setName] = useState("");
  const [reset, setReset] = useState(false);
  const [filtro, setStatus] = useState({
    status: "All",
    order: "None",
    poketypes: "None"
  });
  const pokemonsPerPage: number = 12;
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const indexLastPokemon: number = currentPage * pokemonsPerPage;
  const indexFirstPokemon: number = indexLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexFirstPokemon, indexLastPokemon);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  },[dispatch]);

  const handleStatus = (e: ChangeEvent<HTMLSelectElement>): void =>{
    setStatus({
      ...filtro,
      [e.target.name]: e.target.value
    });
  };
  const applyFiltro = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(getPokemonFilter(filtro));
    setCurrentPage(1);
  };
  const handleName = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setName(e.target.value);
  }
  const submitSearch = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setReset(true);
    dispatch(searchPokemon(name));
  };

  return (
    <div>
      <Navbar
     classNames={{
      base:[
        "w-full",
        "bg-transparent",
        "border-b-[1px]",
        "border-white",
        "top-0",
        "z-50",
        "shadow"
      ],
      wrapper:[
        "container",
        "min-w-full",
        "px-5",
        "md:px-24",
      ]
     }} 
    >
       <NavbarContent justify="start" className="flex flex-row"> 
        <Input 
          type="text" 
          placeholder="Search pokemon" 
          id="SerchBar" 
          radius="lg"
          autoComplete="off"
          className="w-[128px] font-fantasy" 
          classNames={{
            inputWrapper: [
              "h-10"
            ]}}
          onChange={(e) => handleName(e)}
        />
        {name ? 
          <Button radius="full" variant="faded" size="sm" isIconOnly onClick={(e) => submitSearch(e)} className="font-fantasy">
            <GrSearch size={20}/>
          </Button>
          :
          null
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {reset ?
            <Button as={Link} isIconOnly href="/pokedex" radius="lg" variant="faded" className="font-fantasy">
              <RiArrowGoBackFill size={20}/>
            </Button>
            :
            <Button as={Link} href="/create" radius="lg" variant="faded" className="font-fantasy">
             Create
            </Button>
          }
        </NavbarItem>
      </NavbarContent>
      </Navbar>
      <div className="
        px-5
        w-full
        pt-9 
        space-x-5
        flex justify-center items-center
        md:px-2"
      >
        <Select 
          name="status" 
          id="Pokemons" 
          label="Pokemons" 
          defaultSelectedKeys={["All"]}
          className="w-32 text-black font-fantasy"
          radius="lg"
          size="sm" 
          isDisabled={reset ? true : false}
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
          isDisabled={reset ? true : false}
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
          isDisabled={reset ? true : false}
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
        <Button
          variant="faded"
          radius="lg"
          size="sm"
          isDisabled={reset ? true : false}
          onClick={(e) => applyFiltro(e)}
          className="block font-fantasy text-sm"
        >
          Filter
        </Button>
      </div>
      <div className="
        w-full
        gap-3 
        pt-4
        mt-11
        grid
        grid-cols-1
        justify-items-center
        md:grid-cols-3 md:pt-8 md:mt-16"
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
      <Paginado pokemonsPerPage = {pokemonsPerPage} pokeLength = {pokemons.length} paginado ={setCurrentPage} mypage={currentPage} />
    </div>
  )
};

export default Pokedex;
