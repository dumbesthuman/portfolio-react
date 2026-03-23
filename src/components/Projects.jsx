import { useState } from 'react';
import { projects } from '../data';

function ProjectItem({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.link}
      className="project-item group block border-t border-border last:border-b py-6 md:py-8 cursor-none reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
    >
      <div className="grid grid-cols-12 items-center gap-4">

        {/* Index */}
        <div className="col-span-1 hidden md:block">
          <span className="font-mono text-xs text-mist/40">{project.id}</span>
        </div>

        {/* Title + description */}
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-start gap-4">
            <div>
              <h3
                className="font-display font-bold text-2xl md:text-3xl text-paper transition-colors duration-300"
                style={{ color: hovered ? project.color : undefined }}
              >
                {project.title}
              </h3>
              <p className="text-mist text-sm mt-1 font-mono">{project.tagline}</p>
            </div>
          </div>

          {/* Expand on hover */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: hovered ? '100px' : '0px' }}
          >
            <p className="text-mist/70 text-sm mt-3 leading-relaxed pr-4">
              {project.description}
            </p>
          </div>
        </div>

        {/* Category */}
        <div className="col-span-6 md:col-span-2 hidden md:block">
          <span className="section-label text-mist/50">{project.category}</span>
        </div>

        {/* Tech stack */}
        <div className="col-span-12 md:col-span-3 flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-xs border border-border/50 px-2 py-1 text-mist/60 transition-all duration-300"
              style={{ borderColor: hovered ? `${project.color}40` : undefined, color: hovered ? project.color : undefined }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="col-span-1 hidden md:flex justify-end">
          <span
            className="text-mist transition-all duration-300 text-lg"
            style={{ color: hovered ? project.color : undefined, transform: hovered ? 'translate(4px, -4px)' : 'none' }}
          >
            ↗
          </span>
        </div>
      </div>

      {/* Hover line at bottom */}
      <div
        className="project-line h-px mt-4 md:mt-0 transition-all duration-500"
        style={{ background: project.color, opacity: hovered ? 0.6 : 0 }}
      />
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-dim">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="reveal mb-3">
              <span className="section-label text-acid">// 02 — Work</span>
            </div>
            <h2
              className="reveal font-display font-extrabold text-paper leading-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Selected
              <br />
              <span className="gradient-text">Projects.</span>
            </h2>
          </div>
          <div className="reveal">
            <p className="text-mist text-sm max-w-xs font-body leading-relaxed">
              A mix of web, hardware, and game projects.
              Each one taught me something new.
            </p>
          </div>
        </div>

        {/* Project list */}
        <div className="stagger-parent">
          {projects.map((project, i) => (
            <ProjectItem key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
