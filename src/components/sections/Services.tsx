"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideLayoutDashboard, LucideCpu, LucideRocket } from "lucide-react";

export default function Services() {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const services = [
    {
      icon: LucideLayoutDashboard,
      title: "Desarrollo Web",
      description:
        "Aplicaciones modernas, escalables y rápidas adaptadas a las necesidades de tu negocio.",
    },
    {
      icon: LucideCpu,
      title: "Automatización de Procesos",
      description:
        "Optimizamos tus operaciones con herramientas digitales personalizadas y eficientes.",
    },
    {
      icon: LucideRocket,
      title: "Consultoría Digital",
      description:
        "Acompañamiento estratégico para transformar tu empresa con tecnología e innovación.",
    },
  ];

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative z-10 py-28 sm:py-36 bg-background border-t"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-foreground"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto mb-16"
        >
          Descubre cómo Wou Chile puede ayudarte a crear soluciones digitales
          efectivas y a la medida.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="p-6 border rounded-2xl bg-muted/30 backdrop-blur shadow-sm text-left"
            >
              <Icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
