import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0c10]/90 backdrop-blur-md border-b border-[#00d4ff]/10 py-4' : 'bg-transparent py-6'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(10, 12, 16, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
          padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
          position: 'fixed', width: '100%', zIndex: 1000,
          transition: 'all 0.4s ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1300px', margin: '0 auto' }}>
          
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img 
              src="https://www.sheltonenergy.com/html/images/imgs/sticky-logo.png" 
              alt="Shelton Energy Solutions Logo" 
              style={{ height: '45px', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {['Home', 'About', 'Services', 'Safety', 'Careers', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    textTransform: 'uppercase',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'var(--volt)' : 'var(--text-light)',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--volt)'}
                  onMouseOut={(e) => e.currentTarget.style.color = location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'var(--volt)' : 'var(--text-light)'}
                >
                  {item}
                </Link>
              ))}
            </div>

            <a 
              href="tel:3184435894" 
              style={{ 
                display: 'flex', alignItems: 'center', gap: '0.5rem', 
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                color: 'var(--volt)', border: '1px solid var(--volt)', borderRadius: '4px',
                padding: '0.6rem 1.2rem', transition: 'all 0.3s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--volt)'; e.currentTarget.style.color = 'var(--dark)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--volt)'; }}
            >
              <Phone size={16} /> 318-443-5894
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle"
            style={{ display: 'none', background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer' }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Styling Overrides */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 1001,
              background: 'rgba(10, 12, 16, 0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center'
            }}
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'absolute', top: '2rem', right: '2rem',
                background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer'
              }}
            >
              <X size={32} />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
              {['Home', 'About', 'Services', 'Safety', 'Careers', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '2.5rem',
                      color: 'var(--white)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.a 
                href="tel:3184435894"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  marginTop: '1rem', color: 'var(--volt)', fontSize: '1.2rem', fontFamily: 'Barlow Condensed'
                }}
              >
                318-443-5894
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
