
import { ListProps } from "../types/navBarTypes";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import React from "react";


{
  /*This is to edit the menu items individually*/
}
const ListItem = React.forwardRef<React.ElementRef<"a">, ListProps>(
  ({ imgSrc, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className="block select-none space-y- rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#4d4d4d]"
            {...props}
          >
            <div className="flex flex-col text-sm font-mono leading-none pb-[10px]">
              <span className="flex gap-x-1 items-center">
                {/*Menu Item -> Icon*/}
                <span className="relative h-[35px] w-[35px]">
                  <Image src={imgSrc} alt="icon" width={35} height={35} />
                </span>
                <span className="text-[14px]">{title}</span>
              </span>
            </div>
            {/*The menu item texts/ button / children elements*/}
            <p className="line-clamp-2 text-sm leading-snug text-[#bbbbbb] font-mono text-[13px]">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;