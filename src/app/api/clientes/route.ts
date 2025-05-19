import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/server/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idade = searchParams.get("idade");
  const renda = searchParams.get("renda");

  const where: any = {};
  if (idade) where.idade = Number(idade);
  if (renda) where.renda = { gte: parseFloat(renda) };

  const clientes = await db.cliente.findMany({ where });
  return NextResponse.json(clientes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const cliente = await db.cliente.create({ data });
  return NextResponse.json(cliente);
}