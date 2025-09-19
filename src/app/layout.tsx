
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/contexts/ReactQueryProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CinemaHub",
  description: "Welcome to CinemaHub",
  icons: {
    icon: "/logo.jpg", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <AuthProvider>
            <Navbar />
            <main>{children}</main>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

