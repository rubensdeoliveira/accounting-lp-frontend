import { z } from 'zod'
import { User } from '@prisma/client'

import { CreateSessionInput } from '@/server/application/routers'

export interface CreateSessionUseCaseContract {
  create: (
    input: CreateSessionUseCaseContract.Input,
  ) => Promise<CreateSessionUseCaseContract.Output>
}

export namespace CreateSessionUseCaseContract {
  export type Input = z.infer<typeof CreateSessionInput>
  export type Output = {
    user: Omit<User, 'password'>
    access_token: string
    refresh_token: string
  }
}
