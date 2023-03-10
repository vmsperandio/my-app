import { NextResponse } from 'next/server';



const getData = async function (body: any) {return [1,2,3,4]}




export async function GET() {
  return NextResponse.json({ hello: 'world' });
}




export async function POST(
  request: Request
) {
  const body = await request.json();
  const data = await getData(body);

  return NextResponse.json(data);
}