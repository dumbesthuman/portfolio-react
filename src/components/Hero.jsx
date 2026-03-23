import { useTyping } from '../hooks/useTyping';

const roles = ['full-stack dev', 'hardware hacker', 'UI obsessive', 'problem solver', 'builder'];

export default function Hero() {
  const typed = useTyping(roles, 90, 2200);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-acid/4 blur-[120px] blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-rust/5 blur-[100px] blob pointer-events-none" style={{ animationDelay: '-4s' }} />

      {/* Top corner tag */}
      <div className="absolute top-28 right-6 md:right-12 text-right">
        <p className="section-label text-mist/60 slide-up slide-up-1">
          Based in India
        </p>
        <p className="section-label text-mist/60 slide-up slide-up-2">
          Open to work ●
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pt-24 w-full">

        {/* Overline */}
        <div className="slide-up slide-up-1 mb-6">
          <span className="font-mono text-xs text-acid tracking-widest uppercase">
            ∞ Portfolio 2025
          </span>
        </div>

        {/* Main heading */}
        <div className="overflow-hidden mb-2">
          <h1 className="slide-up slide-up-2 font-display font-extrabold leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(56px, 11vw, 160px)' }}>
            <span className="text-paper">Ritesh</span>
          </h1>
        </div>
        <div className="overflow-hidden mb-2">
          <h1 className="slide-up slide-up-3 font-display font-extrabold leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(56px, 11vw, 160px)' }}>
            <span className="acid-text">Hiremath.</span>
          </h1>
        </div>

        {/* Subtitle row */}
        <div className="slide-up slide-up-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-8 mb-12">
          <span className="font-mono text-sm text-mist">I build things as a</span>
          <span className="font-display font-bold text-lg text-paper typing-cursor min-w-[200px]">
            {typed}
          </span>
        </div>

        {/* Bottom row */}
        <div className="slide-up slide-up-5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <p className="text-mist font-body text-base max-w-sm leading-relaxed">
            I turn complex problems into clean solutions. From interactive web to embedded hardware — I like building things that work and look like they should.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-acid text-ink font-display font-bold text-sm px-8 py-4 transition-all duration-300 hover:scale-105"
              data-hover
            >
              <span className="relative z-10">View Work</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm text-mist border border-border px-8 py-4 hover:text-paper hover:border-paper/50 transition-all duration-300"
              data-hover
            >
              Say Hi →
            </button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="slide-up slide-up-6 max-w-7xl mx-auto px-6 w-full mt-20 pb-12 border-t border-border pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '5+', label: 'Projects Shipped' },
            { num: '2+', label: 'Years Building' },
            { num: '∞', label: 'Things to Learn' },
            { num: '1', label: 'Goal: Excellence' },
          ].map(({ num, label }) => (
            <div key={label} className="group">
              <p className="counter-num text-4xl text-paper group-hover:text-acid transition-colors duration-300">
                {num}
              </p>
              <p className="section-label text-mist/60 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 slide-up slide-up-6">
        <span className="section-label text-mist/40">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-mist/40 to-transparent" />
      </div>
    </section>
  );
}
