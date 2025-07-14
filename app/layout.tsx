// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Angélica Arango | Psicóloga",
  description: "Landing page profesional para acompañamiento emocional.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
