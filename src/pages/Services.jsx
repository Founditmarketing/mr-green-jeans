import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TreePine, Axe, AlertTriangle, Scissors, Search, Trash2, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <TreePine color="var(--gold)" size={28} />,
    title: 'Tree Removal',
    desc: 'Our skilled professionals utilize advanced equipment and techniques to safely and efficiently remove trees from your property. Whether you need to make way for a construction project, create more open space, or address hazardous trees, we\'ve got you covered.',
    features: ['Safe & controlled removal', 'Any size tree', 'Residential & commercial', 'Site clean-up included'],
  },
  {
    icon: <Axe color="var(--gold)" size={28} />,
    title: 'Stump Grinding',
    desc: 'Bid farewell to unsightly stumps! Our specialized equipment ensures efficient and thorough grinding, leaving your landscape smooth, safe, and ready for new possibilities.',
    features: ['Complete stump removal', 'Below-grade grinding', 'Minimal yard impact', 'Smooth, finished surface'],
  },
  {
    icon: <AlertTriangle color="var(--gold)" size={28} />,
    title: '24/7 Emergency Services',
    desc: 'Count on Mr. Green Jeans Tree Service for swift and reliable assistance during tree-related emergencies, ensuring the safety of your property and peace of mind day or night.',
    features: ['24/7 availability', 'Rapid response times', 'Storm damage specialists', 'Insurance coordination'],
  },
  {
    icon: <Scissors color="var(--gold)" size={28} />,
    title: 'Trimming & Pruning',
    desc: 'Professional trimming and pruning to maintain the health, appearance, and safety of your trees. We shape trees to enhance your property\'s curb appeal while promoting healthy growth.',
    features: ['Crown thinning & shaping', 'Deadwood removal', 'Clearance pruning', 'Health assessments'],
  },
  {
    icon: <Search color="var(--gold)" size={28} />,
    title: 'Hazardous Tree Assessment',
    desc: 'Does your landscape suffer from dead or dangerous trees? Overgrown branches pose a serious risk. Our experts inspect trees annually to prevent future accidents.',
    features: ['Risk evaluation', 'Insurance reports', 'Preventive recommendations', 'Disease identification'],
  },
  {
    icon: <Trash2 color="var(--gold)" size={28} />,
    title: 'Clean Up Services',
    desc: 'Complete site clean-up after tree work, storm damage, or general yard debris. We leave your property looking better than we found it — guaranteed.',
    features: ['Debris removal', 'Branch chipping', 'Haul-away services', 'Final site grading'],
  },
];

export default function Services() {
  return (
    <div>
      {/* ═══ PAGE HERO ═══ */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Services</div>
            <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--cream)', lineHeight: 1.08, maxWidth: '700px', margin: '0 auto' }}>
              Complete <span style={{ color: 'var(--gold)' }}>Tree Care</span> Solutions
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--sage)', lineHeight: 1.7, maxWidth: '550px', margin: '1.5rem auto 0' }}>
              From routine maintenance to emergency storm response, our team handles every aspect of professional tree care with precision and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SERVICES LIST ═══ */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {services.map((srv, idx) => (
              <motion.div key={srv.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem',
                  background: 'var(--glass-light)', backdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)', borderRadius: '16px',
                  padding: '3rem', alignItems: 'center',
                  transition: 'all 0.4s',
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--glass-border-gold)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--gold-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {srv.icon}
                    </div>
                    <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: 'var(--cream)', fontWeight: 600 }}>{srv.title}</h2>
                  </div>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--sage)' }}>{srv.desc}</p>
                </div>

                <div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {srv.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--cream)' }}>
                        <CheckCircle size={16} color="var(--gold)" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:3187302800" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '1.5rem', fontFamily: 'Barlow Condensed', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', transition: 'gap 0.3s' }}
                    onMouseOver={e => e.currentTarget.style.gap = '0.6rem'}
                    onMouseOut={e => e.currentTarget.style.gap = '0.3rem'}>
                    Get a Quote <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--cream)', marginBottom: '1rem' }}>
              Need Tree Service?
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--sage)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Contact us today for a free, no-obligation estimate. We serve Alexandria, Pineville, and all of Central Louisiana.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:3187302800" className="btn btn-gold"><Phone size={16} /> (318) 730-2800</a>
              <Link to="/contact" className="btn btn-outline">Online Request <ArrowRight size={16} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
