"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  LucideLayoutDashboard,
  LucideCpu,
  LucideRocket,
  LucideArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: LucideLayoutDashboard,
    title: "Desarrollo Web a Medida",
    subtitle: "Plataformas y sistemas",
    description:
      "Diseño y desarrollo de aplicaciones web modernas: desde landing pages de alto rendimiento hasta paneles internos y sistemas de gestión completos.",
    gradient: "from-sky-500 via-cyan-400 to-emerald-400",
    features: ["Next.js / React", "TypeScript", "UX enfocada en negocio"],
  },
  {
    icon: LucideCpu,
    title: "Automatización & Integraciones",
    subtitle: "Procesos eficientes",
    description:
      "Conectamos tus herramientas, APIs y fuentes de datos para automatizar tareas repetitivas, reducir errores operativos y liberar tiempo de tu equipo.",
    gradient: "from-emerald-500 via-teal-500 to-sky-500",
    features: [
      "APIs REST / Webhooks",
      "Integraciones con terceros",
      "Workflows automatizados",
    ],
  },
  {
    icon: LucideRocket,
    title: "Consultoría Digital",
    subtitle: "Estrategia técnica",
    description:
      "Te acompañamos en la definición de arquitectura, roadmap tecnológico y buenas prácticas para que tomes decisiones con claridad y sin improvisar.",
    gradient: "from-slate-700 via-sky-600 to-emerald-500",
    features: [
      "Arquitectura de sistemas",
      "Revisión de código",
      "Roadmap tecnológico",
    ],
  },
];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
  hidden: {},
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative py-20 sm:py-28 border-t border-slate-800/30"
    >
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-semibold tracking-[0.18em] uppercase rounded-full border border-cyan-400/25 bg-cyan-400/5 text-cyan-100">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Servicios
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug text-slate-50">
            Soluciones digitales
            <span className="block bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              pensadas para tu negocio
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed">
            Te acompañamos en todo el ciclo: definición, diseño, desarrollo e
            implementación de soluciones digitales que realmente impactan en tus
            operaciones y resultados.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map(
            ({
              icon: Icon,
              title,
              subtitle,
              description,
              gradient,
              features,
            }) => (
              <motion.article
                key={title}
                variants={cardVariants}
                className="group relative p-6 sm:p-7 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/80 transition-all duration-250 hover:border-cyan-400/60 hover:-translate-y-1 hover:bg-slate-900/90"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-transparent" />
                </div>

                <div className="relative">
                  <div
                    className={`mb-5 p-3 w-fit rounded-xl bg-gradient-to-br ${gradient} shadow-sm transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="text-left">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-slate-50 mb-1">
                        {title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-[0.16em]">
                        {subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-[15px] text-slate-200/85 leading-relaxed mb-5">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-[11px] font-medium bg-slate-900/80 border border-slate-700/80 rounded-full text-slate-200/80 transition-colors duration-200 group-hover:border-cyan-400/50 group-hover:text-cyan-100"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="#contacto"
                      className="inline-flex items-center text-sm font-medium text-slate-300/80 group-hover:text-cyan-200 transition-colors duration-200"
                    >
                      <span>Conversemos sobre este servicio</span>
                      <LucideArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-300/80 mb-5 text-base sm:text-lg">
            ¿Tienes una idea o un proceso que podría ser mejor?
          </p>
          <Button
            asChild
            className="px-8 py-4 rounded-2xl text-sm sm:text-base bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <Link href="#contacto">Agenda una conversación con WouChile</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
