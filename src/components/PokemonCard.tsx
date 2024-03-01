"use client"
import {Card, CardHeader, CardBody, Link } from "@nextui-org/react";
// import Link from "next/link";
import NextImage from "next/image";
import { FC } from 'react';
import { PokeCard } from '@/interfaces';

export const PokemonCard: FC<PokeCard> = ({ id, name, types, attack, img }) => {
  return (
      <Card className="relative border-2 border-white bg-transparent w-64 py-4 h-44">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="text-white text-pretty font-bold text-lg">{ name }</h3>
          <small className="text-xxs text-white text-pretty font-bold">{`Types: ${types?.join(',')}`}</small>
          <small className="text-xxs text-white text-pretty font-bold">{`Attack: ${ attack } pts`}</small>
        </CardHeader>
        <CardBody className="absolute top-8 left-24 py-2 ">
          <Link href= {`/detail/${id}`} isBlock className="w-28 h-28" color="foreground">
            <NextImage
              width={0}
              height={0}
              className="w-28 h-28"
              alt="Not Found"
              src={ img }
              priority={true}
            />
          </Link>
        </CardBody>
    </Card>
  );
};