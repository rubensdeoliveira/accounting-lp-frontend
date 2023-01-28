import { User } from '@prisma/client'

export const UsersRepositoryContract = 'UsersRepositoryContract'

export interface UsersRepositoryContract {
  findByEmail: (
    data: FindUserByEmailRepositoryContract.Input,
  ) => Promise<FindUserByEmailRepositoryContract.Output>
}

export namespace FindUserByEmailRepositoryContract {
  export type Input = string
  export type Output = User | null
}
