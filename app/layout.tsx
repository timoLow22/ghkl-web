import type { Metadata } from "next";
import { Footer } from "@/app/_components/layout/footer";
import { Navbar } from "@/app/_components/layout/navbar";
import { Container } from "@/app/_components/layout/container";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1 py-8 md:py-12">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
