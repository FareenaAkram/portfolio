import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import styles from './TypingAnimation.module.css';

export default function TypingAnimation({ phrases, className = '' }) {
  const text = useTypingAnimation(phrases);

  return (
    <span className={`${styles.wrap} ${className}`} aria-live="polite">
      <span className={styles.text}>{text}</span>
      <span className={`${styles.cursor} typing-cursor`} aria-hidden="true" />
    </span>
  );
}
