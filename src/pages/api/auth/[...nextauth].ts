import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import * as bcrypt from 'bcrypt'

import { env } from '@/server/infra/env/server.mjs'
import { prisma } from '@/server/infra/database'
import { Session } from '@prisma/client'

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      console.log(session, user)
      if (session.user) {
        session.user.id = user.id
        session.user.role = user.role
      }
      return session
    },
    // async signIn({ user }) {
    //   const email = user.email
    //   if (email) {
    //     const findRegisteredUser = await prisma.user.findUnique({
    //       where: {
    //         email,
    //       },
    //     })
    //     if (findRegisteredUser) {
    //       return true
    //     } else {
    //       return '/area-do-cliente?error=cantFindUser'
    //     }
    //   }

    //   return false
    // },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    EmailProvider({
      server: env.EMAIL_SERVER,
      from: env.EMAIL_FROM,
    }),
  ],
}

export default NextAuth(authOptions)
