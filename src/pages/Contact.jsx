import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <section className="section" style={{ padding: '2rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: '4rem' }}>
            
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <div className="section-label">Connect With Us</div>
              <h2 className="section-title">SECURE A <br/><span style={{ color: 'var(--amber)', textShadow: '0 0 20px rgba(255,123,0,0.4)' }}>QUOTE.</span></h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.6, marginBottom: '3rem' }}>
                Whether it's a new right-of-way build or emergency storm restoration—we're ready.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <a href="https://goo.gl/maps/iyc37Lib2cfxyCFP8" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--dark2)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(0,229,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin color="var(--volt)" size={22} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--white)', fontWeight: 600, fontSize: '1.1rem' }}>Headquarters</p>
                    <p style={{ color: 'var(--text)', fontSize: '0.95rem' }}>1439 Centre Court, Alexandria, LA</p>
                  </div>
                </a>

                <a href="tel:3184435894" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--dark2)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(0,229,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone color="var(--volt)" size={22} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--white)', fontWeight: 600, fontSize: '1.1rem' }}>Call Us Directly</p>
                    <p style={{ color: 'var(--volt)', fontSize: '0.95rem' }}>318-443-5894</p>
                  </div>
                </a>

                <a href="mailto:info@sheltonenergy.com" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--dark2)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(0,229,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail color="var(--volt)" size={22} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--white)', fontWeight: 600, fontSize: '1.1rem' }}>Email The Team</p>
                    <p style={{ color: 'var(--volt)', fontSize: '0.95rem' }}>info@sheltonenergy.com</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
              <div style={{ background: 'var(--dark)', border: '1px solid var(--glass-border)', padding: '2.5rem', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--volt), var(--amber))' }}></div>
                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '2.2rem', color: 'var(--white)', marginBottom: '2rem' }}>Request Details</h3>
                
                <form onSubmit={(e) => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '1.5rem' }} className="mobile-grid">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" placeholder="John" style={{ minHeight: '44px' }} />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Doe" style={{ minHeight: '44px' }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '1.5rem' }} className="mobile-grid">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="john@company.com" style={{ minHeight: '44px' }} />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" placeholder="(318) 555-0000" style={{ minHeight: '44px' }} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Service Needed</label>
                    <select style={{ minHeight: '48px', cursor: 'pointer' }}>
                      <option value="">Select a service...</option>
                      <option>Distribution</option>
                      <option>Transmission</option>
                      <option>Substation</option>
                      <option>Storm Restoration</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Project Scope</label>
                    <textarea placeholder="Tell us about the timeline and location..." style={{ minHeight: '120px' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-volt" style={{ width: '100%', marginTop: '0.5rem', minHeight: '48px' }}>Send Request</button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <style>{`
        @media(max-width: 900px) {
          .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .mobile-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .form-group { margin-bottom: 1.2rem; }
        }
      `}</style>
    </div>
  );
}
