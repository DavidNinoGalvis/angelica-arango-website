"use client";

import { motion } from "framer-motion";
import AnimatedCharacter from "@/components/AnimatedCharacter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF9]">
      {/* Fondo decorativo */}
      <div className="absolute -top-24 -left-20 w-[700px] h-[700px] bg-[#B9D8EB] rounded-full blur-[150px] opacity-30 z-0"></div>
      <div className="absolute top-1/2 right-[-150px] w-[600px] h-[600px] bg-[#D0D3D4] rounded-full blur-[120px] opacity-20 z-0"></div>

      <div className="relative max-w-6xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-5 items-center z-10">
        {/* Columna izquierda */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-1 bg-white border border-[#D0D3D4] rounded-full shadow-sm text-sm font-medium text-[#222223]">
            🌿 Psicología con sentido humano
          </div>

          <h1 className="text-4xl md:text-5xl font-noto-serif font-semibold text-[#222223]">
            Tu equilibrio comienza aquí.
          </h1>

          <p className="text-lg text-[#222223]/80 font-montserrat font-light leading-relaxed">
            Soy Angélica Arango, psicóloga clínica. Te acompaño con escucha
            empática, herramientas prácticas y un enfoque personalizado para que
            vivas con mayor claridad y equilibrio.
          </p>

          <div>
            <button className="bg-[#222223] text-white font-medium px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-[#111]">
              Agenda tu cita →
            </button>
          </div>
        </motion.div>

        {/* Columna derecha */}
        <AnimatedCharacter />
      </div>
    </section>
  );
}
