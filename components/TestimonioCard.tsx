"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonioCardProps {
  nombre: string;
  contenido: string;
  ciudad?: string;
  index?: number;
}

export default function TestimonioCard({
  nombre,
  contenido,
  ciudad,
  index = 0,
}: TestimonioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col justify-between bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out p-6 text-left w-full h-full"
    >
      <div className="relative mb-6">
        <Quote
          size={28}
          className="text-blue-400 absolute -top-4 -left-2 opacity-20"
        />
        <p className="text-gray-700 italic leading-relaxed relative z-10">
          &quot;{contenido}&quot;
        </p>
      </div>
      <div className="text-right mt-auto">
        <p className="font-semibold text-gray-900">{nombre}</p>
        {ciudad && <p className="text-sm text-gray-500">{ciudad}</p>}
      </div>
    </motion.div>
  );
}
