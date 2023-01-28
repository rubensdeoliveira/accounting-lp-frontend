import { UserToken } from '@prisma/client'

export const UserTokensRepositoryContract = 'UserTokensRepositoryContract'

export interface UserTokensRepositoryContract {
  create: (
    input: CreateUserTokenRepositoryContract.Input,
  ) => Promise<CreateUserTokenRepositoryContract.Output>
  // findByUserIdAndRefreshToken: (
  //   input: FindUserTokenByUserIdAndRefreshTokenRepositoryContract.Input,
  // ) => Promise<FindUserTokenByUserIdAndRefreshTokenRepositoryContract.Output>
  // deleteById: (
  //   input: DeleteUserTokenByIdRepositoryContract.Input,
  // ) => Promise<void>
}

export namespace CreateUserTokenRepositoryContract {
  export type Input = {
    refresh_token: string
    user_id: string
    expires_date: Date
  }
  export type Output = UserToken
}

export namespace FindUserTokenByUserIdAndRefreshTokenRepositoryContract {
  export type Input = { user_id: string; refresh_token: string }
  export type Output = UserToken
}

export namespace DeleteUserTokenByIdRepositoryContract {
  export type Input = string
}
