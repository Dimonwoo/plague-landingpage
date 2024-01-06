"use client";
import { useModal } from "@/contexts/ModalContext";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

export default function ArtistModal() {
  const { closeArtistModal, isOpenedArtistModal } = useModal();

  if (!isOpenedArtistModal) return null;

  return (
    <div
      className={`fixed z-[9999] w-full h-full min-h-screen top-0 bottom-0 backdrop-blur-sm bg-black/70 flex items-center justify-center overflow-auto`}
    >
      <div className="flex items-center justify-center bg-black rounded-md p-[32px] h-full md:h-auto pt-[70px] md:pt-4 flex-col gap-[32px] animate__animated animate__fadeInDown animate__faster relative lg:w-[800px] w-[100%] md:w-[500px] min-w-[350px]">
        <div className="cursor-pointer" onClick={closeArtistModal}>
          <MdOutlineClose color="white" size={30} />
        </div>
        <div className="flex flex-col items-center justify-start gap-10 text-left">
          <p className="text-white leading-6 text-[18px] font-normal">
            {`Atlan Coelho is a Brazilian artist, 36 years old, studied visual arts, has had more than 60k NFTs minted in 2023, among them major projects such as Dalmatians, Infected Dalmatians, Dead Birds, Krakens, FOXatar by ShapeShift. Inspired by "Where's Wally", Atlan Coelho often creates detailed worlds with unexpected narratives in his work.`}
          </p>
          <p className="text-white leading-6 text-[18px] font-normal">
            {`When he was little, he would spend hours looking for and observing different narratives and today he reproduces them daily in his work.`}
          </p>
          <p className="text-white leading-6 text-[18px] font-normal">
            {`Today, his work has earned him a place on Web3, participating in guilds and communities to which he contributes daily, such as ShapeShift and Boxbies Labs.`}
          </p>
        </div>
      </div>
    </div>
  );
}
