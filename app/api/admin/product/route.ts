import client from "@/libs/prismadb";
import { NextResponse } from "next/server";
import url from "url";

export async function POST(req: Request) {
  const newProduct = await req.json();
  const product = await client.product.create({
    data: {
      name: newProduct.name,
      description: newProduct.description,
      product_image: newProduct.product_image,
      category: {
        connect: {
          id: "653110869ecc3d903320f278",
        },
      },
    },
  });
  return NextResponse.json(product);
}

export async function GET(req: Request) {
  const product = await client.product.findMany({});
  return NextResponse.json(product);
}

export async function DELETE(req: Request) {
  const { id }: { id?: string } = url.parse(req.url, true).query;
  await client.product.delete({ where: { id: id } });
  return NextResponse.json({ message: "delete product successfully" });
}
