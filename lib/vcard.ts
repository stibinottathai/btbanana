import { owners, SITE_NAME, SITE_URL } from "./site";

export function generateVCardString(ownerName?: string): string {
  const primaryOwner = owners.find((o) => o.name === ownerName) ?? owners[0];
  const secondaryOwner = owners.find((o) => o.name !== primaryOwner.name);

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${SITE_NAME};;;;`,
    `FN:${SITE_NAME} - ${ownerName ? ownerName : "Wholesale Bananas & Seeds"}`,
    `ORG:${SITE_NAME} (Wholesale Bananas & Seeds)`,
    "TITLE:Wholesale Bananas & Banana Seeds Supplier",
    `TEL;TYPE=CELL,VOICE;PREF:+91${primaryOwner.phone}`,
  ];

  if (secondaryOwner) {
    lines.push(`TEL;TYPE=CELL,VOICE:+91${secondaryOwner.phone}`);
  }

  lines.push(
    `URL:${SITE_URL}`,
    "ADR;TYPE=WORK:;;Alakode & Nellipara, Kannur;Kerala;;;India",
    "NOTE:Suppliers of Wholesale Bananas & Premium Banana Seeds (Vazhavithu) in Alakode and Nellipara, Kerala.",
    "END:VCARD"
  );

  return lines.join("\r\n");
}

export function downloadVCard(filename = "BT_Banana_Contact.vcf", ownerName?: string) {
  const vcardText = generateVCardString(ownerName);
  const blob = new Blob([vcardText], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
