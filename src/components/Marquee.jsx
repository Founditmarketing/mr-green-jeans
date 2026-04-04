import { motion } from 'framer-motion';

export default function Marquee() {
  const items = [
    'DISTRIBUTION', 'TRANSMISSION', 'SUBSTATION', 'STORM RESTORATION', 
    'BORING', 'UNDERGROUND', 'SAFETY LEADER', 'VETERAN OWNED',
    'DISTRIBUTION', 'TRANSMISSION', 'SUBSTATION', 'STORM RESTORATION', 
    'BORING', 'UNDERGROUND', 'SAFETY LEADER', 'VETERAN OWNED'
  ];

  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(0, 168, 255,0.08)', borderBottom: '1px solid rgba(0, 168, 255,0.08)', padding: '1.2rem 0', background: 'var(--dark2)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '100px', background: 'linear-gradient(90deg, var(--dark2), transparent)', zIndex: 10 }}></div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '100px', background: 'linear-gradient(-90deg, var(--dark2), transparent)', zIndex: 10 }}></div>
      
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        style={{ display: 'flex', width: 'max-content' }}
      >
        {items.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '0 2.5rem', whiteSpace: 'nowrap' }}>
            <div style={{ width: '8px', height: '8px', background: 'var(--blue)', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 168, 255,0.8)' }}></div>
            <span style={{ fontFamily: 'Bebas Neue', fontSize: '1.3rem', letterSpacing: '0.2em', color: 'var(--text)' }}>
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
