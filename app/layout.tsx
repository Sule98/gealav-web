import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '@/components/Header';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
