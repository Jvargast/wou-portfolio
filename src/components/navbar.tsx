"use client";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  links: { href: string; label: string }[];
  activeSection: string;
}

export default function Navbar({ links, activeSection }: NavbarProps) {
  return (
    <div className="border-b shadow-lg bg-background/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="#inicio"
          className="flex items-center gap-3"
          title="Wou Chile - Inicio"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/new-logo.png"
              alt="Logo Wou Chile"
              fill
              priority
              sizes="48px"
              className="object-contain drop-shadow-md"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            Wou<span className="text-primary">Chile</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 relative">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`
                relative text-sm font-medium px-3 py-1 rounded-full transition-all duration-200
                ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-primary text-white scale-105 shadow-md"
                    : "text-foreground hover:text-primary"
                }
              `}
            >
              {link.label}
              <span
                className={`
                absolute left-0 -bottom-1 w-full h-0.5 rounded-full transition-all duration-200
                ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-primary scale-x-100"
                    : "bg-transparent scale-x-0"
                }
              `}
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
