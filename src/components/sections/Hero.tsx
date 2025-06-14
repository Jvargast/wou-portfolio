"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 * i },
  }),
};

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="
        relative w-full items-center justify-center
    overflow-hidden px-6 pt-32 pb-24 sm:px-10 md:px-20 xl:px-48
    text-white
      "
      id="inicio"
    >
      <div
        className="
          relative z-10 flex w-full flex-col items-center gap-y-16
          md:flex-row md:items-center md:justify-between md:gap-x-20
        "
      >
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="
            flex-1 flex flex-col items-center md:items-start text-center md:text-left
            max-w-xl lg:max-w-2xl
          "
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="
    mb-8 
    text-3xl xs:text-4xl sm:text-5xl xl:text-7xl
    font-extrabold leading-tight tracking-tight
    max-w-[95vw] xs:max-w-[85vw] sm:max-w-xl lg:max-w-2xl
    mx-auto md:mx-0
    bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400
    bg-clip-text text-transparent
    drop-shadow-[0_6px_32px_rgba(255,46,147,0.25)]
  "
            style={{
              textShadow: "0 4px 32px #ffbe0b55, 0 2px 8px #c026d3aa",
            }}
          >
            Creamos experiencias
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-sky-400 to-violet-600">
              digitales
              <br className="hidden sm:inline" />
              sobresalientes
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="
    mb-12
    text-base xs:text-lg sm:text-xl font-medium
    text-zinc-100/80
    max-w-[95vw] xs:max-w-[85vw] sm:max-w-lg
    mx-auto md:mx-0
  "
          >
            Diseñamos y desarrollamos plataformas web a medida —desde una
            landing page veloz hasta un sistema complejo— para que tu negocio
            crezca con innovación real.
          </motion.p>

          <motion.div variants={fadeUp} custom={2}>
            <Button
              size="lg"
              className="relative inline-flex items-center justify-center rounded-2xl px-10 py-5 font-semibold transition-all shadow-xl bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500 hover:scale-105 hover:brightness-110"
              style={{
                boxShadow: "0 4px 40px 0 rgba(163, 60, 246, 0.2)",
              }}
            >
              <span className="relative z-10 text-lg font-bold text-white tracking-wide">
                Comienza tu proyecto
              </span>
              <span className="absolute -inset-1 rounded-2xl animate-pulse bg-gradient-to-r from-fuchsia-400 via-purple-500 to-blue-400 opacity-30 blur-[4px]"></span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 48 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.96,
            x: inView ? 0 : 48,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.25,
          }}
          className="
            flex-1 flex items-center justify-center w-full md:w-auto
            relative z-20
          "
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute left-[-32px] top-[-32px] hidden lg:block"
          >
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-600 blur-[24px] opacity-70"></div>
          </motion.div>
          <motion.div
            animate={{
              x: [0, 24, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute right-[-40px] bottom-[-40px] hidden xl:block"
          >
            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-sky-400 to-pink-400 blur-[18px] opacity-60"></div>
          </motion.div>
          <div className="overflow-visible relative flex items-center justify-center">
            <div className="rounded-[3rem] bg-white/5 backdrop-blur-xl shadow-2xl border border-white/10 p-6">
              <Image
                src="/hero-illustration-solo-image.png"
                alt="Cohete despegando desde un ordenador"
                width={500}
                height={500}
                loading="lazy"
                className="
        w-[88vw] xs:w-[340px] sm:w-[360px] md:w-[420px] xl:w-[500px]
        h-auto select-none pointer-events-none
        max-w-full
      "
                draggable={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
