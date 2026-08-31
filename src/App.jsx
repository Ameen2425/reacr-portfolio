import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';
import { styled } from './styles/stitches.config';

const AppContainer = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$bg',
  color: '$textPrimary',
  position: 'relative',
  overflowX: 'hidden',
});

const MainContent = styled('main', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export default function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}
