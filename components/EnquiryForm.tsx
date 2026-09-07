"use client";

import { useState, type FormEvent } from "react";
import { owners, primaryPhone, primaryWhatsApp, telHref, whatsappHref, formatPhone } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

interface EnquiryFormProps {
  defaultProduct?: string;
  className?: string;
}

const productOptions = [
  "Raw Banana for Chips / Pacha Ethakka (പച്ച ഏത്തക്ക)",
  "Wholesale Nendran Banana (പച്ച / പഴുത്ത ഏത്തക്ക)",
  "Wholesale Njali Poovan Banana (ഞാലിപ്പൂവൻ)",
  "Wholesale Palayankodan / Mysore Poovan",
  "Wholesale Robusta Banana",
  "Wholesale Poovan Banana",
  "Banana Seeds / Vazhavithu (വാഴവിത്ത് - Nendran)",
  "Banana Seeds / Vazhavithu (Njali Poovan / Mysore Poovan)",
  "Today's Daily Wholesale Price Enquiry",
  "Other Wholesale Bulk Requirement",
];

export function EnquiryForm({ defaultProduct, className = "" }: EnquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(defaultProduct || productOptions[0]);
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      `*New BT Banana Wholesale Enquiry*`,
      name ? `👤 *Name:* ${name}` : null,
      phone ? `📞 *Phone:* ${phone}` : null,
      `📦 *Requirement:* ${product}`,
      quantity ? `⚖️ *Quantity:* ${quantity}` : null,
      location ? `📍 *Destination / Town:* ${location}` : null,
      message ? `💬 *Notes:* ${message}` : null,
      `\n_Sent via btbanana.com_`,
    ].filter(Boolean);

    window.open(whatsappHref(primaryWhatsApp, lines.join("\n")), "_blank");
  }

  return (
    <div className={`rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8 ${className}`}>
      <div className="mb-6 border-b border-green-100 pb-4">
        <h3 className="text-xl font-bold text-green-950">Quick Wholesale &amp; Bulk Quote</h3>
        <p className="mt-1 text-sm text-neutral-600">
          Tell us your variety, required quantity, and location. We will confirm immediate availability and today&apos;s best wholesale rate via WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="enquiry-name"
              className="mb-1 block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Your Name *
            </label>
            <input
              id="enquiry-name"
              name="name"
              type="text"
              required
              placeholder="e.g. Rajesh Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="enquiry-phone"
              className="mb-1 block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Phone / WhatsApp Number *
            </label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
              autoComplete="tel"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="enquiry-product"
            className="mb-1 block text-xs font-bold uppercase tracking-wider text-neutral-700"
          >
            Product / Variety Needed *
          </label>
          <select
            id="enquiry-product"
            name="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
          >
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="enquiry-quantity"
              className="mb-1 block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Approx Quantity Needed
            </label>
            <input
              id="enquiry-quantity"
              name="quantity"
              type="text"
              placeholder="e.g. 500 kg, 2 Tons, 300 suckers"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
            />
          </div>

          <div>
            <label
              htmlFor="enquiry-location"
              className="mb-1 block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Your Town / Destination
            </label>
            <input
              id="enquiry-location"
              name="location"
              type="text"
              placeholder="e.g. Alakode, Payyanur, Kannur, Wayanad"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="enquiry-message"
            className="mb-1 block text-xs font-bold uppercase tracking-wider text-neutral-700"
          >
            Special Requirements / Notes (Optional)
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="E.g. Chips grade (high starch), bunch weight preference, delivery schedule, or tissue culture requirement."
            className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-[#1fb958] hover:shadow-lg active:scale-[0.99]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Request Instant WhatsApp Quote
        </button>
      </form>

      {/* Direct Call Alternative */}
      <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-neutral-100 pt-4 sm:flex-row">
        <span className="text-xs text-neutral-500">Need an immediate answer? Call the owners directly:</span>
        <div className="flex flex-wrap gap-2">
          {owners.map((owner) => (
            <a
              key={owner.phone}
              href={telHref(owner.phone)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-green-200 bg-green-50/70 px-3 py-1.5 text-xs font-semibold text-green-900 transition hover:bg-green-100"
            >
              <PhoneIcon className="h-3 w-3 text-green-700" />
              {owner.name.split(" ")[0]}: {formatPhone(owner.phone)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
