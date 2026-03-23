import { useState, useEffect } from 'react';

const navLinks = ['about', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 border-b border-border bg-ink/80 backdrop-blur-md' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-bold text-lg tracking-tight text-paper hover:text-acid transition-colors"
            data-hover
          >
            <span className="acid-text">RTSH</span>
            <span className="text-mist">/</span>
            <span className="text-sm font-mono font-normal text-mist ml-1">dev</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="section-label hover-underline hover:text-paper transition-colors"
                data-hover
              >
                {link}
              </button>
            ))}
            <a
              href="/resume.pdf"
              className="font-mono text-xs border border-border px-4 py-2 text-paper/80 hover:border-acid hover:text-acid transition-all duration-300"
              data-hover
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            data-hover
          >
            <span className={`block w-6 h-px bg-paper transition-all ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-4 h-px bg-paper transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-paper transition-all ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="font-display font-bold text-5xl text-paper hover:text-acid transition-colors capitalize"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            {link}
          </button>
        ))}
      </div>
    </>
  );
}
