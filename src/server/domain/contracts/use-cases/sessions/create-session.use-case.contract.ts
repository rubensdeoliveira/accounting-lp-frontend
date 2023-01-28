import { z } from 'zod'
import { User } from '@prisma/client'

import { SessionInput } from '@/server/application/routers'

export interface CreateSessionUseCaseContract {
  create: (
    input: CreateSessionUseCaseContract.Input,
  ) => Promise<CreateSessionUseCaseContract.Output>
}

export namespace CreateSessionUseCaseContract {
  export type Input = z.infer<typeof SessionInput>
  export type Output = {
    user: Omit<User, 'password'>
    access_token: string
    refresh_token: string
  }
}
