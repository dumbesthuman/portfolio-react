import { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Quickly count from 0 to 100
    const steps = 28;
    const totalTime = 1600; // ms
    let current = 0;

    const increments = Array.from({ length: steps }, (_, i) => {
      // Ease-out: faster at start, slower at end
      const t = i / (steps - 1);
      return Math.round((1 - Math.pow(1 - t, 2)) * 100);
    });

    let i = 0;
    const interval = setInterval(() => {
      if (i < increments.length) {
        setCount(increments[i]);
        i++;
      } else {
        clearInterval(interval);
        setCount(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    }, totalTime / steps);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-ink flex flex-col justify-between p-8 transition-all duration-700 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top: logo */}
      <div className="flex items-center justify-between">
        <span className="font-display font-bold text-xl acid-text">YN</span>
        <span className="section-label text-mist/40">Loading</span>
      </div>

      {/* Center */}
      <div>
        <div className="font-display font-extrabold text-paper/10 leading-none select-none"
          style={{ fontSize: 'clamp(80px, 18vw, 240px)' }}>
          {String(count).padStart(2, '0')}
        </div>
      </div>

      {/* Bottom: progress bar + label */}
      <div className="space-y-3">
        <div className="w-full h-px bg-border">
          <div
            className="h-full bg-acid transition-all duration-100"
            style={{ width: `${count}%` }}
          />
        </div>
        <div className="flex justify-between">
          <span className="section-label text-mist/40">Initializing portfolio</span>
          <span className="font-mono text-xs text-acid">{count}%</span>
        </div>
      </div>
    </div>
  );
}
