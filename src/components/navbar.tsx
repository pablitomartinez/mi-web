// components/Navbar.tsx
'use client';
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-orange-600">A</div>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-orange-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-orange-600">
          About Me
        </Link>
        <Link href="/skills" className="hover:text-orange-600">
          Skills
        </Link>
        <Link href="/portfolio" className="hover:text-orange-600">
          Projects
        </Link>
        <Link href="/services" className="hover:text-orange-600">
          Contact
        </Link>
      </div>

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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black py-4 space-y-4">
          <Link href="/" className="block text-center hover:text-orange-600">
            Home
          </Link>
          <Link
            href="/about"
            className="block text-center hover:text-orange-600"
          >
            About Me
          </Link>
          <Link
            href="/skills"
            className="block text-center hover:text-orange-600"
          >
            Skills
          </Link>
          <Link
            href="/portfolio"
            className="block text-center hover:text-orange-600"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="block text-center hover:text-orange-600"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-center hover:text-orange-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
