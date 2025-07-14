// app/page.tsx
import HeroAngie from "@/components/HeroAngie";
import AboutMe from "@/components/AboutMe";
import Guias from "@/components/Guias";
//import Testimonios from "@/components/sections/home/Testimonios";
//import Contacto from "@/components/sections/home/Contacto";

export default function Home() {
  return (
    <main>
      <HeroAngie />
      <AboutMe />
      <Guias />
      {/*<Testimonios />
      <Contacto />*/}
    </main>
  );
}
