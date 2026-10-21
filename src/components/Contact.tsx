"use client";

import { useId, useState, type FormEvent } from "react";
import { basicInfo, socials } from "@/data/profile";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const nameId = useId();
  const messageId = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your site"}`);
    const body = encodeURIComponent(message || "Hi Arif,");
    window.location.href = `mailto:${basicInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="flex justify-center"
      style={{ paddingTop: 64, paddingBottom: "var(--gap-section)", paddingInline: "var(--margin-outer)" }}
    >
      <Reveal
        as="div"
        className="coupon-notch grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2"
        style={{ background: "var(--ink)", color: "var(--accent-ink)" }}
      >
        <div className="flex flex-col justify-between p-10 sm:p-12">
          <h2 className="font-semibold" style={{ fontSize: "var(--step-head)" }}>
            Let&rsquo;s connect
          </h2>
          <p className="mt-8" style={{ fontSize: "var(--step-body)" }}>
            I usually reply within 24 hours, by email or LinkedIn.
          </p>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 w-fit items-center underline decoration-accent-ink/40 underline-offset-4 transition-colors hover:decoration-accent-ink"
            style={{ fontSize: "var(--step-small)" }}
          >
            linkedin.com/in/arifrm ↗
          </a>
        </div>

        <div className="relative flex flex-col justify-center gap-3 p-10 sm:p-12">
          <div className="dotted-col absolute inset-y-0 left-0 hidden sm:block" aria-hidden />
          <form onSubmit={handleSubmit} action={`mailto:${basicInfo.email}`} method="get" className="flex flex-col gap-3">
            <div>
              <label htmlFor={nameId} className="sr-only">
                Your name
              </label>
              <input
                id={nameId}
                name="name"
                type="text"
                placeholder="Jane Tan…"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="min-h-[52px] w-full px-4 placeholder:opacity-60"
                style={{ background: "var(--accent-ink)", color: "var(--ink)", fontSize: "var(--step-body)" }}
              />
            </div>
            <div>
              <label htmlFor={messageId} className="sr-only">
                What&rsquo;s this about?
              </label>
              <textarea
                id={messageId}
                name="message"
                placeholder="A role, a project, just saying hi…"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none px-4 py-3 placeholder:opacity-60"
                style={{ background: "var(--accent-ink)", color: "var(--ink)", fontSize: "var(--step-body)" }}
              />
            </div>
            <button
              type="submit"
              className="min-h-14 font-medium transition-opacity hover:opacity-85"
              style={{ background: "var(--accent-ink)", color: "var(--ink)", fontSize: "var(--step-body)" }}
            >
              Send message
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
