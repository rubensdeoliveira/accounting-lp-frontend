import { usersRouter, companiesRouter } from '@/server/application/routers'
import { createTRPCRouter } from '@/server/infra/trpc'

export const appRouter = createTRPCRouter({
  user: usersRouter,
  company: companiesRouter,
})

export type AppRouter = typeof appRouter
