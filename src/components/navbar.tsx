"use client";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  links: { href: string; label: string }[];
  activeSection: string;
}

export default function Navbar({ links, activeSection }: NavbarProps) {
  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
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
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Wou<span className="text-primary">Chile</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-1 rounded-full bg-foreground/5 border border-primary/10 px-2 py-1 shadow-sm">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.label}
                  href={link.href} 
                  className={`
                    relative group px-4 py-1.5 text-sm font-medium rounded-full
                    transition-all duration-200
                    ${
                      isActive
                        ? "text-background"
                        : "text-foreground/80 hover:text-primary"
                    }
                  `}
                >
                  <span
                    className={`
                      absolute inset-0 rounded-full -z-10
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-primary shadow-md scale-100 opacity-100"
                          : "bg-primary/10 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                      }
                    `}
                  />
                  <span
                    className={`
                      pointer-events-none absolute left-4 right-4 -bottom-1 h-0.5 rounded-full 
                      origin-center scale-x-0 opacity-0 
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-background/80 scale-x-100 opacity-100"
                          : "bg-primary/60 group-hover:scale-x-100 group-hover:opacity-100"
                      }
                    `}
                  />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
