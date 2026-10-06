import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Icons";
import { BackToTop } from "./FooterBits";

const columns = [
  { title: "Productos", links: [["Huevos de consumo", "/productos?categoria=huevos"], ["Carne de aves", "/productos?categoria=aves"], ["Alimentos balanceados", "/productos?categoria=alimentos"]] },
  { title: "GEALAV", links: [["Quiénes somos", "/nosotros"], ["Empresas del grupo", "/estructura"], ["Nuestra actividad", "/#actualidad"]] },
  { title: "Información", links: [["Contacto y consultas", "/contacto"], ["Privacidad", "/privacidad"]] },
];

export default function SiteFooter() {
  return <footer className="site-footer"><div className="container">
    <div className="foot-lead"><p className="foot-lead-title">¿Hablamos?</p><Link className="button button-yellow" href="/contacto">Contacto y consultas <Arrow /></Link></div>
    <div className="foot-cols">
      <div className="foot-about"><Link href="/" className="brand" aria-label="GEALAV, inicio"><Image src="/images/logo.webp" width={185} height={48} alt="GEALAV · Grupo Empresarial de Alimentos y Aves" /></Link><p>Producción y comercialización de huevos, carne de aves y alimentos balanceados en Cuba.</p></div>
      {columns.map(column => <nav className="foot-nav" key={column.title} aria-label={`Pie: ${column.title}`}><strong>{column.title}</strong>{column.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}{column.title === "Información" && <span>La Habana, Cuba</span>}</nav>)}
    </div>
    <div className="footer-bottom"><span>© 2026 GEALAV · Grupo Empresarial de Alimentos y Aves</span><span>Prototipo de presentación</span><BackToTop /></div>
  </div></footer>;
}
