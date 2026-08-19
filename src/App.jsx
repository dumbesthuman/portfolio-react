import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './styles/globals.css';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      // Initialize Lenis smooth scroll
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      window.lenis = lenis;

      let rafId;
      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Section Reveal IntersectionObserver
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

      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(rafId);
        lenis.destroy();
        window.lenis = undefined;
      };
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
