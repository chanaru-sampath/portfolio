import { DiGoogleCloudPlatform, DiJava } from 'react-icons/di'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5'
import { RiNextjsFill } from 'react-icons/ri'
import { SiGo, SiSpringboot, SiTerraform, SiTypescript } from 'react-icons/si'

import {
  MainColumn,
  NewspaperGrid,
  SideColumn,
} from '@/components/newspaper/newspaper-grid'

const skills = [
  { name: 'JavaScript', icon: IoLogoJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: RiNextjsFill },
  { name: 'React Native', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Java', icon: DiJava },
  { name: 'Go', icon: SiGo },
  { name: 'Firebase', icon: IoLogoFirebase },
  { name: 'GCP', icon: DiGoogleCloudPlatform },
  { name: 'Terraform', icon: SiTerraform },
  { name: 'Spring Boot', icon: SiSpringboot },
]

const ResumePage = () => {
  return (
    <div className="container mx-auto pb-20">
      <NewspaperGrid>
        <MainColumn>
          {/* Experience Section */}
          <div className="mb-12">
            <h2 className="font-headline text-4xl border-b-2 border-black pb-2 mb-6 uppercase tracking-wider">
              Professional Record
            </h2>

            <div className="space-y-8">
              {/* Job 1 */}
              <article className="border-l-2 border-black pl-4">
                <h3 className="font-headline text-2xl font-bold">
                  Senior Software Engineer
                </h3>
                <div className="font-mono text-sm uppercase mb-2 flex justify-between w-full md:w-2/3 border-b border-dashed border-gray-400 pb-1">
                  <span>Avlyon</span>
                  <span>2024 - Present</span>
                </div>
                <p className="font-body text-justify leading-relaxed">
                  Leading the design and development of scalable end-to-end
                  solutions across web, mobile, and backend platforms. Building
                  high-performance front-end interfaces with React.js and
                  cross-platform mobile applications with React Native.
                  Implementing robust backend services to ensure seamless
                  integration, reliability, and scalability.
                </p>
              </article>

              {/* Job 2 */}
              <article className="border-l-2 border-black pl-4">
                <h3 className="font-headline text-2xl font-bold">
                  Senior Software Engineer
                </h3>
                <div className="font-mono text-sm uppercase mb-2 flex justify-between w-full md:w-2/3 border-b border-dashed border-gray-400 pb-1">
                  <span>Circles Life</span>
                  <span>2022 - 2024</span>
                </div>
                <p className="font-body text-justify leading-relaxed">
                  Focused on building and optimizing front-end applications
                  using TypeScript and React. Contributed to backend development
                  with Java Spring Boot and Go. Mentored junior engineers and
                  led a cross-functional team of 6-8 members, guiding them
                  through software design and code quality.
                </p>
              </article>

              {/* Job 3 */}
              <article className="border-l-2 border-black pl-4">
                <h3 className="font-headline text-2xl font-bold">
                  Fullstack Engineer
                </h3>
                <div className="font-mono text-sm uppercase mb-2 flex justify-between w-full md:w-2/3 border-b border-dashed border-gray-400 pb-1">
                  <span>Sprii</span>
                  <span>2019 - 2021</span>
                </div>
                <p className="font-body text-justify leading-relaxed">
                  Developed scalable web and mobile apps using Next.js, React
                  Native, and Node.js. Managed cloud infrastructure on GCP,
                  automated deployments with Terraform, and optimized system
                  performance.
                </p>
              </article>

              {/* Job 4 */}
              <article className="border-l-2 border-black pl-4">
                <h3 className="font-headline text-2xl font-bold">
                  Frontend Engineer
                </h3>
                <div className="font-mono text-sm uppercase mb-2 flex justify-between w-full md:w-2/3 border-b border-dashed border-gray-400 pb-1">
                  <span>Netstarter</span>
                  <span>2018 - 2019</span>
                </div>
                <p className="font-body text-justify leading-relaxed">
                  Worked on Magento-based eCommerce frontends using React and
                  jQuery. Developed responsive, high-performance interfaces and
                  enhanced user experiences.
                </p>
              </article>

              {/* Job 5 */}
              <article className="border-l-2 border-black pl-4">
                <h3 className="font-headline text-2xl font-bold">
                  Software Engineer
                </h3>
                <div className="font-mono text-sm uppercase mb-2 flex justify-between w-full md:w-2/3 border-b border-dashed border-gray-400 pb-1">
                  <span>Virtusa</span>
                  <span>2017 - 2018</span>
                </div>
                <p className="font-body text-justify leading-relaxed">
                  Worked on Pega Systems to design, develop, and maintain
                  business process management solutions. Focused on workflow
                  automation, system integration, and performance optimization.
                </p>
              </article>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="font-headline text-4xl border-b-2 border-black pb-2 mb-6 uppercase tracking-wider">
              Educational Background
            </h2>
            <div className="space-y-4">
              <article className="flex flex-col md:flex-row gap-4 items-baseline border-b border-dotted border-gray-400 pb-2">
                <span className="font-headline text-xl font-bold">
                  BSc in Software Engineering
                </span>
                <span className="font-mono text-sm uppercase">
                  Curtin University
                </span>
              </article>
              <article className="flex flex-col md:flex-row gap-4 items-baseline border-b border-dotted border-gray-400 pb-2">
                <span className="font-headline text-xl font-bold">
                  Physical Science
                </span>
                <span className="font-mono text-sm uppercase">
                  Royal College (GCE A/L)
                </span>
              </article>
            </div>
          </div>
        </MainColumn>

        <SideColumn>
          {/* Personal Info Box */}
          <div className="border-4 border-double border-black p-6 mb-8 bg-stone-100">
            <h3 className="font-headline text-2xl text-center mb-4 border-b border-black pb-2">
              Personal File
            </h3>
            <ul className="space-y-3 font-mono text-xs">
              <li className="flex flex-col">
                <span className="uppercase text-gray-500">Name</span>
                <span className="font-bold text-base">Chanaru Sampath</span>
              </li>
              <li className="flex flex-col">
                <span className="uppercase text-gray-500">Title</span>
                <span className="font-bold text-base">Senior Engineer</span>
              </li>
              <li className="flex flex-col">
                <span className="uppercase text-gray-500">Location</span>
                <span className="font-bold text-base">Minuwangoda, LK</span>
              </li>
              <li className="flex flex-col">
                <span className="uppercase text-gray-500">Experience</span>
                <span className="font-bold text-base">7+ Years</span>
              </li>
              <li className="flex flex-col">
                <span className="uppercase text-gray-500">Contact</span>
                <a
                  href="mailto:chanarusampath@gmail.com"
                  className="font-bold text-base underline decoration-dotted"
                >
                  Email Me
                </a>
              </li>
            </ul>
          </div>

          {/* Skills "Classifieds" */}
          <div className="mb-8">
            <h3 className="font-headline text-2xl uppercase border-b-2 border-black pb-1 mb-4">
              Skill Market
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 border-b border-dotted border-gray-400 pb-1"
                >
                  <skill.icon className="text-lg" />
                  <span className="font-mono text-xs uppercase">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* References Box */}
          <div className="border border-black p-4 bg-white">
            <h3 className="font-headline text-xl uppercase mb-2 text-center bg-black text-white p-1">
              References
            </h3>
            <p className="font-mono text-xs text-center leading-relaxed">
              Available upon request.
              <br />
              Confirmed by:
              <br />
              <strong>Gayan Kumarage</strong> (Principal Engineer)
              <br />
              <strong>Eranda Horanagama</strong> (Principal Engineer)
            </p>
          </div>
        </SideColumn>
      </NewspaperGrid>
    </div>
  )
}

export default ResumePage
