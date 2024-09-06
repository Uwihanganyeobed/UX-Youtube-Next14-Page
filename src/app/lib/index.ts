import {z} from 'zod'

export const setFormSchema = z.object({
   name: z.string().min(2, {
      message: 'Please Name must be at least 2 characters long'
   }).max(50).trim(),
   email: z.string().email({
      message: 'Please enter a valid email address'
   }),
   password: z.string().min(8,{
      message: 'Please a password must be at least 8 characters long'
   })
   .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
   .regex(/[0-9]/, { message: 'Contain at least one number.' })
   .regex(/[^a-zA-Z0-9]/, {
     message: 'Contain at least one special character.',
   }
   ).trim(),
})

export type FormState = | {
   errors?: {
      name?: string[]
      email?: string[]
      password?: string[]
   }
   message?: string
}
| undefined