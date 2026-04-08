import { useState, useEffect, useRef } from 'react';
import { Phone, FileText } from 'lucide-react';

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const pastHero = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      // Only start showing after scrolling past hero
      if (currentY > 400) pastHero.current = true;

      if (!pastHero.current) {
        setVisible(false);
      } else if (scrollingDown) {
        // Scrolling down — hide bar (matches Safari bar behavior)
        setVisible(false);
      } else {
        // Scrolling up — show bar
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mobile-action-bar" style={{
      transform: visible ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <a href="tel:3187302800" className="btn btn-gold" style={{ flex: 1, fontSize: '0.8rem', padding: '0.85rem', borderRadius: '8px' }}>
        <Phone size={16} /> Call Now
      </a>
      <a href="/contact" className="btn btn-outline" style={{ flex: 1, fontSize: '0.8rem', padding: '0.85rem', borderRadius: '8px' }}>
        <FileText size={16} /> Free Estimate
      </a>
    </div>
  );
}
