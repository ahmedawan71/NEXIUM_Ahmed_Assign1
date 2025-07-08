import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "Generate quotes based on topics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-b from-background to-muted text-foreground">
        {children}
      </body>
    </html>
  );
}