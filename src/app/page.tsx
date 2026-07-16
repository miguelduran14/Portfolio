import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* Proyectos · Experiencia · Skills — próximas fases */}
      <Contact />
    </>
  );
}
