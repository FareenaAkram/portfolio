import { m } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import TypingAnimation from '../../components/ui/TypingAnimation';
import Button from '../../components/common/Button';
import { img } from '../../utils/assets';
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from '../../utils/animations';
import styles from './Hero.module.css';

const TYPING_PHRASES = [
  'Frontend Engineer',
  'React Developer',
  'Angular Specialist',
  'IBM Consultant',
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
        <m.div
          className={styles.content}
          variants={stagger(0.1)}
          initial="hidden"
          animate="visible"
        >
          {/* Text side */}
          <m.div className={styles.textSide} variants={slideLeft}>
            <m.span className={styles.greeting} variants={fadeUp}>
              Hello, I am
            </m.span>

            <m.h1 className={styles.name} variants={fadeUp}>
              Fareena Akram
            </m.h1>

            <m.p className={styles.tagline} variants={fadeUp}>
              I am a Passionate{' '}
              <TypingAnimation phrases={TYPING_PHRASES} className={styles.typedText} />
            </m.p>

            <m.p className={styles.description} variants={fadeUp}>
              Frontend Developer with 4+ years of experience building responsive, accessible,
              and performance-focused web interfaces. Currently at IBM — delivering front-end
              solutions for enterprise banking applications.
            </m.p>

            <m.div className={styles.ctaBar} variants={fadeUp}>
              <Button href="#contactus" onClick={scrollToContact} variant="primary">
                Contact Me
              </Button>
              <Button href="#work" onClick={scrollToWork} variant="outline">
                View Portfolio
              </Button>
            </m.div>

            {/* Scroll hint */}
            <m.div
              className={styles.scrollHint}
              variants={fadeUp}
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} />
              <span>Scroll to explore</span>
            </m.div>
          </m.div>

          {/* Visual side */}
          <m.div className={styles.visualSide} variants={slideRight}>
            <div className={styles.videoCard}>
              <div className={styles.videoGlow} aria-hidden="true" />
              <img
                src={img('images/Me.png')}
                alt="Fareena Akram"
                className={styles.heroPhoto}
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                width="420"
                height="525"
              />
              {/* Floating badges */}
              <m.div
                className={`${styles.floatBadge} ${styles.floatBadge1}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <span className={styles.badgeDot} />
                @ IBM
              </m.div>
              <m.div
                className={`${styles.floatBadge} ${styles.floatBadge2}`}
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className={styles.badgeDot} />
                React · Angular
              </m.div>
              <m.div
                className={`${styles.floatBadge} ${styles.floatBadge3}`}
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 1 }}
              >
                <span className={styles.badgeDot} />
                4+ Years
              </m.div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
