import { NextRequest, NextResponse } from "next/server";

const SHEETS_URL = process.env.SHEETS_URL ?? "";
const FORM_TOKEN = process.env.FORM_TOKEN ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, activity, message, company } = body;

    if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !activity?.trim()) {
      return NextResponse.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Email inválido." }, { status: 400 });
    }

    if (!SHEETS_URL) {
      return NextResponse.json({ ok: false, error: "Servicio no configurado." }, { status: 500 });
    }

    const res = await fetch(SHEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _token: FORM_TOKEN,
        company: company ?? "",
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        activity: activity.trim(),
        message: (message ?? "").trim(),
      }),
    });

    const text = await res.text();
    let data: { ok?: boolean; error?: string } = {};
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json({ ok: false, error: "Error al conectar con el servidor." }, { status: 502 });
    }
    if (!data.ok) {
      return NextResponse.json({ ok: false, error: data.error ?? "Error al guardar." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Error interno." }, { status: 500 });
  }
}
