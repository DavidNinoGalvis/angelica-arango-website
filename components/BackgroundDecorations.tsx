"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const icons = [
  {
    src: "/icons/manos.svg",
    className: "top-[10%] left-[5%] w-10",
    delay: 0,
  },
  {
    src: "/icons/music.svg",
    className: "top-[30%] right-[10%] w-8",
    delay: 1,
  },
  {
    src: "/icons/five.svg",
    className: "bottom-[15%] left-[12%] w-12",
    delay: 2,
  },
  {
    src: "/icons/cafe.svg",
    className: "bottom-[5%] right-[6%] w-14",
    delay: 3,
  },
];

export default function BackgroundDecorations() {
  return (
    <>
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className={`absolute ${icon.className} opacity-20 pointer-events-none z-0`}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          <Image
            src={icon.src}
            alt={`Decorativo-${i}`}
            width={60}
            height={60}
            draggable={false}
          />
        </motion.div>
      ))}
    </>
  );
}
