import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Derrick Maurais",
  description: "Portfolio Website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="bg-dark_green font-spaceGrotesk">
        {children}
      </body>
    </html>
  );
}
