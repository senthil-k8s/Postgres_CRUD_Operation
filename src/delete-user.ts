import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){
    await prisma.user.delete({
        where:{
            email:"senthilathiban0@gmail.com"
        }
    })
}
main()