import Link from "next/link";
import { Arrow } from "@/components/site/Icons";
export default function NotFound() {
 return <section className="lost"><div className="container"><em className="script">página no encontrada</em><span className="lost-code" aria-hidden="true">404</span><h1>No encontramos esta página</h1><p>Puede que el enlace haya cambiado. Puedes volver al inicio o explorar nuestros productos.</p><div className="stage-actions"><Link className="button button-yellow" href="/">Regresar al inicio <Arrow /></Link><Link className="button button-outline" href="/productos">Ver productos <Arrow /></Link></div></div></section>;
}
