import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import ThemeToggle from '../ui/ThemeToggle';
import TypingAnimation from '../ui/TypingAnimation';
import { img } from '../../utils/assets';
import { Linkedin } from 'lucide-react';
import styles from './Sidebar.module.css';

const TYPING_PHRASES = [
  'Frontend Engineer',
  'React Developer',
  'Angular Developer',
  'WordPress Expert',
  'UI/UX Enthusiast',
];

export default function Sidebar({ menuOpen, onClose }) {
  return (
    <AnimatePresence>
      <motion.aside
        className={`${styles.sidebar} ${menuOpen ? styles.open : ''}`}
        initial={false}
      >
        {/* Decorative gradient blob */}
        <div className={styles.blob} aria-hidden="true" />

        <div className={styles.inner}>
          {/* Profile */}
          <div className={styles.profile}>
            <div className={styles.avatarRing}>
              <img
                src={img('images/profile.png')}
                alt="Fareena Akram"
                className={styles.avatar}
              />
            </div>
            <h2 className={styles.name}>Fareena</h2>
            <div className={styles.role}>
              <TypingAnimation phrases={TYPING_PHRASES} />
            </div>
          </div>

          {/* Navigation */}
          <Navigation onLinkClick={onClose} />

          {/* Bottom bar */}
          <div className={styles.bottom}>
            <ThemeToggle />
            <a
              href="https://www.linkedin.com/in/fareena-akram-94a75b128/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
