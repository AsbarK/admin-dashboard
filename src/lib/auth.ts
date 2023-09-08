import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Admin", email: "admin@admin.com" };
        return user;
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLENT_ID as string,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
        authorization: {
          params: {
              scope: "openid email profile https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtubepartner-channel-audit https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.channel-memberships.creator https://www.googleapis.com/auth/youtube.third-party-link.creator",
          },
      },
    }),
  ],
  callbacks:{
    async jwt({token,user,account}){
      // console.log({token:token,user:user,account:account})

      return {...token, ...user,...account}
    },
    async session({session,token,user}){
      session.user = token;
      // console.log(session)
      return session;
    }
  },
  secret:process.env.NEXTAUTH_SECRET
};