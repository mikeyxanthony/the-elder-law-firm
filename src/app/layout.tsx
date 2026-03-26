import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "The Elder Law Firm | Medicaid, Veterans & Senior Legal Services",
  description: "Exclusively elder law. Medicaid planning, special needs trusts, guardianship, VA benefits, elder abuse. Serving South Florida seniors for 22 years.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
