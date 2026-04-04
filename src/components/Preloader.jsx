import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--dark)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 1], 
              opacity: [0, 1, 1],
              filter: ['drop-shadow(0 0 0px var(--volt))', 'drop-shadow(0 0 40px var(--volt))', 'drop-shadow(0 0 20px var(--volt))']
            }}
            transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
            style={{ width: '80px', height: '80px', color: 'var(--volt)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: 'Bebas Neue', fontSize: '1.5rem', letterSpacing: '0.4em', 
              color: 'var(--volt)', marginTop: '2rem',
              textShadow: '0 0 10px rgba(0,212,255,0.5)'
            }}
          >
            SHELTON ENERGY
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
