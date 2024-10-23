import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Importa íconos de redes sociales

const Footer = () => {
  return (
    <footer className="bg-primary text-text py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg md:text-xl text-accent mb-6 font-heading">
          ¡Gracias por visitarme! 👋
        </p>
        <p className="text-md md:text-lg text-text mb-6 font-sans">
          Espero que te haya gustado mi portfolio tanto como a mí me encantó
          crearlo. Si te interesa trabajar conmigo, no dudes en contactarme.
        </p>
        <p className="text-md md:text-lg text-text font-sans">
          Estoy disponible para nuevas oportunidades. ¡Envíame tu propuesta!
          <a
            href="mailto:altiorasoftware@gmail.com"
            className="text-secondary underline"
          >
            {" "}
          pablitoemartinez666@gmail.com
          </a>
        </p>

        {/* Redes sociales */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedin size={24} className="text-text hover:text-accent" />
          </a>
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <FaGithub size={24} className="text-text hover:text-accent" />
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter size={24} className="text-text hover:text-accent" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram size={24} className="text-text hover:text-accent" />
          </a>
        </div>

        <div className="mt-8">
          <p className="text-text font-sans">Desarrollado por Pablo Martínez 💜</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
