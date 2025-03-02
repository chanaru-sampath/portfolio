import Logo from './logo'
import { DesktopNav, MobileNav } from './navbar'

const Header = () => {
  return (
    <header className="py-4 xl:py-6 flex justify-between items-center">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden xl:flex">
        <DesktopNav />
      </div>

      {/* Mobile Navigation */}
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
