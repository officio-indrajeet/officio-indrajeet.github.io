import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Experience from "../src/components/Experience";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Blogs from "../src/components/Blogs";
import Education from "../src/components/Education";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Blogs />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
