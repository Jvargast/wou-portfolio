"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.25 });

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-4 sm:px-12 gap-10 md:gap-16 py-24 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 0.2 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 blur-3xl -z-10"
      />

      <div className="text-center md:text-left md:pr-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold text-foreground mb-5 leading-tight"
        >
          Creamos soluciones digitales
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            impactantes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0 mb-8"
        >
          Desde plataformas web hasta sistemas personalizados, llevamos tus
          ideas y proyectos digitales al siguiente nivel con innovación y
          tecnología.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button size="lg">Comienza tu proyecto</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-center md:justify-end"
      >
        <Image
          src="/hero-illustration.png"
          alt="Ilustración Wou Chile"
          width={600}
          height={600}
          className="object-contain max-w-full h-auto drop-shadow-2xl rounded-lg"
        />
      </motion.div>
    </section>
  );
}
