import { useState, useEffect } from 'react';
import { Phone, FileText } from 'lucide-react';

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mobile-action-bar" style={{
      transform: visible ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
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
