import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--glass-border)' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.25rem 0', gap: '1rem', textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'Playfair Display', fontSize: '1.05rem', color: 'var(--cream)', fontWeight: 500 }}>{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={18} color="var(--gold)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--sage)', paddingBottom: '1.25rem' }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* ═══ PAGE HERO ═══ */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Contact Us</div>
            <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--cream)', lineHeight: 1.08, maxWidth: '700px', margin: '0 auto' }}>
              Get Your <span style={{ color: 'var(--gold)' }}>Free</span> Estimate
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--sage)', lineHeight: 1.7, maxWidth: '500px', margin: '1.5rem auto 0' }}>
              Ready to transform your landscape? Call us or fill out the form below for a complimentary, no-obligation assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTACT CONTENT ═══ */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left — Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', color: 'var(--cream)', marginBottom: '1.5rem' }}>
                Let's Talk Trees
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--sage)', marginBottom: '2.5rem' }}>
                Our clients have a variety of concerns related to trees in their yards. No matter the problem, give us a call today and let Mr. Green Jeans assess the situation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {[
                  { icon: <Phone size={18} color="var(--gold)" />, label: 'Call Us', value: '(318) 730-2800', href: 'tel:3187302800' },
                  { icon: <Mail size={18} color="var(--gold)" />, label: 'Email', value: 'info@mrgreenjeanstreeservice.com', href: 'mailto:info@mrgreenjeanstreeservice.com' },
                  { icon: <MapPin size={18} color="var(--gold)" />, label: 'Service Area', value: 'Alexandria, LA & Central Louisiana' },
                  { icon: <Clock size={18} color="var(--gold)" />, label: 'Emergency', value: '24/7 Available' },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--gold-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.2rem' }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: '0.95rem', color: 'var(--cream)', transition: 'color 0.3s' }}
                          onMouseOver={e => e.currentTarget.style.color = 'var(--gold)'}
                          onMouseOut={e => e.currentTarget.style.color = 'var(--cream)'}>{item.value}</a>
                      ) : (
                        <span style={{ fontSize: '0.95rem', color: 'var(--cream)' }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick call CTA */}
              <a href="tel:3187302800" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                <Phone size={16} /> Call Now — Free Estimate
              </a>
            </motion.div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{
                background: 'var(--glass-light)', backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)', borderRadius: '16px',
                padding: '2.5rem',
              }}>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>Request a Free Estimate</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--sage)', marginBottom: '2rem' }}>Fill out the form and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <CheckCircle size={56} color="var(--gold)" style={{ marginBottom: '1rem' }} />
                    <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>Thank You!</h3>
                    <p style={{ color: 'var(--sage)', fontSize: '0.9rem' }}>We'll be in touch shortly with your free estimate.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="John" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" placeholder="(318) 000-0000" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Needed</label>
                      <select id="service" required defaultValue="">
                        <option value="" disabled>Select a service...</option>
                        <option>Tree Removal</option>
                        <option>Stump Grinding</option>
                        <option>Emergency Service</option>
                        <option>Trimming & Pruning</option>
                        <option>Hazardous Tree Assessment</option>
                        <option>Clean Up</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Tell Us About Your Project</label>
                      <textarea id="message" placeholder="Describe your tree service needs..." />
                    </div>
                    <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                      <Send size={16} /> Send Request
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ GOOGLE MAP ═══ */}
      <section style={{ background: 'var(--forest-mid)', padding: 0 }}>
        <div style={{ width: '100%', height: '350px' }}>
          <iframe
            title="Mr. Green Jeans Service Area"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108893.39599046!2d-92.53!3d31.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86243a3e0c30fa21%3A0x6f3e1abf4a30c4b0!2sAlexandria%2C%20LA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%" height="100%" style={{ border: 0, filter: 'saturate(0.6) brightness(0.8)' }}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Common Questions</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          </div>
          <div>
            <FAQItem
              question="How much does tree removal cost?"
              answer="Tree removal costs vary depending on the tree's size, location, and complexity. We offer free on-site assessments to provide accurate quotes. Most residential jobs range from a few hundred to several thousand dollars. Call (318) 730-2800 for your free estimate."
            />
            <FAQItem
              question="Do you handle insurance claims?"
              answer="Yes! We work directly with your insurance company on storm damage claims. Many of our customers have had zero out-of-pocket costs for storm-related tree removal. We handle all the paperwork and communication with your insurer."
            />
            <FAQItem
              question="Are you licensed and insured?"
              answer="Absolutely. Mr. Green Jeans Tree Service is fully licensed and insured, including general liability and workers' compensation. We've maintained our credentials for over 30 years — your property and our crew are always protected."
            />
            <FAQItem
              question="How quickly can you respond to emergencies?"
              answer="We offer 24/7 emergency response. For urgent situations like storm damage or trees on structures, we typically dispatch a crew within hours. Call our emergency line at (318) 730-2800 anytime, day or night."
            />
            <FAQItem
              question="What areas do you serve?"
              answer="We serve Alexandria, Pineville, Leesville, DeRidder, Natchitoches, Shreveport, Bossier City, Tioga, Marksville, Ball, Boyce, Woodworth, and the greater Central Louisiana region. For larger projects, we travel statewide."
            />
            <FAQItem
              question="What happens to the wood and debris after removal?"
              answer="We handle complete cleanup. All branches, limbs, and debris are removed from your property. Larger wood can be cut into firewood-sized pieces if you'd like to keep it. Our goal is to leave your property cleaner than we found it."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
