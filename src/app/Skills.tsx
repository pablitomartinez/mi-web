// components/Skills.tsx

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-xl font-semibold">JavaScript</p>
          </div>
          <div>
            <p className="text-xl font-semibold">React</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Next.js</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
