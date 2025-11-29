export enum Orienation {
  horizontal = "horizontal",
  vertical = "vertical"
}


export type NavSubContent = {
  title: string;
  href: string;
  description: string;
  imgSrc: string;
};

export type ListProps = React.ComponentPropsWithoutRef<"a"> & {
  imgSrc: string;
};

export type NavbarMenuItemProps = {
  content: NavSubContent[];
  tabName: string;
  icon: string;
};

export type NavProps = {
  className?: string;
  navbarSize?:string;
  navbarItemOrientation?: string;

};

export type NavAreaScroll ={
  className? :string;
  orientation?: Orienation;
}
