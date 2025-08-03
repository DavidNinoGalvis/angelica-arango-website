// app/page.tsx
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Guias from "@/components/Guias";
import Testimonios from "@/components/Testimonios";
import Faq from "@/components/Faq";
import NewsletterSection from "@/components/NewsletterSection";

//import Contacto from "@/components/sections/home/Contacto";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Testimonios />
      <Faq />
      <NewsletterSection />
      <Faq />
    </main>
  );
}
