import type { ProjectCardProps } from '@/types/theme'

export const personalInfo = {
  name: 'Chanaru Sampath',
  title: 'Senior Software Engineer',
  summary:
    'I craft immersive digital experiences with modern web technologies. Specializing in scalable web applications and high-performance backend systems, I have dedicated my career to solving complex problems with elegant code. From simple scripts to massive enterprise architectures, my journey has been one of constant learning and innovation. Proficient in React, Node.js, TypeScript, and heavy doses of caffeine — an expert in turning requirements into reality.',
  email: 'chanarusampath@gmail.com',
  github: 'https://github.com/chanaru',
  linkedin: 'https://linkedin.com/in/chanaru',
  avatarUrl: '/images/portrait.jpg',
}

export const projects: ProjectCardProps[] = [
  {
    title: 'E-Commerce Giant Goes Modular',
    description:
      'In a stunning turn of events, the monolith was dismantled. Micro-services now rule the land, bringing 99.99% uptime to the masses.',
    tags: ['Next.js', 'Node.js', 'AWS'],
    year: 2023,
    featured: true,
    liveUrl: undefined,
  },
  {
    title: 'AI Chatbot Passes Touring Test',
    description:
      'Local algorithm creates poetry so beautiful it made a senior developer cry. "I have never seen such clean code," witnesses report.',
    tags: ['OpenAI', 'React', 'Python'],
    year: 2023,
    featured: true,
    liveUrl: undefined,
  },
  {
    title: 'Dashboard Revolutionizes Analytics',
    description:
      'Data visualization reaches new heights. Executives reportedly "actually understand" the Q3 projections for the first time in history.',
    tags: ['D3.js', 'Vue', 'Firebase'],
    year: 2023,
    featured: false,
    liveUrl: undefined,
  },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Java',
  'Go',
  'Firebase',
  'GCP',
  'Terraform',
  'Spring Boot',
]

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Avlyon',
    period: '2024 - Present',
    description:
      'Leading the design and development of scalable end-to-end solutions across web, mobile, and backend platforms. Building high-performance front-end interfaces with React.js and cross-platform mobile applications with React Native.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Circles Life',
    period: '2022 - 2024',
    description:
      'Focused on building and optimizing front-end applications using TypeScript and React. Contributed to backend development with Java Spring Boot and Go. Mentored junior engineers and led a cross-functional team of 6-8 members.',
  },
  {
    role: 'Fullstack Engineer',
    company: 'Sprii',
    period: '2019 - 2021',
    description:
      'Developed scalable web and mobile apps using Next.js, React Native, and Node.js. Managed cloud infrastructure on GCP, automated deployments with Terraform.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Netstarter',
    period: '2018 - 2019',
    description:
      'Worked on Magento-based eCommerce frontends using React and jQuery. Developed responsive, high-performance interfaces.',
  },
  {
    role: 'Software Engineer',
    company: 'Virtusa',
    period: '2017 - 2018',
    description:
      'Worked on Pega Systems to design, develop, and maintain business process management solutions. Focused on workflow automation and system integration.',
  },
]

export const education = [
  {
    degree: 'BSc in Software Engineering',
    institution: 'Curtin University',
  },
  {
    degree: 'Physical Science',
    institution: 'Royal College (GCE A/L)',
  },
]
