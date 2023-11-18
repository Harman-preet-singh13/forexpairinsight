import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Sidenav from "@/components/Sidenav";
import Navbar from "@/components/Navbar";
import type { AppProps } from 'next/app'


const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ForexPairInsight",
};

export default function RootLayout({Component, pageProps}: AppProps)
{

  return (
    
      <div className={`${inter.className} `}>
        <Navbar />
        <div className=" flex max-w-[1440px] mx-auto">
          <div className="">
            <Sidenav/>
          </div>
          <div>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
   
  );
}
