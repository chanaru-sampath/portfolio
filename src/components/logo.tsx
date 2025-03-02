import { Link } from '@tanstack/react-router'

const Logo = () => {
  return (
    <Link to="/">
      <div className="cursor-pointer bg-accent w-16 h-16 flex items-center justify-center font-bold text-2xl rounded-sm">
        CS.
      </div>
    </Link>
  )
}

export default Logo
