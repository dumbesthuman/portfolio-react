import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.classList.add('expanded');
      ring.classList.add('expanded');
    };

    const onLeave = () => {
      dot.classList.remove('expanded');
      ring.classList.remove('expanded');
    };

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll('a, button, [data-hover]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
