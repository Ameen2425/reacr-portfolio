import { globalStyles } from './styles/globalStyles';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  globalStyles();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
