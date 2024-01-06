"use client";
import { useLockedBody } from "@/hooks/use-locked-body";
// import { getProfile } from "@/actions";
import { createContext, useContext, ReactNode, useState } from "react";

interface ModalContextType {
  openAboutModal: () => void;
  closeAboutModal: () => void;
  isOpenedAboutModal: boolean;

  openArtistModal: () => void;
  closeArtistModal: () => void;
  isOpenedArtistModal: boolean;

  openTransModal: () => void;
  closeTransModal: () => void;
  isOpenedTransModal: boolean;

  openShopModal: () => void;
  closeShopModal: () => void;
  isOpenedShopModal: boolean;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const { setLocked } = useLockedBody();
  const [isOpenedAboutModal, setAboutModal] = useState<boolean>(false);

  const openAboutModal = () => {
    setLocked(true);
    setAboutModal(true);
    document.body.classList.add("modal-open");
  };

  const closeAboutModal = () => {
    setLocked(false);
    setAboutModal(false);
    document.body.classList.remove("modal-open");
  };

  const [isOpenedArtistModal, setArtistModal] = useState<boolean>(false);

  const openArtistModal = () => {
    setLocked(true);
    setArtistModal(true);
    document.body.classList.add("modal-open");
  };

  const closeArtistModal = () => {
    setLocked(false);
    setArtistModal(false);
    document.body.classList.remove("modal-open");
  };

  const [isOpenedTransModal, setTransModal] = useState<boolean>(false);

  const openTransModal = () => {
    setLocked(true);
    setTransModal(true);
    document.body.classList.add("modal-open");
  };

  const closeTransModal = () => {
    setLocked(false);
    setTransModal(false);
    document.body.classList.remove("modal-open");
  };

  const [isOpenedShopModal, setShopModal] = useState<boolean>(false);

  const openShopModal = () => {
    setLocked(true);
    setShopModal(true);
    document.body.classList.add("modal-open");
  };

  const closeShopModal = () => {
    setLocked(false);
    setShopModal(false);
    document.body.classList.remove("modal-open");
  };

  const modalContextValue: ModalContextType = {
    openAboutModal,
    closeAboutModal,
    isOpenedAboutModal,

    openArtistModal,
    closeArtistModal,
    isOpenedArtistModal,

    openTransModal,
    closeTransModal,
    isOpenedTransModal,

    openShopModal,
    closeShopModal,
    isOpenedShopModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}
