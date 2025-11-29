import { MainNavigation } from "../components/MainNavigation";
import SearchBar from "../components/SearchBar";
import "../styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="grid w-full h-full grid-rows-[repeat(auto-fill,10px)] grid-cols-[repeat(auto-fill,10px)] overflow-x-hidden">
      <div className="grid row-start-[1] row-end-[8] col-start-[1] col-end-[80] p-2">
        <MainNavigation />
      </div>
      <div className="grid h-full w-full row-start-[1] row-end-[8] col-start-[80] col-end-[120] p-2">
        <SearchBar />
      </div>
      <div className="w-full h-full grid row-start-[8] row-end-[-1] col-start-[-1] col-end-[1]">
        <Component {...pageProps} />
      </div>
    </main>
  );
}