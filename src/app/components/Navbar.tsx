"use client";
import React, { useState } from "react";
import SideNavModal from "./SideNavModal";
import useWindowWidth from "../customHook/useWindowWidth";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import TagMenu from "./TagMenu";
import logo from "../../../public/images/logo.png"


export default function Navbar() {
  const screenSize = useWindowWidth() >= 1023;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className=" navbar-container border-b border-zinc-400 sticky top-0">
      <div className="flex flex-col max-w-[1440px] mx-auto">
        <ul className="navbar-top-section flex justify-center">
          <li className=" self-end">
            <Link 
            href="/"
            className="flex"
            >
              <img src={logo.src}
              className="w-12"
              alt="logo"
              />
              <span className="mt-1 text-[26px] font-bold">ForexPairInsight</span>
            </Link>
          </li>
        </ul>

        <div className={`${screenSize ? "hidden" : "block"} mb-2 `}>
          <div className="border-t border-zinc-400">
            <button className="hover-icon icon-btn" onClick={openModal}>
              <AiOutlineMenu />
            </button>
          </div>

          <SideNavModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Sidenav Modal"
          >
            <button className="hover-icon icon-btn" onClick={closeModal}>
              <AiOutlineClose />
            </button>
            <TagMenu closeModal={closeModal} />
          </SideNavModal>
        </div>
      </div>
    </nav>
  );
}
