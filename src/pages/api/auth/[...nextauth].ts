import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name: 'nextAuthCredentials',
      credentials: {},
      async authorize(credentials) {
        console.log(credentials)
        return {
          name: 'Thi',
          email: 'th@gmail.com'
        }
      }
    })
  ],
  secret: process.env.SECRET
})
