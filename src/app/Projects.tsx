import { projectsData } from "../data/projectsData"; // Importa los datos de los proyectos
import Image from "next/image"; // Importa el componente Image de Next.js

const Projects = () => {
  return (
    <section className="text-gray-400 bg-primary body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <div className="w-24 h-full bg-accent"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-full text-text font-heading text-3xl mb-2 sm:mb-0 text-center">
              Mis Proyectos
            </h1>
          </div>
        </div>

        {/* Renderizar proyectos utilizando el array importado */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {projectsData.map((project, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 relative">
                {/* Utilizar el componente Image en lugar de img */}
                <Image
                  alt={project.title}
                  src={project.image}
                  layout="fill"
                  objectFit="cover"
                  quality={75} // Puedes ajustar la calidad si lo deseas
                />
              </div>
              <h2 className="text-xl font-heading text-text mt-5">
                {project.title}
              </h2>
              <p className="text-base leading-relaxed mt-2 text-secondary">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-accent inline-flex items-center mt-3 hover:text-accent-dark transition duration-300"
              >
                Ver Proyecto
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
