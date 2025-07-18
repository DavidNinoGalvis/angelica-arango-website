"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Instagram,
  MapPin,
  User,
  FileText,
  MessageCircle,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#FDFCFB] border-t border-gray-200 pt-12 pb-6 px-6">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Columna 1: Logo y descripción */}
        <div className="space-y-3 flex flex-col items-center md:items-start">
          <Image
            src="/logo-main-black.svg"
            alt="Logo Angélica Arango"
            width={140}
            height={40}
            className="mx-auto md:mx-0"
          />
          <p className="text-sm text-gray-600 max-w-xs">
            Psicóloga clínica enfocada en el bienestar emocional y el
            acompañamiento terapéutico personalizado.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h4 className="text-lg font-semibold text-[#222] mb-2">Enlaces</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <User size={16} />
              <a href="#sobre-mi" className="hover:text-black transition">
                Sobre mí
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FileText size={16} />
              <a href="#guias" className="hover:text-black transition">
                Guías
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MessageCircle size={16} />
              <a href="#testimonios" className="hover:text-black transition">
                Testimonios
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} />
              <a href="#contacto" className="hover:text-black transition">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-[#222] mb-2">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} />
              <a href="mailto:angelica@example.com" className="hover:text-black">
                CORREO AQUI
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Instagram size={16} />
              <a
                href="https://instagram.com/angelica.arango"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                @angelica.arango
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} />
              <span>Colombia</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Línea inferior */}
      <motion.div
        className="mt-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>© {new Date().getFullYear()} Angélica Arango. Todos los derechos reservados.</p>
        <p className="text-gray-400 mt-2 md:mt-0 flex items-center gap-1">
          Hecho con <Heart size={14} className="text-pink-400" /> por{" "}
          <a
            href="https://danino.dev"
            target="_blank"
            className="hover:text-black transition"
          >
            David Nino
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
