import type { Metadata } from "next";
import { Quicksand, Beiruti } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import LanguageSwitcher from '../components/LanguageSwitcher';

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const beiruti = Beiruti({
  subsets: ["arabic"],
  variable: "--font-beiruti",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={locale === 'ar' ? `${beiruti.variable} font-beiruti antialiased` : `${quicksand.variable} font-quicksand antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <LanguageSwitcher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
