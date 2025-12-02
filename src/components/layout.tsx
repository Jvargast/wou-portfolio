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
    <div className="min-h-screen flex flex-col text-foreground relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-slate-950"
          style={{
            backgroundImage: `
              radial-gradient(circle at top center, rgba(56,189,248,0.22), transparent 60%),
              radial-gradient(circle at center, rgba(16,185,129,0.16), transparent 55%),
              radial-gradient(circle at bottom center, rgba(56,189,248,0.18), transparent 60%),
              linear-gradient(to bottom, #020617, #020617)
            `,
            backgroundBlendMode: "screen",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(148,163,184,0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148,163,184,0.22) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
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
        className="flex-1 w-full"
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
