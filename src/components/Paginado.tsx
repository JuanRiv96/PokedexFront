"use client"
import { useState, useEffect, FC } from "react";
import {Pagination } from "@nextui-org/react";
import {PagiProps} from "@/interfaces";

export const Paginado: FC<PagiProps> = ({ pokemonsPerPage, pokeLength, paginado, mypage }) => {

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
      page={mypage}
      onChange={paginado}
      variant="flat"
      color="primary"
      className="
          pt-6 font-fantasy
          flex justify-center
          container mx-auto
          md:pt-2 md:mt-6"
    />
  )
}
