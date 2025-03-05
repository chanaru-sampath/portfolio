import { z } from 'zod'

export const ContactFormSchema = z.object({
  firstName: z.string().min(2, 'is required'),
  lastName: z.string().min(2, 'is required'),
  email: z.string().email('is not valid'),
  phone: z.string(),
  message: z.string().min(2, 'is required'),
})

export type TContactForm = z.infer<typeof ContactFormSchema>
