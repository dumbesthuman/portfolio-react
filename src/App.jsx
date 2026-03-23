import { useState, useEffect } from 'react';
import { useReveal } from './hooks/useReveal';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/globals.css';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useReveal();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    if (loaded) {
      const timer = setTimeout(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) entry.target.classList.add('visible');
            });
          },
          { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
        );
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    <div className="noise">
      <Loader onComplete={() => setLoaded(true)} />

      <div className="hidden md:block">
        <Cursor />
      </div>

      <div
        className="transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}
