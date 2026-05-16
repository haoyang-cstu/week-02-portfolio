"use client";

import { useState } from "react";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) {
      next.email = "Email is required.";
    } else if (!emailPattern.test(email.trim())) {
      next.email = "That doesn't look like a valid email.";
    }
    if (!message.trim()) {
      next.message = "Message is required.";
    } else if (message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  const inputBase =
    "w-full rounded-md border px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900";
  const inputOk = "border-neutral-300";
  const inputErr = "border-red-400 focus:ring-red-500";

  return (
    <section className="max-w-xl mx-auto px-6 py-16 animate-fade-in-up">
      <h1 className="text-3xl font-bold mb-2 text-neutral-900">Contact</h1>
      <p className="text-neutral-600 mb-8">
        The fastest way to reach me is email, but you can also drop a note
        below.
      </p>

      {submitted && (
        <div className="mb-6 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
          Thanks! Your message has been recorded locally. (This form doesn&apos;t
          send anything yet.)
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-800 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-800 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-800 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputBase} ${errors.message ? inputErr : inputOk}`}
            placeholder="What's on your mind?"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
