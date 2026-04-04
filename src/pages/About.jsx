import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <section className="section" style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
                <div className="grid-bg" style={{ zIndex: 1, opacity: 0.5 }}></div>
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" alt="Transmission Lines" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(0,212,255,0.15)', borderRadius: '12px', pointerEvents: 'none', zIndex: 2 }}></div>
                
                <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: 'var(--amber)', padding: '1.5rem 2rem', borderRadius: '8px', zIndex: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: '3rem', color: 'var(--dark)', lineHeight: 1 }}>VOSB</div>
                  <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dark)', fontWeight: 700, marginTop: '0.2rem' }}>Certified Veteran-Owned</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="section-label">Who We Are</div>
              <h2 className="section-title" style={{ fontSize: '3.5rem' }}>FAMILY OWNED.<br/><span style={{ color: 'var(--volt)' }}>VALUES DRIVEN.</span></h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text)' }}>
                Shelton Energy Solutions is one of the fastest-growing overhead and underground utility contractors serving the Gulf South. We are a proud Veteran-Owned Small Business delivering world-class transmission, distribution, substation, and renewable maintenance services.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem', color: 'var(--text)' }}>
                From the big city to the swamp, our linemen and support staff bring the equipment, expertise, and relentless work ethic to complete every project on time, efficiently, and — most importantly — safely.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {[
                  { title: 'Safety First', icon: <ShieldCheck size={20} color="var(--volt)" />, desc: 'Industry-leading safety culture' },
                  { title: 'People Focused', icon: <Users size={20} color="var(--volt)" />, desc: 'Our crew is our greatest asset' },
                  { title: 'Mission Ready', icon: <Zap size={20} color="var(--volt)" />, desc: 'Storm response when it matters' },
                  { title: 'Proven Results', icon: <Target size={20} color="var(--volt)" />, desc: '1,000+ projects delivered' }
                ].map((val) => (
                  <div key={val.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {val.icon}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white)' }}>{val.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text)', marginTop: '0.2rem' }}>{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Style for mobile breakpoint */}
      <style>{`
        @media(max-width: 900px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}
