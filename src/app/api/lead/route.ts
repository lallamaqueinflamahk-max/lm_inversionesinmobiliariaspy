import { NextResponse } from "next/server";

export type LeadPayload = {
  name: string;
  whatsapp: string;
  investorProfile: string;
};

/**
 * Placeholder: reemplazar por Resend, SendGrid, webhook CRM, etc.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;

    if (!body.name?.trim() || !body.whatsapp?.trim() || !body.investorProfile) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 },
      );
    }

    const payload: LeadPayload = {
      name: body.name.trim(),
      whatsapp: body.whatsapp.trim(),
      investorProfile: body.investorProfile,
    };

    console.info("[lead] captura estructurada", {
      ...payload,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Solicitud inválida." },
      { status: 400 },
    );
  }
}
