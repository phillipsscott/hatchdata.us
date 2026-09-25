import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hatch Analytics — AI & analytics consultancy",
  description:
    "Hatch Analytics helps teams turn messy data into decisions. Analytics foundations, decision systems, measurement, and fractional leadership.",
  metadataBase: new URL("https://hatchdata.us"),
  openGraph: {
    title: "Hatch Analytics",
    description:
      "AI and analytics consultancy that turns messy data into decisions.",
    url: "https://hatchdata.us",
    siteName: "Hatch Analytics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
