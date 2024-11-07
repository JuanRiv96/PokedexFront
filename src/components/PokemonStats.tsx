"use client"
import NextImage from "next/image";
import { Spinner } from "@nextui-org/react";
import { StatsProps } from "@/interfaces";

export const PokemonStats =  ({ id, name, img, types, hp, attack, defense, speed, height, weight }: StatsProps) => {
  return (
    <div className="
      w-80
      block 
      flex flex-col justify-center items-center
      space-y-2
      md:w-[590px] md:flex-row md:border md:rounded-2xl md:shadow md:shadow-white md:space-x-5 md:space-y-0"
    >
        <div className="w-72 md:h-[350px]">
          <h3 className="font-fantasy text-white text-xl md:text-2xl md:px-4 md:pt-2">{`${ name }`}</h3>
          <div className="relative flex flex-row justify-center items-center h-[150px] md:h-[250px]">
            {id ? 
              <NextImage
                src={ img ? img : "Not Found" } 
                alt="Not Found" 
                fill = {true}
              />
              :
              <Spinner size="lg" color="default"/>
            }
          </div>
          <span className="flex justify-center font-fantasy text-white text-base md:pt-4">{ types?.join(', ')}</span>
        </div>
      
        <div className="
          border border-white rounded-xl
          p-2
          w-72 
          md:h-[350px] md:p-0 md:border-none"
        >
          <h3 className="flex justify-center text-xl text-white font-fantasy md:pt-2 md:text-2xl ">Stats</h3>
          <div className="md:pt-4 md:px-3">
            <label id="hp" className="font-fantasy text-white text-sm">
              Hp: { hp } pts
              <div className="w-full h-1.5 bg-black rounded-full md:h-2.5" id="hp">
                <div className="h-1.5 bg-white rounded-full md:h-2.5" style={{width: `${Number(hp) > 100 ? "100" : hp}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-1 md:pt-3 md:px-3">
            <label id="attack" className="font-fantasy text-white text-sm">
              Attack: { attack } pts
              <div className="w-full h-1.5 bg-black rounded-full md:h-2.5" id="attack">
                <div className="h-1.5 bg-white rounded-full md:h-2.5" style={{width: `${Number(attack) > 100 ? "100" : attack}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-1 md:pt-3 md:px-3">
            <label id="defense" className="font-fantasy text-white text-sm">
              Defense: { defense } pts
              <div className="w-full h-1.5 bg-black rounded-full md:h-2.5" id="defense">
                <div className="h-1.5 bg-white rounded-full md:h-2.5" style={{width: `${Number(defense) > 100 ? "100" : defense}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-1 md:pt-3 md:px-3">
            <label id="speed" className="font-fantasy text-white text-sm">
              Speed: { speed } pts
              <div className="w-full h-1.5 bg-black rounded-full md:h-2.5" id="speed">
                <div className="h-1.5 bg-white rounded-full md:h-2.5" style={{width: `${Number(speed) > 100 ? "100" : speed}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-1 md:pt-3 md:px-3">
            <label id="height" className="font-fantasy text-white text-sm">
              Height: { height } pts
              <div className="w-full h-1.5 bg-black rounded-full md:h-2.5" id="height">
                <div className="h-1.5 bg-white rounded-full md:h-2.5" style={{width: `${Number(height) > 100 ? "100" : height}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-1 md:pt-3 md:px-3">
            <label id="weight" className="font-fantasy text-white text-sm">
              Attack: { weight } pts
              <div className="w-full h-1.5 bg-black rounded-full md:h-2.5" id="weight">
                <div className="h-1.5 bg-white rounded-full md:h-2.5" style={{width: `${Number(weight) > 100 ? "100" : weight}%`}}/>
              </div>
            </label>
          </div>
        </div>
    </div>
  )
}
