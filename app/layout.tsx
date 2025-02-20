import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/app/providers/ReactQueryProvider";
import SkipLinks from "./components/SkipLinks";

export const metadata: Metadata = {
  title: "City Builder - Create & Customize Your Own City",
  description: "Build your own city by adding, customizing, and managing houses. Try different designs and colors!",

  // ✅ Open Graph (OG) Metadata (For Social Sharing)
  openGraph: {
    title: "City Builder - Create & Customize Your Own City",
    description: "An interactive city-building experience where you can design houses, customize colors, and manage your own city!",
    url: "http://localhost:3000/", 
    siteName: "City Builder",
    images: [
      {
        url: "/pic.png", 
        width: 1200,
        height: 630,
        alt: "Preview of City Builder",
      },
    ],
    type: "website",
  },

  // ✅ Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "City Builder - Customize Your City",
    description: "Design and build your own city with customizable houses!",
    images: ["/pic.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SkipLinks />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
