import { Link } from '@tanstack/react-router'

const Logo = () => {
  return (
    <Link to="/">
      <div className="relative cursor-pointer">
        <div className="absolute -top-2 -left-2 bg-orange-500 w-16 h-16 flex items-center justify-center text-white font-bold text-2xl rounded-sm">
          CS.
        </div>
      </div>
    </Link>
  )
}

export default Logo
