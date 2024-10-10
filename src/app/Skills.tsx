// components/Skills.tsx

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-accent text-text">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold text-center mb-8 text-primary">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-xl font-sans font-semibold">JavaScript</p>
          </div>
          <div>
            <p className="text-xl font-sans font-semibold">React</p>
          </div>
          <div>
            <p className="text-xl font-sans font-semibold">Next.js</p>
          </div>
          <div>
            <p className="text-xl font-sans font-semibold">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
