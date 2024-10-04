import React from "react";

// Importación de íconos (puedes usar una librería de íconos como react-icons o svg personalizados)
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";

const Tecnologias = () => {
  const tecnologias = [
    {
      nombre: "Next.js",
      icono: <SiNextdotjs className="w-10 h-10 text-green-500" />,
      descripcion:
        "Framework de React para aplicaciones web y sitios estáticos.",
    },
    {
      nombre: "React.js",
      icono: <SiReact className="w-10 h-10 text-green-500" />,
      descripcion:
        "Librería de JavaScript para construir interfaces de usuario.",
    },
    {
      nombre: "Tailwind CSS",
      icono: <SiTailwindcss className="w-10 h-10 text-green-500" />,
      descripcion:
        "Framework de CSS utilitario para diseñar rápidamente interfaces responsivas.",
    },
    {
      nombre: "PostgreSQL",
      icono: <SiPostgresql className="w-10 h-10 text-green-500" />,
      descripcion: "Sistema de gestión de bases de datos relacional.",
    },
    {
      nombre: "TypeScript",
      icono: <SiTypescript className="w-10 h-10 text-green-500" />,
      descripcion: "Lenguaje que añade tipos estáticos a JavaScript.",
    },
    {
      nombre: "Prisma",
      icono: <SiPrisma className="w-10 h-10 text-green-500" />,
      descripcion:
        "ORM para bases de datos, facilitando la interacción entre tu app y la base de datos.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-500">
          Tecnologías que utilizo
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tecnologias.map((tecnologia, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg text-center shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="mb-4">{tecnologia.icono}</div>
            <h3 className="text-xl font-semibold mb-2">{tecnologia.nombre}</h3>
            <p>{tecnologia.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologias;
