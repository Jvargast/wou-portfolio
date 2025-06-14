"use client";

import { motion } from "framer-motion";
import Footer from "./footer";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import NavbarMobile from "./navbarMobile";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  const activeSection = useActiveSection([
    "inicio",
    "servicios",
    "proyectos",
    "nosotros",
    "contacto",
  ]);

  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-900 via-zinc-950 to-purple-950 text-foreground relative">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[480px] w-[480px] rounded-full bg-violet-500/30 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[380px] w-[380px] rounded-full bg-pink-500/20 blur-[100px]" />
      </div>

      {isMobile ? (
        <NavbarMobile
          links={links}
          activeSection={activeSection}
          isOpen={open}
          onClose={handleToggleMenu}
        />
      ) : (
        <Navbar links={links} activeSection={activeSection} />
      )}

      <motion.main
        className="flex-1 container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
