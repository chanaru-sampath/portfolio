export type ProjectCardProps = {
  id: string
  title: string
  description: string
  tags: string[]
  year: number | string
  featured?: boolean
  liveUrl?: string
}

export type HeroProps = {
  name: string
  title: string
  summary: string
  avatarUrl: string
}

export type NavProps = {
  links: { label: string; to: string }[]
}

export type LayoutProps = {
  children: React.ReactNode
}

export type ContactFormProps<T = unknown> = {
  onSubmit: (data: T) => void
}

export type ThemeComponents = {
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
