import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/server/db";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const cliente = await db.cliente.findUnique({
    where: { id: Number(params.id) },
  });
  return cliente
    ? NextResponse.json(cliente)
    : NextResponse.json({ error: 'Cliente não encontrado' }, { status: 404 });
}