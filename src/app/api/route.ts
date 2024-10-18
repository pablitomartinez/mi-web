import { NextRequest, NextResponse } from "next/server";

// Manejo de solicitudes GET
export async function GET(request: NextRequest) {
    console.log(request.body)
  return NextResponse.json({ message: "Hello World" });
}

// Manejo de solicitudes POST
export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ message: "Datos recibidos", body });
}
