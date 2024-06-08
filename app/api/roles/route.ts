import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const client = new PrismaClient();
  const id = req.nextUrl.searchParams.get("id") || "";

  console.log("id", id);

  const rol = await client.roles.findUnique({
    where: { id: Number(id) },
  });

  console.log("rol", rol);

  return Response.json(rol);
}

export async function POST(req: NextRequest) {
  const client = new PrismaClient();
  const data = await req.json();

  console.log("data", data);

  const rol = await client.roles.create({ data });

  console.log("rol", rol);

  return Response.json(rol);
}

export async function PUT(req: NextRequest) {
  const client = new PrismaClient();
  const data = await req.json();
  const id = req.nextUrl.searchParams.get("id") || "";

  console.log("data", data, "id", id);

  const rol = await client.roles.update({
    data,
    where: { id: Number(id) },
  });

  console.log("rol", rol);

  return Response.json(rol);
}
