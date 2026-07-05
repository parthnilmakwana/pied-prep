import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Toast() {
  const toast = useStore(state => state.toast);
  const setToast = useStore(state => state.setToast);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [toast, setToast]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
          exit={{ opacity: 0, x: "-50%", scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            whiteSpace: 'nowrap',
            backgroundColor: 'var(--color-success)',
            color: '#000',
            padding: '12px 24px',
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600,
            fontSize: '14px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
            zIndex: 9999,
          }}
        >
          <CheckCircle2 size={18} />
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
