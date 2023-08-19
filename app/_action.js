'use server'

import { addE } from "@/lib/addEmail"
import { revalidatePath } from "next/cache"

export async function addAction(email, name){
    try {
        const data = await addE(email, name)
        revalidatePath('/')
        return (data)
    } catch (error) {
        console.log(error);
    }
}