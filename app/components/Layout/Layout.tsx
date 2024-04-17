import React, { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
// LKayout trae el header, footer y navbar

interface LayoutProps {
  children: ReactNode
  navbar: true
}

export default function Layout({ children, navbar }: LayoutProps) {
  return (
    <>
      <Header />
      {navbar && <Navbar />} {/* Condicional que muestra la navbar si navbar es verdadero */}
      {children}

      <Footer />
    </>
  );
}
