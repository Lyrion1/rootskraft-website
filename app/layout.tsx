// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { Header } from "@/components/Core/Header";
import { Footer } from "@/components/Core/Footer";

// Fonts are now loaded via @fontsource imports in globals.css
// and mapped to CSS variables via Tailwind config

export const metadata: Metadata = {
  title: "RootHaus Leather | Root & Hide Co. - Luxury Nigerian-Inspired Leather Goods",
  description: "RootHaus Leather: The finest luxury leather goods. Rooted in Nigerian heritage and celestial balance. Explore our bespoke belts, wallets, and handbags.",
  keywords: "RootHaus, Root & Hide Co, Luxury Leather, Nigerian Heritage, Bespoke Leather, Cognac Leather, Gold Hardware",
  metadataBase: new URL('https://rootskraft.com'),
  icons: {
    icon: 'https://res.cloudinary.com/dycotblov/image/upload/v1763858028/faviconn_o3o0pk.png',
    shortcut: 'https://res.cloudinary.com/dycotblov/image/upload/v1763858028/faviconn_o3o0pk.png',
    apple: 'https://res.cloudinary.com/dycotblov/image/upload/v1763858028/faviconn_o3o0pk.png',
  },
  openGraph: {
    title: "RootHaus Leather",
    description: "Luxury Nigerian-Inspired Leather Goods",
    url: "https://rootskraft.com",
    siteName: "RootHaus Leather",
    images: ['https://res.cloudinary.com/dycotblov/image/upload/v1763858028/faviconn_o3o0pk.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
