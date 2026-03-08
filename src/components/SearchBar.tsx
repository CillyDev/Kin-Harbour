import Image from "next/image";
import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <div className="flex w-full h-full gap-x-2 items-center pt 1px">
      <span className="absolute h-[35px] w-[35px] pl-[10px] pt-[8px]">
        <Image src="/images/search.png" alt="icon" width={22} height={22} />
      </span>
      <span className="h-auto w-full">
        <Input
          type="search"
          className="pl-11 pb-1.75 rounded-full border-[#6906d3ab] pt-[4px] placeholder:text-[#edededc0]"
          placeholder="Looking for something? .. "
        ></Input>
      </span>
    </div>
  );
}