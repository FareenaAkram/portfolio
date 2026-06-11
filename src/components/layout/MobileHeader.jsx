import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './MobileHeader.module.css';

export default function MobileHeader({ onMenuToggle, isMenuOpen }) {
  return (
    <header className={styles.header}>
      <a
        href="#home"
        onClick={e => {
          e.preventDefault();
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={styles.logo}
      >
        Fareena
      </a>

      <button
        className={styles.menuBtn}
        onClick={onMenuToggle}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <motion.span
          key={isMenuOpen ? 'close' : 'open'}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className={styles.menuIcon}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.span>
      </button>
    </header>
  );
}
