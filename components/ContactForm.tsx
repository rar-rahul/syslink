"use client";
import { useState } from "react";
import { services } from "@/lib/data";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;
const input = "w-full rounded-xl border border-line bg-white px-4 py-3 text-navy placeholder:text-slate-400 focus:border-brand-pink focus:outline-none";

const Field = ({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) => (
  <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-navy">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="text-xs text-red-600">{error}</p>}
    </div>
);

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const err: Errors = {};
    if (d.name.trim().length < 2) err.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email)) err.email = "Enter a valid email address.";
    if (d.phone && !/^[+\d][\d\s-]{7,15}$/.test(d.phone)) err.phone = "Enter a valid phone number.";
    if (d.message.trim().length < 10) err.message = "Tell us a little more (at least 10 characters).";
    setErrors(err);
    if (Object.keys(err).length) return;

    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "contact", ...d }) });
      setStatus(r.ok ? "done" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-3xl bg-gradient-to-br from-brand-pink/10 to-brand-green/10 p-10">
        <h3 className="text-2xl font-semibold">Thanks for partnering with us.</h3>
        <p className="mt-2">Our team will reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Full name" error={errors.name}><input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={input} /></Field>
      <Field id="email" label="Email address" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} className={input} /></Field>
      <Field id="phone" label="Phone (optional)" error={errors.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} className={input} /></Field>
      <Field id="subject" label="Subject">
        <select id="subject" name="subject" defaultValue="General enquiry" className={input}>
          <option>General enquiry</option>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Careers</option>
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field id="message" label="Your message" error={errors.message}><textarea id="message" name="message" rows={6} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} className={input} /></Field>
      </div>
      {/* honeypot: hidden from people, bots fill it in */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      <div className="sm:col-span-2">
        <button disabled={status === "sending"} className="btn btn-pink px-10 disabled:opacity-60">{status === "sending" ? "Sending…" : "Send message"}</button>
        {status === "error" && <p role="alert" className="mt-3 text-sm text-red-600">Your message did not send. Please try again or email us directly.</p>}
      </div>
    </form>
  );
}
