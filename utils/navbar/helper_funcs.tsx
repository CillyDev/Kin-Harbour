import React, { ReactNode } from "react";
import { NavbarMenuItemProps } from "../types/navBarTypes";
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import ListItem from "./ListItem";



const NavbarMenuItem = ({ 
  content,
  tabName,
  icon,
}: NavbarMenuItemProps): ReactNode => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-full w-full rounded-md bg-background hover:bg-[#272727] active:bg-[#272729] px-2">
        <span className="shrink-0 h-full w-fit items-center gap-2 flex whitespace-nowrap " >
          <span className="h-[30px] w-[30px]">
            <Image src={icon} alt="icon" width={30} height={30} />
          </span>
          <span className="text-[14px] w-auto">
            {tabName}
          </span>
        </span>
      </NavigationMenuTrigger>

      <NavigationMenuContent>

        <ul className="grid w-[500px] rounded-md gap-2 p-1 md:w-[300px] md:grid-cols-2 lg:w-[450px] absolute bg-[#222222] text-[#fff8fcdc]">
          {content.map((item) => (
            <ListItem
              imgSrc={item.imgSrc}
              key={item.title}
              title={item.title}
              href={item.href}
            >
              <div className="text-[#fff8fcdc]">
              {item.description}
              </div >
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavbarMenuItem;