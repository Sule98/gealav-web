import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/site/ContactForm";
import { Arrow } from "@/components/site/Icons";
import { Reveal } from "@/components/site/MotionPrimitives";
import { PageHero } from "@/components/site/PageBlocks";
import { products } from "@/lib/site-content";

export const metadata: Metadata = { title: "Contacto", description: "Prepara una consulta sobre productos, empresas e información de GEALAV." };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ producto?: string }> }) {
  const { producto } = await searchParams;
  const product = products.find(item => item.id === producto);
  return <>
    <PageHero tone="yellow" crumb="Contacto" script="hablemos" title={<>¿En qué podemos<br />ayudarte?</>} intro="Prepara una consulta sobre nuestros productos, el grupo empresarial o una posible colaboración." long />
    <div className="container page-body contact-layout">
      <div className="contact-tiles">
        <Reveal className="tile tile-network"><span className="chip">Ubicación</span><strong className="tile-title">La Habana, Cuba</strong><p>Grupo Empresarial de Alimentos y Aves</p></Reveal>
        <Reveal className="tile tile-areas" delay={.06}><h2 className="tile-title">Atención a consultas</h2><p>Los teléfonos, correos y horarios oficiales se incorporarán con la información validada por GEALAV.</p><p>Esta versión permite revisar el formulario. Los mensajes no se envían ni se almacenan.</p></Reveal>
        <Reveal className="tile tile-olive" delay={.12}><span className="tile-arrow"><Arrow /></span><strong className="tile-title">Directorio empresarial</strong><p>Busca las empresas del grupo por nombre, provincia o área.</p><Link className="tile-link" href="/estructura" aria-label="Explorar el directorio empresarial" /></Reveal>
      </div>
      <Reveal className="contact-form-wrap"><ContactForm key={product?.id ?? "general"} initialSubject={product?.name ?? "Información general"} /></Reveal>
    </div>
  </>;
}
