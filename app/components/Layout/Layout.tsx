import React, { ReactNode } from "react";
import Header from "./Header";
import Navbar_m from "./Navbar_mentor";
import Navbar_s from "./Navbar_student";
import Navbar_admin from "./Navbar_admin"; // Importa la navbar para el administrador
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  navbar: boolean;
  userType: 'mentor' | 'student' | 'none' | 'admin';
}

export default function Layout({ children, navbar, userType }: LayoutProps) {
  return (
    <>
      <Header />
      {navbar && userType !== 'none' && (
        userType === 'mentor' ? (
          <Navbar_m />
        ) : userType === 'student' ? (
          <Navbar_s />
        ) : (
          <Navbar_admin />
        )
      )}
      {children}
      <Footer />
    </>
  );
}
