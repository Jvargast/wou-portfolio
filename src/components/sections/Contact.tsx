"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  LucideMail,
  LucidePhone,
  LucideMapPin,
  LucideMessageCircle,
  LucideArrowRight,
  LucideSend,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: LucideMail,
    title: "Email",
    description: "Respuesta en menos de 24 horas",
    contact: "hola@tuempresa.com",
  },
  {
    icon: LucidePhone,
    title: "Teléfono",
    description: "Lunes a viernes · 9:00–18:00",
    contact: "+56 9 1234 5678",
  },
  {
    icon: LucideMapPin,
    title: "Ubicación",
    description: "Santiago, Chile",
    contact: "Reuniones online o presenciales",
  },
];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
  hidden: {},
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative w-full overflow-hidden px-6 py-24 sm:px-10 md:px-20 xl:px-48 text-slate-50 border-t border-slate-800/30"
    >
      <div className="relative z-10 container mx-auto px-0 md:px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-100 backdrop-blur-sm">
            Hablemos
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight">
            <span className="text-slate-50">Convierte tu</span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              idea en realidad
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300/85 max-w-2xl mx-auto leading-relaxed">
            Cuéntanos sobre tu proyecto y vemos cómo{" "}
            <span className="font-semibold text-cyan-300">
              llevarlo a producción
            </span>
            .
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16 sm:mb-20"
        >
          {contactMethods.map(({ icon: Icon, title, description, contact }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group relative p-6 sm:p-7 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/80 transition-all duration-300 hover:bg-slate-900/90 hover:border-cyan-400/60 hover:-translate-y-1"
            >
              <div className="mb-5">
                <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-emerald-400 to-cyan-400/90 p-3">
                  <Icon className="w-5 h-5 text-slate-50" />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-1.5 text-slate-50">
                {title}
              </h3>
              <p className="text-sm text-slate-400 mb-2">{description}</p>
              <p className="text-sm font-medium text-slate-100">{contact}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative"
          >
            <div className="p-7 md:p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/80">
              <div className="flex items-center mb-6">
                <LucideMessageCircle className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-50">
                  Envíanos un mensaje
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300/90 text-sm font-medium mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-700/80 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/60 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300/90 text-sm font-medium mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-700/80 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/60 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300/90 text-sm font-medium mb-1.5">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-700/80 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/60 transition-all"
                    placeholder="Nombre de tu empresa (opcional)"
                  />
                </div>

                <div>
                  <label className="block text-slate-300/90 text-sm font-medium mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-700/80 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/60 transition-all resize-none"
                    placeholder="Cuéntanos brevemente qué necesitas…"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 rounded-xl text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30 active:scale-95"
                >
                  <LucideSend className="w-5 h-5 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="space-y-6"
          >
            <div className="p-7 md:p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/80">
              <h3 className="text-xl md:text-2xl font-bold text-slate-50 mb-5">
                ¿Qué puedes esperar?
              </h3>
              <div className="space-y-3.5">
                <div className="flex items-start">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 mr-3 flex-shrink-0" />
                  <p className="text-sm text-slate-200/90">
                    <span className="font-semibold text-cyan-300">
                      Respuesta clara:
                    </span>{" "}
                    te respondemos con opciones concretas y tiempos estimados.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 mr-3 flex-shrink-0" />
                  <p className="text-sm text-slate-200/90">
                    <span className="font-semibold text-emerald-300">
                      Sin compromiso:
                    </span>{" "}
                    la primera conversación es 100% exploratoria.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 mr-3 flex-shrink-0" />
                  <p className="text-sm text-slate-200/90">
                    <span className="font-semibold text-sky-300">
                      Acompañamiento:
                    </span>{" "}
                    te explicamos el proceso técnico en lenguaje simple.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-8 rounded-3xl bg-gradient-to-br from-sky-500/10 via-cyan-500/10 to-emerald-500/10 border border-cyan-500/25">
              <h4 className="text-lg md:text-xl font-bold text-slate-50 mb-3">
                ¿Proyecto urgente?
              </h4>
              <p className="text-sm text-slate-200/90 mb-5">
                Si necesitas levantar algo rápido (MVP, landing de campaña, demo
                para clientes), podemos adaptar los tiempos y priorizar tu
                proyecto.
              </p>
              <Button
                asChild
                variant="outline"
                className="inline-flex items-center px-6 py-2.5 rounded-xl border-slate-300/30 bg-slate-950/40 text-slate-50 text-sm font-semibold hover:bg-slate-900/70 hover:border-cyan-400/50 transition-all"
              >
                <Link href="#contacto">
                  Hablar ahora
                  <LucideArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
