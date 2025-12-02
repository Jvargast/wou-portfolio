"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.12 * i },
  }),
};

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative w-full overflow-hidden px-6 pt-28 pb-24 sm:px-10 md:px-20 xl:px-48"
    >
      <div className="relative z-10 flex w-full flex-col items-center gap-y-16 md:flex-row md:items-center md:justify-between md:gap-x-20">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl lg:max-w-2xl"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            WouChile · Desarrollo y consultoría digital
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.5}
            className="mb-6 text-3xl xs:text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight max-w-[95vw] xs:max-w-[85vw] sm:max-w-xl lg:max-w-2xl mx-auto md:mx-0"
            style={{
              background:
                "linear-gradient(135deg, #38bdf8 0%, #22c55e 40%, #0ea5e9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Desarrollo web a medida
            <br />
            para negocios que quieren crecer.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mb-10 text-base xs:text-lg sm:text-xl font-medium text-slate-200/80 max-w-[95vw] xs:max-w-[85vw] sm:max-w-lg mx-auto md:mx-0"
          >
            Diseñamos y construimos plataformas web, sistemas internos y
            experiencias digitales con foco en rendimiento, usabilidad y
            escalabilidad, para que tu negocio avance sin fricción.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-2xl px-8 py-5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, #0ea5e9 0%, #22c55e 40%, #0f766e 100%)",
              }}
            >
              <Link href="#contacto">Comienza tu proyecto</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-2xl border-slate-700/70 bg-slate-900/40 text-slate-100 px-8 py-5 text-base font-medium hover:bg-slate-800/80 hover:text-white transition-all duration-200"
            >
              <Link href="#proyectos">Ver proyectos</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 40 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.96,
            x: inView ? 0 : 40,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.25,
          }}
          className="flex-1 flex items-center justify-center w-full md:w-auto relative"
        >
          <div className="relative flex items-center justify-center">
            <div className="rounded-[2.5rem] bg-slate-900/70 backdrop-blur-xl shadow-2xl border border-slate-700/60 p-5 sm:p-6">
              <Image
                src="/hero-illustration-solo-image.webp"
                alt="Ilustración de desarrollo de soluciones digitales"
                width={500}
                height={500}
                className="w-[88vw] xs:w-[340px] sm:w-[360px] md:w-[420px] xl:w-[480px] h-auto select-none pointer-events-none max-w-full"
                draggable={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
