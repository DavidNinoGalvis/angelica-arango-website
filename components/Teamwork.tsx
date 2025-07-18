"use client";

import { motion } from "framer-motion";
import CardTeam from "./CardTeam";

export default function Teamwork() {
  return (
    <section id="equipo" className="bg-[#FDFCFB] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-[#222]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestro equipo
          <div className="w-16 h-1 bg-[#222] mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CardTeam
            image="/equipo/angelica.jpg"
            name="Angélica Arango"
            role="Psicóloga clínica – Fundadora"
          />
          <CardTeam
            image="/equipo/camilo.jpg"
            name="Camilo Restrepo"
            role="Psicólogo terapéutico – Apoyo emocional"
          />
          <CardTeam
            image="/equipo/paula.jpg"
            name="Paula Gómez"
            role="Asistente administrativa – Atención al cliente"
          />
        </motion.div>
      </div>
    </section>
  );
}
