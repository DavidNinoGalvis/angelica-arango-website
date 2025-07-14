// components/MobileDrawer.tsx
"use client";

import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, BookOpen, MessagesSquare, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-gray-800"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            as="div"
            className="relative z-50"
            open={isOpen}
            onClose={setIsOpen}
          >
            {/* Fondo oscuro */}
            <motion.div
              className="fixed inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer panel */}
            <div className="fixed inset-0 flex justify-end">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-64 h-full bg-white p-6 shadow-xl flex flex-col"
              >
                <Dialog.Panel>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Menú</h2>
                    <button onClick={() => setIsOpen(false)}>
                      <X size={24} />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-4 text-sm text-gray-800">
                    <Link
                      href="#sobre-mi"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <User size={16} /> Sobre mí
                    </Link>
                    <Link
                      href="#guias"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <BookOpen size={16} /> Guías
                    </Link>
                    <Link
                      href="#testimonios"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <MessagesSquare size={16} /> Testimonios
                    </Link>
                    <Link href="#contacto" onClick={() => setIsOpen(false)}>
                      <button className="w-full mt-4 flex items-center justify-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition">
                        <Mail size={16} /> Contáctanos
                      </button>
                    </Link>
                  </nav>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
