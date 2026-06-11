import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from '../../utils/animations';
import styles from './Contact.module.css';

const FORMSPREE_URL = 'https://formspree.io/f/mbdbanaw';

function FloatingInput({ id, name, label, type = 'text', required, as: Tag = 'input', rows }) {
  return (
    <div className={styles.fieldWrap}>
      {Tag === 'input' ? (
        <input
          id={id}
          name={name}
          type={type}
          className={styles.field}
          placeholder=" "
          required={required}
          autoComplete="off"
        />
      ) : (
        <textarea
          id={id}
          name={name}
          rows={rows}
          className={`${styles.field} ${styles.textarea}`}
          placeholder=" "
          required={required}
        />
      )}
      <label htmlFor={id} className={styles.fieldLabel}>{label}</label>
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contactus" className={styles.contact}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Work Together."
          subtitle="Always available for freelancing if the right project comes along. Feel free to reach out."
        />

        <div className={styles.layout}>
          {/* ── Info panel ──────────────────────────────────────────────────── */}
          <motion.div
            className={styles.infoPanel}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <Mail size={22} />
              </div>
              <div>
                <p className={styles.infoLabel}>Email me at</p>
                <a
                  href="mailto:fareenaakram18@gmail.com"
                  className={styles.infoValue}
                >
                  fareenaakram18@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.availability}>
              <div className={styles.availDot} />
              <span>Available for freelance projects</span>
            </div>

            <p className={styles.infoText}>
              I'm passionate about creating high-quality web experiences. Whether you need a
              custom website, Angular application, or WordPress solution — let's talk about
              your project.
            </p>

            {/* Social */}
            <div className={styles.socialRow}>
              <a
                href="https://www.linkedin.com/in/fareena-akram-94a75b128/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* ── Form ────────────────────────────────────────────────────────── */}
          <motion.div
            className={styles.formWrap}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={styles.row2}>
                <FloatingInput id="name"    name="name"    label="Your Name"  required />
                <FloatingInput id="email"   name="email"   label="Email Address" type="email" required />
              </div>
              <FloatingInput   id="subject" name="subject" label="Subject" required />
              <FloatingInput   id="message" name="message" label="Message" as="textarea" rows={5} required />

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className={styles.spinner} />
                ) : (
                  <Send size={16} />
                )}
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>

            {/* Status feedback */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  className={`${styles.alert} ${styles.alertSuccess}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <CheckCircle size={18} />
                  <span>Message sent! I'll get back to you soon.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className={`${styles.alert} ${styles.alertError}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <AlertCircle size={18} />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
