import NextAuth from 'next-auth'
import providers from "next-auth/providers"

export default NextAuth({
    //configure one or more authentication providers
    Providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        //.....add more providers here
    ],

    // add a dataebase is optional, but required to persist accounts in a database

})