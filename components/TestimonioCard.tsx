import React from "react";

interface TestimonioCardProps {
  nombre: string;
  contenido: string;
  ciudad?: string;
}

export default function TestimonioCard({
  nombre,
  contenido,
  ciudad,
}: TestimonioCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <p className="text-gray-700 italic mb-4">&quot;{contenido}&quot;</p>
      <div className="text-right">
        <p className="font-semibold text-gray-900">{nombre}</p>
        {ciudad && <p className="text-sm text-gray-500">{ciudad}</p>}
      </div>
    </div>
  );
}
