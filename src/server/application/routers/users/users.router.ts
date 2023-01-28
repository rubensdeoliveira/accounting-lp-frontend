import { createTRPCRouter, publicProcedure } from '@/server/infra/trpc'

export const usersRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany()
  }),
})
