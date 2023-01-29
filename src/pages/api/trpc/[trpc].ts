import 'reflect-metadata'
import '@/server/infra/container'

import { createNextApiHandler } from '@trpc/server/adapters/next'

import { env } from '@/server/infra/env/server.mjs'
import { createTRPCContext } from '@/server/infra/trpc/trpc'
import { appRouter } from '@/server/infra/trpc/root'

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
          )
        }
      : undefined,
})
