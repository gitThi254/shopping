import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const product = await client.product.findUnique({
    where: { id: id },
  });
  return NextResponse.json(product);
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const newProduct = await req.json();
  const product = await client.product.update({
    where: { id: id },
    data: newProduct,
  });
  return NextResponse.json(product);
}
