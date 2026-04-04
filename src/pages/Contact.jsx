import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <section className="section" style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem' }}>
            
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">LET'S <span style={{ color: 'var(--amber)' }}>TALK.</span></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.7, marginBottom: '3rem' }}>
                Ready to discuss your next project? Whether it's a new build, maintenance contract, or storm response — we're here.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin color="var(--volt)" size={22} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--white)', fontWeight: 500, fontSize: '1.05rem' }}>Shelton Energy Solutions</p>
                    <p style={{ color: 'var(--text)', fontSize: '0.95rem' }}>1439 Centre Court, Suite 600<br/>Alexandria, LA 71301</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone color="var(--volt)" size={22} />
                  </div>
                  <div>
                    <a href="tel:3184435894" style={{ color: 'var(--white)', fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.3s' }} onMouseOver={e=>e.currentTarget.style.color='var(--volt)'} onMouseOut={e=>e.currentTarget.style.color='var(--white)'}>
                      318-443-5894
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail color="var(--volt)" size={22} />
                  </div>
                  <div>
                    <a href="mailto:info@sheltonenergy.com" style={{ color: 'var(--white)', fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.3s' }} onMouseOver={e=>e.currentTarget.style.color='var(--volt)'} onMouseOut={e=>e.currentTarget.style.color='var(--white)'}>
                      info@sheltonenergy.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div style={{ background: 'var(--dark)', border: '1px solid var(--glass-border)', padding: '3rem', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--volt), var(--amber))' }}></div>
                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '2.2rem', color: 'var(--white)', marginBottom: '2rem', letterSpacing: '0.05em' }}>Request a Quote</h3>
                
                <form onSubmit={(e) => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" placeholder="John" />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Doe" />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="john@company.com" />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" placeholder="(318) 555-0000" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Service Needed</label>
                    <select>
                      <option value="">Select a service...</option>
                      <option>Distribution</option>
                      <option>Transmission</option>
                      <option>Substation</option>
                      <option>Storm Restoration</option>
                      <option>Boring</option>
                      <option>Underground</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Project Details</label>
                    <textarea placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-volt" style={{ width: '100%', marginTop: '1rem' }}>Submit Request</button>
                </form>
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
            gap: 4rem !important;
          }
          .form-group {
             margin-bottom: 1rem;
          }
          form > div {
             grid-template-columns: 1fr !important;
             gap: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
