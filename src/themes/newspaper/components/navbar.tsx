import { Link } from '@tanstack/react-router'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
]

export const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-2 border-b-2 border-primary mb-8 border-double">
      <ul className="flex gap-6 md:gap-12">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="font-headline italic text-lg hover:underline decoration-2 underline-offset-4"
              activeProps={{ className: 'font-bold not-italic' }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
