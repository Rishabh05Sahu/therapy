import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Therapy and Counselling",
    template: "%s | Therapy and Counselling",
  },
  description:
    "A modern therapy and counselling platform built with Next.js, TypeScript, Tailwind, shadcn/ui, Framer Motion, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}