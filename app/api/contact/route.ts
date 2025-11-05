// app/api/contact/route.ts
import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    // basic validation
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: kirim email / simpan ke DB / push ke webhook
    // sementara: log ke server
    console.log("CONTACT_FORM", {
      name: body.name,
      email: body.email,
      message: body.message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_FORM_ERROR", err);
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}
