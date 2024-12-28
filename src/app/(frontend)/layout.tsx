import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "Nissan Purwakarta | %s",
    default: "Nissan Purwakarta",
  },
  icons: "/images/logos/nissan/logo_Indomobil_Group.svg",
  manifest: "/manifest.json",
  description: "Nissan purwakarta",
  openGraph: {
    images: [
      {
        url: "/images/og-image.png",
        width: 1147,
        height: 991,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
