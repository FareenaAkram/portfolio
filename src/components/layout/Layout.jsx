import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import Loader from '../ui/Loader';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaderDone && <Loader onDone={() => setLoaderDone(true)} />}
      </AnimatePresence>

      <div className={styles.appContainer}>
        <Sidebar menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Backdrop for mobile menu */}
        {menuOpen && (
          <div
            className={styles.backdrop}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <div className={styles.mainWrapper}>
          <MobileHeader onMenuToggle={() => setMenuOpen(v => !v)} isMenuOpen={menuOpen} />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </>
  );
}
