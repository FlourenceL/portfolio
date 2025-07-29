import type { Metadata } from "next";

import "./globals.css";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Flourence Lapore",
  description: "-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>{children}</body>
    </html>
  );
}
