"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/content";

export default function Newsletter({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with ConvertKit/Mailchimp/Substack API integration
    // For now, opens mailto with the subscriber's email as context
    if (email) {
      window.location.href = `mailto:${siteConfig.newsletter.email}?subject=Newsletter%20Signup&body=Please%20add%20me%20to%20the%20mailing%20list:%20${encodeURIComponent(email)}`;
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={variant === "compact" ? "py-4" : "py-12"}>
        <p className="text-gold text-sm font-light tracking-wide text-center">
          You&rsquo;re in. Watch your inbox.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="flex-1 bg-transparent border-b border-bone-300/20 text-bone text-sm
            font-light py-2 px-0 placeholder:text-bone-300/30 focus:outline-none
            focus:border-gold/50 transition-colors"
        />
        <button type="submit" className="btn-primary text-[10px] py-2 px-5">
          Subscribe
        </button>
      </form>
    );
  }

  return (
    <section id="newsletter" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/60 mb-6">
          Newsletter
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-bone-200 font-light mb-4">
          Stay in the circuit.
        </h2>
        <p className="text-sm text-bone-300/50 font-light mb-10 max-w-md mx-auto">
          {siteConfig.newsletter.hookLine}
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="flex-1 bg-noir-800/50 border border-bone-300/10 text-bone text-sm
              font-light py-3 px-5 placeholder:text-bone-300/30 focus:outline-none
              focus:border-gold/30 transition-colors"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-bone-300/20 mt-4 font-light">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
