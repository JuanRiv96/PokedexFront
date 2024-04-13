"use client"
import { PokemonDetail } from "@/components";
import NextImage from "next/image";
import { getDetail } from "@/actions";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import { NavBar } from "@/components";
import title from "../../../../public/detailTitle.png";

interface DetailParams {
  params: { id: string }
}

const Detail = ({ params }: DetailParams) => {
  const detail = useAppSelector((state) => state?.pokemons.detail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDetail(params.id))
  },[dispatch, params.id]);

  return (
    <div className="w-full flex flex-col items-center">
      <NavBar/>
      <NextImage
        src={title}
        alt="Not Found"
        width={600}
        height={100}
        priority={true}
        className="px-8 pb-3 pt-9 md:px-0"
      />
      <PokemonDetail 
        id={detail?.id} 
        name={detail?.name} 
        img={detail?.img} 
        types={detail?.types.map(t => t + (''))}
        hp={detail?.hp} 
        attack={detail?.attack}
        defense={detail?.defense}
        speed={detail?.speed}
        height={detail?.height}
        weight={detail?.weight}
      />
      <div className="w-[580px] hidden md:block md:flex md:flex-row md:justify-center md:border md:rounded-2xl md:shadow md:shadow-white md:space-x-5">
        <div className='w-72 h-[350px]'>
          <h3 className="font-fantasy text-white text-2xl px-4 pt-2">{`${detail?.name}`}</h3>
          <div className="flex flex-row justify-center items-center h-[250px]">
            {detail.id ? 
              <NextImage 
                src={detail?.img} 
                alt="Not Found" 
                priority={true}
                width={250}
                height={250}
              />
              :
              <Spinner size="lg" color="default"/>
            }
          </div>
          <span className="flex justify-center font-fantasy text-white text-base pt-4">{detail?.types?.join(', ')}</span>
        </div>
      
        <div className="w-72 h-[350px] px-4">
          <h3 className="flex justify-center pt-2 text-white text-2xl font-fantasy">Stats</h3>
          <div className="pt-5">
            <label id="hp" className="font-fantasy text-white text-sm">
              Hp: {detail?.hp}
              <div className="w-full bg-black rounded-full h-2.5" id="hp">
                <div className="bg-white h-2.5 rounded-full" style={{width: `${Number(detail?.hp) > 100 ? "100" : detail.hp}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-3">
            <label id="attack" className="font-fantasy text-white text-sm">
              Attack: {detail?.attack}
              <div className="w-full bg-black rounded-full h-2.5" id="attack">
                <div className="bg-white h-2.5 rounded-full" style={{width: `${Number(detail?.attack) > 100 ? "100" : detail.attack}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-3">
            <label id="defense" className="font-fantasy text-white text-sm">
              Defense: {detail?.defense}
              <div className="w-full bg-black rounded-full h-2.5" id="defense">
                <div className="bg-white h-2.5 rounded-full" style={{width: `${Number(detail?.defense) > 100 ? "100" : detail.defense}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-3">
            <label id="speed" className="font-fantasy text-white text-sm">
              Speed: {detail?.speed}
              <div className="w-full bg-black rounded-full h-2.5" id="speed">
                <div className="bg-white h-2.5 rounded-full" style={{width: `${Number(detail?.speed) > 100 ? "100" : detail.speed}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-3">
            <label id="height" className="font-fantasy text-white text-sm">
              Height: {detail?.height}
              <div className="w-full bg-black rounded-full h-2.5" id="height">
                <div className="bg-white h-2.5 rounded-full" style={{width: `${Number(detail?.height) > 100 ? "100" : detail.height}%`}}/>
              </div>
            </label>
          </div>
          <div className="pt-3">
            <label id="weight" className="font-fantasy text-white text-sm">
              Attack: {detail?.weight}
              <div className="w-full bg-black rounded-full h-2.5" id="weight">
                <div className="bg-white h-2.5 rounded-full" style={{width: `${Number(detail?.weight) > 100 ? "100" : detail.weight}%`}}/>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Detail;