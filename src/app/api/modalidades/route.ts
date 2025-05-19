import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/server/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idade = Number(searchParams.get("idade"));
  const renda = Number(searchParams.get("renda"));

  const modalidades = await db.modalidadeCredito.findMany({
    where: {
      AND: [
        idade ? { idadeMin: { lte: idade }, idadeMax: { gte: idade } } : {},
        renda ? { rendaMin: { lte: renda }, rendaMax: { gte: renda } } : {},
      ],
    },
  });
  return NextResponse.json(modalidades);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const modalidade = await db.modalidadeCredito.create({ data });
  return NextResponse.json(modalidade);
}