import NextAuth from 'next-auth'
import Providers from "next-auth/providers"

export default NextAuth({
    //configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        //.....add more providers here
    ],

    // add a dataebase is optional, but required to persist accounts in a database

});