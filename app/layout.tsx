import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <header className="border-b border-neutral-200">
          <nav className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-4">
            <Link href="/" className="text-sm font-medium hover:text-neutral-600">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-neutral-600">
              About
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-neutral-600">
              Projects
            </Link>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
          {children}
        </main>

        <footer className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-4 text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Hao Yang. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
