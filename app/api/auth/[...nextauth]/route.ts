import bcrypt from 'bcrypt'
import NextAuth, { AuthOptions } from 'next-auth'
import CredetialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredetialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    throw new Error('Invalid credenatials');
                }

                const user = await prisma.user.findUnique({
                    where: { 
                        email: credentials.email 
                    }
                })

                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials');
                }

            
            const isCorrectPassword = await bcrypt.compare(
                credentials.password,
                user.hashedPassword
            )

            if (!isCorrectPassword) {
                throw new Error('Invalid credentials');
            }

            return user;
            
            }

        })
    ],
    pages: {
        signIn:'/',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    }

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }