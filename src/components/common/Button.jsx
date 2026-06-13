import { m } from 'framer-motion';
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
      <m.a
        href={href}
        className={cls}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </m.a>
    );
  }

  return (
    <m.button
      onClick={onClick}
      className={cls}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </m.button>
  );
}
