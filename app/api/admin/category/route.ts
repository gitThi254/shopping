import client from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import url from "url";

export async function POST(req: Request) {
  const newCategory = await req.json();
  console.log(newCategory);
  const category = await client.product_Category.create({
    data: newCategory,
  });
  return NextResponse.json(category);
}

export async function GET(req: Request) {
  const category = await client.product_Category.findMany({
    include: {
      category_item: { select: { category_name: true } },
    },
  });
  return NextResponse.json(category);
}

export async function DELETE(req: NextRequest) {
  const { id }: { id?: string } = url.parse(req.url, true).query;
  await client.product_Category.delete({ where: { id: id } });
  return NextResponse.json({ message: "delete category successfully" });
}
