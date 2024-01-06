"use client";
import AboutModal from "@/components/Modals/AboutModal";
import ArtistModal from "@/components/Modals/ArtistModal";
import ShopModal from "@/components/Modals/ShopModal";
import TransModal from "@/components/Modals/TransModal";
import { useModal } from "@/contexts/ModalContext";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  const { openAboutModal } = useModal();
  return (
    <MainLayout>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center md:top-0 top-[100px]">
        <div
          className="w-[350px] h-[350px] z-1 cursor-pointer"
          onClick={openAboutModal}
        />
      </div>
      <AboutModal />
      <ArtistModal />
      <TransModal />
      <ShopModal />
    </MainLayout>
  );
}
