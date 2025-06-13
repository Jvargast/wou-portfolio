import Image from "next/image";
import Link from "next/link";
import { Github, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-20 py-10 text-sm bg-background/70 backdrop-blur-md text-muted-foreground">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/wou-logotipo.png"
                alt="Logo Wou Chile"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
            <span className="text-lg font-semibold text-foreground">
              Wou Chile
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs text-center sm:text-left">
            Soluciones digitales innovadoras para startups, empresas y
            organizaciones.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wou Chile. Todos los derechos
            reservados.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-1">
            Enlaces
          </h3>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:underline">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-1">
            Contacto
          </h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Santiago, Chile
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +56 9 1234 5678
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:contacto@wouchile.cl" className="hover:underline">
                contacto@wouchile.cl
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Oficial
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <Link href="/privacy" className="hover:underline">
                Privacidad
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <Link href="/terms" className="hover:underline">
                Términos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
