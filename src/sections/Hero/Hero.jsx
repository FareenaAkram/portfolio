import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import TypingAnimation from '../../components/ui/TypingAnimation';
import Button from '../../components/common/Button';
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from '../../utils/animations';
import styles from './Hero.module.css';

const TYPING_PHRASES = [
  'Frontend Engineer',
  'React Developer',
  'Angular Developer',
  'WordPress Expert',
];

export default function Hero() {
  const scrollToContact = e => {
    e.preventDefault();
    document.getElementById('contactus')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = e => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Background decorations */}
      <div className={styles.bgGlow1} aria-hidden="true" />
      <div className={styles.bgGlow2} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={stagger(0.1)}
          initial="hidden"
          animate="visible"
        >
          {/* Text side */}
          <motion.div className={styles.textSide} variants={slideLeft}>
            <motion.span className={styles.greeting} variants={fadeUp}>
              Hello, I am
            </motion.span>

            <motion.h1 className={styles.name} variants={fadeUp}>
              Fareena Akram
            </motion.h1>

            <motion.p className={styles.tagline} variants={fadeUp}>
              I am a Passionate{' '}
              <TypingAnimation phrases={TYPING_PHRASES} className={styles.typedText} />
            </motion.p>

            <motion.p className={styles.description} variants={fadeUp}>
              I design and develop services for customers of all sizes, specializing in
              creating stylish, modern websites, web services and online stores.
            </motion.p>

            <motion.div className={styles.ctaBar} variants={fadeUp}>
              <Button href="#contactus" onClick={scrollToContact} variant="primary">
                Contact Me
              </Button>
              <Button href="#work" onClick={scrollToWork} variant="outline">
                View Portfolio
              </Button>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              className={styles.scrollHint}
              variants={fadeUp}
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} />
              <span>Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Visual side */}
          <motion.div className={styles.visualSide} variants={slideRight}>
            <div className={styles.videoCard}>
              <div className={styles.videoGlow} aria-hidden="true" />
              <img
                src="/images/profile.png"
                alt="Fareena Akram"
                className={styles.heroPhoto}
              />
              {/* Floating badges */}
              <motion.div
                className={`${styles.floatBadge} ${styles.floatBadge1}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <span className={styles.badgeDot} />
                Angular 17
              </motion.div>
              <motion.div
                className={`${styles.floatBadge} ${styles.floatBadge2}`}
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className={styles.badgeDot} />
                React
              </motion.div>
              <motion.div
                className={`${styles.floatBadge} ${styles.floatBadge3}`}
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 1 }}
              >
                <span className={styles.badgeDot} />
                3+ Years
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
