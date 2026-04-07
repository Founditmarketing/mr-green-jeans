import { Phone, FileText } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <a href="tel:3187302800" className="btn btn-gold" style={{ flex: 1, fontSize: '0.8rem', padding: '0.85rem', borderRadius: '8px' }}>
        <Phone size={16} /> Call Now
      </a>
      <a href="/contact" className="btn btn-outline" style={{ flex: 1, fontSize: '0.8rem', padding: '0.85rem', borderRadius: '8px' }}>
        <FileText size={16} /> Free Estimate
      </a>
    </div>
  );
}
