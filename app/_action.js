'use server'

import { addE, addE3 } from "@/lib/addEmail"
import { addE2 } from "@/lib/addEmail"
import { revalidatePath } from "next/cache"
import bcrypt from "bcryptjs"

export async function addAction(email, name){
    try {
        const data = await addE(email, name)
        revalidatePath('/')
        
    } catch (error) {
        console.log(error);
    }
}

export async function createCustom(uname, uemail, upassword){
    try {
        const hashedPassword = await bcrypt.hash(upassword,10)
        const data = await addE2(uname, uemail, hashedPassword)
        // revalidatePath('/')
        // return (data)
    } catch (error) {
        console.log(error);
    }
}

export async function customLogin(uemail, upassword){
    try {
        const user = await addE3(uemail, upassword)
        return(user)
    } catch (error) {
        console.log(error);
    }
}