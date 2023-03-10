import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { z } from 'zod'
import { fromZodError } from 'zod-validation-error';

const prisma = new PrismaClient()


export async function GET(): Promise<NextResponse> {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}




export async function POST(request: Request) {
  const req = await request.json();
  console.log(JSON.stringify(req))
  const FormData  = z.object({
    name: z.string(),
    email: z.string().email()
  
  })



try {
    const {name, email} = FormData.parse(req);
    await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return NextResponse.json({FormData });

  } catch (err: any) {
  console.log("erro")
  const validationError = fromZodError(err);
  const mensagem = validationError.details[0].message 
  return NextResponse.json({mensagem});
}








}