"use client";
import { useModal } from "@/contexts/ModalContext";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

export default function ShopModal() {
  const { closeShopModal, isOpenedShopModal } = useModal();

  if (!isOpenedShopModal) return null;

  return (
    <div
      className={`fixed z-[9999] w-full h-full min-h-screen top-0 bottom-0 backdrop-blur-sm bg-black/70 flex items-center justify-center overflow-auto`}
    >
      <div className="flex items-center justify-center bg-black rounded-md p-[32px] h-full md:h-auto pt-[40px] md:pt-4 flex-col gap-[32px] animate__animated animate__fadeInDown animate__faster relative lg:w-[800px] w-[100%] md:w-[500px] min-w-[350px]">
        <div className="cursor-pointer" onClick={closeShopModal}>
          <MdOutlineClose color="white" size={30} />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 text-left">
          <p className="text-white leading-6 text-[18px] font-bold uppercase">
            {`Coming soon ...`}
          </p>
        </div>
      </div>
    </div>
  );
}
