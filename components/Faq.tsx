"use client";

import { useQuery, gql } from "@apollo/client";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FaqSkeleton from "./FaqSkeleton";

const GET_FAQS = gql`
  query GetFAQs {
    preguntasFrecuentes {
      nodes {
        camposFaq {
          pregunta
          respuesta
        }
      }
    }
  }
`;

export default function Faq() {
  const { data, loading, error } = useQuery(GET_FAQS);
  const faqs = data?.preguntasFrecuentes?.nodes || [];

  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Preguntas frecuentes
          <div className="w-16 h-1 bg-[#222] mx-auto mt-4 rounded-full" />
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8 items-start">
        {/* Columna izquierda */}
        <div className="space-y-6">
          {loading ? (
            <FaqSkeleton />
          ) : error ? (
            <p className="text-red-500 text-center">
              Error al cargar FAQs. Intenta más tarde.
            </p>
          ) : (
            faqs.map((item: any, idx: number) => (
              <Disclosure key={idx}>
                {({ open }) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                  >
                    <Disclosure.Button className="flex w-full justify-between items-center px-6 py-4 font-medium text-gray-900 hover:bg-gray-50 transition">
                      <span>{item.camposFaq.pregunta}</span>
                      <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      </motion.div>
                    </Disclosure.Button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-4 text-gray-700">
                            {item.camposFaq.respuesta}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </Disclosure>
            ))
          )}
        </div>

        {/* Columna derecha - Imagen con animación */}
        <motion.div
          className="w-full h-full flex justify-center items-start"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            draggable={false}
            src="/main-faq.webp"
            alt="Angélica acompañando emocionalmente"
            width={600}
            height={800}
            className="rounded-xl shadow-lg object-cover w-full max-w-md"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
