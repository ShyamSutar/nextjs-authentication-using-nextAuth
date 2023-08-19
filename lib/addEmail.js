import prisma from "./prisma";


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
        return (add)
        }else{
            console.log("User Already exists ************************");
        }
    } catch (error) {
        console.log(error)
    }
}