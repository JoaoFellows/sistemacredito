import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/server/db";


export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { status } = await req.json();
  const solicitacao = await db.solicitacaoCredito.update({
    where: { id: Number(params.id) },
    data: { status },
  });
  return NextResponse.json(solicitacao);
}