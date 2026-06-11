/* Shared Framer Motion variants used across the portfolio */

export const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const slideLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const slideRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = (delayChildren = 0.08) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delayChildren } },
});

export const staggerFast = stagger(0.05);
export const staggerSlow = stagger(0.12);

export const hoverLift = {
  rest:  { y: 0, transition: { duration: 0.2 } },
  hover: { y: -4, transition: { duration: 0.2 } },
};

export const viewportOnce = { once: true, margin: '-80px' };
