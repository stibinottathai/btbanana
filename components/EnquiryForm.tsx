"use client";

import { useState, type FormEvent } from "react";
import { primaryWhatsApp, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/**
 * No backend exists for this static site, so the enquiry is delivered via a
 * prefilled WhatsApp message. To wire this to a real backend later, replace
 * the handleSubmit body with a fetch() call to the desired endpoint.
 */
export function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      `Hi BT Banana, I'd like to send an enquiry.`,
      name && `Name: ${name}`,
      phone && `My phone: ${phone}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    window.open(whatsappHref(primaryWhatsApp, lines.join("\n")), "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="enquiry-name"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Name
        </label>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-900 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          autoComplete="name"
        />
      </div>

      <div>
        <label
          htmlFor="enquiry-phone"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Your Phone Number
        </label>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-900 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          autoComplete="tel"
        />
      </div>

      <div>
        <label
          htmlFor="enquiry-message"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          What are you looking for?
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="E.g. Wholesale Nendran banana, or banana seeds / Vazhavithu enquiry"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-900 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#1fb958] sm:w-auto"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send Enquiry via WhatsApp
      </button>
    </form>
  );
}
