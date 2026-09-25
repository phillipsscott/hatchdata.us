"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "hello@hatchdata.us";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const brief = String(data.get("brief") || "").trim();

    const subject = encodeURIComponent(
      `Hatch Analytics inquiry${name ? ` — ${name}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        name ? `Name: ${name}` : null,
        email ? `Email: ${email}` : null,
        "",
        brief || "(no brief provided)",
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Alex Rivera"
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            className="input"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="brief" className="label">
          Brief
        </label>
        <textarea
          id="brief"
          name="brief"
          rows={4}
          placeholder="What decision are you trying to make clearer?"
          className="input resize-y min-h-[7rem]"
          required
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Open email draft
        </button>
        <p className="text-xs leading-relaxed text-muted">
          Form opens your mail client to{" "}
          <span className="font-medium text-foreground">{CONTACT_EMAIL}</span>{" "}
          (intended contact — not yet wired to a backend).
        </p>
      </div>
      {status === "opened" ? (
        <p className="text-sm text-accent" role="status">
          Mail draft opened. If nothing appeared, email {CONTACT_EMAIL} directly.
        </p>
      ) : null}
    </form>
  );
}
