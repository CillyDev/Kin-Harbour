import Image from "next/image";
import ShadcnInput from "../shadcn-manual-comp/ShadInput";


export default function SearchBar() {
  return (
    <div className="flex w-full h-full flex-row gap-x-2 items-center mt-1">
      <span className="absolute h-[35px] w-[35px] pl-[8px] pt-[7px]">
        <Image src="/images/search.png" alt="icon" width={22} height={22} />
      </span>
      <span className="h-auto w-full">
        <ShadcnInput
          type="search"
          className="pl-11 pb-1.75 rounded-full border-[#6906d3ab]"
          placeholder="Looking for something? .. "
        ></ShadcnInput>
      </span>
    </div>
  );
}