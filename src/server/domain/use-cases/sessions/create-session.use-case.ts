import { inject, injectable } from 'tsyringe'
import { TRPCError } from '@trpc/server'

import {
  CreateSessionUseCaseContract,
  DateGatewayContract,
  HashGatewayContract,
  JwtGatewayContract,
  UsersRepositoryContract,
  UserTokensRepositoryContract,
} from '@/server/domain/contracts'
import { JwtPayloadModel } from '@/server/domain/models'

@injectable()
export class CreateSessionUseCase implements CreateSessionUseCaseContract {
  constructor(
    @inject(UsersRepositoryContract)
    private readonly usersRepository: UsersRepositoryContract,

    @inject(UserTokensRepositoryContract)
    private readonly userTokensRepository: UserTokensRepositoryContract,

    @inject(HashGatewayContract)
    private readonly hashGateway: HashGatewayContract,

    @inject(JwtGatewayContract)
    private readonly jwtGateway: JwtGatewayContract,

    @inject(DateGatewayContract)
    private readonly dateGateway: DateGatewayContract,
  ) {}

  public async create(
    data: CreateSessionUseCaseContract.Input,
  ): Promise<CreateSessionUseCaseContract.Output> {
    const findUserByEmail = await this.usersRepository.findByEmail(data.email)
    if (!findUserByEmail) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Email/password does not matches',
      })
    }
    const { password, ...userWithoutPassword } = findUserByEmail
    const passwordIsMatched = await this.hashGateway.compare({
      hashedValue: password,
      value: data.password,
    })
    if (!passwordIsMatched) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Email/password does not matches',
      })
    }
    const payload: JwtPayloadModel = {
      id: findUserByEmail.id,
      role: findUserByEmail.role,
    }
    const access_token = this.jwtGateway.sign({
      payload,
      secret: process.env.JWT_TOKEN_SECRET ?? '',
      expires_in: process.env.JWT_TOKEN_EXPIRES_IN ?? '',
    })
    const refresh_token = this.jwtGateway.sign({
      payload,
      secret: process.env.JWT_REFRESH_TOKEN_SECRET ?? '',
      expires_in: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN ?? '',
    })
    const expires_date = await this.dateGateway.addDays({
      date: new Date(),
      days: Number(process.env.JWT_REFRESH_TOKEN_EXPIRES_IN_DAYS),
    })
    await this.userTokensRepository.create({
      expires_date,
      refresh_token,
      user_id: findUserByEmail.id,
    })
    return {
      user: userWithoutPassword,
      access_token,
      refresh_token,
    }
  }
}
