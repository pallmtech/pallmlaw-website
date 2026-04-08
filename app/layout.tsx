import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LawOps | Operating System for Estate Planning Workflow",
  description:
    "LawOps helps Estate Planning firms see the business clearly, move more work forward, and improve profitability with better workflow visibility and firm intelligence.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
