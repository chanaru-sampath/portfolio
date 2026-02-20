/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import {
  MainColumn,
  NewspaperGrid,
  SideColumn,
} from '@/themes/newspaper/components/newspaper-grid'

const HomePage = () => {
  return (
    <div className="container mx-auto pb-20">
      <NewspaperGrid>
        {/* Main Column: Feature Story */}
        <MainColumn>
          <article className="border-b-2 border-black pb-8">
            <h2 className="font-headline text-5xl md:text-7xl mb-4 leading-tight">
              Software Engineer Builds Digital Empire
            </h2>
            <div className="flex justify-between items-center font-mono text-sm border-t border-b border-black py-1 mb-6">
              <span className="uppercase">By Chanaru Sampath</span>
              <span className="uppercase">Location: Worldwide Web</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-2/3">
                <p className="font-body text-lg leading-relaxed mb-4 drop-cap text-justify">
                  I craft immersive digital experiences with modern web
                  technologies. Specializing in scalable web applications and
                  high-performance backend systems, I have dedicated my career
                  to solving complex problems with elegant code.
                </p>
                <p className="font-body text-lg leading-relaxed mb-6 text-justify">
                  From simple scripts to massive enterprise architectures, my
                  journey has been one of constant learning and innovation. I
                  invite you to explore my archives and witness the evolution of
                  my craft.
                </p>
                <div className="mt-8 p-4 border border-black bg-stone-100 italic text-center">
                  "Code is poetry written for machines to understand."
                </div>
              </div>

              {/* "Photo" / Stats Column */}
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] bg-neutral-200 border border-black flex items-center justify-center mb-2 overflow-hidden relative">
                  <img
                    src="/images/portrait.jpg"
                    alt="Chanaru Sampath"
                    className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 hover:contrast-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-500/10 pointer-events-none mix-blend-multiply"></div>
                </div>
                <p className="font-mono text-xs text-center italic leading-tight">
                  Chanaru Sampath, photographed at the annual Tech Symposium.
                </p>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <article>
              <h3 className="text-2xl mb-2 font-headline border-b border-black pb-1">
                Latest Projects
              </h3>
              <ul className="list-disc pl-5 font-body space-y-2 mt-2">
                <li>Modern E-Commerce Solution</li>
                <li>Real-time Chat Application</li>
                <li>AI-Powered Analytics Dashboard</li>
              </ul>
            </article>
            <article>
              <h3 className="text-2xl mb-2 font-headline border-b border-black pb-1">
                Technical Skills
              </h3>
              <p className="font-body text-sm mt-2 text-justify">
                Proficient in React, Node.js, TypeScript, and heavy doses of
                caffeine. Expert in turning requirements into reality.
              </p>
            </article>
          </div>
        </MainColumn>

        {/* Sidebar Column: Ads / Quick Links */}
        <SideColumn>
          <div className="border-2 border-black p-4 text-center">
            <h4 className="font-headline text-xl mb-2 uppercase border-b border-black pb-1">
              Advertisement
            </h4>
            <p className="font-body text-sm mb-4">
              Looking for a developer?
              <br />
              <strong>Hire Chanaru Today!</strong>
            </p>
            <Button
              variant="outline"
              className="border-2 border-black rounded-none bg-black text-white hover:bg-neutral-800 hover:text-white uppercase font-bold w-full"
            >
              Contact Now
            </Button>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-xl uppercase border-b-2 border-dashed border-black pb-1">
              In The Numbers
            </h4>
            {[
              { label: 'Years Exp', val: '7+' },
              { label: 'Projects', val: '50+' },
              { label: 'Commits', val: '500+' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex justify-between font-mono text-sm border-b border-gray-400 pb-1"
              >
                <span>{s.label}</span>
                <span className="font-bold">{s.val}</span>
              </div>
            ))}
          </div>

          <div className="bg-black text-white p-4 text-center">
            <h5 className="font-headline text-lg uppercase mb-2 text-white">
              Notice
            </h5>
            <p className="font-mono text-xs text-white">
              This portfolio is printed on 100% recycled pixels.
            </p>
          </div>
        </SideColumn>
      </NewspaperGrid>
    </div>
  )
}

export default HomePage
