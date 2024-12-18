import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Derrick Maurais",
  description: "Portfolio Website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="bg-rich_black min-h-screen font-poppins m-0 text-beige-400">
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </body>
      <footer className="bg-ash_gray opacity-25 absolute bottom-3 left-0 ">
        <Footer/>
      </footer>


    </html>
  );
}
