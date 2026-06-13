import { m } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import { img } from '../../utils/assets';
import { SKILLS } from '../../data/skills';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../../data/experience';
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from '../../utils/animations';
import styles from './About.module.css';

function SkillBar({ name, level, index }) {
  return (
    <m.div className={styles.skillItem} variants={fadeUp} custom={index}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <m.div
          className={styles.skillFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.1, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </m.div>
  );
}

function ExperienceCard({ item }) {
  return (
    <m.div className={`${styles.expCard} ${item.current ? styles.expCurrent : ''}`} variants={fadeUp}>
      {item.current && <div className={styles.currentBadge}><span className={styles.currentDot} />Currently Here</div>}
      <div className={styles.expHeader}>
        <div className={styles.expLogo}>
          {item.logo ? (
            <img src={item.logo} alt={item.company} loading="lazy" decoding="async" />
          ) : (
            <span className={styles.expLogoText}>{item.logoText}</span>
          )}
        </div>
        <div className={styles.expMeta}>
          <h4 className={styles.expRole}>{item.role}</h4>
          <span className={styles.expCompany}>{item.company}</span>
          <div className={styles.expTags}>
            <span className={styles.expPeriod}>{item.period}</span>
            <span className={styles.expType}>{item.type}</span>
          </div>
        </div>
      </div>
      <ul className={styles.expPoints}>
        {item.points.map(p => (
          <li key={p.heading} className={styles.expPoint}>
            <strong>{p.heading}:</strong> {p.detail}
          </li>
        ))}
      </ul>
    </m.div>
  );
}

function CertCard({ cert }) {
  return (
    <m.div className={styles.certCard} variants={fadeUp}>
      <Award size={16} className={styles.certIcon} />
      <div className={styles.certBody}>
        <span className={styles.certName}>{cert.name}</span>
        <span className={styles.certIssuer}>{cert.issuer}</span>
      </div>
    </m.div>
  );
}

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* ── Bio Row ──────────────────────────────────────────────────────── */}
        <div className={styles.bioRow}>
          <m.div
            className={styles.imageWrap}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className={styles.imageFrame}>
              <div className={styles.imageGlow} aria-hidden="true" />
              <img
                src={img('images/collage.png')}
                alt="About Fareena Akram"
                className={styles.collageImg}
                loading="lazy"
                decoding="async"
              />
            </div>
            <m.div
              className={styles.statCard}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </m.div>
          </m.div>

          <m.div
            className={styles.bioText}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionTitle
              eyebrow="About Me"
              title="Frontend Developer with 4+ years of experience."
            />
            <p className={styles.bio}>
              Frontend Developer with expertise in building responsive, accessible, and
              performance-focused web interfaces for product and marketing websites. Skilled in
              HTML5, CSS3/SASS, JavaScript, TypeScript, Angular, React, Bootstrap, Material UI,
              and WordPress/Elementor.
            </p>
            <p className={styles.bio}>
              Currently at <strong>IBM</strong> as a Business Transformation Consultant,
              delivering front-end solutions for enterprise banking applications. With experience
              integrating APIs, improving SEO, and translating business requirements into
              maintainable front-end solutions — known for clean UI/UX and adapting quickly to
              new tools and frameworks.
            </p>
            <div className={styles.ctaBar}>
              <Button
                href="#contactus"
                onClick={e => { e.preventDefault(); document.getElementById('contactus')?.scrollIntoView({ behavior: 'smooth' }); }}
                variant="primary"
              >
                Contact Me
              </Button>
              <Button
                href="#work"
                onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
                variant="outline"
              >
                View Portfolio
              </Button>
            </div>
          </m.div>
        </div>

        {/* ── Education & Skills ────────────────────────────────────────────── */}
        <div className={styles.divider} />
        <SectionTitle eyebrow="Background" title="Education & Skills" />

        <div className={styles.eduSkillsRow}>
          {/* Education */}
          <m.div
            className={styles.eduWrap}
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {EDUCATION.map((edu, i) => (
              <m.div key={i} className={styles.eduCard} variants={fadeUp}>
                <div className={styles.eduDot} />
                <div className={styles.eduBody}>
                  <span className={styles.eduPeriod}>{edu.period}</span>
                  <h5 className={styles.eduDegree}>{edu.degree}</h5>
                  <p className={styles.eduInstitution}>{edu.institution}</p>
                  <span className={styles.eduGpa}>cGPA: {edu.gpa}</span>
                </div>
              </m.div>
            ))}
          </m.div>

          {/* Skills */}
          <m.div
            className={styles.skillsWrap}
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className={styles.skillsHeading}>Technical Proficiency</h3>
            <p className={styles.skillsDesc}>
              Full-stack front-end expertise across frameworks, styling systems, and cloud tooling.
            </p>
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </m.div>
        </div>

        {/* ── Experience ────────────────────────────────────────────────────── */}
        <div className={styles.divider} />
        <SectionTitle eyebrow="Career" title="Work Experience." />

        <m.div
          className={styles.expList}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EXPERIENCE.map(item => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </m.div>

        {/* ── Certifications ────────────────────────────────────────────────── */}
        <div className={styles.divider} />
        <SectionTitle eyebrow="Learning" title="Courses & Certifications." />

        <m.div
          className={styles.certGrid}
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </m.div>

      </div>
    </section>
  );
}
