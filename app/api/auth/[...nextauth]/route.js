import { addAction, customLogin } from "@/app/_action";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        CredentialsProvider({
          name: "credentials",
          credential: {},

          async authorize(credentials){
            const {uemail, upassword} = credentials
            try {
              const user = await customLogin(uemail, upassword)
              return user;

            } catch (error) {
              console.log(error);
            }

          },
        }),
      ],

      session: {
        strategy: "jwt",

      },
      secret: process.env.NEXTAUTH_SECRET,
      pages:{
        signIn: "/"
      },
      
      callbacks: {
        async signIn({user, account}){
          console.log("user", user);
          console.log("account", account);
          // const {email, name} = user;

          if(account.provider === 'google'){
            try {
              const check = await addAction(user.email, user.name)
              // console.log(check);
              return user; 
            } catch (error) {
              console.log(error);
            }
          }

        }
      }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }


