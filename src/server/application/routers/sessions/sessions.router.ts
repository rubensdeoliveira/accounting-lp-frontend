import { z } from 'zod'
import { container } from 'tsyringe'

import { createTRPCRouter, publicProcedure } from '@/server/infra/trpc'
import { CreateSessionUseCase } from '@/server/domain/use-cases'

export const SessionInput = z.object({
  email: z.string(),
  password: z.string(),
})

export const sessionsRouter = createTRPCRouter({
  create: publicProcedure.input(SessionInput).mutation(async ({ input }) => {
    const { email, password } = input

    const createSessionUseCase = container.resolve(CreateSessionUseCase)

    const { user } = await createSessionUseCase.create({
      email,
      password,
    })

    return user
  }),
})
