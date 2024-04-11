"use client"
import { Navbar, NavbarContent, NavbarItem, Link, Input, Button } from "@nextui-org/react";
import { RiArrowGoBackFill } from "react-icons/ri";

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
        "md:px-24",
      ]
     }} 
    >
      <NavbarContent justify="start" className="flex flex-row"> 
       <Button as={Link} isIconOnly href="/pokedex" radius="lg" variant="faded" className="font-fantasy">
          <RiArrowGoBackFill size={20}/>
        </Button>
      </NavbarContent>
    </Navbar>
  );
};