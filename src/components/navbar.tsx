import { Link, useMatchRoute } from '@tanstack/react-router'
import { CiMenuFries } from 'react-icons/ci'

import { cn } from '@/lib/utils'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet'
import Logo from './logo'

const navLinks = [
  { name: 'home', path: '/' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
]

export const DesktopNav = () => {
  const matchRoute = useMatchRoute()

  return (
    <nav className="flex gap-8">
      {navLinks.map((link) => {
        const isActive = matchRoute({ to: link.path })

        return (
          <Link
            className={cn(
              'uppercase font-medium hover:text-accent transition-all',
              isActive && 'text-accent border-b-2 border-accent'
            )}
            key={link.name}
            to={link.path}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export const MobileNav = () => {
  const matchRoute = useMatchRoute()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <CiMenuFries className="text-[32px] text-accent flex justify-center items-center" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Logo />
          <div className="flex flex-col items-center justify-center gap-4 mt-10">
            {navLinks.map((link) => {
              const isActive = matchRoute({ to: link.path })

              return (
                <SheetClose key={link.name} asChild>
                  <Link
                    to={link.path}
                    className={cn(
                      'uppercase font-medium text-2xl hover:text-accent transition-all',
                      isActive && 'text-accent border-b-2 border-accent'
                    )}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              )
            })}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
