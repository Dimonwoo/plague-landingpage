"use client";
import React from "react";
import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";

export default function Header() {
  const { openAboutModal, openArtistModal, openTransModal, openShopModal } =
    useModal();
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 bg-transparent">
      <Image
        src={"/images/logo-02.jpg"}
        alt={"header logo"}
        width={85}
        className="mt-10 rounded-lg"
        height={85}
      />
      <div className="z-10 grid items-center justify-center grid-cols-3 gap-4 text-center md:gap-8 md:grid-cols-6">
        <li
          className="overflow-hidden font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer whitespace-nowrap text-ellipsis hover:text-gray-300"
          onClick={() => openAboutModal()}
        >
          About
        </li>
        <li
          className="overflow-hidden font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer whitespace-nowrap text-ellipsis hover:text-gray-300"
          onClick={() => openArtistModal()}
        >
          The Artist
        </li>
        <li
          className="overflow-hidden font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer whitespace-nowrap text-ellipsis hover:text-gray-300"
          onClick={() => openTransModal()}
        >
          Transparency
        </li>
        <li
          className="overflow-hidden font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer whitespace-nowrap text-ellipsis hover:text-gray-300"
          onClick={() => openShopModal()}
        >
          Shop
        </li>
        <li className="overflow-hidden font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer whitespace-nowrap t text-ellipsis hover:text-gray-300">
          Twitter
        </li>
        <li className="overflow-hidden font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer whitespace-nowrap t text-ellipsis hover:text-gray-300">
          Discord
        </li>
      </div>
    </div>
  );
}
