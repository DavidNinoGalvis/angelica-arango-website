// components/TestimoniosCarrusel.tsx
"use client";
import TestimoniosSkeleton from "./TestimoniosSkeleton";

import { useQuery, gql } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

        <div className="relative ">
          {/* Flechas personalizadas */}
          <div className="swiper-button-prev-custom absolute left-[-3rem] top-1/2 z-10 -translate-y-1/2 cursor-pointer">
            <ChevronLeft
              size={32}
              className="text-black hover:scale-110 transition"
            />
          </div>
          <div className="swiper-button-next-custom absolute right-[-3rem] top-1/2 z-10 -translate-y-1/2 cursor-pointer">
            <ChevronRight
              size={32}
              className="text-black hover:scale-110 transition"
            />
          </div>

          {loading ? (
            <TestimoniosSkeleton />
          ) : error ? (
            <p className="text-center text-red-500">
              Error al cargar testimonios 😢
            </p>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="overflow-hidden"
            >
              {testimonios.map((t: any, i: number) => (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] h-full mx-auto max-w-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <p className="text-gray-700 italic mb-4">
                      &quot;{t.camposTestimonios.contenido}&quot;
                    </p>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {t.camposTestimonios.nombre || t.title}
                      </p>
                      {t.camposTestimonios.ciudad && (
                        <p className="text-sm text-gray-500">
                          {t.camposTestimonios.ciudad}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
