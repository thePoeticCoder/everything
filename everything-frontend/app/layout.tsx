/** @format */
"use client";

import "./globals.css";
import { Rethink_Sans } from "next/font/google";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    if (storedToken !== "12345" && pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {token === "12345" && <ResponsiveNav />}
        {children}
      </body>
    </html>
  );
}
