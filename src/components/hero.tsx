// components/Hero.tsx
const Hero = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-gray-500 text-3xl md:text-5xl mb-4">I'm a</h1>
      <h2 className="text-white font-bold text-4xl md:text-7xl mb-8">
        GRAPHIC DESIGNER.
      </h2>
      <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition duration-300">
        Contact Me
      </button>
    </section>
  );
};

export default Hero;
