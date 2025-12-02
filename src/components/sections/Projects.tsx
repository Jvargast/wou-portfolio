"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
/* import Image from "next/image"; */
import {
  LayoutDashboard,
  ShoppingCart,
  CloudCog,
  type LucideIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  subtitle: string;
  summary: string;
  icon: LucideIcon;
  /*  image: string; */
  tech: string[];
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "Plataforma ERP a Medida",
    subtitle: "Gestión integral para operaciones diarias",
    summary:
      "Sistema ERP personalizado para manejar inventario, ventas, clientes y reportes en un solo lugar, optimizado para el día a día del negocio.",
    icon: LayoutDashboard,
    /*  image: "/project-erp.png", */
    tech: ["React / Next.js", "Node.js", "PostgreSQL", "Docker"],
    highlights: [
      "Panel de control con indicadores clave en tiempo real.",
      "Flujos de trabajo adaptados al proceso real del cliente.",
      "Arquitectura preparada para crecer y sumar nuevos módulos.",
    ],
  },
  {
    title: "E-commerce Optimizado",
    subtitle: "Venta online enfocada en conversión",
    summary:
      "Tienda en línea con diseño limpio, proceso de compra claro y herramientas para gestionar productos, órdenes y medios de pago.",
    icon: ShoppingCart,
    /* image: "/project-ecommerce.png", */
    tech: ["Next.js", "Stripe / Webpay", "API REST", "Responsive Design"],
    highlights: [
      "Checkout simple y rápido, pensado para mobile first.",
      "Catálogo administrable y filtros por categorías.",
      "Integración con pasarelas de pago y notificaciones.",
    ],
  },
  {
    title: "Web App tipo SaaS",
    subtitle: "Tableros y workflows colaborativos",
    summary:
      "Aplicación web tipo SaaS para gestionar información, tareas y clientes, con experiencia moderna y foco en colaboración.",
    icon: CloudCog,
    /* image: "/project-saas.png", */
    tech: ["React", "Node.js", "PostgreSQL", "Auth JWT"],
    highlights: [
      "Tableros y vistas configurables según el rol del usuario.",
      "Módulos compartidos: clientes, actividades, notas.",
      "Base técnica lista para modelos de suscripción.",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Proyectos() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = (open: boolean) => {
    if (!open) setSelectedProject(null);
  };

  return (
    <section
      ref={ref}
      id="proyectos"
      className="relative w-full overflow-hidden px-6 py-24 sm:px-10 md:px-20 xl:px-48 border-t border-slate-800/30"
    >
      <div className="relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-cyan-400/30 bg-cyan-400/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              Proyectos
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mb-4 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-50"
          >
            Proyectos destacados
            <span className="block bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              que resumen nuestro trabajo
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg text-slate-300/85 max-w-2xl mx-auto leading-relaxed"
          >
            Una mirada rápida a algunas soluciones que hemos diseñado y
            desarrollado, con foco en negocio, rendimiento y experiencia de uso.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center" }}
            className="w-full mx-auto"
          >
            <CarouselContent>
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <CarouselItem
                    key={project.title}
                    className="pl-4 md:basis-[70%] lg:basis-[60%]" // o tarjeta grande -> className="pl-4 basis-full"
                  >
                    <div className="group relative h-full">
                      <article className="relative h-full flex flex-col rounded-3xl overflow-hidden bg-slate-900/70 backdrop-blur-xl border border-slate-700/80 shadow-xl transition-transform duration-250 hover:-translate-y-1 hover:border-cyan-400/60">
                        <div className="relative overflow-hidden rounded-t-3xl border-b border-slate-800/60 bg-slate-900/80">
                          <div className="h-40 flex items-center justify-center bg-gradient-to-br from-sky-500/20 via-emerald-500/10 to-cyan-500/20">
                            <Icon className="w-12 h-12 text-cyan-100 drop-shadow-lg" />
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-end justify-between px-5 pb-4">
                            <div className="text-left">
                              <p className="text-xs font-medium text-slate-200/90">
                                Recorrido guiado
                              </p>
                              <p className="text-sm text-slate-200/80">
                                Mira cómo resolvemos este tipo de proyecto.
                              </p>
                            </div>
                            <Button
                              size="sm"
                              className="rounded-xl px-4 py-2 text-xs font-semibold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg"
                              onClick={() => handleOpenProject(project)}
                            >
                              Ver recorrido
                            </Button>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col text-left">
                          <h3 className="text-xl font-semibold text-slate-50 mb-1">
                            {project.title}
                          </h3>
                          <p className="text-xs font-medium text-slate-400 uppercase tracking-[0.16em] mb-3">
                            {project.subtitle}
                          </p>

                          <p className="text-sm text-slate-200/85 leading-relaxed mb-5 flex-1">
                            {project.summary}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-[11px] font-medium rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200/80"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-4 rounded-2xl border-slate-600/80 bg-slate-900/80 text-slate-100 hover:bg-slate-800" />
            <CarouselNext className="right-4 rounded-2xl border-slate-600/80 bg-slate-900/80 text-slate-100 hover:bg-slate-800" />
          </Carousel>

          <div className="flex justify-center items-center gap-3 mt-10">
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => api && api.scrollTo(idx)}
                className={`transition-all duration-200 ${
                  current === idx + 1
                    ? "w-10 h-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500"
                    : "w-2.5 h-2.5 rounded-full bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Ir al proyecto ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={handleCloseDialog}>
        {selectedProject && (
          <ProjectDialog project={selectedProject} />
          /*  <DialogContent className="max-w-3xl bg-slate-950/95 border border-slate-800/80 backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-50">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-slate-300/80">
                {selectedProject.subtitle}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 h-48 flex items-center justify-center">
                  <DialogIcon className="w-14 h-14 text-cyan-100 drop-shadow-lg" />
                </div>
                <p className="mt-3 text-xs text-slate-400">
                  Representación visual del tipo de proyecto.
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-sm text-slate-200/85 leading-relaxed">
                    {selectedProject.summary}
                  </p>

                  <div className="mt-3 space-y-2">
                    {selectedProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <p className="text-sm text-slate-200/85">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.16em] mb-2">
                    Tecnologías
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[11px] font-medium rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full md:w-auto px-6 py-3 rounded-2xl text-sm font-semibold bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white shadow-lg hover:shadow-xl"
                  >
                    <a href="#contacto">Quiero algo similar para mi negocio</a>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent> */
        )}
      </Dialog>
    </section>
  );
}

function ProjectDialog({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <DialogContent className="max-w-3xl bg-slate-950/95 border border-slate-800/80 backdrop-blur-xl">
      <DialogHeader>
        <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-50">
          {project.title}
        </DialogTitle>
        <DialogDescription className="text-slate-300/80">
          {project.subtitle}
        </DialogDescription>
      </DialogHeader>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 h-48 flex items-center justify-center">
            <Icon className="w-14 h-14 text-cyan-100 drop-shadow-lg" />
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Representación visual del tipo de proyecto.
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <p className="text-sm text-slate-200/85 leading-relaxed">
              {project.summary}
            </p>

            <div className="mt-3 space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <p className="text-sm text-slate-200/85">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.16em] mb-2">
              Tecnologías
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] font-medium rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200/85"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Button
              asChild
              className="w-full md:w-auto px-6 py-3 rounded-2xl text-sm font-semibold bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white shadow-lg hover:shadow-xl"
            >
              <a href="#contacto">Quiero algo similar para mi negocio</a>
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
