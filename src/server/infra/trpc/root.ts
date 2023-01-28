import { sessionsRouter, usersRouter } from '@/server/application/routers'
import { createTRPCRouter } from '@/server/infra/trpc'

export const appRouter = createTRPCRouter({
  user: usersRouter,
  session: sessionsRouter,
})

export type AppRouter = typeof appRouter
