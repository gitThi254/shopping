import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const variation = await client.variation.findUnique({
    where: { id: id },
  });
  return NextResponse.json(variation);
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const newVariation = await req.json();
  const variation = await client.variation.update({
    where: { id: id },
    data: newVariation,
  });
  return NextResponse.json(variation);
}
