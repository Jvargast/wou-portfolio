"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Plataforma ERP",
    description:
      "Sistema ERP personalizado para gestión integral de recursos y procesos.",
    image: "/project-erp.png",
    link: "#",
  },
  {
    title: "E-commerce Innovador",
    description:
      "Tienda en línea con diseño moderno y funcionalidades avanzadas.",
    image: "/project-ecommerce.png",
    link: "#",
  },
  {
    title: "App Móvil Nativa",
    description: "Aplicación móvil optimizada para iOS y Android.",
    image: "/project-mobile.png",
    link: "#",
  },
  {
    title: "Web App SaaS",
    description: "Plataforma SaaS para gestión eficiente y escalable.",
    image: "/project-saas.png",
    link: "#",
  },
];

export default function Proyectos() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section ref={ref} id="proyectos" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Proyectos Destacados
        </motion.h2>

        {/* Carousel de shadcn/ui */}
        <Carousel
          opts={{ loop: true, align: "center" }}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-background shadow-xl rounded-xl overflow-hidden group"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-5">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="inline-block bg-primary text-white rounded-md px-4 py-2 hover:bg-primary/90 transition-colors"
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots/Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`w-3 h-3 rounded-full border-2 border-primary transition-all duration-200
                ${selectedIndex === idx ? "bg-primary" : "bg-transparent"}
              `}
              aria-label={`Ir al proyecto ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
