import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      server: {
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    })
  ],
  database: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
}

export default (req, res) => NextAuth(req, res, options)