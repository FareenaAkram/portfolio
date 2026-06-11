import { motion } from 'framer-motion';
import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import { SKILLS } from '../../data/skills';
import { EXPERIENCE, EDUCATION } from '../../data/experience';
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from '../../utils/animations';
import styles from './About.module.css';

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      className={styles.skillItem}
      variants={fadeUp}
      custom={index}
    >
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <motion.div
          className={styles.skillFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

function ExperienceCard({ item }) {
  return (
    <motion.div className={styles.expCard} variants={fadeUp}>
      <div className={styles.expHeader}>
        <div className={styles.expLogo}>
          <img src={item.logo} alt={item.company} />
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
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* ── Bio Row ──────────────────────────────────────────────────────── */}
        <div className={styles.bioRow}>
          {/* Image */}
          <motion.div
            className={styles.imageWrap}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className={styles.imageFrame}>
              <div className={styles.imageGlow} aria-hidden="true" />
              <img
                src="/images/collage.png"
                alt="About Fareena Akram"
                className={styles.collageImg}
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              className={styles.statCard}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <span className={styles.statNum}>3+</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </motion.div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            className={styles.bioText}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionTitle
              eyebrow="About Me"
              title="Frontend Engineer with over 3 years of experience."
            />
            <p className={styles.bio}>
              I am a Frontend Engineer with expertise in HTML, CSS, Bootstrap, Angular, and
              WordPress, focused on developing responsive, user-friendly web interfaces. I am from
              Pakistan and have experience in leading Angular application development, integrating
              Material UI, and maintaining websites to enhance marketing and lead generation efforts.
            </p>
            <p className={styles.bio}>
              With a strong eye for design and proficiency in tools like Adobe Photoshop and Figma,
              I combine creativity with technical skill to deliver modern, optimized web solutions.
              I am passionate about learning new technologies and continuously improving my craft to
              meet the evolving demands of web development.
            </p>
            <div className={styles.ctaBar}>
              <Button href="#contactus" onClick={e => { e.preventDefault(); document.getElementById('contactus')?.scrollIntoView({ behavior: 'smooth' }); }} variant="primary">
                Contact Me
              </Button>
              <Button href="#work" onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }} variant="outline">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>

        {/* ── Education & Skills Row ────────────────────────────────────────── */}
        <div className={styles.divider} />
        <SectionTitle eyebrow="Background" title="Education & Skills" />

        <div className={styles.eduSkillsRow}>
          {/* Education */}
          <motion.div
            className={styles.eduWrap}
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {EDUCATION.map((edu, i) => (
              <motion.div key={i} className={styles.eduCard} variants={fadeUp}>
                <div className={styles.eduDot} />
                <div className={styles.eduBody}>
                  <span className={styles.eduPeriod}>{edu.period}</span>
                  <h5 className={styles.eduDegree}>{edu.degree}</h5>
                  <p className={styles.eduInstitution}>{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            className={styles.skillsWrap}
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className={styles.skillsHeading}>My Skills</h3>
            <p className={styles.skillsDesc}>
              My expertise spans across various technologies and frameworks, allowing me to deliver
              high-quality solutions and continually enhance my skill set.
            </p>
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </motion.div>
        </div>

        {/* ── Experience ────────────────────────────────────────────────────── */}
        <div className={styles.divider} />
        <SectionTitle eyebrow="Career" title="Experience." />

        <motion.div
          className={styles.expList}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EXPERIENCE.map(item => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
