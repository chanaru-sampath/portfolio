import { Button } from '@/components/ui/button'
import { projects } from '@/data/portfolio'
import {
  MainColumn,
  NewspaperGrid,
} from '@/themes/newspaper/components/newspaper-grid'

const WorkPage = () => {
  return (
    <div className="container mx-auto pb-20">
      <div className="border-b-4 border-black mb-8 text-center pb-2">
        <h2 className="font-masthead text-5xl md:text-7xl">
          The Daily Projects
        </h2>
        <p className="font-mono uppercase tracking-widest text-sm mt-2">
          Special Weekend Edition
        </p>
      </div>

      <NewspaperGrid>
        <MainColumn className="lg:col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="border-2 border-black p-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="border-b border-black pb-2 mb-3 flex justify-between font-mono text-xs uppercase">
                  <span className="bg-black text-white px-1">
                    {project.tags[0] || 'Experience'}
                  </span>
                  <span>{project.year}</span>
                </div>
                <div className="w-full aspect-video bg-neutral-200 mb-4 border border-black flex items-center justify-center grayscale">
                  <span className="font-mono text-xs">
                    [Image Not Available]
                  </span>
                </div>
                <h3 className="font-headline text-2xl leading-tight mb-2 font-bold">
                  {project.title}
                </h3>
                <p className="font-body text-sm mb-4 leading-relaxed text-justify line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono border border-black px-1 rounded-full"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-black rounded-none hover:bg-black hover:text-white font-bold uppercase text-xs"
                >
                  Read Full Story
                </Button>
              </article>
            ))}
          </div>
        </MainColumn>
      </NewspaperGrid>
    </div>
  )
}

export default WorkPage
