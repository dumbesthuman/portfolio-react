import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data';

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }) {
  const isHashLink = !project.link || project.link === '#';
  const isExternalLink = project.link && /^https?:\/\//.test(project.link);

  return (
    <article 
      className="panel-card flex-shrink-0 w-[310px] sm:w-[355px] md:w-[460px] h-[430px] md:h-[490px] border border-border bg-dim p-6 md:p-10 flex flex-col justify-between relative group transition-all duration-300 hover:border-paper/30"
      style={{
        boxShadow: 'none',
        transform: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `8px 8px 0px ${project.color}`;
        e.currentTarget.style.transform = 'translate(-4px, -4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      {/* Top row: Category + Year */}
      <div className="flex justify-between items-center text-[10px] md:text-xs font-mono text-mist/60">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      {/* Main Content */}
      <div className="mt-6 md:mt-8 flex-grow flex flex-col justify-start">
        {/* Project Number */}
        <span className="font-mono text-xs md:text-sm mb-2 block" style={{ color: project.color }}>
          // {project.id}
        </span>
        
        {/* Title */}
        <h3 className="font-display font-black text-2xl md:text-3xl text-paper transition-all duration-300 mb-3 md:mb-4 group-hover:text-opacity-100">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs md:text-sm font-mono mb-3 text-paper/70 font-semibold leading-relaxed">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-xs md:text-sm text-mist/80 leading-relaxed font-body">
          {project.description}
        </p>
      </div>

      {/* Bottom: Tech stack + links */}
      <div className="mt-auto space-y-4 md:space-y-6">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-[9px] md:text-xs border border-border/80 px-2 py-0.5 md:px-2.5 md:py-1 text-mist transition-all duration-300 group-hover:border-paper/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="flex justify-between items-center pt-3 border-t border-border/30">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-mist group-hover:text-paper transition-colors duration-300">
            {project.status}
          </span>
          {!isHashLink && (
            <a
              href={project.link}
              target={isExternalLink ? '_blank' : undefined}
              rel={isExternalLink ? 'noopener noreferrer' : undefined}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center text-paper group-hover:border-paper group-hover:bg-paper group-hover:text-ink transition-all duration-300 text-sm md:text-base font-bold"
              data-hover
            >
              ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      mm.add('(min-width: 768px)', () => {
        const getDist = () => triggerRef.current.scrollWidth - window.innerWidth;
        
        gsap.to(triggerRef.current, {
          x: () => -getDist(),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${getDist()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="projects" 
      className="relative md:h-screen bg-dim flex flex-col justify-center py-16 md:py-0 overflow-hidden"
    >
      <div className="w-full flex flex-col gap-8 md:gap-10">
        {/* Header */}
        <div className="w-full px-6 md:px-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="reveal mb-2">
              <span className="section-label text-acid">// 02 — Work</span>
            </div>
            <h2
              className="reveal font-display font-extrabold text-paper leading-none"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
            >
              Selected <span className="gradient-text">Projects.</span>
            </h2>
          </div>
          <div className="reveal">
            <p className="text-mist text-xs md:text-sm max-w-sm font-body leading-relaxed">
              A collection of digital tools, hardware, and AI/web applications. 
              Drag or scroll to explore them sideways.
            </p>
          </div>
        </div>

        {/* Scrollable Track */}
        <div className="w-full overflow-x-auto md:overflow-x-visible scrollbar-none" style={{ scrollbarWidth: 'none' }}>
          <div 
            ref={triggerRef}
            className="flex flex-row gap-6 md:gap-8 pb-6 md:pb-0 w-max px-6 md:px-16"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Hint for mobile */}
        <div className="md:hidden text-center text-[10px] font-mono text-mist/60 mt-1">
          Swipe left/right to view projects
        </div>
      </div>
    </section>
  );
}
