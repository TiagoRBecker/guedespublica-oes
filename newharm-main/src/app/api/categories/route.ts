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
      description:"Termos de consentimento livre e esclarecido e contrato de prestação de serviços, ambos desenvolvidos de modo específico para cada procedimento. O termo de consentimento livre e esclarecido (TCLE) é uma obrigação legal de todo profissional e o contrato é essencial para estabelecer as responsabilidades de cada parte para evitar problemas comuns deste ramo de atividade, além de definir diversos aspectos legais ligados a idiossincrasia individual em atividades de resultado.",
      updateAt: new Date()
    }
   
   })
   return NextResponse.json({categories},{status:200})
}

