'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import TAGS from './GlobalVar'
import Link from 'next/link'
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"

export default function FooterNavBtn() {

    const pathname = usePathname()
    const slug = pathname.substring(6);
 
    const currentIndex = TAGS.findIndex((tag) => tag.url === slug);

    const leftIndex = (currentIndex - 1 + TAGS.length) % TAGS.length;
    const rightIndex = (currentIndex + 1) % TAGS.length;
  
    const leftBtn = TAGS[leftIndex]?.title || 'No Tag';
    const rightBtn = TAGS[rightIndex]?.title || 'No Tag';

    const leftUrl = TAGS[leftIndex]?.url || '#';
    const rightUrl = TAGS[rightIndex]?.url || '#';

  return (
    <div className="mt-10 flex justify-between border-b pb-5">
        <Link className="footer-nav-btn flex" href={leftUrl}>
            <AiOutlineLeft className="m-1"/>{leftBtn}
        </Link>
        <Link className="footer-nav-btn flex" href={rightUrl}>
        {rightBtn}<AiOutlineRight className="m-1"/></Link>
    </div>
  )
}
