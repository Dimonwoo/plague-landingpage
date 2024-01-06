"use client";
import { useModal } from "@/contexts/ModalContext";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

export default function AboutModal() {
  const { closeAboutModal, isOpenedAboutModal } = useModal();

  if (!isOpenedAboutModal) return null;

  return (
    <div
      className={`fixed z-[9999] w-full h-full min-h-screen top-0 bottom-0 backdrop-blur-sm bg-black/70 flex items-center justify-center overflow-auto`}
    >
      <div className="flex items-center justify-center bg-black rounded-md p-[32px] h-full md:h-auto pt-[240px] md:pt-4 flex-col gap-[32px] animate__animated animate__fadeInDown animate__faster relative lg:w-[800px] w-[100%] md:w-[500px] min-w-[350px]">
        <div className="cursor-pointer" onClick={closeAboutModal}>
          <MdOutlineClose color="white" size={30} />
        </div>
        <div className="flex flex-col items-center justify-start gap-10 text-left">
          <p className="text-white leading-6 text-[18px] font-normal">
            {`Embark on a captivating journey through time with our history-focused project! Our Discord server is not just a community; it's a fully gamified experience where unlocking exclusive chat rooms requires mastering challenging riddles. Only the most adept doctors will earn the coveted trust of the king, securing their rightful place on the royal throne.`}
          </p>
          <p className="text-white leading-6 text-[18px] font-normal">
            {`As the menacing plague sweeps through, your mission is to unearth the cure and save the kingdom. Triumph over each challenge, and watch as a new role is bestowed upon you. In the end, those who collect all roles will be rewarded with a majestic prize fit for royalty.`}
          </p>
          <p className="text-white leading-6 text-[18px] font-normal">
            {`But the adventure doesn't end online! After Mint, we extend the excitement into the physical realm by producing cuddly toy models of the iconic plague doctors. Additionally, immerse yourself in the world of our project with an engaging in-real-life card game, gripping comic books, and exclusive merchandise.`}
          </p>
        </div>
      </div>
    </div>
  );
}
