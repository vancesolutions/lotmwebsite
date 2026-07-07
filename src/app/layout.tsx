import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const body = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Light On The Mountain Campground | Williams, Arizona",
  description:
    "A faith-based retreat and conference center nestled in the ponderosa pines of Kaibab National Forest, 3 miles south of Williams, AZ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${body.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
