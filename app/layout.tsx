import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client, siteSettingsQuery, urlFor } from "@/lib/sanity";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(siteSettingsQuery).catch(() => null);

  const faviconSource = settings?.favicon || settings?.logo;
  const faviconUrl = faviconSource
    ? urlFor(faviconSource).width(64).height(64).url()
    : undefined;

  return {
    title: "Muck Savage – Contemporary & Traditional Irish Music",
    description:
      "Muck Savage is a contemporary and traditional Irish music group based in the American heartland. Live performances of Irish folk, rebel songs, and original music.",
    icons: faviconUrl
      ? { icon: faviconUrl, apple: faviconUrl }
      : undefined,
    openGraph: {
      title: "Muck Savage",
      description: "Contemporary & Traditional Irish Music",
      type: "website",
      locale: "en_US",
      url: "https://muck-savage.vercel.app",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await client.fetch(siteSettingsQuery).catch(() => null);

  const logoUrl = settings?.logo
    ? urlFor(settings.logo).height(48).url()
    : null;

  const footerLogoUrl = settings?.footerLogo
    ? urlFor(settings.footerLogo).height(80).url()
    : null;

  return (
    <html lang="en">
      <body className="grain-overlay">
        <Header logoUrl={logoUrl} />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer footerLogoUrl={footerLogoUrl} />
      </body>
    </html>
  );
}
