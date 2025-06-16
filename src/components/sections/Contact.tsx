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
    description: "Respuesta en 24 horas",
    contact: "hola@tuempresa.com",
    gradient: "from-fuchsia-500 via-purple-600 to-indigo-600",
  },
  {
    icon: LucidePhone,
    title: "Teléfono",
    description: "Lunes a Viernes 9AM-6PM",
    contact: "+56 9 1234 5678",
    gradient: "from-cyan-400 via-blue-500 to-violet-600",
  },
  {
    icon: LucideMapPin,
    title: "Ubicación",
    description: "Santiago, Chile",
    contact: "Reuniones presenciales",
    gradient: "from-violet-500 via-purple-500 to-pink-600",
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
      className="relative w-full overflow-hidden px-6 py-32 sm:px-10 md:px-20 xl:px-48 text-white"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-5%] top-[20%] h-[300px] w-[300px] rounded-full bg-fuchsia-500/6 blur-3xl" />
        <div className="absolute right-[-5%] bottom-[10%] h-[250px] w-[250px] rounded-full bg-cyan-500/6 blur-3xl" />
        <div className="absolute left-[40%] top-[-5%] h-[200px] w-[200px] rounded-full bg-violet-500/4 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-8 text-sm font-semibold tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/90 backdrop-blur-sm">
            💬 Hablemos
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            <span
              style={{
                background:
                  "linear-gradient(135deg, #fde047 0%, #f472b6 50%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Convierte tu
            </span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              idea en realidad
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Cuéntanos sobre tu proyecto y te ayudamos a{" "}
            <span className="font-semibold text-cyan-400">hacerlo posible</span>
            .
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20"
        >
          {contactMethods.map(
            ({ icon: Icon, title, description, contact, gradient }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                className="group relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02] text-center"
              >
                <div className="mb-6 mx-auto">
                  <div className="relative w-16 h-16 mx-auto">
                    <div
                      className={`w-full h-full rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                  <p className="text-white/60 text-sm mb-3">{description}</p>
                  <p className="text-white/90 font-semibold">{contact}</p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/10">
              <div className="flex items-center mb-8">
                <LucideMessageCircle className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">
                  Envíanos un mensaje
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-fuchsia-400/50 focus:bg-white/10 transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-violet-400/50 focus:bg-white/10 transition-all duration-200"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-200 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-xl text-white font-semibold shadow-lg shadow-fuchsia-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/30 active:scale-95"
                >
                  <LucideSend className="w-5 h-5 mr-2" />
                  Enviar mensaje
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                ¿Por qué elegirnos?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-400 mt-2 mr-4 flex-shrink-0" />
                  <p className="text-white/80">
                    <span className="text-fuchsia-400 font-semibold">
                      Respuesta rápida:
                    </span>{" "}
                    Te contestamos en menos de 24 horas
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0" />
                  <p className="text-white/80">
                    <span className="text-cyan-400 font-semibold">
                      Sin compromisos:
                    </span>{" "}
                    Conversación inicial completamente gratis
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 mr-4 flex-shrink-0" />
                  <p className="text-white/80">
                    <span className="text-violet-400 font-semibold">
                      Transparencia total:
                    </span>{" "}
                    Te explicamos todo el proceso paso a paso
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 border border-fuchsia-500/20">
              <h4 className="text-xl font-bold text-white mb-4">
                ¿Proyecto urgente?
              </h4>
              <p className="text-white/80 mb-6">
                Si necesitas tu proyecto listo ya, podemos ayudarte con tiempos
                de entrega express.
              </p>
              <Button
                asChild
                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold transition-all duration-200 hover:bg-white/20 hover:scale-105"
              >
                <Link href="#contacto">
                  Contacto directo
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
