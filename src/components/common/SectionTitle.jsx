import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/animations';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className={styles.wrap}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
