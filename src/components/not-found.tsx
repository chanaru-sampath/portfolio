import { Link, useLocation } from '@tanstack/react-router'

const NotFound = () => {
  const location = useLocation()

  return (
    <div className="flex items-center justify-center h-[500px]">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Ops! <span className="text-accent">404</span>
        </h1>
        <p className="text-lg">
          There is no page for{''}
          <span className="text-accent italic">{`'${location.pathname}'`}</span>
        </p>
        <p className="text-lg">
          Please check the url or Go to{' '}
          <Link className="underline text-accent capitalize" to="/">
            home page.
          </Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound
