import { useState, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { PROJECTS, FILTERS } from '../../data/portfolio';
import { fadeUp, scaleIn, stagger, viewportOnce } from '../../utils/animations';
import styles from './Portfolio.module.css';

function FilterBar({ active, onChange }) {
  return (
    <div className={styles.filterBar} role="group" aria-label="Filter projects">
      {FILTERS.map(f => (
        <m.button
          key={f.id}
          className={`${styles.filterBtn} ${active === f.id ? styles.filterActive : ''}`}
          onClick={() => onChange(f.id)}
          whileTap={{ scale: 0.95 }}
        >
          {active === f.id && (
            <m.span
              layoutId="filter-pill"
              className={styles.filterPill}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className={styles.filterLabel}>{f.label}</span>
        </m.button>
      ))}
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <m.article
      className={styles.card}
      variants={fadeUp}
      layout
      whileHover="hover"
      initial="rest"
    >
      <div className={styles.imgWrap} onClick={() => onClick(project)}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className={styles.thumb}
          loading="lazy"
          decoding="async"
        />
        <m.div
          className={styles.overlay}
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.25 }}
        >
          <div className={styles.overlayContent}>
            <ZoomIn size={24} className={styles.zoomIcon} />
            <h4 className={styles.overlayTitle}>{project.title}</h4>
            <p className={styles.overlaySub}>{project.subtitle}</p>
          </div>
        </m.div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardInfo}>
          <h4 className={styles.cardTitle}>{project.title}</h4>
          <p className={styles.cardSub}>{project.subtitle}</p>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveBtn}
            aria-label={`View ${project.title} live`}
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </m.article>
  );
}

function LightboxModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <m.div
          className={styles.lightboxBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <m.div
            className={styles.lightboxContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={e => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
            <img
              src={project.fullImage}
              alt={project.title}
              className={styles.lightboxImg}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.lightboxMeta}>
              <div>
                <h3 className={styles.lightboxTitle}>{project.title}</h3>
                <p className={styles.lightboxSub}>{project.subtitle}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.lightboxLink}
                >
                  <ExternalLink size={16} />
                  View Live
                </a>
              )}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*');
  const [lightboxProject, setLightboxProject] = useState(null);

  const filtered =
    activeFilter === '*'
      ? PROJECTS
      : PROJECTS.filter(p => p.filter === activeFilter);

  const openLightbox  = useCallback(p => setLightboxProject(p), []);
  const closeLightbox = useCallback(() => setLightboxProject(null), []);

  return (
    <section id="work" className={styles.portfolio}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="My Portfolio"
          title="Recent Work."
          subtitle="A selection of projects built across Elementor, WordPress, and custom HTML/CSS/JS — from marketing pages to complex web applications."
        />

        <FilterBar active={activeFilter} onChange={setActiveFilter} />

        <m.div
          className={styles.grid}
          layout
          variants={stagger(0.06)}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <m.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} onClick={openLightbox} />
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>

      <LightboxModal project={lightboxProject} onClose={closeLightbox} />
    </section>
  );
}
