import { NextResponse } from "next/server";
import prisma from "@/server/prisma";

export async function GET(req: Request) {
  const products = await prisma.products.findMany({
    orderBy:{
      updateAt:"asc"
    },
    select:{
      id:true,
      title:true,
      price:true,
      img:true,
    
    }
    
    
  });
  return NextResponse.json({ products });
}
export async function POST(req: Request) {
   
  const products = await prisma.products.update({
   where:{
    id:14
   },
   data:{
    title:"TERMOS ACESSÓRIOS FUNDAMENTAIS"

    
   }
    
  });
  return NextResponse.json({ products });
}

