// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { Header } from "@/components/Core/Header";
import { Footer } from "@/components/Core/Footer";

// We use local font variables but still import from Google to ensure the correct files are bundled
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "RootHaus Leather | Root & Hide Co. - Luxury Nigerian-Inspired Leather Goods",
  description: "RootHaus Leather: The finest luxury leather goods. Rooted in Nigerian heritage and celestial balance. Explore our bespoke belts, wallets, and handbags.",
  keywords: "RootHaus, Root & Hide Co, Luxury Leather, Nigerian Heritage, Bespoke Leather, Cognac Leather, Gold Hardware",
  metadataBase: new URL('https://rootskraft.com'),
  openGraph: {
    title: "RootHaus Leather",
    description: "Luxury Nigerian-Inspired Leather Goods",
    url: "https://rootskraft.com",
    siteName: "RootHaus Leather",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Default to light mode for luxury aesthetic
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
