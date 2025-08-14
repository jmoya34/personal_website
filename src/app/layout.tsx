import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason Moya",
  description: "Personal website of Jason Moya",
  icons: [
    {
      url: "/images/favicon.ico",
      href: "/images/favicon.ico",
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
