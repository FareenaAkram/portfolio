import { m } from 'framer-motion';
import { Building2, Calendar, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import Badge from '../../components/common/Badge';
import { CODE_PROJECTS } from '../../data/projects';
import { fadeUp, stagger, slideLeft, viewportOnce } from '../../utils/animations';
import styles from './Projects.module.css';

function TechBadge({ label }) {
  return <span className={styles.techBadge}>{label}</span>;
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <m.article
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      {project.featured && (
        <div className={styles.featuredBadge}>
          <Star size={12} fill="currentColor" />
          Featured Project
        </div>
      )}

      <div className={styles.cardTop}>
        <div className={styles.cardMeta}>
          <div className={styles.companyRow}>
            <Building2 size={14} className={styles.metaIcon} />
            <span className={styles.company}>{project.company}</span>
          </div>
          {project.period && (
            <div className={styles.periodRow}>
              <Calendar size={13} className={styles.metaIcon} />
              <span className={styles.period}>{project.period}</span>
            </div>
          )}
        </div>

        <h3 className={styles.title}>{project.title}</h3>

        <div className={styles.techRow}>
          {project.tech.map(t => <TechBadge key={t} label={t} />)}
        </div>
      </div>

      <ul className={styles.points}>
        {project.points.map((pt, i) => (
          <li key={i} className={styles.point}>
            <ChevronRight size={14} className={styles.pointIcon} />
            <span>{pt}</span>
          </li>
        ))}
      </ul>

      {/* Glow accent */}
      <div className={styles.cardGlow} aria-hidden="true" />
    </m.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.bgBlob} aria-hidden="true" />

      <div className={styles.container}>
        <SectionTitle
          eyebrow="Code Projects"
          title="What I've Built."
          subtitle="Real-world applications built at IBM and CureMD — from KYC risk management systems to AI chat interfaces and Angular web platforms."
        />

        <m.div
          className={styles.grid}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {CODE_PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </m.div>
      </div>
    </section>
  );
}
