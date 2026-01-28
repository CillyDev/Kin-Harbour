import { MainNavigation } from "../components/MainNavigation";
import SearchBar from "../components/SearchBar";
import "../styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="grid w-full h-full grid-cols-24 grid-rows-24">
      <div className="grid row-start-1 row-end-3 col-start-1 col-end-16 p-2 justify-center">
        <MainNavigation />
      </div>
      <div className="grid h-full w-full row-start-1 row-end-3 col-start-16 col-end-22 p-2">
        <SearchBar />
      </div>
      <div className="w-full h-full grid row-start-[8] row-end-[-1] col-start-[-1] col-end-[1]">
        <Component {...pageProps} />
      </div>
    </main>
  );
}