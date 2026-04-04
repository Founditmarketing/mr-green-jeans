import { motion } from 'framer-motion';
import { ShieldAlert, Eye, AlertTriangle, UserCheck } from 'lucide-react';

export default function Safety() {
  const principles = [
    { num: '01', title: 'Stop-Work Authority', desc: "Every employee is empowered — and obligated — to stop work when conditions aren't safe. No exceptions.", icon: <ShieldAlert size={24} color="var(--amber)" /> },
    { num: '02', title: 'Incident Investigation', desc: 'When incidents occur, we communicate, investigate promptly, and share lessons learned across the entire business.', icon: <Eye size={24} color="var(--amber)" /> },
    { num: '03', title: 'Prompt Reporting', desc: 'No matter how minor, all workplace injuries and incidents are reported without delay.', icon: <AlertTriangle size={24} color="var(--amber)" /> },
    { num: '04', title: 'Personal Responsibility', desc: 'Every team member is accountable for their own safety and the safety of those working alongside them.', icon: <UserCheck size={24} color="var(--amber)" /> },
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <section className="section" style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="section-label">Our Commitment</div>
              <h1 className="section-title">SAFETY IS NOT<br />A <span style={{ color: 'var(--amber)' }}>CHOICE.</span></h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '500px' }}>
                Because the work we do is dangerous, nothing is more important than the safety of our people. Partnered with Knowledge Vine, we hold ourselves to the highest industry standards — every crew, every day.
              </p>
              
              <div style={{ padding: '2rem', background: 'var(--dark2)', borderLeft: '4px solid var(--amber)', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: 'var(--white)', marginBottom: '0.5rem' }}>41,200+</h4>
                <p style={{ fontFamily: 'Barlow Condensed', fontSize: '0.9rem', color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>Hours Without Incident</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {principles.map((p, idx) => (
                <motion.div 
                  key={p.num}
                  whileHover={{ x: 10, borderColor: 'rgba(0, 212, 255, 0.2)' }}
                  style={{ background: 'var(--dark)', border: '1px solid var(--glass-border)', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', transition: 'all 0.3s' }}
                >
                  <div style={{ width: '50px', height: '50px', flexShrink: 0, background: 'rgba(245,166,35,0.06)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--white)', marginBottom: '0.5rem' }}>{p.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
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
