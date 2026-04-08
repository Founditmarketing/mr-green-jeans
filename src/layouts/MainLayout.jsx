import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileActionBar from '../components/MobileActionBar';
import AnimatedOutlet from '../components/AnimatedOutlet';

export default function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--forest)' }}>
      <Navbar />
      <main style={{ flex: 1, paddingBottom: '0' }} className="mobile-main">
        <AnimatedOutlet />
      </main>
      <Footer />
      <MobileActionBar />
      <style>{`
        @media(max-width: 900px) {
          .mobile-main { padding-bottom: 60px !important; }
        }
      `}</style>
    </div>
  );
}
