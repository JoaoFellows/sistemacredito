import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/server/db";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const linha = await db.linhaFinanciamento.findUnique({ where: { id: Number(params.id) } });
  return linha
    ? NextResponse.json(linha)
    : NextResponse.json({ error: 'Linha não encontrada' }, { status: 404 });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const linha = await db.linhaFinanciamento.update({
    where: { id: Number(params.id) },
    data,
  });
  return NextResponse.json(linha);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  await db.linhaFinanciamento.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ mensagem: 'Linha excluída' });
}