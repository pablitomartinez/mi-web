import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AboutMe from "./aboutMe";
import Footer from "@/components/footer";
import Tecnologias from "./Tecnologias";
import FormularioContacto from "@/components/formContac";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tecnologias />
      <AboutMe />
      <FormularioContacto />
      <Footer />
    </div>
  );
}
