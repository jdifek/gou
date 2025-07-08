import type { Metadata } from "next";
import { Header, Footer } from "@/shared/components";
import "./globals.css";
import { inter, montserrat, oswald } from "@/shared/fonts";
export const metadata: Metadata = {
  title: "GOU",
  description: "GOU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
        className={`${inter.variable} ${montserrat.variable} ${oswald.variable} font-inter overflow-x-hidden`}
      >
        <div className="flex flex-col min-h-screen w-full">
          <Header />
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
