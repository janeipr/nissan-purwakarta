import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import { BookingFormProvider } from "../context/BookingFormContext";

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
  icons:
    process.env.NEXT_PUBLIC_BASEURL +
    "/images/logos/nissan/logo_Indomobil_Group.svg",
  manifest: process.env.NEXT_PUBLIC_BASEURL + "/manifest.json",
  description: "Nissan purwakarta",
  openGraph: {
    url: process.env.NEXT_PUBLIC_BASEURL,
    images: [
      {
        url: process.env.NEXT_PUBLIC_BASEURL + "/images/og-image.png",
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
        <BookingFormProvider>
          <main>{children}</main>
          <Footer />
        </BookingFormProvider>
      </body>
    </html>
  );
}
