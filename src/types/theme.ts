export interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  year: number | string
  featured?: boolean
  liveUrl?: string
}

export interface HeroProps {
  name: string
  title: string
  summary: string
  avatarUrl: string
}

export interface NavProps {
  links: { label: string; to: string }[]
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface ContactFormProps {
  onSubmit: (data: any) => void
}

export interface ThemeComponents {
  Layout: React.ComponentType<LayoutProps>
  Nav: React.ComponentType<NavProps>
  Hero: React.ComponentType<HeroProps>
  ProjectCard: React.ComponentType<ProjectCardProps>
  ContactForm: React.ComponentType<ContactFormProps>
  SectionTitle: React.ComponentType<{ children: React.ReactNode }>
  Badge: React.ComponentType<{ children: React.ReactNode; variant?: string }>
  Button: React.ComponentType<{
    children: React.ReactNode
    variant?: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
  }>
}
