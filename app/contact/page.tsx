"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // ─── Replace with your own form handler ─────────────────
    // Options:
    //   1. Sanity form submission
    //   2. Formspree (https://formspree.io)
    //   3. Netlify Forms / Vercel serverless function
    //   4. EmailJS, SendGrid, etc.
    //
    // Example with Formspree:
    //   const res = await fetch("https://formspree.io/f/YOUR_ID", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
    //
    // For now, simulate a successful submission:
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <>
      {/* Hero area with background */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(199,125,58,0.06)_0%,_transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-accent text-3xl md:text-5xl tracking-[0.2em] uppercase text-cream mb-4">
            Spin a Yarn for Us
          </h1>
          <div className="section-divider mb-6" />
          <p className="font-display text-base md:text-lg text-cream/50 italic max-w-md mx-auto">
            Send us a message. One of us will get back to you as soon as we can,
            hopefully.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div className="group">
              <label
                htmlFor="name"
                className="block text-xs tracking-[0.25em] uppercase text-cream/40 mb-3 group-focus-within:text-copper/70 transition-colors"
              >
                Name <span className="text-copper/60">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-peat-700/40 focus:border-copper/60 px-0 py-3 text-cream font-display text-base outline-none transition-colors placeholder:text-cream/15"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-xs tracking-[0.25em] uppercase text-cream/40 mb-3 group-focus-within:text-copper/70 transition-colors"
              >
                Email <span className="text-copper/60">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-peat-700/40 focus:border-copper/60 px-0 py-3 text-cream font-display text-base outline-none transition-colors placeholder:text-cream/15"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div className="group">
              <label
                htmlFor="message"
                className="block text-xs tracking-[0.25em] uppercase text-cream/40 mb-3 group-focus-within:text-copper/70 transition-colors"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border border-peat-700/25 focus:border-copper/40 p-4 text-cream font-body text-sm leading-relaxed outline-none transition-colors resize-none placeholder:text-cream/15"
                placeholder="What's on your mind?"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto px-12 py-4 text-sm tracking-[0.25em] uppercase border border-copper/60 text-copper hover:bg-copper/10 hover:border-copper disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-body"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message Sent!"
                  : "Submit"}
              </button>
            </div>

            {/* Success message */}
            {status === "sent" && (
              <p className="text-moss-400 font-display italic text-sm animate-fade-in">
                Thank you! We&apos;ll be in touch.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
