/* eslint-disable @next/next/no-img-element */
import { FC, ReactNode } from "react";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import "animate.css";

interface Props {
  meta?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const MainLayout: FC<Props> = ({ children, className }) => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className={` ${className ? className : ""}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
