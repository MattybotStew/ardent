import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Ardent Companies",
  description:
    "A cycle-tested, privately held real estate investment firm focused on differentiated opportunities across debt and equity investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
