export const profile = {
  name: 'Pratik Rajbhandari',
  role: 'Full Stack Developer',
  location: 'Cincinnati, OH',
  email: 'r.pratik013@gmail.com',
  tagline:
    'I build scalable, distributed systems and craft delightful product experiences end to end, from database schema to pixel.',
  resumeUrl: '/Resume - Pratik Rajbhandari.pdf',
  avatarUrl: '/images/profile.jpeg',
  socials: {
    github: 'https://github.com/Rpratik13',
    linkedin: 'https://linkedin.com/in/pratik-rajbhandari',
    leetcode: 'https://leetcode.com/u/rpratik',
  },
  stats: [
    { label: 'Years experience', value: '4+' },
    { label: 'Projects shipped', value: '10+' },
    { label: 'Daily active users', value: '10K+' },
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;

  location: string;
  points: { text: string; highlight?: string; textAfter?: string }[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'University of Cincinnati',
    role: 'Software Developer',
    period: 'Oct 2024 — Apr 2026',
    location: 'Cincinnati, OH',
    points: [
      {
        text: 'Migrated a legacy codebase from shared network drives to Git, enabling local development, team collaboration, and reliable production deployments which ',
        highlight: 'reduced deployment errors by 30%',
      },
      {
        text: 'Designed and optimized stored procedures for CRUD operations, reporting, and external API uploads, ',
        highlight: 'improving query performance by 50%',
        textAfter: ' and ensuring accurate data delivery.',
      },
      {
        text: 'Built a template-driven PDF generation system with TinyMCE and Aspose.PDF, enabling non-technical staff to produce rich-text, accessible documents with no code',
      },
      {
        text: 'Audited and remediated multiple web applications with the WAVE tool to achieve WCAG / ADA compliance, improving usability for users with disabilities across ',
        highlight: '5 applications',
      },
    ],
    stack: ['C#', 'ASP.NET', 'HTML', 'CSS', 'MSSQL'],
  },
  {
    company: 'Leapfrog Technology',
    role: 'Software Engineer',
    period: 'Sept 2020 - Jul 2024',
    location: 'Kathmandu, Nepal',
    points: [
      {
        text: 'Integrated patient data from Epic via SMART on FHIR, delivering secure, HIPAA-compliant data exchange across ',
        highlight: '3 clinical workflows',
      },
      {
        text: 'Led a team of 5 engineers through Agile sprints, owning task planning and on-time delivery of ',
        highlight: '9 project milestones',
      },
      {
        text: 'Migrated a legacy JavaScript codebase to TypeScript, introducing static typing that ',
        highlight: 'reduced runtime bugs by 20%',
      },
      {
        text: 'Designed and implemented RESTful APIs in Node.js, supporting over 500 concurrent users with over ',
        highlight: '10,000 daily requests',
      },
      {
        text: 'Optimized database queries, schemas, and API performance, ',
        highlight: 'cutting latency by 25%',
      },
      {
        text: 'Wrote comprehensive unit tests to ensure code quality, eliminate regressions, and support reliable CI/CD deployments',
      },
      {
        text: 'Collaborated with Product Owners and stakeholders to gather requirements, prioritize features, and drive development as team lead',
      },
      {
        text: 'Mentored and onboarded new hires and junior engineers across Node.js, React, TypeScript, and PostgreSQL',
      },
    ],
    stack: [
      'React',
      'Node.js',
      'Express',
      'NestJS',
      'Python',
      'MySQL',
      'PostgreSQL',
    ],
  },
];

export type Project = {
  name: string;
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: 'ARP Emulator',
    points: [
      'Developed a web-based ARP emulator that enables interactive visualization of ARP protocol behavior and ARP spoofing attacks for cybersecurity education',
      'Designed and implemented core system components and collaborated with faculty to refine features based on instructional requirements',
      'Conducted performance and scalability testing, demonstrating stable operation with support for over 300 concurrent students',
    ],
    stack: ['NodeJS', 'React', 'PostgreSQL', 'Docker', 'WebSockets'],
  },
  {
    name: 'C-x86 Emulator',
    points: [
      'Collaborated with faculty to extend an educational software platform for teaching assembly language and computer systems concepts',
      "Implemented enhancements that improved the platform's functionality, user experience, and effectiveness for undergraduate learning",
      'Contributed to a project culminating in a peer-reviewed publication at the 2026 ACM Conference on Innovation and Technology in Computer Science Education (ITiCSE)',
    ],
    stack: ['NodeJS', 'React', 'Typescript', 'Linux'],
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  link: string;
};

export const publications: Publication[] = [
  {
    title:
      'C-x86 Emulator: A Web-Based Interactive Tool for Understanding x86-64 Assembly and Visualizing C Program State.',
    venue:
      '31st ACM Conference on Innovation and Technology in Computer Science Education',
    year: '2026',
    link: 'https://doi.org/10.1145/3803400.3809402',
  },
  {
    title:
      'Web based interactive visualization for understanding ARP and ARP spoofing',
    venue: 'MS Thesis, University of Cincinnati',
    year: '2026',
    link: 'http://rave.ohiolink.edu/etdc/view?acc_num=ucin1778863427104986',
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    school: 'University of Cincinnati',
    degree: 'M.S. Computer Science',
    period: '2024 — 2026',
    detail: 'GPA 4.0.',
  },
  {
    school: 'Kathmandu University',
    degree: 'B.E. Computer Engineering',
    period: '2016 — 2020',
    detail: 'GPA 3.65',
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'C#', 'Python', 'HTML', 'CSS', 'SCSS'],
  },
  {
    category: 'Frameworks and Libraries',
    items: ['ASP.NET', 'React', 'Node.js', 'NestJS', 'Express', 'Tailwind CSS'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker'],
  },
];
