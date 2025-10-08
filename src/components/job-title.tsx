import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

const titles = ['Senior Software Engineer', 'JavaScript Fullstack Engineer']

const JobTitle = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const renderWords = (words: Array<string>) => {
    const [first, ...rest] = words

    return (
      <span>
        <span className="text-accent">{first}</span> {rest.join(' ')}
      </span>
    )
  }

  return (
    <div
      className={cn(
        'relative w-auto h-12 overflow-hidden flex items-center justify-center lg:justify-start',
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute text-md lg:text-xl font-bold"
        >
          {renderWords(titles[index].split(' '))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default JobTitle
