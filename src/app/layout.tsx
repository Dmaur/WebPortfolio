import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Derrick Maurais",
  description: "Portfolio Website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="bg-drab min-h-screen font-poppins m-0 text-ash_gray">
        <div className="flex-1 overflow-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
