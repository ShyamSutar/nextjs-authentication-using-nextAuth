"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import SignInButton from "./SignInButton";


export default function UserInfo(){
    const {status, data: session} = useSession();  // renames data to session

    if(status == "authenticated"){
        return <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-50">
            <Image className="rounded-full " src={session?.user?.image} width={100} height={100} alt="image" />
            <div>Name: <span className="font-bold">{session?.user?.name}</span></div>
            <div>Email: <span className="font-bold">{session?.user?.email}</span></div>
        </div>
    }else{
        return <SignInButton/>
    }
}