import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/server/db";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const modalidade = await db.modalidadeCredito.update({
    where: { id: Number(params.id) },
    data,
  });
  return NextResponse.json(modalidade);
}
