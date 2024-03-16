import  NextImage from "next/image";
import { FC } from "react";
import { Pokemons } from "@/interfaces";

export const PokemonDetail: FC<Pokemons> = ( { id, name, img, types, hp, attack, defense, speed, height, weight } ) => {

  return (
    
      <div  className="w-[380px] h-auto block flex flex-col md:hidden">
        <h3 className="text-white text-pretty font-semibold text-base pt-2 px-4">{`${name}`}</h3>
        <small className="text-xxs text-pretty text-white px-4">Types: {types?.join(', ')}</small>
        <div className="flex justify-center">
          <NextImage 
            src={img}
            alt=""
            width={100}
            height={100}
            priority={true}
            className="w-1/2"
          />
      </div>
      <div className="px-4">
        <div className="pt-0.5">
          <label id="hp" className="text-pretty text-white text-xs">
            Hp: {hp}
            <div className="w-full bg-black rounded-full h-2" id="hp">
              <div className="bg-white h-2 rounded-full" style={{width: `${Number(hp) > 100 ? "100" : hp}%`}}/>
            </div>
          </label>
        </div>
        <div className="pt-0.5">
          <label id="attack" className="text-pretty text-white text-xs">
           Attack: {attack}
          <div className="w-full bg-black rounded-full h-2" id="attack">
            <div className="bg-white h-2 rounded-full" style={{width: `${Number(attack) > 100 ? "100" : attack}%`}}/>
          </div>
          </label>
        </div>
        <div className="pt-0.5">
          <label id="defense" className="text-pretty text-white text-xs">
            Defense: {defense}
            <div className="w-full bg-black rounded-full h-2" id="defense">
              <div className="bg-white h-2 rounded-full" style={{width: `${Number(defense) > 100 ? "100" : defense}%`}}/>
            </div>
          </label>
        </div>
        <div className="pt-0.5">
          <label id="speed" className="text-pretty text-white text-xs">
            Speed: {speed}
            <div className="w-full bg-black rounded-full h-2" id="speed">
              <div className="bg-white h-2 rounded-full" style={{width: `${Number(speed) > 100 ? "100" : speed}%`}}/>
            </div>
          </label>
        </div>
        <div className="pt-0.5">
          <label id="height" className="text-pretty text-white text-xs">
            Height: {height}
            <div className="w-full bg-black rounded-full h-2" id="height">
              <div className="bg-white h-2 rounded-full" style={{width: `${Number(height) > 100 ? "100" : height}%`}}/>
            </div>
          </label>
        </div>
        <div className="pt-0.5">
          <label id="weight" className="text-pretty text-white text-xs">
            Attack: {weight}
            <div className="w-full bg-black rounded-full h-2" id="weight">
              <div className="bg-white h-2 rounded-full" style={{width: `${Number(weight) > 100 ? "100" : weight}%`}}/>
            </div>
          </label>
        </div>
      </div>
    </div>
    
  )
};