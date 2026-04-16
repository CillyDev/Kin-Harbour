"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { Label } from "./ui/label";
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { link } from "fs";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className=" bg-sidebar hover:bg-[#3f3f46] hover:text-hovered-text rounded-md text-default-text flex items-center justify-start font-bold">
              <Image src="/images/people_8365036.png" alt="AccountInfo" width={16} height={16} className="mb-0.5" />
              SunRaven
              <ChevronDown className="ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-default-text hover:text-hovered-text">
            <DropdownMenuLabel> My Account  </DropdownMenuLabel>
            <DropdownMenuItem>
              Preferences
            </DropdownMenuItem>
            <DropdownMenuItem>
              Invite members
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="secondary" asChild className="bg-sidebar hover:bg-[#3f3f46] hover:text-hovered-text rounded-md text-default-text font-medium w-full justify-start">
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Image src="/images/search-file.png" alt="homeIcon" width={16} height={16} className="mb-0.5" />
            Overview
          </Link>
        </Button>
        <Button className=" bg-sidebar hover:bg-[#3f3f46] hover:text-hovered-text rounded-md text-default-text flex items-center justify-start font-medium">
          <Image src="/images/spotlight-svgrepo-com.svg" alt="showHighlights" width={16} height={16} />
          Highlights
        </Button>

      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar >
  )
}