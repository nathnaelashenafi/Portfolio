import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";
import { About } from "../sections/About";
import { Hero } from "../sections/Hero";
import { Journey } from "../sections/Journey";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import { Certificates } from "../sections/Certificates";
import { Experience } from "../sections/Experience";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export function MainLayout() {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 border-b border-border bg-surface/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex gap-4 items-center">
          <Logo />
          <span className="text-xl text-primary-dark font-medium hidden sm:block">
            Nathnael Ashenafi
          </span>
        </div>

        <Navbar />

        <div className="flex gap-3 items-center">
          <Button />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="journey">
          <Journey />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}
