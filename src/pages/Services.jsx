import { motion } from 'framer-motion';
import { Target, Zap, Shield, Wrench, HardHat, Pickaxe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { id: 'distribution', title: 'Distribution', icon: <Zap size={32} color="var(--volt)" />, desc: 'Turnkey overhead and underground distribution — new installations, reconductors, rehab work. From backyard pole changeouts to full right-of-way builds.' },
    { id: 'transmission', title: 'Transmission', icon: <Shield size={32} color="var(--volt)" />, desc: 'High-voltage transmission line construction, maintenance, and emergency repair. Engineered for reliability at scale across critical infrastructure.' },
    { id: 'substation', title: 'Substation', icon: <Wrench size={32} color="var(--volt)" />, desc: 'Complete substation construction, upgrades, and maintenance. From foundations to energization — we deliver reliable power conversion.' },
    { id: 'storm', title: 'Storm Restoration', icon: <Target size={32} color="var(--volt)" />, desc: 'Rapid-deployment storm response crews ready to mobilize at a moment\'s notice. When disaster strikes, we restore power and rebuild communities.' },
    { id: 'boring', title: 'Boring', icon: <HardHat size={32} color="var(--volt)" />, desc: 'Directional and horizontal boring services for underground utility installation. Minimal surface disruption with precision underground placement.' },
    { id: 'underground', title: 'Underground', icon: <Pickaxe size={32} color="var(--volt)" />, desc: 'Full underground utility construction — cable installation, trenching, conduit systems, and splice work for reliable below-grade power delivery.' }
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <section className="section" style={{ padding: '2rem 2rem 5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>What We Do</div>
              <h1 className="section-title">FULL-SPECTRUM <span style={{ color: 'var(--amber)' }}>SERVICES</span></h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.8 }}>
                Shelton Energy Solutions delivers a complete field of scheduled and emergency utility services — from routine maintenance to large-scale storm restoration across the Gulf South.
              </p>
            </motion.div>
          </div>

          <div className="mobile-carousel hide-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {services.map((srv, idx) => (
              <motion.div 
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, borderColor: 'rgba(0,212,255,0.4)' }}
                style={{ background: 'var(--dark2)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '3rem 2.5rem', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--volt), var(--amber))', opacity: 0, transition: 'opacity 0.3s' }} className="hover-bar" />
                <div style={{ width: '70px', height: '70px', background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  {srv.icon}
                </div>
                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem', letterSpacing: '0.05em' }}>{srv.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text)', marginBottom: '2rem' }}>{srv.desc}</p>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Barlow Condensed', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--volt)' }}>
                  Request Quote <ArrowRight size={16} />
                </Link>
                <style>{`
                  div[style*="overflow: hidden"]:hover .hover-bar { opacity: 1 !important; }
                `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
