import { useState, useRef } from 'react';

export default function BeforeAfter({ before, after, height = '400px' }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(2, Math.min(98, x)));
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e) => { if (isDragging.current) handleMove(e.clientX); };
  const handleTouchMove = (e) => { handleMove(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      style={{
        position: 'relative', width: '100%', height, borderRadius: '16px',
        overflow: 'hidden', cursor: 'ew-resize', userSelect: 'none',
        touchAction: 'none',
      }}
    >
      {/* After (full background) */}
      <img src={after} alt="After" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />

      {/* Before (clipped) */}
      <div style={{ position: 'absolute', inset: 0, width: `${position}%`, overflow: 'hidden' }}>
        <img src={before} alt="Before" style={{ position: 'absolute', top: 0, left: 0, width: `${100 / (position / 100)}%`, height: '100%', objectFit: 'cover', maxWidth: 'none' }} />
      </div>

      {/* Labels */}
      <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', color: '#fff', fontFamily: 'Barlow Condensed', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.4rem 0.8rem', borderRadius: '100px', zIndex: 3 }}>Before</div>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(207,167,80,0.85)', backdropFilter: 'blur(8px)', color: '#0f1e16', fontFamily: 'Barlow Condensed', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.4rem 0.8rem', borderRadius: '100px', zIndex: 3 }}>After</div>

      {/* Divider line */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${position}%`, width: '3px', background: 'var(--gold)', transform: 'translateX(-50%)', zIndex: 2, boxShadow: '0 0 12px rgba(207,167,80,0.5)' }} />

      {/* Handle */}
      <div style={{
        position: 'absolute', top: '50%', left: `${position}%`,
        transform: 'translate(-50%, -50%)', zIndex: 3,
        width: '44px', height: '44px', borderRadius: '50%',
        background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f1e16" strokeWidth="2.5" strokeLinecap="round">
          <path d="M8 4l-6 8 6 8" /><path d="M16 4l6 8-6 8" />
        </svg>
      </div>
    </div>
  );
}
