import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const category = await client.product_Category.findUnique({
    where: { id: id },
    include: { category_item: { select: { category_name: true } } },
  });
  return NextResponse.json(category);
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const newCategory = await req.json();
  const category = await client.product_Category.update({
    where: { id: id },
    data: newCategory,
  });
  return NextResponse.json(category);
}
