import { Link, useMatchRoute } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import Logo from './logo'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]

const Header = () => {
  const matchRoute = useMatchRoute()

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-mono">
      <div className="mx-auto max-w-[1000px] flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-500 font-medium">
            {navLinks.map((link) => {
              const isActive = matchRoute({ to: link.path })

              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      'relative px-2 py-1 transition-all hover:text-black uppercase',
                      isActive
                        ? 'text-black pt-[15px] font-bold border-t-4 border-orange-500'
                        : 'border-t-4 border-transparent'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
