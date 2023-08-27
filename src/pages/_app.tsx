import Navbar from "@/components/Nav/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <main className={`${font.className} mt-[19rem]`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
