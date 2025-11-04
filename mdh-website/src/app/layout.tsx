import type { Metadata } from "next";
import { DM_Serif_Display, Poppins } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "MDH Website System",
    template: "%s | MDH Website System",
  },
  description: "Calm confidence, soft premium, human precision.",
  openGraph: {
    title: "MDH Website System",
    description: "Calm confidence, soft premium, human precision.",
    type: "website",
    locale: "en_US",
    url: "https://mdh-system.com", // Replace with actual URL
    siteName: "MDH Website System",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDH Website System",
    description: "Calm confidence, soft premium, human precision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerifDisplay.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
