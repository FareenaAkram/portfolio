import { motion } from 'framer-motion';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={cls}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
