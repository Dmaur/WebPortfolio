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
      <body className="bg-violet">
        <Header/>
        {children}
      </body>
    </html>
  );
}
