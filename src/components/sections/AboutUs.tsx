"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideCode, LucideZap, LucideHeadphones } from "lucide-react";

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
      className="relative py-20 sm:py-32 bg-gradient-to-b from-black/40 via-black/30 to-black/20 border-t border-white/10"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-5%] top-[20%] h-[300px] w-[300px] rounded-full bg-fuchsia-500/6 blur-3xl" />
        <div className="absolute right-[-5%] bottom-[10%] h-[250px] w-[250px] rounded-full bg-cyan-500/6 blur-3xl" />
        <div className="absolute left-[30%] bottom-[-5%] h-[200px] w-[200px] rounded-full bg-violet-500/4 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-2 mb-8 text-sm font-semibold tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/90 backdrop-blur-sm">
            🚀 Sobre Nosotros
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            <span className="text-white">Lo que</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              hacemos
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Tres cosas simples que hacemos{" "}
            <span className="font-semibold text-cyan-400">muy bien</span>.
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
          {services.map(({ icon: Icon, title, description }, index) => (
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
              className="group relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02] text-center"
            >
              <div className="mb-6 mx-auto">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-violet-400 transition-transform duration-300 group-hover:scale-110" />
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-violet-400 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">
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
          <div className="relative p-8 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/10">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                ¿Cómo trabajamos?
              </h3>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                <span className="text-fuchsia-400 font-semibold">
                  Hablamos contigo
                </span>{" "}
                para entender qué necesitas,{" "}
                <span className="text-cyan-400 font-semibold">
                  lo construimos
                </span>{" "}
                paso a paso, y{" "}
                <span className="text-violet-400 font-semibold">
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
          <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/10">
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              ¿Tienes una idea? Hablemos y veamos cómo la hacemos realidad.
            </p>
            <button className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full text-white font-semibold text-lg shadow-lg shadow-fuchsia-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/30 active:scale-95">
              Empezar mi proyecto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
