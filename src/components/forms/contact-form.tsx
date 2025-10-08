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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            const hasError = !!form.formState.errors.email

            return (
              <FormItem className="mb-4">
                <FormLabel className={cn(hasError && 'text-red-700')}>
                  Email <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input placeholder="chanarusampath@gmail.com" {...field} />
                </FormControl>
              </FormItem>
            )
          }}
        />
        <div className="block lg:grid lg:grid-cols-2 lg:gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => {
              const hasError = !!form.formState.errors.firstName

              return (
                <FormItem className="mb-4">
                  <FormLabel className={cn(hasError && 'text-red-700')}>
                    First Name <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Chanaru" {...field} />
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
                <FormItem className="mb-4">
                  <FormLabel className={cn(hasError && 'text-red-700')}>
                    Last Name <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Sampath" {...field} />
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
            <FormItem className="mb-4">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+94717155557" {...field} />
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
              <FormItem className="mb-4">
                <FormLabel className={cn(hasError && 'text-red-700')}>
                  Message <FormMessage />
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )
          }}
        />
        <Button className="w-full lg:w-fit" variant="outline" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
