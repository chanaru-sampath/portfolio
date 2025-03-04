import { Link } from '@tanstack/react-router'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[500px]">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Ops<span className="text-accent">!</span>
        </h1>
        <p className="text-lg">
          There is no route like this. Please check the url or{' '}
          <Link className="underline text-accent" to="/">
            Go to home page
          </Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound
