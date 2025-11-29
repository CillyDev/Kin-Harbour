import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import NavbarMenuItem from "../utils/navbar/helper_funcs";
import { CookContent, crochetContent, gameCornerContent, LoveContent, musicContent } from "../utils/navbar/Content";


export function MainNavigation() {
  return (
      <NavigationMenu className="flex w-full h-full relative">
        <NavigationMenuList className="flex w-full h-full gap-x-2">
          <NavbarMenuItem
            content={musicContent}
            icon="/images/record.png"
            tabName="Music Lounge"
          />

          <NavbarMenuItem
            content={crochetContent}
            icon="/images/knitting.png"
            tabName="Crochet Soulmates"
          />

          <NavbarMenuItem
            content={gameCornerContent}
            icon="/images/swordsman.png"
            tabName="Game Bunker"
          />

          <NavbarMenuItem
            content={CookContent}
            icon="/images/vegetarian.png"
            tabName="The Food Blog"
          />
           <NavbarMenuItem
            content={LoveContent}
            icon="/images/love-story.png"
            tabName="Our Love Story"
          />
        </NavigationMenuList>
      </NavigationMenu>

  );
}