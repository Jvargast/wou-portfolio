"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavbarMobileProps {
  links: { href: string; label: string }[];
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function NavbarMobile({
  links,
  activeSection,
  isOpen,
  onClose,
}: NavbarMobileProps) {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 bg-background/90 shadow-lg">
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/wou-logotipo.png"
              alt="Logo Wou Chile"
              fill
              className="object-contain drop-shadow-md"
              loading="lazy"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">
            Wou<span className="text-primary">Chile</span>
          </span>
        </Link>

        <button
          onClick={onClose}
          className="md:hidden p-2 rounded-lg z-10"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <nav
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-black bg-opacity-80 text-white md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={onClose}
            className={`text-2xl font-extrabold px-6 py-4 rounded-full transition-all ${
              activeSection === l.href.slice(1)
                ? "bg-white text-black" // Fondo blanco y texto negro cuando está activo
                : "bg-transparent text-white" // Fondo transparente y texto blanco cuando está inactivo
            }`}
          >
            {l.label}
          </Link>
        ))}

        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2"
          aria-label="Cerrar menú"
        >
          <X className="w-8 h-8" />
        </button>
      </nav>
    </div>
  );
}
