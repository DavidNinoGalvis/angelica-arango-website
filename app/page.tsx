// app/page.tsx
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Guias from "@/components/Guias";
import Testimonios from "@/components/Testimonios";
import Faq from "@/components/Faq";
import Teamwork from "@/components/Teamwork";

//import Contacto from "@/components/sections/home/Contacto";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Testimonios />
      <Faq />
      <Guias />
      <Teamwork />
    </main>
  );
}
