import Image from "next/image";

export default function HeroAngie() {
  return (
    <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto px-6 py-12">
      <Image
        src="/angelica.jpg"
        alt="Angélica Arango"
        width={160}
        height={160}
        className="rounded-full border border-gray-200 shadow-md"
      />
      <h1 className="text-3xl md:text-5xl font-bold">Angélica Arango</h1>
      <h2 className="text-xl text-gray-600">
        Psicóloga especializada en acompañamiento emocional y desarrollo
        personal
      </h2>
      <p className="text-base text-gray-700 leading-relaxed">
        Te acompaño en tu proceso emocional a través de sesiones personalizadas
        y herramientas prácticas. Conoce mis guías digitales, recomendaciones y
        cómo agendar tu primera cita.
      </p>
      <a
        href="#contacto"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
      >
        Agenda tu cita
      </a>
    </section>
  );
}
