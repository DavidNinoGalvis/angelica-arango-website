"use client";

import { useQuery, gql } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TestimoniosSkeleton from "./TestimoniosSkeleton";
import TestimonioCard from "./TestimonioCard";

const GET_TESTIMONIOS = gql`
  query GetTestimonios {
    testimonios {
      nodes {
        title
        camposTestimonios {
          nombre
          ciudad
          contenido
        }
      }
    }
  }
`;

export default function TestimoniosCarrusel() {
  const { loading, error, data } = useQuery(GET_TESTIMONIOS);
  const testimonios = data?.testimonios?.nodes || [];

  return (
    <section id="testimonios" className="bg-[#FDFCFB] pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-12 relative">
        {/* Encabezado */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-[#222]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Lo que dicen mis pacientes
          <div className="w-16 h-1 bg-[#222] mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        {/* Flechas de navegación */}
        <div className="swiper-button-prev-custom absolute left-[-2rem] top-1/2 z-10 -translate-y-1/2 cursor-pointer">
          <ChevronLeft
            size={32}
            className="text-black hover:scale-110 transition drop-shadow-md"
          />
        </div>
        <div className="swiper-button-next-custom absolute right-[-2rem] top-1/2 z-10 -translate-y-1/2 cursor-pointer">
          <ChevronRight
            size={32}
            className="text-black hover:scale-110 transition drop-shadow-md"
          />
        </div>

        {/* Carrusel */}
        <div className="relative">
          {loading ? (
            <TestimoniosSkeleton />
          ) : error ? (
            <p className="text-center text-red-500">
              Error al cargar testimonios..
            </p>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!overflow-visible"
            >
              {testimonios.map((t: any, i: number) => (
                <SwiperSlide key={i}>
                  <TestimonioCard
                    index={i}
                    nombre={t.camposTestimonios.nombre || t.title}
                    contenido={t.camposTestimonios.contenido}
                    ciudad={t.camposTestimonios.ciudad}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
