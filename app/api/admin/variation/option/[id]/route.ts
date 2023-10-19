import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const variation_option = await client.variation_option.findUnique({
    where: { id: id },
  });
  return NextResponse.json(variation_option);
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const newVariationOption = await req.json();
  const variation_option = await client.variation_option.update({
    where: { id: id },
    data: newVariationOption,
  });
  return NextResponse.json(variation_option);
}
