import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Month With You ♡",
  description: "A little scrapbook for our first month together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
