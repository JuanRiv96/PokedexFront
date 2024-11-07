"use client"
import NextImage  from "next/image";
import { usePathname } from "next/navigation";
import { Button, Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { RiArrowGoBackFill } from "react-icons/ri";
import pokebola from "../../public/pokebola.png";

export const NavBar = () => {

  const path =  usePathname();
  
  return (
    <Navbar
     classNames={{
      base:[
        "w-full",
        "max-h-14",
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
      { path === "/pokedex" ?
        <>
          <NavbarContent justify="start" className="flex flex-row"> 
              <Button radius="lg" variant="faded" size="sm" as={Link} href="/pokedex/searcher" className="font-fantasy text-base md:text-lg">
                Searcher
              </Button>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} href="/pokedex/create" size="sm" radius="lg" variant="faded" className="font-fantasy text-base md:text-lg">
                Create
              </Button>
            </NavbarItem>
          </NavbarContent>
        </>
        : path === "/" ?
        <>
           <NavbarContent justify="start" className="font-fantasy text-white text-2xl flex flex-row"> 
                Pokedex 
                <NextImage
                    src={pokebola}
                    alt="Not Found"
                    width={0}
                    height={0}
                    className="w-9 h-9"
                />
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} href="/pokedex" size = "sm" radius="lg" variant="faded" className="font-fantasy text-base md:text-lg">
                        Get Started
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </>
        :
        <NavbarContent justify="start" className="flex flex-row">
          <Button as={Link} isIconOnly href="/pokedex" size = "sm" radius="full" variant="faded" className="font-fantasy">
            <RiArrowGoBackFill size={20}/>
          </Button>
        </NavbarContent>
      } 
    </Navbar>
  );
};