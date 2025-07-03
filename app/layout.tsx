// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Angélica Arango | Psicóloga",
  description: "Landing page profesional para acompañamiento emocional.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
