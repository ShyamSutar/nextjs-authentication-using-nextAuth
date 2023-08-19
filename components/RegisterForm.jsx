"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { createCustom } from "@/app/_action"
import { useRouter } from "next/navigation"

const RegisterForm = () => {
    const router = useRouter()
            
    const [error, setError] = useState("")

    const formRef = useRef()

    async function action (formData){
        const uname = formData.get('uname')
        const uemail = formData.get('uemail')
        const upassword = formData.get('upassword')

        if(!uname || !uemail || !upassword){
            setError("All fields are neccessary.")
            return
        }else{
            
            try {
                await createCustom(uname, uemail, upassword)
            } catch (error) {
                setError(error)
            }

        router.push('/')            

        formRef.current?.reset();
        }
    }

  return (
    <div className='shadow-lg p-5 rounded border-t-4 border-green-400'>
        <h1 className='text-xl font-bold my-4'>Register</h1>

        <form ref={formRef} className='flex flex-col gap-3' action={action}>
            <input className='w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40' type="text" placeholder='Full Name' name="uname"/>
            <input className='w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40' type="text" placeholder='Email' name="uemail"/>
            <input className='w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40' type="Password" placeholder='Password' name="upassword"/>
            <button type="submit " className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Register</button>

            {error && <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 mt-2'>
                {error}
            </div>}

            <Link className='text-sm mt-3 text-right' href={'/'}>
                Already have an account? <span className='underline'>Login</span>
            </Link>

        </form>

        
    </div>
  )
}

export default RegisterForm