import { DiGit, DiGoogleCloudPlatform } from 'react-icons/di'
import { FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5'
import { RiNextjsFill } from 'react-icons/ri'
import { SiNestjs, SiRedux, SiTypescript } from 'react-icons/si'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const personalInfo = {
  title: 'About Me',
  description:
    'Senior Full-Stack JavaScript Engineer skilled in Next.js, Node.js, and React, focused on performance, clean code, and seamless user experiences.',
  info: [
    { name: 'name', value: 'Chanaru Sampath' },
    { name: 'title', value: 'Senior Software Engineer' },
    { name: 'experience', value: '7+ Years' },
    { name: 'email', value: 'chanarusampath@gmail.com' },
    { name: 'phone', value: '+94717155557' },
    { name: 'address', value: 'Minuwangoda, Sri Lanka' },
  ],
}

const skills = {
  title: 'Skills',
  description:
    'Skilled in full-stack development with JavaScript, TypeScript, Next.js, Node.js, React, and database management. Experienced in performance optimization, API development, and scalable architectures',
  items: [
    { name: 'JavaScript', icon: IoLogoJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Html', icon: FaHtml5 },
    { name: 'Css', icon: IoLogoCss3 },
    { name: 'ReactJs', icon: FaReact },
    { name: 'NextJs', icon: RiNextjsFill },
    { name: 'NestJs', icon: SiNestjs },
    { name: 'NodeJs', icon: FaNodeJs },
    { name: 'Redux', icon: SiRedux },
    { name: 'Firebase', icon: IoLogoFirebase },
    { name: 'Google Cloud', icon: DiGoogleCloudPlatform },
    { name: 'Git', icon: DiGit },
  ],
}

const ResumePage = () => {
  return (
    <div className="h-[80vh] w-full flex items-start justify-center py-2 lg:py-0">
      <Tabs
        defaultValue="skills"
        className="flex flex-col lg:flex-row gap-6 lg:gap-[60px] w-full"
      >
        <TabsList className="flex flex-col w-full gap-4 max-w-[380px] mx-auto lg:mx-0">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="aboutme">About Me</TabsTrigger>
        </TabsList>
        <div className="">
          <TabsContent value="experience">Experience</TabsContent>
          <TabsContent value="education">Education</TabsContent>
          <TabsContent value="skills">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-2xl mb-2 lg:mb-4">{skills.title}</h1>
              <p className="text-white/80 text-center lg:text-start leading-6">
                {skills.description}
              </p>
              <div className="grid gap-4 text-5xl grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 mt-4 lg:mt-6">
                {skills.items.map((skill) => (
                  <div className="w-[80px] h-[80px] bg-background-secondary rounded-lg">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center justify-center w-full h-full">
                          <skill.icon />
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="aboutme">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-2xl mb-2 lg:mb-4">{personalInfo.title}</h1>
              <p className="text-white/80 text-center lg:text-start leading-6">
                {personalInfo.description}
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default ResumePage
