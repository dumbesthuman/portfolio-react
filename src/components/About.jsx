export default function About() {
  return (
    <section id="about" className="py-32 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-12 items-start">

        {/* Left: Label + heading */}
        <div className="md:col-span-5">
          <div className="reveal mb-4">
            <span className="section-label text-acid">// 01 — About</span>
          </div>
          <h2 className="reveal font-display font-extrabold leading-tight text-paper"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            I build
            <br />
            <span className="gradient-text">without limits.</span>
          </h2>

          {/* Portrait placeholder with ASCII art feel */}
          <div className="reveal mt-10 relative w-48 h-48 border border-border group">
            
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-acid/30 transition-all duration-300 group-hover:-bottom-5 group-hover:-right-5" />
           
          </div>
        </div>

        {/* Right: Bio */}
        <div className="md:col-span-7 space-y-6">
          <div className="reveal pt-12 md:pt-16">
            <p className="text-paper/80 text-lg leading-relaxed font-body">
              I'm a developer who cares about the full stack — from the
              <span className="text-acid"> database schema </span>
              to the
              <span className="text-acid"> pixel-perfect animation</span>.
              I started with Arduino projects and ended up building web apps. Go figure.
            </p>
          </div>
          <div className="reveal">
            <p className="text-mist text-base leading-relaxed">
              I'm currently studying Computer Science while freelancing on the side.
              My sweet spot is at the intersection of good design and solid engineering —
              where something looks great <em>and</em> works great.
            </p>
          </div>
          <div className="reveal">
            <p className="text-mist text-base leading-relaxed">
              Outside of code: competitive gaming, tinkering with electronics,
              and occasionally having opinions about typography on the internet.
            </p>
          </div>

          {/* Tags */}
          <div className="reveal pt-4 flex flex-wrap gap-2">
            {['React', 'Node.js', 'Arduino', 'Unity', 'Python', 'C++', 'Figma'].map(tag => (
              <span
                key={tag}
                className="font-mono text-xs border border-border px-3 py-1.5 text-mist hover:border-acid/50 hover:text-acid transition-all duration-300"
                data-hover
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
