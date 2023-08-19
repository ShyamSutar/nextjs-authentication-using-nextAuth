import prisma from "./prisma";

import bcrypt from "bcryptjs"


export async function addE(email, name){
    try {

        const user = await prisma.add.findUnique({
            where: {
              email:email
            },
          })

        if(!user){
        const add = await prisma.add.create({data: {email,name}})
        console.log(add);
        // return (add)
        }else{
            console.log("User Already exists ************************");
        }
    } catch (error) {
        console.log(error)
    }
}

export async function addE2(uname, uemail, upassword){
    try {

        const user = await prisma.add.findUnique({
            where: {
              email:uemail
            },
          })

        if(!user){
        const add = await prisma.add.create({data: {name:uname, email:uemail, password: upassword}})
        console.log(add);
        // return (add)
        }else{
            console.log("User Already exists ************************");
        }
    } catch (error) {
        console.log(error)
    }
}

export async function addE3(uemail, upassword){
    try {

        const user = await prisma.add.findUnique({
            where: {
              email:uemail
            },
          })

        // if(!user){
        //     console.log("user don't exists");
        // }else{
            const passwordMatched = await bcrypt.compare(upassword, user.password)
            
            if(!passwordMatched){
                // console.log("*******************************");
                return null;
            }

            return user;
        // }
    } catch (error) {
        console.log(error)
    }
}