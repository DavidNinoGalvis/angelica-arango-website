// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-20 md:py-16 bg-white text-gray-900">
      {/* HERO */}
      <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <Image
          src="/angelica.jpg" // <-- pon aquí una foto en /public
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
          Te acompaño en tu proceso emocional a través de sesiones
          personalizadas y herramientas prácticas. Conoce mis guías digitales,
          recomendaciones y cómo agendar tu primera cita.
        </p>
        <a
          href="#contacto"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
        >
          Agenda tu cita
        </a>
      </section>

      {/* SECCIÓN: SOBRE MÍ */}
      <section className="mt-24 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Sobre mí</h3>
        <p className="text-gray-700 leading-relaxed">
          Soy psicóloga con más de 8 años de experiencia en el acompañamiento de
          adultos, jóvenes y parejas. Mi enfoque combina la escucha activa con
          estrategias prácticas para promover el bienestar emocional y la
          autorregulación.
        </p>
      </section>

      {/* SECCIÓN: GUÍAS */}
      <section className="mt-24 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Guías digitales</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold">Guía para la ansiedad</h4>
            <p className="text-gray-600 text-sm">
              Ejercicios prácticos para reducir la ansiedad en tu día a día.
            </p>
          </li>
          <li className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold">Técnicas de autocuidado</h4>
            <p className="text-gray-600 text-sm">
              Estrategias simples para cuidar tu salud mental desde casa.
            </p>
          </li>
        </ul>
      </section>

      {/* SECCIÓN: TESTIMONIOS */}
      <section className="mt-24 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Testimonios</h3>
        <blockquote className="border-l-4 pl-4 italic text-gray-700">
          “Angélica me ayudó a recuperar la confianza en mí misma. Sus sesiones
          me cambiaron la vida.” — Laura G.
        </blockquote>
      </section>

      {/* SECCIÓN: CONTACTO */}
      <section
        id="contacto"
        className="mt-24 max-w-4xl mx-auto bg-gray-100 p-6 rounded-xl"
      >
        <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="border px-4 py-2 rounded"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
          >
            Enviar mensaje
          </button>
        </form>
      </section>

      <footer className="mt-24 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Angélica Arango. Todos los derechos
        reservados.
      </footer>
    </main>
  );
}
