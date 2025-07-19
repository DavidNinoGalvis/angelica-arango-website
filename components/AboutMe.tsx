"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="bg-white py-24 px-6">
      {/* Título centrado */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre mí
        </motion.h2>
        <div className="w-12 h-1 bg-gray-800 mx-auto mt-3 rounded-full" />
      </div>

      {/* 2 Columnas */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Columna izquierda: Imagen flotante */}
        <motion.div
          className="w-full h-full flex justify-center items-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6 },
            x: { duration: 0.6 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: false }}
        >
          <Image
            src="/logo-aboutme.webp"
            alt="Angélica Arango"
            width={450}
            height={450}
            className="rounded-xl shadow-xl object-cover"
            draggable={false}
            priority
          />
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Soy <strong>Angélica Arango</strong>, psicóloga clínica con más de 5
            años de experiencia acompañando a personas en procesos de
            transformación emocional.
          </p>
          <p>
            Mi propósito es brindar un espacio seguro, libre de juicios, donde
            puedas <strong>reconectar contigo mismo</strong> y encontrar
            claridad en medio de la confusión.
          </p>
          <p>
            A través de una escucha empática, estrategias prácticas y
            herramientas respaldadas por la psicología, te ayudo a desarrollar
            una relación más sana contigo mismo.
          </p>
          <p>
            Creo firmemente que cada persona tiene dentro de sí{" "}
            <strong>
              los recursos para sanar, crecer y vivir de forma más auténtica
            </strong>
            . Mi labor es acompañarte con calidez, respeto y compromiso en ese
            camino.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="#guias">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-black hover:scale-105 transition">
                Conoce más →
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
