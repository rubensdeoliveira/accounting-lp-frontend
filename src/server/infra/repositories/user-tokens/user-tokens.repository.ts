import {
  CreateUserTokenRepositoryContract,
  UserTokensRepositoryContract,
} from '@/server/domain/contracts'
import { prisma } from '@/server/infra/database'

export class UserTokensRepository implements UserTokensRepositoryContract {
  async create(
    data: CreateUserTokenRepositoryContract.Input,
  ): Promise<CreateUserTokenRepositoryContract.Output> {
    const tokenCreated = await prisma.userToken.create({
      data,
    })
    return tokenCreated
  }

  // async findByUserIdAndRefreshToken(
  //   data: FindUserTokenByUserIdAndRefreshTokenRepositoryContract.Input,
  // ): Promise<FindUserTokenByUserIdAndRefreshTokenRepositoryContract.Output> {
  //   const tokenFinded = await this.prisma.userToken.findFirst({
  //     where: { user_id: data.user_id, refresh_token: data.refresh_token },
  //   })
  //   return tokenFinded
  // }

  // async deleteById(
  //   id: DeleteUserTokenByIdRepositoryContract.Input,
  // ): Promise<void> {
  //   await this.prisma.userToken.delete({
  //     where: { id },
  //   })
  // }
}
