"use client"
import React from 'react'
import useWindowWidth from "../customHook/useWindowWidth"
import TagMenu from './TagMenu';


export default function Sidenav() {

    const screenSize = useWindowWidth() >= 1023;

  return (
    <aside className={`${screenSize ? 'block':'hidden'} sticky top-[65px]`}>
        <div className="w-[270px] aside-container">
            <TagMenu />
        </div>
    </aside>
  )
}
