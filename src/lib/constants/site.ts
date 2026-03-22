export const SITE_CONFIG = {
  brandName: "THERAPY",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/your-username/session",
  contactUrl:
    process.env.NEXT_PUBLIC_CONTACT_URL || "/contact",
  newsletterProvider:
    process.env.NEXT_PUBLIC_NEWSLETTER_PROVIDER || "mailchimp",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
};