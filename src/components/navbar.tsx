"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection([
    "inicio",
    "servicios",
    "proyectos",
    "nosotros",
    "contacto",
  ]);

  const activeClass =
    "bg-primary text-white rounded-full px-3 py-1 shadow-md transition-transform transform scale-105";
  const linkClass =
    "text-sm font-medium transition-colors hover:text-primary px-3 py-1";

  return (
    <header className="border-b shadow-lg bg-background/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="#inicio"
          className="flex items-center gap-3"
          title="Wou Chile - Inicio"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/wou-logotipo.png"
              alt="Logo Wou Chile"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            Wou<span className="text-primary">Chile</span>
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#inicio"
                  className={`${linkClass} ${
                    activeSection === "inicio" ? activeClass : ""
                  }`}
                >
                  Inicio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#servicios"
                  className={`${linkClass} ${
                    activeSection === "servicios" ? activeClass : ""
                  }`}
                >
                  Servicios
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#proyectos"
                  className={`${linkClass} ${
                    activeSection === "proyectos" ? activeClass : ""
                  }`}
                >
                  Proyectos
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#nosotros"
                  className={`${linkClass} ${
                    activeSection === "nosotros" ? activeClass : ""
                  }`}
                >
                  Nosotros
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#contacto"
                  className={`${linkClass} ${
                    activeSection === "contacto" ? activeClass : ""
                  }`}
                >
                  Contacto
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
