const socials = [
  { label: 'GitHub', handle: '@dumbesthuman', href: 'https://github.com/dumbesthuman' },
  { label: 'LinkedIn', handle: 'Ritesh Hiremath', href: 'https://linkedin.com/in/ritesh-hiremath-715074387' },
  { label: 'Twitter/X', handle: '@riteshrhiremath', href: 'https://twitter.com/riteshrhiremath' },
  { label: 'Email', handle: 'riteshhiremath@gmail.com', href: 'mailto:riteshhiremath2004@gmail.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-dim overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Big CTA */}
        <div className="mb-20 text-center">
          <div className="reveal mb-4">
            <span className="section-label text-acid">// 04 — Contact</span>
          </div>

          <div className="reveal overflow-hidden">
            <h2
              className="font-display font-extrabold text-paper leading-none"
              style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}
            >
              Let's
            </h2>
          </div>
          <div className="reveal overflow-hidden">
            <h2
              className="font-display font-extrabold leading-none acid-text"
              style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}
            >
              Talk.
            </h2>
          </div>

          <div className="reveal mt-8">
            <p className="text-mist text-lg max-w-md mx-auto font-body leading-relaxed">
              Have a project in mind, want to collaborate,
              or just want to say hi? I'm usually down.
            </p>
          </div>

          <div className="reveal mt-10">
            <a
              href="mailto:riteshhiremath2004@gmail.com"
              className="group inline-flex items-center gap-3 bg-acid text-ink font-display font-bold text-lg px-12 py-5 transition-all duration-300 hover:scale-105 hover:bg-white"
              data-hover
            >
              <span>Get In Touch</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="reveal border-t border-border pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socials.map(({ label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border p-6 hover:border-acid/50 transition-all duration-300"
                data-hover
              >
                <p className="section-label text-mist/40 mb-2">{label}</p>
                <p className="font-mono text-sm text-paper group-hover:text-acid transition-colors duration-300">
                  {handle}
                </p>
                <span className="block text-mist/30 group-hover:text-acid transition-all duration-300 group-hover:translate-x-1 mt-2">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="font-mono text-xs text-mist/40">
          © 2025 Ritesh Hiremath — Built with React 
        </span>
        <span className="font-mono text-xs text-mist/40">
          Designed & Developed by me ✦
        </span>
      </div>
    </section>
  );
}
