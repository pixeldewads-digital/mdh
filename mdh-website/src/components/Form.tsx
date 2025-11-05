"use client";

import * as React from "react";
import InputField from "./InputField";
import Button from "./Button";

export default function Form() {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "ok" | "err">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    // honeypot
    if (fd.get("company")?.toString().trim()) {
      setLoading(false);
      return;
    }

    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-4xl font-serif text-center mb-12">Get in Touch</h2>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* honeypot (hidden from users) */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

          <InputField type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
          <InputField type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />

          <label className="sr-only" htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-[#EDD7D2] border border-[#D8A29A] text-[#3B3A39] placeholder-[#8A7665] focus:outline-none focus:ring-2 focus:ring-[#CBB279]"
            rows={6}
          />

          <div className="text-center">
            <Button type="submit" disabled={loading} aria-busy={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>

          {status === "ok" && (
            <p className="text-center text-green-600">Message sent. We’ll get back to you soon.</p>
          )}
          {status === "err" && (
            <p className="text-center text-red-600">Sorry, something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
