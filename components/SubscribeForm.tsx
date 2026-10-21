"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [s, setS] = useState<"idle" | "sending" | "done" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setS("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "subscribe", email: new FormData(form).get("email") }) });
      setS(r.ok ? "done" : "error");
      if (r.ok) form.reset();
    } catch { setS("error"); }
  }
  return (
    <form onSubmit={onSubmit} aria-label="Subscribe to updates">
      <div className="flex gap-2">
        <input name="email" type="email" required aria-label="Email address" placeholder="Your email address" className="min-w-0 flex-1 rounded-full bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-pink" />
        <button disabled={s === "sending"} className="btn btn-pink shrink-0 disabled:opacity-60">{s === "sending" ? "…" : "Subscribe"}</button>
      </div>
      <p role="status" className="mt-2 min-h-5 text-xs text-white/70">
        {s === "done" && "Thanks for subscribing."}{s === "error" && "Could not subscribe. Please try again."}
      </p>
    </form>
  );
}
