"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "./ui/separator";
import Link from "next/link";


export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" className="border-r-[#373B3F]">
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-sidebar hover:bg-[#3f3f46] hover:text-[#ffffff] rounded-md text-default-text flex items-center justify-start font-medium text-[14px] gap-x-3">
              <Image src="/images/raven.png" alt="AccountInfo" width={20} height={20} />
              Cillian
              <ChevronDown className="ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel> My Account  </DropdownMenuLabel>
            <DropdownMenuItem className="hover:text-[#ffffff] text-default-text" variant="default">
              Preferences
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:text-[#ffffff] focus:text-[#ffffff] text-default-text">
              Invite members
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <Button asChild className="bg-sidebar hover:bg-[#3f3f46] hover:text-[#ffffff] rounded-md text-default-text font-medium text-[14px] w-full justify-start gap-x-3">
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <Image src="/images/business-report_6439018.png" alt="homeIcon" width={20} height={20} />
          Overview
          </Link>
        </Button>
        <Button className=" bg-sidebar hover:bg-[#3f3f46] hover:text-[#ffffff] rounded-md text-default-text flex items-center justify-start gap-x-3 font-medium text-[14px]">
          <Image src="/images/spotlight_8560250.png" alt="showHighlights" width={20} height={20} />
          Highlights
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Button className="bg-sidebar hover:bg-[#3f3f46] hover:text-[#ffffff] rounded-md text-default-text font-medium text-[14px] w-full justify-start gap-x-3">
            <Image src="/images/vinyl-record_2987300.png" alt="homeIcon" width={20} height={20} />
            Music Lounge
          </Button>
        </SidebarGroup>
        <span className="flex">
          <span className="w-65 px-2.5">
            <Separator className="bg-[#373B3F]"></Separator>
          </span>
        </span>
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter>
        <ThemeToggle></ThemeToggle>
      </SidebarFooter>
    </Sidebar >
  )
}