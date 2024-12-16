import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
export const metadata: Metadata = {
  title: "Derrick Maurais",
  description: "Portfolio Website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="bg-rich_black font-ibmPlexMono m-0">
        {children}
      </body>
    </html>
  );
}
