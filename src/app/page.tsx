import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AboutMe from "./aboutMe";
// import Projects from "./Projects";
import Footer from "@/components/footer";
// import Skills from "./Skills";
import FormularioContacto from "@/components/formContac";
// import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      {/* <Skills /> */}
      {/* <Projects /> */}
      <FormularioContacto />
      <Footer />
    </div>
  );
}
