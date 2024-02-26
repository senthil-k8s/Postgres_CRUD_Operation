import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info', 'query']});

async function main(){
    await prisma.post.create({
        data:{
            title:"Chemistry",
            content:"No content",
            published:true,
            authorId:1
        }
    })
}

main()