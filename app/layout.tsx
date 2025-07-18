import "./globals.css";
import { ReactNode } from "react";
import { Noto_Serif, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import ApolloWrapper from "@/components/ApolloWrapper";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import Footer from "@/components/Footer";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Angélica Arango | Psicóloga",
  description: "Landing page profesional para acompañamiento emocional.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${notoSerif.variable} ${montserrat.variable} bg-gray-50 text-gray-900`}
      >
        <ApolloWrapper>
          <Navbar />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
