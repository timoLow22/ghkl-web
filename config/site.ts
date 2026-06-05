/**
 * GHKL site content — edit this file to update church info across the site.
 *
 * Consumed by: navbar, footer, root layout metadata, and future page content.
 * For visual design tokens (colors, fonts), see `app/globals.css`.
 */

export interface NavigationLink {
  href: string;
  label: string;
}

export interface ServiceTime {
  day: string;
  time: string;
  label: string;
}

export interface SiteAddress {
  line1: string;
  line2?: string;
  city: string;
  postcode: string;
  country: string;
}

export const siteConfig = {
  name: "Gospel Hall Kuala Lumpur",
  shortName: "GHKL",
  description: "Welcome to Gospel Hall Kuala Lumpur 2.0!",

  logo: {
    src: null as string | null,
    alt: "Gospel Hall Kuala Lumpur",
    width: 80,
    height: 80,
  },

  verse: {
    text: "Christ Jesus came into the world to save sinners",
    reference: "1 Timothy 1:15",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Ministries", href: "/ministries" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ] satisfies NavigationLink[],

  contact: {
    email: "contact@gospelhallkl.org",
    phone: null as string | null,
  },

  address: {
    line1: "Gospel Hall Church, 3",
    line2: "Jalan Hang Jebat, City Centre",
    city: "Kuala Lumpur",
    postcode: "50150",
    country: "Malaysia",
  } satisfies SiteAddress,

  serviceTimes: [
    {
      day: "Sunday",
      time: "10:00 AM",
      label: "Lord's Day Meeting",
    },
  ] satisfies ServiceTime[],

  footer: {
    tagline: "Proclaiming the gospel of Jesus Christ in Kuala Lumpur.",
  },
} as const;
