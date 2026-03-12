import type { ProjectCardProps } from '@/types/theme'

export const personalInfo = {
  name: 'Chanaru Sampath',
  title: 'Senior Software Engineer',
  summary:
    'I craft immersive digital experiences with modern web technologies. Specializing in scalable web applications and high-performance backend systems, I have dedicated my career to solving complex problems with elegant code. From simple scripts to massive enterprise architectures, my journey has been one of constant learning and innovation. Proficient in React, Node.js, TypeScript, and heavy doses of caffeine — an expert in turning requirements into reality.',
  email: 'chanarusampath@gmail.com',
  github: 'https://github.com/chanaru-sampath',
  linkedin: 'https://linkedin.com/in/chanarus',
  avatarUrl: '/images/portrait.jpg',
}

export const projects: ProjectCardProps[] = [
  {
    title: 'Avlyon',
    description:
      'Leading the design and development of scalable end-to-end solutions across web, mobile, and backend platforms. Building high-performance front-end interfaces with React.js, developing cross-platform mobile applications with React Native, and implementing robust backend services to ensure seamless integration, reliability, and scalability across all products.',
    tags: ['React.js', 'React Native', 'Node.js', 'Backend Services'],
    year: '2024 - Present',
    featured: true,
    liveUrl: undefined,
  },
  {
    title: 'Circles Life',
    description:
      'Building and optimizing front-end applications using TypeScript and React to deliver seamless and responsive user experiences. Contributing to backend development with Java Spring Boot and Go, helping design and maintain scalable, high-performance services. Mentoring junior engineers and leading a cross-functional team of 6–8 members.',
    tags: ['TypeScript', 'React', 'Java', 'Spring Boot', 'Go'],
    year: '2022 - 2024',
    featured: true,
    liveUrl: undefined,
  },
  {
    title: 'Sprii',
    description:
      'Developed scalable web and mobile apps using Next.js, React Native, and Node.js. Managed cloud infrastructure on GCP, automated deployments with Terraform, and optimized performance across frontend and backend systems.',
    tags: ['Next.js', 'React Native', 'Node.js', 'GCP', 'Terraform'],
    year: '2019 - 2021',
    featured: true,
    liveUrl: undefined,
  },
  {
    title: 'Netstarter',
    description:
      'Worked on Magento-based eCommerce frontends using React and jQuery, developing responsive, high-performance interfaces and enhancing user experiences through modern UI practices.',
    tags: ['React', 'jQuery', 'Magento'],
    year: '2018 - 2019',
    featured: false,
    liveUrl: undefined,
  },
  {
    title: 'Virtusa',
    description:
      'Worked on Pega Systems to design, develop, and maintain business process management solutions, focusing on workflow automation, system integration, and performance optimization for enterprise clients.',
    tags: ['Pega Systems', 'Workflow Automation', 'Integration'],
    year: '2017 - 2018',
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
      'At Avlyon, I work as a Senior Software Engineer, leading the design and development of scalable end-to-end solutions across web, mobile, and backend platforms. My work involves building high-performance front-end interfaces with React.js, developing cross-platform mobile applications with React Native, and implementing robust backend services to ensure seamless integration, reliability, and scalability across all products.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Circles Life',
    period: '2022 - 2024',
    description:
      'At Circles Life, I work as a Senior Software Engineer, where I focus on building and optimizing front-end applications using TypeScript and React to deliver seamless and responsive user experiences. Alongside my front-end responsibilities, I contribute to backend development with Java Spring Boot and Go, helping design and maintain scalable, high-performance services. I also mentor junior engineers and lead a cross-functional team of 6–8 members, guiding them through best practices in software design, code quality, and agile development to ensure the successful delivery of complex, business-critical projects.',
  },
  {
    role: 'Fullstack Engineer',
    company: 'Sprii',
    period: '2019 - 2021',
    description:
      'At Sprii, I worked as a Full Stack Engineer, developed scalable web and mobile apps using Next.js, React Native, and Node.js. Managed cloud infrastructure on GCP, automated deployments with Terraform, and optimized performance across frontend and backend systems.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Netstarter',
    period: '2018 - 2019',
    description:
      'As a Frontend Engineer, I worked on Magento-based eCommerce frontends using React and jQuery, developing responsive, high-performance interfaces and enhancing user experiences through modern UI practices.',
  },
  {
    role: 'Software Engineer',
    company: 'Virtusa',
    period: '2017 - 2018',
    description:
      'As a Software Engineer at Virtusa, I worked on Pega Systems to design, develop, and maintain business process management solutions, focusing on workflow automation, system integration, and performance optimization for enterprise clients.',
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
