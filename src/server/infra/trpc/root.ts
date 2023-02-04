import {
  sessionsRouter,
  usersRouter,
  companiesRouter,
} from '@/server/application/routers'
import { createTRPCRouter } from '@/server/infra/trpc'

export const appRouter = createTRPCRouter({
  user: usersRouter,
  session: sessionsRouter,
  company: companiesRouter,
})

export type AppRouter = typeof appRouter
