"use client";

import "./globals.css";
import { Rethink_Sans } from "next/font/google";
import Navbar from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Footer/footer";
import { AuthProvider, useAuth } from "./components/context/auth-context";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <LayoutContent>{children}</LayoutContent>
    </AuthProvider>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { token } = useAuth();

  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {token && <Navbar />}
        <main className="pt-[12vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
