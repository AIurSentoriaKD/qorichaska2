import { Locale, i18n } from "@/i18n.config";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: "Hotel Qorichaska",
  description:
    "A traditional hotel in Cusco with warm hospitality near the historic center.",
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langLocale = lang as Locale;
  const { navigation } = await getDictionary(langLocale);
  return (
    <html lang={lang}>
      <body>
        <Navbar lang={langLocale} navigation={navigation} />
        <main>{children}</main>
        <Footer lang={langLocale} />
      </body>
    </html>
  );
}
