"use client"
import titulo from "../../public/Pokemon3.webp";
import pokedexImg from "../../public/pokedex-img.webp";
import detail from "../../public/Detail.webp";
import create from "../../public/Create.webp";
import pokebola from "../../public/pokebola.png";
import NextImage  from "next/image";
import { Button, Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

 const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-14">
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
      <NavbarContent justify="start" className="font-fantasy text-white text-2xl flex flex-row"> 
        Pokedex 
        <NextImage
          src={pokebola}
          alt="Not Found"
          width={0}
          height={0}
          priority={true}
          className="w-9 h-9"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <Button as={Link} href="/pokedex" radius="lg" variant="faded" className="font-fantasy">
          Get Started
        </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
      <NextImage
        src={titulo}
        alt="Not Found"
        width={0}
        height={0}
        priority={true}
        className="
        w-[320px] h-[100px]
        md:w-[500px] md:h-[150px]"
      />
      <div className="
        w-full
        space-y-8 px-11
        md:w-3/4 md:px-0"
      >
        <p 
          className="
          font-fantasy
          text-white text-base
          md:text-2xl
          "
          >
            Hello &#128512; !!! welcome to my pokedex app. Here you can search, view the specifications of each existing pokemon and create your own personalized pokemons.
        </p>
        <div 
          className="
          flex flex-col
          justify-center
          space-y-4
          pb-4
          md:flex md:flex-row md:justify-center md:space-x-7 md:space-y-0
          "
        >
          <NextImage
            src={pokedexImg}
            alt="Not Found"
            width={0}
            height={0}
            priority={true}
            className="
            rounded-xl
            md:w-[360px] md:h-64"
          />
          <NextImage
            src={detail}
            alt="Not Found"
            width={0}
            height={0}
            priority={true}
            className="
            rounded-xl 
            md:w-[360px] md:h-64"
          />
          <NextImage
            src={create}
            alt="Not Found"
            width={0}
            height={0}
            priority={true}
            className="
            rounded-xl 
            md:w-[360px] md:h-64"
          />
        </div>
      </div>
    </div>
  )
};

export default Home;