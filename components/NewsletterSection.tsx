"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, Info } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Suscribir nombre:", name, "| correo:", email);
    setEmail("");
    setName("");
  };

  return (
    <section className="bg-[#F9FAFB] py-8 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Suscríbete al Newsletter
          </h2>
          <div className="w-16 h-1 bg-[#222] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contenido en dos columnas */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda - SVG con efecto flotante */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center"
          >
            <Image
              src="/angelica-ilustration.svg"
              alt="Ilustración Angélica"
              width={240}
              height={240}
              className="w-full max-w-xs h-auto"
              priority
            />
          </motion.div>

          {/* Columna derecha - Formulario con efecto flotante */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <form
              onSubmit={handleSubscribe}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              {/* Descripción superior */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 flex items-start gap-2">
                  <Sparkles size={18} className="text-blue-500 mt-[2px]" />
                  Únete a una comunidad que prioriza el bienestar emocional.
                  Recibirás reflexiones que inspiran, ejercicios para reconectar
                  contigo mismo y recursos que te acompañarán en tu camino
                  interior.
                </p>
              </div>

              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Tu nombre
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Angélica"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-5"
              />

              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Tu correo electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@ejemplo.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-5"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300"
              >
                <Mail size={18} /> Suscribirme
              </motion.button>

              <div className="mt-6 space-y-2 text-sm text-gray-500">
                <p className="flex gap-2 items-start">
                  <Info size={16} className="mt-[2px] text-blue-500" />
                  Solo recibirás correos cuando tenga algo realmente útil que
                  compartir.
                </p>
                <p className="text-center text-xs italic">
                  Puedes darte de baja en cualquier momento.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
