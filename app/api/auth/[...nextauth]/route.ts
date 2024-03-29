import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error(" Invalid Credentials ")
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials")
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials")
        }

        return { ...user }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ token, session}) {
        if (token) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.role = token.role;
        
        }
        return session;
    },
    async jwt({ token, user }) {
        if (!token.email) {
            return token;
        }

        const dbUser = await prisma.user.findFirst({
            where: {
                email: token.email,
            },
        })

        if (!dbUser) {
            token.id = user!.id
            return token;
        }

        return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            role: dbUser.role,
        };
    }}
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
