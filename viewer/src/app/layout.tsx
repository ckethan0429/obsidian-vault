import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CK Wiki Viewer",
  description: "Obsidian-style viewer for CK's durable wiki pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
