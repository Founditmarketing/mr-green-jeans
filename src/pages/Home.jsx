import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TreePine, Axe, AlertTriangle, ClipboardCheck, Phone, ArrowRight, Star, ChevronRight, MapPin, Clock, Shield, Leaf } from 'lucide-react';
import Marquee from '../components/Marquee';

function SwipeHint() {
  return (
    <div className="swipe-hint" style={{ display: 'none' }}>
      <span>Swipe</span>
      <ChevronRight size={14} />
    </div>
  );
}

function AnimatedCounter({ from, to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(from);
  const spring = useSpring(count, { duration: 2500, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) count.set(to);
  }, [inView, count, to]);

  return (
    <span ref={ref} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
      <motion.span>{rounded}</motion.span>
      <span style={{ color: 'var(--gold)' }}>{suffix}</span>
    </span>
  );
}

const services = [
  {
    title: 'Tree Removal',
    icon: <TreePine color="var(--gold)" size={24} />,
    desc: 'Our skilled professionals utilize advanced equipment and techniques to safely and efficiently remove trees of any size from your property. Whether clearing for construction, creating open space, or addressing hazardous trees — we\'ve got you covered.',
  },
  {
    title: 'Stump Grinding',
    icon: <Axe color="var(--gold)" size={24} />,
    desc: 'Bid farewell to unsightly stumps! Our specialized equipment ensures efficient and thorough grinding, leaving your landscape smooth, safe, and ready for new possibilities.',
  },
  {
    title: '24/7 Emergency',
    icon: <AlertTriangle color="var(--gold)" size={24} />,
    desc: 'Count on Mr. Green Jeans for swift, reliable assistance during tree-related emergencies — ensuring the safety of your property and peace of mind day or night.',
  },
  {
    title: 'Free Assessment',
    icon: <ClipboardCheck color="var(--gold)" size={24} />,
    desc: 'Curious about the cost? We offer complimentary on-site estimates to provide you with a clear understanding of the investment required for your tree care goals.',
  },
];

const testimonials = [
  {
    name: 'Raymond H.',
    text: 'Words can\'t begin to describe my experience. Mr. Green Jeans went over and beyond to beautify my yard. Not one limb was left on the ground. Everyone couldn\'t believe how neat they left everything. I would tell anyone seeking perfection to call Mr. Green Jeans!',
  },
  {
    name: 'Robin',
    text: 'Mr. Green Jeans did an excellent job removing our very large pecan tree that was hit with lightning. They were quick to come give us an estimate, professional and provided quality work. The area looks like it never had a tree there!',
  },
  {
    name: 'Dave',
    title: 'Safety Equipment Inspector',
    text: 'Mr. Green Jeans exceeded our expectations! With their expert tree removal and pruning service, they showed their unmatched skill, efficiency, and dedication. We couldn\'t be more impressed or satisfied.',
  },
  {
    name: 'Melissa',
    title: 'Senior Care Professional',
    text: 'Impressive is the only way to describe this tree service. Fast, safe, and so reasonable in their pricing. No doubt the free estimate was right on target. Love them!',
  },
  {
    name: 'Diane B.',
    title: 'Nurse & Healthcare Provider',
    text: 'I am amazed that Mr. Green Jeans was able to take down that dead pine tree next to my house! It was dangerously close to my home and I am most appreciative of how safely they handled this project.',
  },
];

export default function Home() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hero" style={{ background: 'var(--forest)' }}>
        <video
          className="hero-bg"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-tree.png"
          style={{ opacity: 0.55 }}
        >
          <source src="/Generated Video April 07, 2026 - 7_06PM.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="container" style={{ paddingTop: 'clamp(9rem, 20vh, 14rem)', zIndex: 3, position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Four Generations · Family Owned · Since 1994</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: 'var(--cream)', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '1.5rem', maxWidth: '750px', fontWeight: 600 }}>
            Expert Tree Care<br />
            <span style={{ color: 'var(--gold)' }}>You Can Trust</span>
            <span style={{ display: 'block', fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', fontFamily: 'Barlow Condensed', fontWeight: 400, color: 'var(--sage)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1.5rem' }}>
              Tree Removal · Stump Grinding · Emergency Services · Alexandria, LA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--sage)', maxWidth: '520px', marginBottom: '2.5rem' }}>
            With over 30 years of experience and millions invested in state-of-the-art equipment, Mr. Green Jeans Tree Service is Central Louisiana's most trusted name in professional tree care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>
            <a href="tel:3187302800" className="btn btn-gold">
              <Phone size={16} /> Free Estimate
            </a>
            <Link to="/services" className="btn btn-outline">
              Our Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div className="desktop-only" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        </motion.div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="stats-bar">
        <div className="container">
          <div className="carousel-wrapper">
            <div className="mobile-carousel hide-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
              {[
                { value: 5239, suffix: '+', label: 'Trees Removed' },
                { value: 30, suffix: '+', label: 'Years Experience' },
                { value: 97, suffix: '.7%', label: 'Customer Satisfaction' },
                { value: 24, suffix: '/7', label: 'Emergency Response' },
              ].map((stat, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <div style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontFamily: 'Playfair Display', fontWeight: 700, color: 'var(--cream)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                    <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <SwipeHint />
          </div>
        </div>
      </section>

      <Marquee />

      {/* ═══ SERVICES BENTO ═══ */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', marginBottom: '2.5rem' }}>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Complete Tree<br />Care Solutions</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--sage)' }}>
              From routine maintenance to emergency storm response, our team handles every aspect of professional tree care.
            </p>
          </div>

          <div className="bento-grid">
            {services.map((srv, idx) => (
              <motion.div key={srv.title} className="bento-card"
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="bento-icon">{srv.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.35rem', color: 'var(--cream)', marginBottom: '0.8rem', fontWeight: 600 }}>{srv.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--sage)' }}>{srv.desc}</p>
                <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '1.2rem', fontFamily: 'Barlow Condensed', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', transition: 'gap 0.3s' }}
                  onMouseOver={e => e.currentTarget.style.gap = '0.6rem'}
                  onMouseOut={e => e.currentTarget.style.gap = '0.3rem'}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMAGE BREAK ═══ */}
      <section style={{ position: 'relative', height: 'clamp(300px, 45vw, 500px)', overflow: 'hidden' }}>
        <img src="/equipment.png" alt="Tree service crew at work" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--forest) 0%, transparent 25%, transparent 75%, var(--forest) 100%)', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="section-label">Our Commitment</div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--cream)', fontWeight: 600, lineHeight: 1.15, maxWidth: '400px' }}>
              Safety First,<br />Quality Always.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ═══ ABOUT / COMMITMENT ═══ */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--text-dark)' }}>
        <div className="container">
          <div className="heritage-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="section-label">Our Heritage</div>
              <h2 className="section-title-dark">Four Generations<br />of <span style={{ color: 'var(--canopy)' }}>Excellence</span></h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Mr. Green Jeans Tree Service has provided expert tree services for over 30 years, spanning four generations. Throughout our history, we have prioritized safety and efficiency, investing in millions of dollars worth of high-tech equipment.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Our years of experience show our commitment to quality — you can always trust us to provide you with the best expert tree services available anywhere in Louisiana.
              </p>
              <div style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--canopy)', marginBottom: '0.3rem' }}>— John & Paula Cormane</div>
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Owners, Mr. Green Jeans Tree Service</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <video
                autoPlay muted loop playsInline
                src="/Generated Video April 07, 2026 - 7_48PM.mp4"
                style={{ width: '100%', borderRadius: '16px', boxShadow: '0 30px 80px rgba(0,0,0,0.15)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 3-STEP PROCESS ═══ */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>How It Works</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Three Simple Steps</h2>
          </div>

          <div className="process-grid">
            {[
              { num: '1', title: 'Call for Your Free Assessment', desc: 'Give us a call and one of our experts will visit your property to provide a complimentary, no-obligation estimate.' },
              { num: '2', title: 'Select & Schedule Services', desc: 'Choose the services that fit your needs, and we\'ll work with your schedule to find the perfect time.' },
              { num: '3', title: 'Enjoy Your Beautiful Landscape', desc: 'Sit back and relax while our professional crew transforms your property. You\'ll love the results!' },
            ].map((step, idx) => (
              <motion.div key={idx} className="process-step"
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.15 }}>
                <div className="process-number">{step.num}</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', color: 'var(--cream)', marginBottom: '0.75rem', fontWeight: 600 }}>{step.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--sage)', maxWidth: '280px', margin: '0 auto' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROMOTIONS ═══ */}
      <section style={{ background: 'var(--bark)', padding: '4rem 2rem' }}>
        <div className="container">
          <div className="promo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { label: 'Spring Season', title: 'Kickoff Special', desc: 'Start the season right with our special spring pricing. Call today!', icon: <Leaf color="var(--gold)" size={20} /> },
              { label: 'Refer-A-Friend', title: 'Receive $100', desc: 'Refer a friend to Mr. Green Jeans and receive $100 reward.', icon: <Star color="var(--gold)" size={20} /> },
              { label: 'New Customer', title: 'Welcome Discount', desc: 'First-time customers enjoy special introductory pricing.', icon: <Shield color="var(--gold)" size={20} /> },
            ].map((promo, idx) => (
              <motion.div key={idx} className="glass-card" style={{ textAlign: 'center' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>{promo.icon}</div>
                <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{promo.label}</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>{promo.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--sage)', marginBottom: '1.25rem' }}>{promo.desc}</p>
                <a href="tel:3187302800" className="btn btn-gold" style={{ fontSize: '0.75rem', padding: '0.7rem 1.5rem' }}>
                  <Phone size={14} /> Claim Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>What Our Clients Say</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--sage)', lineHeight: 1.7 }}>
              We are driven by the great feedback from our customers. Their satisfaction is our greatest reward.
            </p>
          </div>

          <div className="carousel-wrapper">
            <div className="mobile-carousel hide-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {testimonials.slice(0, 3).map((t, idx) => (
                <motion.div key={idx} className="testimonial-card"
                  initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />)}
                  </div>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--sage)', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>{t.text}</p>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display', fontSize: '1rem', fontWeight: 600, color: 'var(--cream)' }}>{t.name}</div>
                    {t.title && <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.2rem' }}>{t.title}</div>}
                  </div>
                </motion.div>
              ))}
            </div>
            <SwipeHint />
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══ */}
      <section className="section" style={{ background: 'var(--forest-mid)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Coverage Area</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Serving Central<br />Louisiana & Beyond</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: 'var(--glass-border)' }}>
            {['Alexandria', 'Pineville', 'Leesville', 'DeRidder', 'Natchitoches', 'Shreveport', 'Bossier City', 'Tioga', 'Marksville', 'Ball', 'Boyce', 'Woodworth'].map((area, idx) => (
              <motion.div key={area}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.04 }}
                style={{ background: 'var(--forest-mid)', padding: '1.5rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                <MapPin size={13} color="var(--gold)" />
                <span style={{ fontFamily: 'Barlow Condensed', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--sage)' }}>{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Ready to Get Started?</div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--cream)', lineHeight: 1.08, marginBottom: '1.5rem' }}>
              Call Now for Your<br /><span style={{ color: 'var(--gold)' }}>Free Estimate</span>
            </h2>
            <a href="tel:3187302800" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'Playfair Display', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--gold)', fontWeight: 700, marginBottom: '2rem', transition: 'transform 0.3s' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              <Phone size={28} /> (318) 730-2800
            </a>
            <p style={{ fontSize: '0.95rem', color: 'var(--sage)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Speak with one of our expert tree specialists today. Free on-site assessments available.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:3187302800" className="btn btn-gold">
                <Phone size={16} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline">
                Request Online <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
