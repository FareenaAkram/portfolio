import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 300);
          return 100;
        }
        return p + 4;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className={styles.overlay}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className={styles.content}>
        <div className={styles.logoMark}>
          <span>F</span>
        </div>
        <div className={styles.trackWrap}>
          <div className={styles.track}>
            <motion.div
              className={styles.fill}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear', duration: 0 }}
            />
          </div>
          <span className={styles.percent}>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
