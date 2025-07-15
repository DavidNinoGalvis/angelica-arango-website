"use client";

import Link from "next/link";
import Image from "next/image";
import { User, BookOpen, MessagesSquare, Mail, Instagram } from "lucide-react";
import MobileDrawer from "@/components/MobileDrawer";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-115"
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
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          <Link
            href="#sobre-mi"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <User size={16} /> Sobre mí
          </Link>
          <Link
            href="#guias"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <BookOpen size={16} /> Guías
          </Link>
          <Link
            href="#testimonios"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <MessagesSquare size={16} /> Testimonios
          </Link>
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
            <button className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-900">
              <Mail size={16} /> Contáctanos
            </button>
          </Link>

          {/* Menú móvil */}
          <MobileDrawer />
        </div>
      </div>
    </header>
  );
}
