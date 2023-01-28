import { container } from 'tsyringe'

import './gateways'
import {
  UsersRepository,
  UserTokensRepository,
} from '@/server/infra/repositories'
import {
  UsersRepositoryContract,
  UserTokensRepositoryContract,
} from '@/server/domain/contracts'

container.registerSingleton<UsersRepositoryContract>(
  UsersRepositoryContract,
  UsersRepository,
)

container.registerSingleton<UserTokensRepositoryContract>(
  UserTokensRepositoryContract,
  UserTokensRepository,
)
