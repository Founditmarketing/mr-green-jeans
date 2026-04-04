import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Wrench, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ paddingBottom: '0' }}>
      {/* HERO SECTION */}
      <section className="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="grid-bg"></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 50%, rgba(0,212,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(245,166,35,0.05) 0%, transparent 60%)', zIndex: 0 }} />
        
        <div className="container" style={{ paddingTop: '8rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1.2rem', background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.25)', borderRadius: '100px', marginBottom: '2rem' }}
          >
            <div style={{ width: '6px', height: '6px', background: 'var(--amber)', borderRadius: '50%' }}></div>
            <span style={{ fontFamily: 'Barlow Condensed', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)' }}>Veteran-Owned &bull; Family Driven</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', color: 'var(--white)', lineHeight: 0.95, letterSpacing: '0.05em', marginBottom: '1.5rem', maxWidth: '900px' }}
          >
            POWERING THE <span style={{ color: 'var(--volt)', textShadow: '0 0 40px rgba(0,212,255,0.3)' }}>GRID</span>
            <span style={{ display: 'block', fontSize: 'clamp(1rem, 2.5vw, 2.2rem)', fontFamily: 'Barlow', fontWeight: '500', color: 'var(--text)', letterSpacing: '0', marginTop: '1rem' }}>
              Electric Utility Transmission & Distribution Systems
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text)', maxWidth: '560px', marginBottom: '2.5rem' }}
          >
            One of the fastest-growing overhead and underground utility contractors in the Gulf South. Safety-first. Mission-ready. Built to perform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link to="/services" className="btn btn-volt">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Request a Quote</Link>
          </motion.div>
        </div>
      </section>

      {/* STATS BENTO GRID */}
      <section className="section" style={{ background: 'var(--dark2)', borderTop: '1px solid var(--glass-border)', padding: '6rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            
            <motion.div 
              whileHover={{ y: -5, borderColor: 'rgba(0,212,255,0.3)' }}
              style={{ background: 'var(--dark)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '3rem 2rem', textAlign: 'center', transition: 'all 0.4s' }}
            >
              <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'Bebas Neue', color: 'var(--volt)', lineHeight: 1, marginBottom: '0.5rem' }}>
                1000<span style={{ color: 'var(--amber)', fontSize: '0.6em' }}>+</span>
              </div>
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Projects Completed</div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, borderColor: 'rgba(0,212,255,0.3)' }}
              style={{ background: 'var(--dark)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '3rem 2rem', textAlign: 'center', transition: 'all 0.4s' }}
            >
              <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'Bebas Neue', color: 'var(--volt)', lineHeight: 1, marginBottom: '0.5rem' }}>
                41,200<span style={{ color: 'var(--amber)', fontSize: '0.6em' }}>+</span>
              </div>
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Hours Without Incident</div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, borderColor: 'rgba(0,212,255,0.3)' }}
              style={{ background: 'var(--dark)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '3rem 2rem', textAlign: 'center', transition: 'all 0.4s' }}
            >
              <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'Bebas Neue', color: 'var(--volt)', lineHeight: 1, marginBottom: '0.5rem' }}>
                100<span style={{ color: 'var(--amber)', fontSize: '0.6em' }}>+</span>
              </div>
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Deployable Service Crews</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <div className="section-label">Capabilities</div>
            <h2 className="section-title">FULL-SPECTRUM <span style={{ color: 'var(--amber)' }}>ENERGY SERVICES</span></h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>From critical infrastructure construction to emergency storm response, we bring the expertise required to keep power flowing reliably.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Capability Card */}
            {[
              { title: 'Distribution', icon: <Zap color="var(--volt)" size={28} />, desc: 'Turnkey overhead and underground distribution — new installations, reconductors, rehab work. From backyard pole changeouts to full right-of-way builds.' },
              { title: 'Transmission', icon: <Shield color="var(--volt)" size={28} />, desc: 'High-voltage transmission line construction, maintenance, and emergency repair. Engineered for reliability at scale across critical infrastructure.' },
              { title: 'Substation', icon: <Wrench color="var(--volt)" size={28} />, desc: 'Complete substation construction, upgrades, and maintenance. From foundations to energization — we deliver reliable power conversion.' }
            ].map((srv, idx) => (
              <motion.div 
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, borderColor: 'rgba(0,212,255,0.4)' }}
                style={{ background: 'var(--dark2)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '2.5rem 2rem', position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--volt), var(--amber))', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.5s' }} className="hover-line" />
                <div style={{ width: '60px', height: '60px', background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {srv.icon}
                </div>
                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.8rem', color: 'var(--white)', marginBottom: '1rem', letterSpacing: '0.05em' }}>{srv.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text)', marginBottom: '1.5rem' }}>{srv.desc}</p>
                <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Barlow Condensed', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--volt)' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
                <style>{`
                  div[style*="cursor: pointer"]:hover .hover-line { transform: scaleX(1) !important; }
                `}</style>
              </motion.div>
            ))}

          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
