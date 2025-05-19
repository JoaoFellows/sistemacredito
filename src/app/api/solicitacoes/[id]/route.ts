import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/server/db";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const solicitacao = await db.solicitacaoCredito.findUnique({ where: { id: Number(params.id) } });
  return solicitacao
    ? NextResponse.json(solicitacao)
    : NextResponse.json({ error: 'Solicitação não encontrada' }, { status: 404 });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const solicitacaoAtualizada = await db.solicitacaoCredito.update({ where: { id: Number(params.id) }, data });
  return NextResponse.json(solicitacaoAtualizada);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  await db.solicitacaoCredito.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ mensagem: 'Solicitação excluída' });
}