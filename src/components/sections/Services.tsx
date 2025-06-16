"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  LucideLayoutDashboard,
  LucideCpu,
  LucideRocket,
  LucideArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: LucideLayoutDashboard,
    title: "Desarrollo Web",
    subtitle: "Aplicaciones Premium",
    description:
      "Creamos experiencias digitales excepcionales con tecnologías de vanguardia, diseño centrado en el usuario y arquitectura escalable.",
    gradient: "from-fuchsia-500 via-purple-600 to-indigo-600",
    features: ["React/Next.js", "TypeScript", "Responsive Design"],
  },
  {
    icon: LucideCpu,
    title: "Automatización",
    subtitle: "Procesos Inteligentes",
    description:
      "Transformamos operaciones complejas en flujos automatizados eficientes, reduciendo costos y maximizando productividad.",
    gradient: "from-cyan-400 via-blue-500 to-violet-600",
    features: ["APIs Robustas", "Integraciones", "Machine Learning"],
  },
  {
    icon: LucideRocket,
    title: "Consultoría Digital",
    subtitle: "Estrategia & Innovación",
    description:
      "Acompañamiento estratégico integral para acelerar la transformación digital de tu empresa con metodologías ágiles.",
    gradient: "from-amber-400 via-orange-500 to-pink-600",
    features: ["Auditoría Digital", "Roadmap Tech", "Growth Hacking"],
  },
];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
  hidden: {},
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], 
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
      className="relative py-20 sm:py-32 bg-gradient-to-b from-black/40 via-black/30 to-black/20 border-t border-white/10"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[20%] h-[200px] w-[200px] rounded-full bg-fuchsia-500/8 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[200px] w-[200px] rounded-full bg-cyan-500/8 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/90 backdrop-blur-sm">
            ✨ Nuestros Servicios
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">Soluciones que</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              transforman
            </span>
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Construimos el futuro digital de tu empresa con{" "}
            <span className="font-semibold text-cyan-400">
              tecnología de última generación
            </span>{" "}
            y experiencias que cautivan.
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
              <motion.div
                key={title}
                variants={cardVariants}
                className="group relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02]"
              >
                <div
                  className={`mb-6 p-3 w-fit rounded-xl bg-gradient-to-br ${gradient} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-left">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {title}
                    </h3>
                    <p className="text-sm font-medium text-white/60 uppercase tracking-wide">
                      {subtitle}
                    </p>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/70 transition-colors duration-200 group-hover:bg-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-white/50 group-hover:text-white/80 transition-colors duration-200">
                    <span className="text-sm font-medium mr-2">
                      Más información
                    </span>
                    <LucideArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-6 text-lg">
            ¿Listo para transformar tu negocio?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 active:scale-95">
            Conversemos sobre tu proyecto
          </button>
        </motion.div>
      </div>
    </section>
  );
}
