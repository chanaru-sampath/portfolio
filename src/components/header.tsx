import { Navbar } from './navbar'

const Header = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="flex flex-col w-full pt-8 pb-4">
      {/* Top Meta Bar */}
      <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-2 font-mono text-xs md:text-sm uppercase tracking-widest">
        <span>Vol. I, No. 1</span>
        <span>{today}</span>
        <span>Price: Free</span>
      </div>

      {/* Main Masthead */}
      <div className="text-center py-6 border-b-4 border-black mb-2">
        <h1 className="font-masthead text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-2">
          The Portfolio
        </h1>
        <p className="font-headline italic text-xl md:text-2xl mt-4">
          "All the code that's fit to ship"
        </p>
      </div>

      {/* Navigation Bar */}
      <Navbar />
    </header>
  )
}

export default Header
