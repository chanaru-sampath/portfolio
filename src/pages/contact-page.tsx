import ContactForm from '@/components/forms/contact-form'
import {
  MainColumn,
  NewspaperGrid,
  SideColumn,
} from '@/components/newspaper/newspaper-grid'

const ContactPage = () => {
  return (
    <div className="container mx-auto pb-20">
      <div className="border-b-4 border-black mb-8 text-center pb-2">
        <h2 className="font-masthead text-5xl md:text-7xl">
          Letters to the Editor
        </h2>
        <p className="font-mono uppercase tracking-widest text-sm mt-2">
          Voice of the People
        </p>
      </div>

      <NewspaperGrid>
        <MainColumn>
          <div className="bg-stone-100 p-8 border-2 border-black">
            <h3 className="font-headline text-3xl mb-4 text-center">
              Submit Your Query
            </h3>
            <p className="font-body text-center mb-8 italic">
              "We welcome all correspondence, provided it is written with
              purpose and clarity."
            </p>
            <ContactForm />
          </div>
        </MainColumn>

        <SideColumn>
          <div className="border-2 border-dashed border-black p-4 bg-white">
            <h4 className="font-headline text-2xl mb-4 border-b border-black pb-2 text-center">
              Office Headquarters
            </h4>
            <address className="not-italic font-mono text-sm space-y-4 text-center">
              <div>
                <strong className="block uppercase text-xs text-gray-500">
                  Post
                </strong>
                Minuwangoda, Sri Lanka
              </div>
              <div>
                <strong className="block uppercase text-xs text-gray-500">
                  Wire
                </strong>
                +94 717 155 557
              </div>
              <div>
                <strong className="block uppercase text-xs text-gray-500">
                  Electronic Mail
                </strong>
                chanarusampath@gmail.com
              </div>
            </address>
          </div>

          <div className="mt-8 text-center p-4 border border-black bg-black text-white">
            <h5 className="font-headline text-xl mb-2 text-white">
              Subscription Notice
            </h5>
            <p className="font-mono text-xs text-white">
              Replies are dispatched via digital courier within 24-48 hours of
              receipt.
            </p>
          </div>
        </SideColumn>
      </NewspaperGrid>
    </div>
  )
}

export default ContactPage
