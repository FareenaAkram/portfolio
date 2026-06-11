import { motion } from 'framer-motion';
import SectionTitle from '../../components/common/SectionTitle';
import { SERVICES } from '../../data/services';
import { fadeUp, stagger, viewportOnce } from '../../utils/animations';
import styles from './Services.module.css';

function ServiceCard({ service, index }) {
  const { Icon, title, description } = service;

  return (
    <motion.article
      className={styles.card}
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className={styles.iconWrap}>
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <div className={styles.cardGlow} aria-hidden="true" />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <div className={styles.cardLine} aria-hidden="true" />
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.bgBlob} aria-hidden="true" />

      <div className={styles.container}>
        <SectionTitle
          eyebrow="What I Do"
          title="Services I Offer."
          subtitle="From pixel-perfect UI implementation to full Angular and React application builds — I bring designs to life with clean, performant code."
        />

        <motion.div
          className={styles.grid}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
