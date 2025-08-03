"use client";

import Link from "next/link";
import Image from "next/image";
import {
  User,
  BookOpen,
  MessagesSquare,
  Mail,
  Instagram,
  HeartHandshake,
  Building2,
  Stethoscope,
} from "lucide-react";
import MobileDrawer from "@/components/MobileDrawer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <Image
            src="/logo-main-black.svg"
            alt="Angélica Arango"
            width={110}
            height={36}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800 relative">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="#sobre-mi"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <User size={16} /> Sobre mí
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="#guias"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <BookOpen size={16} /> Guías
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="#testimonios"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <MessagesSquare size={16} /> Testimonios
            </Link>
          </motion.div>

          {/* Servicios con submenú mejorado */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <button className="flex items-center gap-1 hover:text-blue-600 transition focus:outline-none">
                <HeartHandshake size={16} /> Servicios
              </button>
            </motion.div>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-3 w-[350px] bg-white rounded-xl shadow-xl border border-gray-200 z-50 p-4"
                >
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li>
                      <Link
                        href="#talleres"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                      >
                        <div className="mt-1 text-blue-600">
                          <Building2 size={20} />
                        </div>
                        <div>
                          <p className="font-medium">
                            Talleres organizacionales
                          </p>
                          <p className="text-gray-500 text-xs">
                            Espacios grupales para empresas centrados en el
                            bienestar y la comunicación.
                          </p>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#preparacion-medicos"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                      >
                        <div className="mt-1 text-blue-600">
                          <Stethoscope size={20} />
                        </div>
                        <div>
                          <p className="font-medium">Preparación a médicos</p>
                          <p className="text-gray-500 text-xs">
                            Acompañamiento en procesos de postulación a
                            programas de pregrado y posgrado.
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center gap-4">
          {/* Instagram solo en desktop */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition hidden md:inline"
          >
            <Instagram size={20} />
          </a>

          {/* Botón contacto (desktop) */}
          <Link href="#contacto" className="hidden md:inline">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-full transition-transform duration-300 ease-in-out hover:bg-gray-900"
            >
              <Mail size={16} /> Contáctanos
            </motion.button>
          </Link>

          {/* Menú móvil */}
          <MobileDrawer />
        </div>
      </div>
    </header>
  );
}
