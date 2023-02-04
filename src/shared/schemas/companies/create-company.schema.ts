import { z } from 'zod'

export const CreateCompanySchema = z.object({
  name: z.string(),
})

export type CreateCompanyDTO = z.infer<typeof CreateCompanySchema>
