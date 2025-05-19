import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/server/db";

export async function GET(req: NextRequest) {
  const linhas = await db.linhaFinanciamento.findMany();
  return NextResponse.json(linhas);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const linha = await db.linhaFinanciamento.create({ data });
  return NextResponse.json(linha);
}