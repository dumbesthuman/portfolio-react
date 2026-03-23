import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-32 max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="mb-16">
        <div className="reveal mb-3">
          <span className="section-label text-acid">// 03 — Experience</span>
        </div>
        <h2
          className="reveal font-display font-extrabold text-paper leading-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          How I got
          <br />
          <span className="gradient-text">here.</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-0 stagger-parent">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="reveal group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-border last:border-0"
            >
              {/* Left: period */}
              <div className="md:pr-8 md:text-right">
                <span className="font-mono text-xs text-mist/60">{exp.period}</span>
              </div>

              {/* Dot on line */}
              <div className="absolute left-[196px] top-10 w-2 h-2 rounded-full bg-border group-hover:bg-acid transition-colors duration-300 hidden md:block" />

              {/* Right: content */}
              <div className="md:pl-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h3 className="font-display font-bold text-xl text-paper group-hover:text-acid transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <span className="text-mist/40 hidden sm:block">—</span>
                  <span className="font-mono text-sm text-mist/60">{exp.company}</span>
                </div>
                <p className="text-mist text-base leading-relaxed mb-4 font-body">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs border border-border px-2 py-1 text-mist/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
