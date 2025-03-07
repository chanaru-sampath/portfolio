import { Link } from '@tanstack/react-router'
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import JobTitle from '@/components/job-title'
import { Button } from '@/components/ui/button'

const socials = [
  { icon: IoLogoGithub, link: 'https://github.com/chanaru-sampath' },
  { icon: IoLogoLinkedin, link: 'https://www.linkedin.com/in/chanarus' },
  { icon: IoLogoFacebook, link: 'https://facebook.com/chanaru' },
]

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[80vh] lg:py-10">
      {/* Info */}
      <div className="flex flex-col">
        <JobTitle className="mt-4 lg:mt-6" />
        <h1 className="text-4xl lg:text-5xl my-4">
          Hello I'm <br />
          <span className="text-accent">Chanaru Sampath</span>
        </h1>
        <p className="text-white/70 leading-5 lg:leading-6">
          Senior Software Engineer (Full stack) skilled in Next.js, Node.js, and
          React, focused on performance, clean code, and seamless user
          experiences.
        </p>
        {/* Socials */}
        <div className="flex gap-10 lg:gap-12 mt-6 lg:mt-8">
          <a href="/cv/chanaru-sse.pdf" download>
            <Button className="rounded-4xl" variant="outline">
              Download Resume
            </Button>
          </a>
          <div className="flex gap-3">
            {socials.map((social) => (
              <div key={social.link} className="text-3xl">
                <Link to={social.link} target="_blank">
                  <social.icon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center mt-10">
        <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full border-3 overflow-hidden border-accent p-[20px]">
          <img
            src="/images/avatar.png"
            alt="Profile Image"
            className="relative object-cover rounded-lg 
             before:absolute before:inset-0 before:blur-lg before:bg-white/20"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
