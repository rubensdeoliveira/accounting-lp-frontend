import {
  FindUserByEmailRepositoryContract,
  UsersRepositoryContract,
} from '@/server/domain/contracts'
import { prisma } from '@/server/infra/database'

export class UsersRepository implements UsersRepositoryContract {
  // async create(data) {
  //   const userCreated = await prisma.user.create({
  //     data,
  //   })
  //   return userCreated
  // }

  async findByEmail(
    email: FindUserByEmailRepositoryContract.Input,
  ): Promise<FindUserByEmailRepositoryContract.Output> {
    const user = await prisma.user.findUnique({
      where: { email },
    })
    return user
  }

  // async findById(id) {
  //   const user = await prisma.user.findUnique({
  //     where: { id },
  //   })
  //   return user
  // }
}
