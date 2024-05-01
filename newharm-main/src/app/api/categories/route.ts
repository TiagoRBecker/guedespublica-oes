import { NextResponse } from 'next/server';
import prisma from '@/server/prisma';

export async function GET(request: Request) {
  
   
   const categories = await prisma.categories.findMany({
      orderBy:{
         updateAt:"desc"

      },
      include:{
         products:{
            select:{
               id:true,
               title:true,
               img:true,
               price:true,
            }
         }
      }
   
   })
   return NextResponse.json({categories},{status:200})
}

export async function POST(request: Request) {
   
   
   const categories = await prisma.categories.update({
     where:{
       id:4
     },
    data:{
      img:"https://res.cloudinary.com/tiagobecker/image/upload/v1714602139/imagens_unidas_sem_titulo_fjp2qf.svg",
      updateAt: new Date()
    }
   
   })
   return NextResponse.json({categories},{status:200})
}

