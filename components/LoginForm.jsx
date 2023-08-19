"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import {signIn} from "next-auth/react"
import { useRouter } from 'next/navigation'

const LoginForm = () => {

    const router = useRouter()

    const [error, setError] = useState("")

    async function action (formData){
        const uemail = formData.get('uemail')
        const upassword = formData.get('upassword')


        // if(!uemail || !upassword){
        //     setError("All fields are neccessary.")
        //     return
        // }else{
            
            try {
                const res = await signIn("credentials", {
                    uemail, upassword, redirect:false
                })
                if(res.error){
                    setError("Error")
                }
            } catch (error) {
                setError(error)
            }

            

        router.replace('/dashboard')            

        // formRef.current?.reset();
        // }
    }


  return (
    <div className='shadow-lg p-5 rounded border-t-4 border-green-400'>
        <h1 className='text-xl font-bold my-4'>Enter the Details</h1>

        <form className='flex flex-col gap-3' action={action}>
            <input className='w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40' type="text" placeholder='Email' name='uemail'/>
            <input className='w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40' type="Password" placeholder='Password' name='upassword'/>
            <button type='submit' className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Login</button>

            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 mt-2'>
                {error}
            </div>

            <Link className='text-sm mt-3 text-right' href={'/register'}>
                `Don&apos;t have an account?` <span className='underline'>Register</span>
            </Link>

        </form>

        
    </div>
  )
}

export default LoginForm