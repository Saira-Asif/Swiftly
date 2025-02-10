import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import Head from "next/head"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      <Head>
        {/* Add the favicon */}
        <link rel="icon" href="/favicon.ico" className="w-28 h-28"/>
        <title>Swiftly - Your Grocery Companion</title> 
      </Head>
      <body>
        <Header />
        <main className="pt-[100px]"> 
            {children}
          </main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
