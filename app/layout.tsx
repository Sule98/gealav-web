import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, Figtree } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { MotionProvider, ReadingProgress } from "@/components/site/MotionPrimitives";

const sans = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const script = Caveat({ subsets: ["latin"], weight: "700", variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  title: { default: "GEALAV · Productos avícolas y alimentos balanceados", template: "%s | GEALAV" },
  description: "Conoce al Grupo Empresarial de Alimentos y Aves: producción avícola, huevos y alimentos balanceados al servicio de Cuba.",
  icons: { icon: "/logo_h.png", apple: "/logo_h.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} ${script.variable}`}>
      <body>
        <MotionProvider>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        <ReadingProgress />
        <main id="contenido">{children}</main>
        <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
