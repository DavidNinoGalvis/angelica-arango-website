"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CharacterSVG from "@/components/svg/CharacterSVG";

export default function AnimatedCharacter() {
  const eyeLeftRef = useRef<SVGGElement | null>(null);
  const eyeRightRef = useRef<SVGGElement | null>(null);

  // Movimiento de ojos con el mouse
  useEffect(() => {
    const moveEyes = (e: MouseEvent) => {
      const eyes = [eyeLeftRef.current, eyeRightRef.current];
      eyes.forEach((eye) => {
        if (!eye) return;

        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const maxOffset = 2;
        const angle = Math.atan2(dy, dx);
        const x = Math.cos(angle) * maxOffset;
        const y = Math.sin(angle) * maxOffset;

        eye.setAttribute("transform", `translate(${x}, ${y})`);
      });
    };

    window.addEventListener("mousemove", moveEyes);
    return () => window.removeEventListener("mousemove", moveEyes);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: [10, 4, 10], // flotante
      }}
      transition={{
        opacity: { duration: 0.6 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="flex justify-center md:justify-end md:-translate-x-10"
    >
      <CharacterSVG
        ref={(node: SVGSVGElement | null) => {
          if (!node) return;
          eyeLeftRef.current = node.querySelector("#eye-left");
          eyeRightRef.current = node.querySelector("#eye-right");
        }}
        className="w-full max-w-none scale-[1.25] pointer-events-none select-none"
      />
    </motion.div>
  );
}
