"use client";

import { motion } from "framer-motion";

export default function TestimoniosSkeleton() {
  return (
    <section className="bg-[#FDFCFB] pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="animate-pulse bg-white rounded-lg p-6 shadow-md max-w-md w-full mx-auto h-[240px] flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="h-4 shimmer rounded w-5/6 mx-auto" />
              <div className="h-4 shimmer rounded w-full mx-auto" />
              <div className="h-4 shimmer rounded w-11/12 mx-auto" />
              <div className="h-4 shimmer rounded w-3/4 mx-auto" />
            </div>
            <div className="space-y-2 text-right mt-6">
              <div className="h-3 bg-gray-300 rounded w-1/2 ml-auto" />
              <div className="h-3 bg-gray-200 rounded w-1/3 ml-auto" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
