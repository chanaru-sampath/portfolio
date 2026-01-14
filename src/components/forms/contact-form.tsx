import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { cn } from '@/lib/utils'
import {
  ContactFormSchema,
  type TContactForm,
} from '@/schemas/contact-form-schema'

import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const VintageInput = ({ ...props }) => (
  <Input
    {...props}
    className="border-0 border-b-2 border-black rounded-none shadow-none focus-visible:ring-0 focus-visible:border-black bg-transparent px-0 font-mono placeholder:text-gray-400"
  />
)

const VintageTextarea = ({ ...props }) => (
  <Textarea
    {...props}
    className="border-2 border-dashed border-black rounded-none shadow-none focus-visible:ring-0 focus-visible:border-black bg-transparent font-mono placeholder:text-gray-400 min-h-[150px]"
  />
)

const ContactForm = () => {
  const form = useForm<TContactForm>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const onSubmit = (data: TContactForm) => {
    console.log('Data:::', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            const hasError = !!form.formState.errors.email

            return (
              <FormItem>
                <FormLabel
                  className={cn(
                    'uppercase font-bold tracking-wider text-xs',
                    hasError && 'text-red-700'
                  )}
                >
                  Email Address <FormMessage />
                </FormLabel>
                <FormControl>
                  <VintageInput placeholder="citizen@example.com" {...field} />
                </FormControl>
              </FormItem>
            )
          }}
        />
        <div className="block lg:grid lg:grid-cols-2 lg:gap-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => {
              const hasError = !!form.formState.errors.firstName

              return (
                <FormItem className="mb-4 lg:mb-0">
                  <FormLabel
                    className={cn(
                      'uppercase font-bold tracking-wider text-xs',
                      hasError && 'text-red-700'
                    )}
                  >
                    First Name <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <VintageInput placeholder="Chanaru" {...field} />
                  </FormControl>
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => {
              const hasError = !!form.formState.errors.lastName

              return (
                <FormItem>
                  <FormLabel
                    className={cn(
                      'uppercase font-bold tracking-wider text-xs',
                      hasError && 'text-red-700'
                    )}
                  >
                    Last Name <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <VintageInput placeholder="Sampath" {...field} />
                  </FormControl>
                </FormItem>
              )
            }}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase font-bold tracking-wider text-xs">
                Phone Number
              </FormLabel>
              <FormControl>
                <VintageInput placeholder="+94 717 155 557" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => {
            const hasError = !!form.formState.errors.message

            return (
              <FormItem>
                <FormLabel
                  className={cn(
                    'uppercase font-bold tracking-wider text-xs',
                    hasError && 'text-red-700'
                  )}
                >
                  Your Correspondence <FormMessage />
                </FormLabel>
                <FormControl>
                  <VintageTextarea
                    placeholder="Type your message here..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )
          }}
        />
        <Button
          className="w-full text-white rounded-none border-2 border-black bg-black hover:bg-white hover:text-black uppercase font-bold tracking-widest text-sm py-6 transition-all"
          type="submit"
        >
          Send via Post
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
