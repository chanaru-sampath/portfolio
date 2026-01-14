import { cn } from '@/lib/utils'

interface NewspaperGridProps {
  children: React.ReactNode
  className?: string
}

export const NewspaperGrid = ({ children, className }: NewspaperGridProps) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-12 gap-8', className)}>
      {children}
    </div>
  )
}

export const MainColumn = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => <div className={cn('lg:col-span-8 space-y-8', className)}>{children}</div>

export const SideColumn = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={cn(
      'lg:col-span-4 space-y-8 lg:border-l-2 lg:border-primary lg:pl-8',
      className
    )}
  >
    {children}
  </div>
)
