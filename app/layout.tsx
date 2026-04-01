import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muck Savage – Contemporary & Traditional Irish Music",
  description:
    "Muck Savage is a contemporary and traditional Irish music group based in the American heartland. Live performances of Irish folk, rebel songs, and original music.",
  openGraph: {
    title: "Muck Savage",
    description: "Contemporary & Traditional Irish Music",
    type: "website",
    locale: "en_US",
    url: "https://muck-savage.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain-overlay">
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
