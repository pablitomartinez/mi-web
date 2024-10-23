import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AboutMe from "./aboutMe";
import Footer from "@/components/footer";
import FormularioContacto from "@/components/formContac";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
        <Navbar />
        <div id="home">
          <Hero />
        </div>
      <div className="container mx-auto">
        {/* Sección Hero con ID */}
        {/* Sección AboutMe con ID */}
        <div id="about">
          <AboutMe />
        </div>
        {/* Sección Skills con ID */}
        <div id="skills">
          <Skills />
        </div>
        {/* Sección Projects con ID */}
        <div id="projects">
          <Projects />
        </div>
        {/* Sección Contacto con ID */}
        <div id="contact">
          <FormularioContacto />
        </div>
      </div>
        {/* Footer */}
        <Footer />
    </>
  );
}
