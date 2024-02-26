import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const users = await prisma.user.findMany({});
    console.log(users);
    const user = await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{ // join command, which display the user detail along with the posts
            posts: true,
        }
    })
    console.log(user);
}

main()