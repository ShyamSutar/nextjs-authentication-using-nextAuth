"use client"

import Link from 'next/link'
import {signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {

  const {status} = useSession();

  return (
    <div className='p-4 flex justify-between items-center shadow-md'>
        <Link className='font-bold text-lg text-blue-700' href={'/'}>RealFact</Link>
        {status === "authenticated"? (
        <button onClick={()=>signOut()} className='bg-slate-900 text-white px-6 py-2 rounded'>Sign Out</button>
        ):(
        <button onClick={()=>signIn()} className='bg-slate-900 text-white px-6 py-2 rounded'>Sign In</button>
        )}
    </div>
  )
}

export default Navbar