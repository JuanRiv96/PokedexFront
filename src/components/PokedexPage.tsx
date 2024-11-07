"use client"
import { useState } from 'react';
import { PokedexGrid, Filter, Paginado }  from '@/components';
import { PokedexProps } from '@/interfaces';

export const PokedexPage = ({ pokemons }: PokedexProps) => {
  const [pokeList, setPokeList] = useState(pokemons);
  const pokemonsPerPage: number = 12;
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const indexLastPokemon: number = currentPage * pokemonsPerPage;
  const indexFirstPokemon: number = indexLastPokemon - pokemonsPerPage;
  const currentPokemons = pokeList?.slice(indexFirstPokemon, indexLastPokemon);

  return (
    <div>

      <Filter list = { pokemons } setList = {setPokeList} setPages = {setCurrentPage}/>

      <PokedexGrid pokemons = {currentPokemons}/>

      <Paginado pokemonsPerPage = {pokemonsPerPage} pokeLength = {pokemons?.length ? pokemons?.length : 1} paginado ={setCurrentPage} mypage={currentPage} />

    </div>
  )
};

