import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener('mousemove', move);
    const targets = document.querySelectorAll('a, button, .bento-card');
    targets.forEach(t => { t.addEventListener('mouseenter', addHover); t.addEventListener('mouseleave', removeHover); });

    return () => {
      window.removeEventListener('mousemove', move);
      targets.forEach(t => { t.removeEventListener('mouseenter', addHover); t.removeEventListener('mouseleave', removeHover); });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      animate={{ x: pos.x - (hovering ? 20 : 6), y: pos.y - (hovering ? 20 : 6), scale: hovering ? 1 : 1 }}
      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: hovering ? 40 : 12,
        height: hovering ? 40 : 12,
        borderRadius: '50%',
        background: hovering ? 'transparent' : 'var(--gold)',
        border: hovering ? '2px solid var(--gold)' : 'none',
        opacity: hovering ? 0.5 : 0.6,
        pointerEvents: 'none',
        zIndex: 10000,
        mixBlendMode: 'difference',
        transition: 'width 0.3s, height 0.3s, background 0.3s, border 0.3s, opacity 0.3s',
      }}
    />
  );
}
