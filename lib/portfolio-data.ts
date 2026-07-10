export const profile = {
  avatarUrl: '/images/profile.jpeg',
  email: 'r.pratik013@gmail.com',
  location: 'Cincinnati, OH',
  name: 'Pratik Rajbhandari',
  resumeUrl: '/Resume - Pratik Rajbhandari.pdf',
  role: 'Full Stack Developer',
  socials: {
    github: 'https://github.com/Rpratik13',
    leetcode: 'https://leetcode.com/u/rpratik',
    linkedin: 'https://linkedin.com/in/pratik-rajbhandari',
  },
  stats: [
    { label: 'Years experience', value: '4+' },
    { label: 'Projects shipped', value: '10+' },
    { label: 'Daily active users', value: '10K+' },
  ],
  tagline:
    'I build scalable, distributed systems and craft delightful product experiences end to end, from database schema to pixel.',
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
    location: 'Cincinnati, OH',
    period: 'Oct 2024 — Apr 2026',
    points: [
      {
        highlight: 'reduced deployment errors by 30%',
        text: 'Migrated a legacy codebase from shared network drives to Git, enabling local development, team collaboration, and reliable production deployments which ',
      },
      {
        highlight: 'improving query performance by 50%',
        text: 'Designed and optimized stored procedures for CRUD operations, reporting, and external API uploads, ',
        textAfter: ' and ensuring accurate data delivery.',
      },
      {
        text: 'Built a template-driven PDF generation system with TinyMCE and Aspose.PDF, enabling non-technical staff to produce rich-text, accessible documents with no code',
      },
      {
        highlight: '5 applications',
        text: 'Audited and remediated multiple web applications with the WAVE tool to achieve WCAG / ADA compliance, improving usability for users with disabilities across ',
      },
    ],
    role: 'Software Developer',
    stack: ['C#', 'ASP.NET', 'HTML', 'CSS', 'MSSQL'],
  },
  {
    company: 'Leapfrog Technology',
    location: 'Kathmandu, Nepal',
    period: 'Sept 2020 - Jul 2024',
    points: [
      {
        highlight: '3 clinical workflows',
        text: 'Integrated patient data from Epic via SMART on FHIR, delivering secure, HIPAA-compliant data exchange across ',
      },
      {
        highlight: '9 project milestones',
        text: 'Led a team of 5 engineers through Agile sprints, owning task planning and on-time delivery of ',
      },
      {
        highlight: 'reduced runtime bugs by 20%',
        text: 'Migrated a legacy JavaScript codebase to TypeScript, introducing static typing that ',
      },
      {
        highlight: '10,000 daily requests',
        text: 'Designed and implemented RESTful APIs in Node.js, supporting over 500 concurrent users with over ',
      },
      {
        highlight: 'cutting latency by 25%',
        text: 'Optimized database queries, schemas, and API performance, ',
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
    role: 'Software Engineer',
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
    link: 'https://doi.org/10.1145/3803400.3809402',
    title:
      'C-x86 Emulator: A Web-Based Interactive Tool for Understanding x86-64 Assembly and Visualizing C Program State.',
    venue:
      '31st ACM Conference on Innovation and Technology in Computer Science Education',
    year: '2026',
  },
  {
    link: 'http://rave.ohiolink.edu/etdc/view?acc_num=ucin1778863427104986',
    title:
      'Web based interactive visualization for understanding ARP and ARP spoofing',
    venue: 'MS Thesis, University of Cincinnati',
    year: '2026',
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
    degree: 'M.S. Computer Science',
    detail: 'GPA 4.0.',
    period: '2024 — 2026',
    school: 'University of Cincinnati',
  },
  {
    degree: 'B.E. Computer Engineering',
    detail: 'GPA 3.65',
    period: '2016 — 2020',
    school: 'Kathmandu University',
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
