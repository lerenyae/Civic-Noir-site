"use client";
import { useState } from "react";

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
        <p className="text-gold text-sm font-light tracking-wide text-center">
          You&rsquo;re on the record. Watch your inbox.
        </p>
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
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary text-[10px] py-2 px-5 disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </div>
        {status === "error" && (
          <p className="text-[10px] text-red-400/70 font-light">{errorMsg}</p>
        )}
      </form>
    );
  }

  return (
    <section id="newsletter" className="py-24 px-6 border-t border-bone-300/5">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-6">
            The Circuit
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-bone-200 font-light mb-5">
            Stay in the circuit.
          </h2>
          <p className="text-sm text-bone-300/50 font-light leading-relaxed max-w-md mx-auto">
            Subscribers get early access to everything before it goes public.
            No algorithms. No noise. Just the work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          <div className="border border-bone-300/10 p-5">
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 mb-3">
              01
            </p>
            <p className="text-sm text-bone-300/60 font-light leading-relaxed">
              Founders Edition details &amp; early ordering window
            </p>
          </div>
          <div className="border border-bone-300/10 p-5">
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 mb-3">
              02
            </p>
            <p className="text-sm text-bone-300/60 font-light leading-relaxed">
              Soundtrack previews &amp; behind-the-scenes process notes
            </p>
          </div>
          <div className="border border-bone-300/10 p-5">
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 mb-3">
              03
            </p>
            <p className="text-sm text-bone-300/60 font-light leading-relaxed">
              Launch week announcements before anyone else
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            disabled={status === "loading"}
            className="flex-1 bg-noir-800/50 border border-bone-300/10 text-bone text-sm font-light py-3 px-5 placeholder:text-bone-300/30 focus:outline-none focus:border-gold/30 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary whitespace-nowrap disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Get on the record"}
          </button>
        </form>
        {status === "error" && (
          <p className="text-[11px] text-red-400/70 mt-4 font-light text-center">
            {errorMsg}
          </p>
        )}
        <p className="text-[10px] text-bone-300/20 mt-4 font-light text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
