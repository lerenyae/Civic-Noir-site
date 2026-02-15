"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/content";
import SectionReveal from "@/components/SectionReveal";

type InquiryType = "general" | "press" | "adaptation" | "speaking" | "bookclub";

const inquiryLabels: Record<InquiryType, string> = {
  general: "General Inquiry",
  press: "Press / Interview",
  adaptation: "Film / TV Adaptation",
  speaking: "Speaking / Panels",
  bookclub: "Book Club Appearance",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "general" as InquiryType,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto with form data — replace with Formspree or API route for production
    const subject = encodeURIComponent(`[${inquiryLabels[form.type]}] from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nType: ${inquiryLabels[form.type]}\n\n${form.message}`);
    window.location.href = `mailto:reigningwordspublishing@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-bone-200 font-light">
              Get in Touch
            </h1>
          </SectionReveal>
        </div>
      </section>

      <div className="gold-rule max-w-3xl mx-auto" />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <SectionReveal>
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-bone-200 font-light mb-4">
                  Message received.
                </p>
                <p className="text-sm text-bone-300/50 font-light">
                  I&rsquo;ll be in touch.
                </p>
              </div>
            </SectionReveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
              {/* Left column — context */}
              <SectionReveal>
                <div>
                  <p className="text-sm text-bone-300/50 font-light leading-[1.8] mb-8">
                    For press inquiries, adaptation interest, speaking
                    engagements, or book club appearances.
                  </p>
                  <div className="gold-rule mb-8" />
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-bone-300/30 mb-2">
                    Social
                  </p>
                  <div className="space-y-2">
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-bone-300/40 font-light hover:text-gold transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href={siteConfig.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-bone-300/40 font-light hover:text-gold transition-colors"
                    >
                      X / Twitter
                    </a>
                  </div>
                </div>
              </SectionReveal>

              {/* Right column — form */}
              <SectionReveal delay={100}>
                <div>
                  <div className="space-y-8">
                    {/* Name */}
                    <div>
                      <label className="text-[10px] font-sans font-light tracking-ultra uppercase text-bone-300/40 block mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                        className="w-full bg-transparent border-b border-bone-300/15 text-bone text-sm
                          font-light py-3 px-0 placeholder:text-bone-300/20 focus:outline-none
                          focus:border-gold/40 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[10px] font-sans font-light tracking-ultra uppercase text-bone-300/40 block mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                        className="w-full bg-transparent border-b border-bone-300/15 text-bone text-sm
                          font-light py-3 px-0 placeholder:text-bone-300/20 focus:outline-none
                          focus:border-gold/40 transition-colors"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="text-[10px] font-sans font-light tracking-ultra uppercase text-bone-300/40 block mb-3">
                        Inquiry Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(inquiryLabels).map(([key, label]) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() =>
                              setForm({
                                ...form,
                                type: key as InquiryType,
                              })
                            }
                            className={`text-[10px] font-sans font-light tracking-widest uppercase px-4 py-2
                              border transition-all duration-300 ${
                                form.type === key
                                  ? "border-gold/40 text-gold bg-gold/5"
                                  : "border-bone-300/10 text-bone-300/40 hover:border-bone-300/20"
                              }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[10px] font-sans font-light tracking-ultra uppercase text-bone-300/40 block mb-3">
                        Message
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        required
                        rows={5}
                        className="w-full bg-transparent border-b border-bone-300/15 text-bone text-sm
                          font-light py-3 px-0 placeholder:text-bone-300/20 focus:outline-none
                          focus:border-gold/40 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn-primary"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </SectionReveal>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
