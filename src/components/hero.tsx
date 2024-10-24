
// components/Hero.tsx
const Hero = () => {
  return (
    <section className="bg-primary text-background h-screen flex flex-col justify-center items-center space-y-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl mb-4 font-light text-accent">
          Full Stack Developer apasionado por el diseño y las soluciones
          tecnológicas
        </h1>
        <h2 className="text-3xl md:text-2xl font-heading font-bold mb-6">
          Experto en UX/UI con habilidades en Node.js y bases de datos
        </h2>
        <p className="text-lg md:text-xl mb-6 text-secondary">
          Enfocado en crear experiencias de usuario impactantes y funcionales
        </p>

        <div className="flex flex-col items-center space-y-4">
          <button className="bg-accent text-background px-8 py-3 rounded-full hover:bg-accent-dark transition duration-300 max-w-xs w-full transform hover:scale-105 hover:text-primary hover:shadow-lg">
            Hablemos sobre tu proyecto
          </button>

          <button className="bg-secondary text-background px-8 py-3 rounded-full hover:bg-secondary-dark transition duration-300 max-w-xs w-full transform hover:scale-105 hover:text-primary hover:shadow-lg">
            <a
              href="/cv/CV-PabloMartinez.pdf" // Ruta al archivo en la carpeta public
              target="_blank" // Abre en una nueva pestaña
              rel="noopener noreferrer" // Seguridad al abrir enlaces externos
              className="w-full h-full flex justify-center items-center"
            >
              Ver CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
