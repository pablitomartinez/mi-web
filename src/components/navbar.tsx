"use client";
import { useState } from "react";
import { Link } from "react-scroll"; // Importamos Link de react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between fixed top-0 w-full z-50">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-orange-600">A</div>
      </div>

      {/* Menú en pantallas grandes */}
      <div className="hidden md:flex space-x-8">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-50}
          className="hover:text-orange-600 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-50}
          className="hover:text-orange-600 cursor-pointer"
        >
          About Me
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-50}
          className="hover:text-orange-600 cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-50}
          className="hover:text-orange-600 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-50}
          className="hover:text-orange-600 cursor-pointer"
        >
          Contact
        </Link>
      </div>

      {/* Botón de menú en pantallas pequeñas */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black py-4 space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            className="block text-center hover:text-orange-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            className="block text-center hover:text-orange-600 cursor-pointer"
          >
            About Me
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
            className="block text-center hover:text-orange-600 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="block text-center hover:text-orange-600 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="block text-center hover:text-orange-600 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
