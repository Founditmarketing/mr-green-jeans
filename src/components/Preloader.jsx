import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="preloader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}>
          <motion.div className="preloader-logo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}>
            Mr. Green <span style={{ color: 'var(--gold)' }}>Jeans</span>
          </motion.div>
          <div className="preloader-bar">
            <div className="preloader-fill" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage)' }}>
            Tree Service Excellence
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
