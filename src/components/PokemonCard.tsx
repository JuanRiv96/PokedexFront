"use client"
import { FC } from 'react';
import {Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { PokeCard } from '@/interfaces';

export const PokemonCard: FC<PokeCard> = ({ id, name, types, attack, img }) => {
  return (
      <Card className="relative border-1 border-white bg-transparent w-56 py-2 h-40">
        <CardHeader className="pb-0 pt-1 px-4 flex-col items-start">
          <h3 className="text-white font-fantasy font-bold text-lg">{ name }</h3>
          <small className="text-xs text-white font-fantasy font-bold">{`Types: ${types?.join(',')}`}</small>
          <small className="text-xs text-white font-fantasy font-bold">{`Attack: ${ attack } pts`}</small>
        </CardHeader>
        <CardBody className="absolute top-10 left-28  ">
          <Link href= {`/pokedex/detail/${id}`} isBlock className="w-[85px] h-[85px] rounded-lg hover:bg-white/30 bg-opacity-20 backdrop-blur-lg border-opacity-10" color="foreground">
            <NextImage
              width={0}
              height={0}
              className="w-[85px] h-[85px]"
              alt="Not Found"
              src={ img }
              priority={true}
            />
          </Link>
        </CardBody>
    </Card>
  );
};