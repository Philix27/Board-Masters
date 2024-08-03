import type { Metadata } from "next";
import "./globals.css";
import { AppProviders, fontSans } from "./lib";
import { cn } from "@repo/ui";

export const metadata: Metadata = {
  title: "Rampage",
  description: "An easy to use off-ramping platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen bg-background 
          font-sans antialiased`,
          fontSans.variable
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
