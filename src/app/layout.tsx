
import "./globals.css";
import Providers from "@/components/Providers";


export const metadata = {
  title: "Movies App",
  description: "Movie explorer built with Next.js & React Query",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
