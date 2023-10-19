import client from "@/libs/prismadb";
import { NextResponse } from "next/server";
import url from "url";
export async function POST(req: Request) {
  const newProductItem = await req.json();
  const product = await client.product_item.create({
    data: {
      SKU: newProductItem.SKU,
      price: newProductItem.price,
      product_image: newProductItem.product_image,
      qty_in_stock: newProductItem.qty_in_stock,
      product: {
        connect: {
          id: "6531115c9ecc3d903320f27a",
        },
      },
    },
  });
  return NextResponse.json(product);
}

export async function GET(req: Request) {
  const product_item = await client.product_item.findMany({
    include: {
      option: {
        select: {
          value: true,
        },
      },
    },
  });
  return NextResponse.json(product_item);
}

export async function DELETE(req: Request) {
  const { id }: { id?: string } = url.parse(req.url, true).query;
  await client.product_item.delete({ where: { id: id } });
  return NextResponse.json({ message: "delete product item successfully" });
}
