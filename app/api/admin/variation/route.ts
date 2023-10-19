import client from "@/libs/prismadb";
import { NextResponse } from "next/server";
import url from "url";

export async function POST(req: Request) {
  const newVariation = await req.json();
  const variation = await client.variation.create({
    data: {
      name: newVariation.name,
      category: {
        connect: {
          id: "653110869ecc3d903320f278",
        },
      },
    },
  });
  return NextResponse.json(variation);
}

export async function GET(req: Request) {
  const variation = await client.variation.findMany({});
  return NextResponse.json(variation);
}

export async function DELETE(req: Request) {
  const { id }: { id?: string } = url.parse(req.url, true).query;
  await client.variation.delete({ where: { id: id } });
  return NextResponse.json({ message: "delete variation successfully" });
}
