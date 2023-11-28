import React from 'react'
import { usePathname } from "next/navigation";
import Head from 'next/head';


export default function TitleName() {

    const pathname = usePathname();
    const slug = pathname.substring(6);

    const defaultTitle = 'ForexPairInsight'
  return (
    <>
    <Head>
        <title>
            ForexPairInsight -{" "}{slug || defaultTitle }
        </title>
    </Head>
    </>
  )
}
