"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideCode, LucideZap, LucideHeadphones } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: LucideCode,
    title: "Sitios Web",
    description:
      "Páginas rápidas y bonitas que convierten visitantes en clientes",
  },
  {
    icon: LucideZap,
    title: "Aplicaciones",
    description: "Apps que funcionan perfectamente en cualquier dispositivo",
  },
  {
    icon: LucideHeadphones,
    title: "Soporte",
    description: "Te ayudamos cuando necesites cambios o tengas problemas",
  },
];

export default function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative w-full overflow-hidden px-6 py-20 sm:py-32 border-t border-slate-800/30"
    >
      <div className="relative z-10 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-2 mb-8 text-sm font-semibold tracking-[0.18em] uppercase bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-100 backdrop-blur-sm">
            Sobre nosotros
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight text-slate-50">
            Lo que
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              hacemos
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300/85 max-w-2xl mx-auto leading-relaxed">
            Tres cosas simples que hacemos{" "}
            <span className="font-semibold text-cyan-300">muy bien</span>.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group relative p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/80 transition-all duration-300 hover:bg-slate-900/90 hover:border-cyan-400/60 hover:scale-[1.02] text-center"
            >
              <div className="mb-6 mx-auto">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500 via-emerald-400 to-cyan-400 opacity-80 transition-transform duration-300 group-hover:scale-110" />
                  <div className="relative w-full h-full rounded-2xl bg-slate-950/90 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-cyan-50" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-50">
                  {title}
                </h3>
                <p className="text-slate-300/85 leading-relaxed text-lg">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/80">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-8">
                ¿Cómo trabajamos?
              </h3>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
                <span className="text-sky-400 font-semibold">
                  Hablamos contigo
                </span>{" "}
                para entender qué necesitas,{" "}
                <span className="text-emerald-400 font-semibold">
                  lo construimos
                </span>{" "}
                paso a paso, y{" "}
                <span className="text-cyan-300 font-semibold">
                  te lo entregamos
                </span>{" "}
                funcionando.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/80">
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              ¿Tienes una idea? Hablemos y veamos cómo la hacemos realidad.
            </p>
            <Button
              asChild
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 rounded-full text-white font-semibold text-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 active:scale-95"
            >
              <Link href="#contacto">Empezar mi proyecto</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
