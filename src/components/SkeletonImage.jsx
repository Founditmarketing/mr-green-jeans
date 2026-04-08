import { useState } from 'react';

export default function SkeletonImage({ src, alt, style = {}, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }} className={className}>
      {!loaded && (
        <div className="skeleton-shimmer" style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit',
        }} />
      )}
      <img
        src={src} alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease',
          ...style,
        }}
      />
    </div>
  );
}
