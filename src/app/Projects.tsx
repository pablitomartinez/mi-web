// components/Projects.tsx

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className= "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600">Description of Project 1.</p>
          </div>
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600">Description of Project 2.</p>
          </div>
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-600">Description of Project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
