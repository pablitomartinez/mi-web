import {
  FaMobileAlt,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  {
    title: "Responsive Design",
    description:
      "Creación de diseños que se adaptan a cualquier tamaño de pantalla.",
    icon: <FaMobileAlt className="text-accent text-4xl" />,
  },
  {
    title: "JavaScript",
    description: "Fluidez en JavaScript moderno (ES6+).",
    icon: <FaJs className="text-accent text-4xl" />,
  },
  {
    title: "React.js",
    description: "Construcción de interfaces interactivas con React.",
    icon: <FaReact className="text-accent text-4xl" />,
  },
  {
    title: "HTML5",
    description: "Maquetación web semántica utilizando HTML5.",
    icon: <FaHtml5 className="text-accent text-4xl" />,
  },
  {
    title: "CSS3",
    description: "Estilos avanzados y layouts con CSS3.",
    icon: <FaCss3Alt className="text-accent text-4xl" />,
  },
  {
    title: "Git",
    description: "Control de versiones eficiente con Git y GitHub.",
    icon: <FaGitAlt className="text-accent text-4xl" />,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen bg-primary py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-background p-8 rounded-4xl shadow-custom-dark hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-center text-gray-200 mb-4">
                {skill.title}
              </h3>
              <p className="text-center text-text">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
