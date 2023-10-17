import MainNavigation from "@/components/main-navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const rubik = Montserrat({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Veski Tehnopark | Nutilaod",
  description: "Veski Tehnopark | Nutilaod",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
