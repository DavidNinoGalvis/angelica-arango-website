export default function Guias() {
  return (
    <section className="mt-24 max-w-4xl mx-auto px-6">
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
  );
}
