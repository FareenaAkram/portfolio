import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Projects from './sections/Projects/Projects';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Portfolio />
          <Contact />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
