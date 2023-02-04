import { container } from 'tsyringe'

import { createTRPCRouter, protectedAdminProcedure } from '@/server/infra/trpc'
import {
  CreateCompanyUseCase,
  ListCompaniesUseCase,
} from '@/server/domain/use-cases'
import { CreateCompanySchema, ListPaginatedSchema } from '@/shared/schemas'

export const companiesRouter = createTRPCRouter({
  list: protectedAdminProcedure
    .input(ListPaginatedSchema)
    .query(async ({ input }) => {
      const listCompaniesUseCase = container.resolve(ListCompaniesUseCase)
      const companies = await listCompaniesUseCase.list(input)
      return companies
    }),
  create: protectedAdminProcedure
    .input(CreateCompanySchema)
    .mutation(async ({ input }) => {
      const createCompanyUseCase = container.resolve(CreateCompanyUseCase)
      const createdCompany = await createCompanyUseCase.create(input)
      return createdCompany
    }),
})

export type CompaniesRouter = typeof companiesRouter
