import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markit.one - Modern Landing Page Design",
  description: "One hub, many SaaS tools. Streamline your workflow with powerful tools designed to boost productivity.",
  keywords: "SaaS, productivity, tools, workflow, FormEase, QRBee, HackHire",
  authors: [{ name: "Markit.one" }],
  openGraph: {
    title: "Markit.one - Modern Landing Page Design",
    description: "One hub, many SaaS tools. Streamline your workflow with powerful tools designed to boost productivity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}