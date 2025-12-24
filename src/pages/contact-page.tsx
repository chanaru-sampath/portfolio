import { CiPhone } from 'react-icons/ci'
import { IoIosMail, IoIosPin } from 'react-icons/io'

import ContactForm from '@/components/forms/contact-form'
import PageTransition from '@/components/page-transition'
import { Separator } from '@/components/ui/separator'

const contacts = [
  { name: 'phone', icon: CiPhone, value: '+94 717155557' },
  { name: 'email', icon: IoIosMail, value: 'chanarusampath@gmail.com' },
  {
    name: 'address',
    icon: IoIosPin,
    value: 'Minuwangoda, Sri Lanka.',
  },
]

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[68px]">
        {/** Form */}
        <div>
          <div className="mb-6">
            <h2 className="font-medium text-3xl mb-4">
              <span className="text-accent">Get </span>in Touch
            </h2>
            <p className="leading-[1.5] lg:text-sm">
              Have a project <span className="text-accent">idea</span>, a
              collaboration opportunity, or just want to connect? Feel free to
              reach out! I'm always open to discussing new challenges,
              innovative ideas, and exciting opportunities in software
              development. Drop me a message, and I'll get back to you as soon
              as possible.
            </p>
          </div>
          <ContactForm />
        </div>

        <Separator className="my-4 bg-background-secondary lg:hidden" />

        {/** Info */}
        <div className="flex flex-col justify-center gap-3 lg:gap-[20px] mb-8 lg:mt-0">
          {contacts.map((c) => (
            <div className="flex items-center justify-start gap-8">
              <div className="flex items-center justify-center w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] bg-background-secondary rounded-md">
                <c.icon className="text-4xl text-white/70" />
              </div>
              <div>
                <p className="text-white/70 capitalize">{c.name}</p>
                <h2 className="font-semibold">{c.value}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default ContactPage
