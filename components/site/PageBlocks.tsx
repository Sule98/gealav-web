import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Icons";
import { Reveal } from "./MotionPrimitives";

export type PageTone = "yellow" | "maroon" | "olive" | "red" | "paper";

/* Cabecera a color de las páginas interiores. `cover` reserva el espacio que solapa la fotografía; `long` reduce el titular. */
export function PageHero({ tone, crumb, script, title, intro, cover = false, long = false }: { tone: PageTone; crumb: string; script: string; title: ReactNode; intro?: string; cover?: boolean; long?: boolean }) {
  return <header className={`page-hero page-hero-${tone}${cover ? " has-cover" : ""}${long ? " page-hero-long" : ""}`}><div className="container">
    <nav className="breadcrumb" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span>/</span><span>{crumb}</span></nav>
    <em className="script">{script}</em>
    <h1>{title}</h1>
    {intro && <p className="page-hero-intro">{intro}</p>}
  </div></header>;
}

export function CtaPanel({ script, title, text, href, label }: { script: string; title: ReactNode; text: string; href: string; label: string }) {
  return <Reveal className="cta-panel"><div><em className="script">{script}</em><h2>{title}</h2><p>{text}</p></div><Link className="button button-yellow" href={href}>{label} <Arrow /></Link></Reveal>;
}
