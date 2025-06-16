"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Plataforma ERP",
    description:
      "Sistema ERP personalizado para gestión integral de recursos y procesos empresariales.",
    image: "/project-erp.png",
    link: "#",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "E-commerce Innovador",
    description:
      "Tienda en línea con diseño moderno y funcionalidades avanzadas de comercio.",
    image: "/project-ecommerce.png",
    link: "#",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "App Móvil Nativa",
    description:
      "Aplicación móvil optimizada para iOS y Android con UX excepcional.",
    image: "/project-mobile.png",
    link: "#",
    tech: ["React Native", "Firebase", "TypeScript"],
  },
  {
    title: "Web App SaaS",
    description:
      "Plataforma SaaS escalable para gestión eficiente y automatizada.",
    image: "/project-saas.png",
    link: "#",
    tech: ["Vue.js", "AWS", "Docker"],
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

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      ref={ref}
      id="proyectos"
      className="relative w-full overflow-hidden px-6 py-32 sm:px-10 md:px-20 xl:px-48 text-white"
    >
      <div
        className="absolute left-20 top-32 h-32 w-32 rounded-full opacity-20 hidden lg:block"
        style={{
          background:
            "linear-gradient(135deg, #fde047 0%, #f472b6 50%, #c084fc 100%)",
          filter: "blur(32px)",
        }}
      />

      <div
        className="absolute right-16 bottom-32 h-24 w-24 rounded-full opacity-15 hidden xl:block"
        style={{
          background:
            "linear-gradient(135deg, #e879f9 0%, #38bdf8 50%, #8b5cf6 100%)",
          filter: "blur(24px)",
        }}
      />

      <div className="relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl mb-8 backdrop-blur-sm border border-white/10"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, #fde047 0%, #f472b6 100%)",
              }}
            />
            <span className="text-sm font-semibold text-zinc-100/90 tracking-wide">
              Nuestro Trabajo
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mb-8 text-4xl xs:text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight"
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #fde047 0%, #f472b6 50%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Proyectos
            </span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #e879f9 0%, #38bdf8 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Destacados
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl font-medium text-zinc-100/80 max-w-2xl mx-auto leading-relaxed"
          >
            Soluciones digitales que transforman ideas en experiencias
            excepcionales para el crecimiento de tu negocio.
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
            <CarouselContent className="-ml-6">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative h-full">
                    <div
                      className="relative h-full flex flex-col rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <div className="relative overflow-hidden rounded-t-3xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          width={800}
                          height={600}
                          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          style={{
                            background: "rgba(0, 0, 0, 0.4)",
                          }}
                        >
                          <Button
                            asChild
                            size="sm"
                            className="rounded-2xl px-6 py-3 font-semibold shadow-xl"
                            style={{
                              background:
                                "linear-gradient(135deg, #d946ef 0%, #9333ea 50%, #3b82f6 100%)",
                            }}
                          >
                            <Link href={project.link}>
                              <span className="text-sm font-bold text-white">
                                Ver Proyecto →
                              </span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <h3
                          className="text-2xl font-bold mb-4"
                          style={{
                            background:
                              "linear-gradient(135deg, #fde047 0%, #f472b6 50%, #c084fc 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {project.title}
                        </h3>

                        <p className="text-zinc-100/70 mb-6 leading-relaxed flex-1 font-medium">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1.5 text-xs font-semibold rounded-xl backdrop-blur-sm border border-white/10"
                              style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                color: "rgba(255, 255, 255, 0.8)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="left-4 rounded-2xl shadow-xl border-white/20"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                color: "white",
              }}
            />
            <CarouselNext
              className="right-4 rounded-2xl shadow-xl border-white/20"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                color: "white",
              }}
            />
          </Carousel>

          {/* Indicadores */}
          <div className="flex justify-center items-center gap-3 mt-16">
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => api && api.scrollTo(idx)}
                className={`transition-all duration-200 ${
                  current === idx + 1
                    ? "w-12 h-3 rounded-full"
                    : "w-3 h-3 rounded-full hover:scale-110"
                }`}
                style={{
                  background:
                    current === idx + 1
                      ? "linear-gradient(135deg, #d946ef 0%, #9333ea 50%, #3b82f6 100%)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
                aria-label={`Ir al proyecto ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
