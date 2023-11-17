
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ForexPairInsight",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      
      <body className={`${inter.className} `}>
        <Navbar />
        <div className=" flex max-w-[1440px] mx-auto">
          <div className="">
            <Sidenav/>
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
