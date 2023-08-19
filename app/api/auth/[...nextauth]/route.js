import { addAction } from "@/app/_action";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ],
      
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


