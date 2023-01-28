import { User } from '@prisma/client'
import { CreateSessionDTO } from '@/shared/schemas'

export interface CreateSessionUseCaseContract {
  create: (
    input: CreateSessionUseCaseContract.Input,
  ) => Promise<CreateSessionUseCaseContract.Output>
}

export namespace CreateSessionUseCaseContract {
  export type Input = CreateSessionDTO
  export type Output = {
    user: Omit<User, 'password'>
    access_token: string
    refresh_token: string
  }
}
