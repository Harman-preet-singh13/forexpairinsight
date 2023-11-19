import React from 'react'
import { usePathname } from "next/navigation";
import Head from 'next/head';


export default function TitleName() {

    const pathname = usePathname();

    const slug = pathname.substring(6);


  return (
    <>
    <Head>
        <title>
            ForexPairInsight -{" "}{slug}
        </title>
    </Head>
    </>
  )
}
