import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sun Wang - UI/UX Portfolio",
  description: "Product-oriented UI/UX designer portfolio for health tech, AI tools, web products, and mobile interfaces.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
