"use client"

import LoginForm from '@/components/LoginForm'
import SignInButton from '@/components/SignInButton'  
import UserInfo from '@/components/UserInfo';
import { useSession } from "next-auth/react";

const page = () => {

  const {status} = useSession();

  if(status == "authenticated"){
    return <UserInfo/>
  }else{
      return (
    <div className='flex flex-col items-center  justify-center h-screen -mt-24'>
      <SignInButton/>
      <span className='text-2xl font-bold my-2'>Or</span>
      <LoginForm/>
    </div>
  )
  }
}

export default page