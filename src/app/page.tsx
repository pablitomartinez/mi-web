import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AboutMe from "./aboutMe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  );
}
