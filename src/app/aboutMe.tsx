import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="bg-primary text-text py-20 px-6 md:px-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:items-center justify-center text-center md:text-left">
        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 md:pr-8 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-accent">
            Sobre mí
          </h1>
          <p className="text-lg md:text-xl text-text mb-6">
            Me apasiona crear{" "}
            <span className="text-background font-bold">
              experiencias visuales impactantes
            </span>{" "}
            y ofrecer soluciones funcionales mediante el desarrollo web. Con una
            formación en diseño UX/UI, me especializo en diseñar interfaces
            centradas en el usuario y accesibles, garantizando una experiencia
            de usuario coherente y atractiva.
          </p>
          <p className="text-lg md:text-xl text-text mb-6">
            Aunque me gusta lo visual, también me estoy abriendo camino en el
            desarrollo full stack utilizando tecnologías como Node.js y bases de
            datos, siempre buscando aprender y mejorar en cada proyecto.
          </p>
          <p className="text-lg md:text-xl text-text">
            Actualmente formo parte del proyecto{" "}
            <span className="text-background font-bold">Altiora</span>, donde
            junto con un equipo nos dedicamos a ofrecer soluciones tecnológicas
            a empresas y emprendimientos. Estoy siempre abierto a nuevas
            oportunidades y colaboraciones.
          </p>
        </div>

        {/* Imagen redonda con botonera de redes sociales */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src="/perfil.png" // Ruta de tu imagen
              alt="Mi Foto"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Botonera de redes sociales */}
          <div className="flex justify-center mt-6 space-x-6 text-accent">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="hover:text-accent-dark transition duration-300"
              />
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={24}
                className="hover:text-accent-dark transition duration-300"
              />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={24}
                className="hover:text-accent-dark transition duration-300"
              />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={24}
                className="hover:text-accent-dark transition duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
