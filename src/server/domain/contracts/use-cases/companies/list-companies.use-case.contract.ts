import { Company } from '@prisma/client'
import { ListPaginatedDTO } from '@/shared/schemas/common'
import { ListEntitiesModel } from '@/server/domain/models/common'

export interface ListCompaniesUseCaseContract {
  list: (
    input: ListCompaniesUseCaseContract.Input,
  ) => Promise<ListCompaniesUseCaseContract.Output>
}

export namespace ListCompaniesUseCaseContract {
  export type Input = ListPaginatedDTO
  export type Output = ListEntitiesModel<Company>
}
