"use client"
import { useState, useEffect, FC } from "react";
import {Pagination} from "@nextui-org/react";
import {PagiProps} from "@/interfaces";

export const Paginado: FC<PagiProps> = ({ pokemonsPerPage, pokeLength, paginado, page }) => {

    const [pageNumbers, setPageNumbers] = useState<number[]>([]);
    useEffect(() => {
        const page_num = [];
        for(let i = 1; i <= Math.ceil(pokeLength/pokemonsPerPage); i++){  // Math.cail(40/12) = Math.ceil(3.33333) = 4
            page_num.push(i); // [1, 2, 3, 4]
        }
        setPageNumbers(page_num); // Seteo mi estado 
    },[pokeLength, pokemonsPerPage]);

  return (
    <Pagination
        total={pageNumbers.length}
        page={page}
        onChange={paginado}
        variant="bordered"
        color="primary"
        className="
            pt-7 font-fantasy
            flex justify-center
            container mx-auto
            md:pt-6 md:mt-6"
    />
  )
}
