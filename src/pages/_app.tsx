import Navbar from "@/components/Nav/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${font.className}`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
