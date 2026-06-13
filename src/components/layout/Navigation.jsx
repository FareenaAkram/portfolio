import { useCallback } from 'react';
import { m } from 'framer-motion';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { NAV_ITEMS } from '../../data/navigation';
import styles from './Navigation.module.css';

const SECTION_IDS = NAV_ITEMS.map(item => item.id);

export default function Navigation({ onLinkClick }) {
  const activeId = useScrollSpy(SECTION_IDS);

  const handleClick = useCallback(
    (e, id) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      onLinkClick?.();
    },
    [onLinkClick]
  );

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list} role="list">
        {NAV_ITEMS.map(({ id, label, Icon }) => {
          const isActive = activeId === id;
          return (
            <li key={id} className={styles.item}>
              <a
                href={`#${id}`}
                onClick={e => handleClick(e, id)}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <m.span
                    layoutId="nav-indicator"
                    className={styles.indicator}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={styles.iconWrap}>
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 1.8} />
                </span>
                <span className={styles.label}>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
