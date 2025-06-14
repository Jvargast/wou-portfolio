"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideLayoutDashboard, LucideCpu, LucideRocket } from "lucide-react";

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      icon: LucideLayoutDashboard,
      title: "Desarrollo Web",
      description:
        "Aplicaciones modernas, escalables y rápidas adaptadas a las necesidades de tu negocio.",
      gradient: "from-fuchsia-400 via-pink-500 to-violet-600",
    },
    {
      icon: LucideCpu,
      title: "Automatización de Procesos",
      description:
        "Optimizamos tus operaciones con herramientas digitales personalizadas y eficientes.",
      gradient: "from-blue-400 via-cyan-400 to-violet-500",
    },
    {
      icon: LucideRocket,
      title: "Consultoría Digital",
      description:
        "Acompañamiento estratégico para transformar tu empresa con tecnología e innovación.",
      gradient: "from-yellow-400 via-pink-400 to-purple-400",
    },
  ];

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.09 } },
    hidden: {},
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, type: "tween" },
    },
  };

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative z-10 py-16 sm:py-28 bg-black/30 border-t border-white/10"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-[-15%] top-[10%] h-[320px] w-[320px] rounded-full
                    bg-fuchsia-500/10 blur-[100px]"
        />
        <div
          className="absolute right-[-10%] bottom-[-10%] h-[260px] w-[260px] rounded-full
                    bg-violet-500/10 blur-[90px]"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.35 }}
          className="text-4xl sm:text-5xl font-extrabold mb-5 bg-gradient-to-r from-fuchsia-400 via-sky-400 to-violet-600 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(200,100,255,0.11)] tracking-tight"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.25, delay: 0.08 }}
          className="text-lg text-zinc-200/80 max-w-2xl mx-auto mb-20"
        >
          Descubre cómo{" "}
          <span className="font-semibold text-white">Wou Chile</span> puede
          ayudarte a crear soluciones digitales{" "}
          <span className="italic text-fuchsia-300">efectivas</span> y{" "}
          <span className="italic text-sky-300">a la medida</span>.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map(({ icon: Icon, title, description, gradient }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className={`
                group relative 
                flex flex-col items-start 
                p-6 xs:p-8 md:p-8
                rounded-3xl shadow-xl
                bg-white/50 dark:bg-zinc-900/70
                backdrop-blur-md
                border border-white/20 dark:border-zinc-800
                overflow-hidden 
                min-h-[240px] xs:min-h-[260px]
                cursor-pointer
                will-change-transform
              `}
              style={{ zIndex: 2 }}
              whileHover={{
                y: -8,
                scale: 1.035,
                boxShadow: "0 12px 56px 0 rgba(160,80,255,0.18)",
                transition: {
                  type: "spring",
                  stiffness: 330,
                  damping: 20,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            >
              <motion.div
                className={`
                  p-4 rounded-xl shadow-md
                  bg-gradient-to-br ${gradient}
                  opacity-90
                  transition
                  mb-6
                  flex items-center justify-center
                `}
                whileHover={{
                  scale: 1.12,
                  rotate: -7,
                  transition: { type: "spring", stiffness: 220, damping: 15 },
                }}
              >
                <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-[0_2px_8px_rgba(60,30,120,0.10)]" />
              </motion.div>
              <h3 className="text-lg xs:text-xl font-bold mb-2 text-zinc-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm xs:text-base text-zinc-700 dark:text-zinc-200/90 mb-2">
                {description}
              </p>
              <motion.span
                className={`
                    absolute inset-0 rounded-3xl pointer-events-none
                    ring-2 ring-transparent
                    hidden lg:block
                  `}
                whileHover={{
                  boxShadow: "0 0 0 8px rgba(120, 20, 255, 0.09)",
                  transition: { duration: 0.23, type: "tween" },
                }}
              ></motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
