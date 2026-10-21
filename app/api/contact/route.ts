import { NextResponse } from "next/server";

const email = /^\S+@\S+\.\S+$/;

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b || typeof b !== "object") return NextResponse.json({ ok: false }, { status: 400 });
  if (b.website) return NextResponse.json({ ok: true }); // honeypot filled: pretend success

  if (b.type === "subscribe") {
    if (!email.test(String(b.email ?? ""))) return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    console.log("Subscribe:", b.email); // TODO: add to your mailing list
    return NextResponse.json({ ok: true });
  }

  if (!b.name || !email.test(String(b.email ?? "")) || String(b.message ?? "").length < 10)
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 400 });
  console.log("Contact enquiry:", { name: b.name, email: b.email, phone: b.phone, subject: b.subject, message: b.message });
  // TODO: send with Resend / Nodemailer or push to your CRM here.
  return NextResponse.json({ ok: true });
}
