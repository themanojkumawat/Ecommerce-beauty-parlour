import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khusi Beauty Parlour | Enhancing Your Natural Beauty",
  description: "Khusi Beauty Parlour is an exclusive salon for women offering premium facial, hair styling, bridal makeup, and more. Book your appointment today!",
  keywords: ["beauty parlour", "women salon", "bridal makeup", "hair spa", "facial", "manicure", "pedicure", "Khusi Beauty Parlour"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen bg-[#fffafa]`}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
