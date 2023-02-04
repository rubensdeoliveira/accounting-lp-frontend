import { container } from 'tsyringe'

import './gateways'
import {
  UsersRepository,
  CompaniesRepository,
} from '@/server/infra/repositories'
import {
  UsersRepositoryContract,
  CompaniesRepositoryContract,
} from '@/server/domain/contracts'

container.registerSingleton<UsersRepositoryContract>(
  UsersRepositoryContract,
  UsersRepository,
)

container.registerSingleton<CompaniesRepositoryContract>(
  CompaniesRepositoryContract,
  CompaniesRepository,
)
