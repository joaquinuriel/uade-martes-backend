import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const client = new PrismaClient();
  const id = req.nextUrl.searchParams.get("id") || "";

  console.log("id", id);

  const user = await client.users.findUnique({
    where: { id: Number(id) },
  });

  console.log("user", user);

  return Response.json(user);
}

export async function POST(req: NextRequest) {
  const client = new PrismaClient();
  const data = await req.json();

  console.log("data", data);

  const user = await client.users.create({ data });

  console.log("user", user);

  return Response.json(user);
}

export async function PUT(req: NextRequest) {
  const client = new PrismaClient();
  const data = await req.json();
  const id = req.nextUrl.searchParams.get("id") || "";

  console.log("data", data, "id", id);

  const user = await client.users.update({
    data,
    where: { id: Number(id) },
  });

  console.log("user", user);

  return Response.json(user);
}
