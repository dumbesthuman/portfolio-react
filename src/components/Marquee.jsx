import { skills } from '../data';

export default function Marquee() {
  const doubled = [...skills, ...skills];

  return (
    <div className="overflow-hidden border-y border-border py-4 bg-dim">
      <div className="marquee-track">
        {doubled.map((skill, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="font-display font-semibold text-sm text-paper/60 uppercase tracking-widest whitespace-nowrap">
              {skill}
            </span>
            <span className="text-acid text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
