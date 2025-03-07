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
      <div className="flex flex-col order-2 lg:order-none">
        <JobTitle className="mt-4 lg:mt-6" />
        <h1 className="self-center text-center text-4xl my-4 lg:text-start lg:self-start lg:text-5xl">
          Hello I'm <br />
          <span className="text-accent">Chanaru Sampath</span>
        </h1>
        <p className="text-center text-white/70 leading-5 lg:leading-6 lg:text-start">
          Senior Software Engineer (Full stack) skilled in Next.js, Node.js, and
          React, focused on performance, clean code, and seamless user
          experiences.
        </p>
        {/* Socials */}
        <div className="flex justify-between mt-6 lg:justify-start lg:gap-12  lg:mt-8">
          <a href="/cv/chanaru-sse.pdf" download>
            <Button className="rounded-4xl" variant="outline">
              Download Resume
            </Button>
          </a>
          <div className="flex gap-3">
            {socials.map((social) => (
              <div key={social.link} className="text-accent text-3xl">
                <Link to={social.link} target="_blank">
                  <social.icon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center mt-10 order-1 lg:order-none">
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
