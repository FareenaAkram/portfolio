import { img } from '../utils/assets';

export const EXPERIENCE = [
  {
    id:       'ibm',
    company:  'IBM',
    role:     'Business Transformation Consultant',
    type:     'Full Time',
    period:   'Jan 2025 — Present',
    current:  true,
    logo:     null,
    logoText: 'IBM',
    points: [
      {
        heading: 'Front-End Delivery',
        detail:
          'Led front-end UI/UX enhancements using HTML5, CSS3/SASS, and JavaScript to deliver responsive, accessible interfaces across devices.',
      },
      {
        heading: 'API Integrations',
        detail:
          'Implemented and maintained secure integrations with banking APIs and third-party services, with a focus on error handling, data validation, and stable user experiences.',
      },
      {
        heading: 'Cross-Functional Collaboration',
        detail:
          'Partnered with product managers and backend teams to translate business requirements into performant, maintainable front-end solutions.',
      },
    ],
  },
  {
    id:       'curemd',
    company:  'CureMD',
    role:     'Frontend Engineer',
    type:     'Full Time · Onsite',
    period:   'July 2023 — Dec 2024',
    current:  false,
    logo:     img('images/curemd-logo.jpg'),
    logoText: null,
    points: [
      {
        heading: 'Website Optimization',
        detail:
          'Developed and optimized the company website to improve performance, responsiveness, and cross-device consistency for marketing and lead-generation initiatives.',
      },
      {
        heading: 'Angular Applications',
        detail:
          'Built interactive Angular applications with TypeScript and Material UI to support campaign tracking, analytics, and user engagement.',
      },
      {
        heading: 'SEO & Reusability',
        detail:
          'Improved front-end SEO, reusability, and testing practices to reduce regressions and accelerate marketing iterations.',
      },
    ],
  },
  {
    id:       'devbunch',
    company:  'Devbunch',
    role:     'Frontend Engineer',
    type:     'Full Time · Onsite · Lahore',
    period:   'Jan 2022 — June 2023',
    current:  false,
    logo:     img('images/devbunch-logo.svg'),
    logoText: null,
    points: [
      {
        heading: 'Template Development',
        detail:
          'Built high-quality WordPress Elementor template kits across multiple categories using HTML5, CSS3, and Bootstrap.',
      },
      {
        heading: 'WooCommerce',
        detail:
          'Developed and customized WooCommerce stores in WordPress to support e-commerce functionality and client requirements.',
      },
      {
        heading: 'Theme Customization',
        detail:
          'Customized theme styles with Elementor Pro and CSS to improve layout consistency and visual quality.',
      },
    ],
  },
];

export const EDUCATION = [
  {
    degree:      'MS',
    institution: 'Lahore College for Women University, Lahore',
    period:      'Sept 2019 — July 2021',
    gpa:         '3.86',
  },
  {
    degree:      'BS',
    institution: 'Lahore College for Women University, Lahore',
    period:      'Oct 2015 — July 2019',
    gpa:         '3.51',
  },
];

export const CERTIFICATIONS = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'AWS' },
  { name: 'Python for Data Science & AI',      issuer: 'IBM' },
  { name: 'React Basics',                       issuer: 'Meta' },
  { name: 'Version Control',                    issuer: 'Meta' },
  { name: 'Programming with JavaScript',        issuer: 'Meta' },
  { name: 'Querying Databases with SQL',        issuer: 'IBM' },
  { name: 'Sass Essential Training',            issuer: 'LinkedIn' },
  { name: 'PL/SQL by Example',                  issuer: 'Udemy' },
];
