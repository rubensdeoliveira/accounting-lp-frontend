import {
  CompaniesRepositoryContract,
  CountCompaniesRepositoryContract,
  CreateCompanyRepositoryContract,
  ListCompaniesRepositoryContract,
} from '@/server/domain/contracts'
import { prisma } from '@/server/infra/database'

export class CompaniesRepository implements CompaniesRepositoryContract {
  async create(
    data: CreateCompanyRepositoryContract.Input,
  ): Promise<CreateCompanyRepositoryContract.Output> {
    const company = await prisma.company.create({ data })
    return company
  }

  async list(
    data: ListCompaniesRepositoryContract.Input,
  ): Promise<ListCompaniesRepositoryContract.Output> {
    const rowsPerPage = 50
    const companies = await prisma.company.findMany({
      take: rowsPerPage,
      skip: (data.page - 1) * rowsPerPage,
      where: {
        name: {
          contains: data.search,
          mode: 'insensitive',
        },
      },
    })
    return companies
  }

  async count(
    data: CountCompaniesRepositoryContract.Input,
  ): Promise<CountCompaniesRepositoryContract.Output> {
    const companiesCount = await prisma.company.count({
      where: {
        name: {
          contains: data.search,
          mode: 'insensitive',
        },
      },
    })
    return companiesCount
  }
}
