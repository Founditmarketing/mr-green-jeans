import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Mr. Green Jeans Tree Service" className="nav-logo-img" />
          </Link>

          <div className="desktop-nav">
            {links.map(link => (
              <Link key={link.to} to={link.to}
                style={{ color: location.pathname === link.to ? 'var(--gold)' : undefined }}>
                {link.label}
              </Link>
            ))}
          </div>

          <a href="tel:3187302800" className="nav-cta nav-cta-desktop desktop-only">
            <Phone size={14} />
            (318) 730-2800
          </a>

          <button className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="mobile-nav-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            {links.map((link, i) => (
              <motion.div key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}>
                <Link to={link.to} onClick={() => setMobileOpen(false)}>{link.label}</Link>
              </motion.div>
            ))}
            <motion.a href="tel:3187302800" className="btn btn-gold" style={{ marginTop: '1rem' }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Phone size={16} /> Call Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
