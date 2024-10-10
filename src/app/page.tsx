import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AboutMe from "./aboutMe";
// import Projects from "./Projects";
import Footer from "@/components/footer";
<<<<<<< HEAD
// import Skills from "./Skills";
import FormularioContacto from "@/components/formContac";
// import Projects from "./Projects";
=======
import Skills from "./Skills";
import FormularioContacto from "@/components/formContac";

>>>>>>> 28668fb (feat: implementar configuración global de TailwindCSS y aplicar estilos consistentes en todos los componentes)

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
<<<<<<< HEAD
      {/* <Skills /> */}
      {/* <Projects /> */}
=======
      <Skills />
      <Projects />
>>>>>>> 28668fb (feat: implementar configuración global de TailwindCSS y aplicar estilos consistentes en todos los componentes)
      <FormularioContacto />
      <Footer />
    </div>
  );
}
