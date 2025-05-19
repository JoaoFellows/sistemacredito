import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/server/db";

export async function GET(req: NextRequest) {
  const solicitacoes = await db.solicitacaoCredito.findMany({
    include: {
      cliente: true,
      modalidadeCredito: true,
      linhaFinanciamento: true,
    },
  });
  return NextResponse.json(solicitacoes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const solicitacao = await db.solicitacaoCredito.create({ data });
  return NextResponse.json(solicitacao);
}