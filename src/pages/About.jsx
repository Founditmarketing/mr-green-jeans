import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TreePine, Shield, Award, Clock, Users, ArrowRight, Phone } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* ═══ PAGE HERO ═══ */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>About Us</div>
            <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--cream)', lineHeight: 1.08, maxWidth: '700px', margin: '0 auto' }}>
              A Legacy of <span style={{ color: 'var(--gold)' }}>Tree Care</span> Excellence
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--text-dark)' }}>
        <div className="container">
          <div className="heritage-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/hero-tree.png" alt="Mr Green Jeans team at work" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 30px 80px rgba(0,0,0,0.12)' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="section-label" style={{ color: 'var(--canopy)' }}>Our Story</div>
              <h2 className="section-title-dark">Four Generations<br />of Family Pride</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Mr. Green Jeans Tree Service has been the trusted name in tree care for over 30 years, spanning four generations of dedicated professionals. What started as a family passion has grown into Central Louisiana's premier tree service company.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Throughout our history, we have prioritized safety and efficiency, investing millions of dollars in high-tech equipment to ensure the safe removal of trees and stumps — especially in times of disasters and emergencies.
              </p>
              <Link to="/contact" className="btn btn-outline-dark">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Values</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>What Sets Us Apart</h2>
          </div>

          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icon: <Shield color="var(--gold)" size={24} />, title: 'Safety First', desc: 'Every job begins and ends with safety. Our team is fully licensed, insured, and trained to the highest industry standards.' },
              { icon: <Award color="var(--gold)" size={24} />, title: 'Quality Guaranteed', desc: '97.7% customer satisfaction rate speaks for itself. We don\'t just meet expectations — we exceed them every time.' },
              { icon: <Clock color="var(--gold)" size={24} />, title: '24/7 Availability', desc: 'Emergency tree services around the clock. When disaster strikes, we\'re there — day or night, rain or shine.' },
              { icon: <TreePine color="var(--gold)" size={24} />, title: 'Expert Knowledge', desc: 'Four generations of tree care wisdom passed down. We know Louisiana trees like no one else.' },
              { icon: <Users color="var(--gold)" size={24} />, title: 'Family Owned', desc: 'As a family business, we treat every customer like family. Your satisfaction is our legacy.' },
              { icon: <Award color="var(--gold)" size={24} />, title: 'Top Equipment', desc: 'Millions invested in state-of-the-art equipment ensures every job is completed safely and efficiently.' },
            ].map((value, idx) => (
              <motion.div key={idx} className="glass-card"
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--gold-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {value.icon}
                </div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.15rem', color: 'var(--cream)', marginBottom: '0.6rem' }}>{value.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--sage)' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMMITMENT ═══ */}
      <section className="section" style={{ background: 'var(--bark)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Personal Commitment</div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              "So You May Enjoy a Safe<br />and Beautiful Landscape"
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--sage)', marginBottom: '2rem' }}>
              At Mr. Green Jeans Tree Service, we understand the deep desire to have a captivating and picturesque yard or an inviting treescape for your business. Our team of skilled professionals is dedicated to turning your vision into reality. Our focus is total customer satisfaction.
            </p>
            <div style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.3rem' }}>— John & Paula Cormane</div>
            <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage)' }}>Owners</div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--cream)', marginBottom: '1.5rem' }}>
              Ready to Transform Your Landscape?
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:3187302800" className="btn btn-gold"><Phone size={16} /> Call (318) 730-2800</a>
              <Link to="/contact" className="btn btn-outline">Request Estimate <ArrowRight size={16} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
