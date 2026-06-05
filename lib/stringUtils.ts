import type { SiteAddress } from "@/config/site";

/**
 * Formats a site address into a single comma-separated string.
 *
 * @example
 * formatAddress(siteConfig.address);
 * // "Address line 1, Address line 2, 00000 Kuala Lumpur, Malaysia"
 */
export function formatAddress(address: SiteAddress): string {
  const lines = [
    address.line1,
    address.line2,
    `${address.postcode} ${address.city}`,
    address.country,
  ].filter(Boolean);

  return lines.join(", ");
}
