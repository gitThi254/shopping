import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const product_item = await client.product_item.findUnique({
    where: { id: id },
  });
  return NextResponse.json(product_item);
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const newProductItem = await req.json();
  const product_item = await client.product_item.update({
    where: { id: id },
    data: newProductItem,
  });
  return NextResponse.json(product_item);
}
