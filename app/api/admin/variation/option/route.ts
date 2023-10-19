import client from "@/libs/prismadb";
import { NextResponse } from "next/server";
import url from "url";

export async function POST(req: Request) {
  const newVariation = await req.json();
  const variation = await client.variation_option.create({
    data: {
      value: newVariation.value,
      product_item: {
        connect: {
          id: "653111909ecc3d903320f27b",
        },
      },
      variation: {
        connect: {
          id: "653111d99ecc3d903320f27d",
        },
      },
    },
  });
  return NextResponse.json(variation);
}

export async function GET(req: Request) {
  const variation_option = await client.variation_option.findMany({});
  return NextResponse.json(variation_option);
}

export async function DELETE(req: Request) {
  const { id }: { id?: string } = url.parse(req.url, true).query;
  await client.variation_option.delete({ where: { id: id } });
  return NextResponse.json({ message: "delete variation option successfully" });
}
