import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '0' }}>
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '4rem 2rem' }}>
        <div className="container">
          <div style={{ background: 'var(--dark2)', border: '1px solid var(--glass-border)', borderRadius: '20px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }} className="career-grid">
            
            <div style={{ padding: '5rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 0% 0%, rgba(0,212,255,0.05) 0%, transparent 70%)' }}></div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-label">Join The Crew</div>
                <h1 className="section-title">BUILD YOUR CAREER AT <span style={{ color: 'var(--volt)' }}>SHELTON</span></h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '450px' }}>
                  We invest in our people with industry-leading training, advancement opportunities, and a culture that puts your growth and safety first.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  {[
                    'Competitive compensation & benefits',
                    'Industry-leading safety training',
                    'Career advancement opportunities',
                    'Veteran-friendly workplace'
                  ].map((benefit, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'Barlow Condensed', fontSize: '1.1rem', color: 'var(--white)', letterSpacing: '0.05em' }}>
                      <div style={{ width: '24px', height: '24px', background: 'var(--volt)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ChevronRight size={16} color="var(--dark)" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-volt">View Open Positions <ArrowRight size={18} style={{ marginLeft: '10px' }} /></Link>
              </motion.div>
            </div>

            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=800&q=80" alt="Construction Worker" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--dark2) 0%, transparent 100%)' }}></div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media(max-width: 900px) {
          .career-grid {
            grid-template-columns: 1fr !important;
          }
          .career-grid > div:nth-child(2) {
             min-height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
