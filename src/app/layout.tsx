import type { Metadata } from "next";
import { LanguageProvider } from "../components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sun Wang - UI/UX Portfolio",
  description: "Product-oriented UI/UX designer portfolio for health tech, AI tools, web products, and mobile interfaces.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
