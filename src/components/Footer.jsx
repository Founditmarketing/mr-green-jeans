import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <img src="/logo.png" alt="Mr. Green Jeans Tree Service" style={{ height: '70px', width: 'auto' }} />
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--sage)', maxWidth: '320px', marginBottom: '1.5rem' }}>
            Four generations of expert tree care. Serving Alexandria, Pineville, and all of Central Louisiana since 1994.
          </p>
          <a href="tel:3187302800" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.05em' }}>
            <Phone size={18} /> (318) 730-2800
          </a>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Tree Removal', 'Stump Grinding', 'Emergency Services', 'Trim & Prune', 'Hazardous Trees', 'Clean Up'].map(s => (
              <li key={s}><Link to="/services" style={{ fontSize: '0.88rem', color: 'var(--sage)', transition: 'color 0.3s' }}
                onMouseOver={e => e.currentTarget.style.color='var(--cream)'}
                onMouseOut={e => e.currentTarget.style.color='var(--sage)'}>{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Company</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Our Services', to: '/services' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }) => (
              <li key={label}><Link to={to} style={{ fontSize: '0.88rem', color: 'var(--sage)', transition: 'color 0.3s' }}
                onMouseOver={e => e.currentTarget.style.color='var(--cream)'}
                onMouseOut={e => e.currentTarget.style.color='var(--sage)'}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Service Areas</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {['Alexandria', 'Pineville', 'Leesville', 'DeRidder', 'Natchitoches', 'Shreveport', 'Bossier City'].map(area => (
              <li key={area} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--sage)' }}>
                <MapPin size={12} color="var(--gold)" opacity={0.5} /> {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mr. Green Jeans Tree Service. All rights reserved.</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Mail size={13} /> info@mrgreenjeanstreeservice.com
        </span>
      </div>
    </footer>
  );
}
