import { Link, useMatchRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { CiMenuFries } from 'react-icons/ci'

import { cn } from '@/lib/utils'

import Logo from './logo'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet'

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
          <motion.span
            className={cn(
              'relative uppercase font-medium hover:text-accent transition-all',
              isActive && 'text-accent'
            )}
            initial={{ '--scaleX': 0 }}
            animate={{ '--scaleX': isActive ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <Link key={link.name} to={link.path}>
              {link.name}
            </Link>
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-accent w-full"
              style={{ scaleX: 0, transformOrigin: 'left' }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.span>
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
