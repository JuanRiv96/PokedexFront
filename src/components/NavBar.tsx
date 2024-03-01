import { Navbar, NavbarContent, NavbarItem, Link, Input } from "@nextui-org/react";
import { GrSearch } from "react-icons/gr";
import NextImage from "next/image";
import pokebola from "../../public/pokebola.png";

export const NavBar = () => {
 
  return (
    
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
        "md:px-24"
      ]
     }} 
    >
       <NavbarContent justify="start"> 
        <span className="text-pretty text-white text-lg md:text-xl">Pokedex</span>
        <NextImage
          className="w-8 h-8 md:w-12 md:h-12"
          width={0}
          height={0}
          alt="Not Found" 
          src={pokebola} 
          priority={true}
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Input type="text" placeholder="Search pokemon" id="SerchBar" radius="lg" className="w-32 md:w-40"/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};