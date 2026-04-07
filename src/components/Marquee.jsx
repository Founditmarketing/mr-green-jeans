export default function Marquee() {
  const items = [
    'Tree Removal', 'Stump Grinding', 'Emergency Services', 'Free Estimates',
    '30+ Years Experience', 'Trim & Prune', 'Hazardous Tree Assessment',
    'Family Owned', 'Clean Up Services', 'Licensed & Insured'
  ];
  const doubled = [...items, ...items];

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid var(--glass-border)',
      borderBottom: '1px solid var(--glass-border)',
      padding: '1rem 0',
      background: 'var(--forest)',
    }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
