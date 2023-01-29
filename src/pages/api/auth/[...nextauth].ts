import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { env } from '@/server/infra/env/server.mjs'
import { prisma } from '@/server/infra/database'

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
    async signIn({ user }) {
      const email = user.email
      if (email) {
        const findRegisteredUser = await prisma.user.findUnique({
          where: {
            email,
          },
        })
        if (findRegisteredUser) {
          return true
        } else {
          return '/area-do-cliente?error=notRegisteredUser'
        }
      }

      return false
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)
