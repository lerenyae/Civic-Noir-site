"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/content";

export default function Newsletter({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Subscription failed");
      }
      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={variant === "compact" ? "py-4" : "py-12"}>
        <p className="text-gold text-sm font-light tracking-wide text-center">You&rsquo;re on the record. Watch your inbox.</p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            disabled={status === "loading"}
            className="flex-1 bg-transparent border-b border-bone-300/20 text-bone text-sm font-light py-2 px-0 placeholder:text-bone-300/30 focus:outline-none focus:border-gold/50 transition-colors disabled:opacity-50"
          />
          <button type="submit" disabled={status === "loading"} className="btn-primary text-[10px] py-2 px-5 disabled:opacity-50">
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </div>
        {status === "error" && <p className="text-[10px] text-red-400/70 font-light">{errorMsg}</p>}
      </form>
    );
  }

  return (
    <section id="newsletter" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/60 mb-6">Newsletter</p>
        <h2 className="font-serif text-3xl md:text-4xl text-bone-200 font-light mb-4">Stay in the circuit.</h2>
        <p className="text-sm text-bone-300/50 font-light mb-10 max-w-md mx-auto">{siteConfig.newsletter.hookLine}</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            disabled={status === "loading"}
            className="flex-1 bg-noir-800/50 border border-bone-300/10 text-bone text-sm font-light py-3 px-5 placeholder:text-bone-300/30 focus:outline-none focus:border-gold/30 transition-colors disabled:opacity-50"
          />
          <button type="submit" disabled={status === "loading"} className="btn-primary whitespace-nowrap disabled:opacity-50">
            {status === "loading" ? "Sending..." : "Subscribe"}
          </button>
        </form>
        {status === "error" && <p className="text-[11px] text-red-400/70 mt-4 font-light">{errorMsg}</p>}
        <p className="text-[10px] text-bone-300/20 mt-4 font-light">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
