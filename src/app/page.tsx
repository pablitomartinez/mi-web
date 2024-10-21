import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AboutMe from "./aboutMe";
import Footer from "@/components/footer";
import FormularioContacto from "@/components/formContac";
import Skills from "./Skills";
import Projects from "./Projects";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <FormularioContacto />
      <Footer />
    </div>
  );
}
