// components/Hero.tsx
const Hero = () => {
  return (
    <section className="bg-primary text-text h-screen flex flex-col justify-center items-center">
      <h1 className="text-secondary text-3xl md:text-5xl mb-4">Im a</h1>
      <h2 className="text-background font-heading font-bold text-4xl md:text-7xl mb-8">
        ESTO ES HERO
      </h2>
      <button className="bg-accent text-background px-8 py-3 rounded-full hover:bg-orange-500 transition duration-300">
        Contact Me
      </button>
    </section>
  );
};

export default Hero;
