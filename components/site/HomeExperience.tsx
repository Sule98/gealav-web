import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Arrow, EggIcon, LeafIcon, SunIcon } from "./Icons";
import { companies, products } from "@/lib/site-content";
import ActivityList from "./ActivityList";
import ContactForm from "./ContactForm";
import HeroExperience from "./HeroExperience";
import FAQAccordion from "./FAQAccordion";
import { Counter, Parallax, Reveal, ScrollWords } from "./MotionPrimitives";

const activities = [
  { icon: <EggIcon />, title: "Producción avícola", detail: "Huevos y carne de aves" },
  { icon: <LeafIcon />, title: "Nutrición animal", detail: "Alimentos balanceados" },
  { icon: <SunIcon />, title: "Ciencia e innovación", detail: "Conocimiento aplicado a la producción" },
];

export default function HomeExperience() {
  return <>
    <HeroExperience />

    <section id="nosotros" className="manifesto"><div className="container">
      <Reveal><em className="script">quiénes somos</em></Reveal>
      <ScrollWords text="Producimos y comercializamos huevos, carne de aves y alimentos para animales en Cuba." />
      <Reveal className="manifesto-foot"><p>Nuestra misión es contribuir a satisfacer la demanda de alimentos, con calidad, sostenibilidad y el apoyo de la ciencia, la tecnología y el compromiso de nuestros trabajadores.</p><Link className="button button-yellow" href="/nosotros">Más sobre GEALAV <Arrow /></Link></Reveal>
    </div></section>

    <section id="productos" className="stack"><div className="container">
      <Reveal className="block-head"><div><em className="script">nuestra oferta</em><h2>Tres líneas<br />de producción</h2></div><div><p>Conectan la avicultura y la alimentación animal.</p><Link className="text-link" href="/productos">Ver catálogo completo <Arrow /></Link></div></Reveal>
      <div className="stack-cards">{products.map((product, index) => <article className={`stack-card stack-${product.id}`} key={product.id} style={{ "--i": index } as CSSProperties}>
        <div className="stack-copy">
          <div className="stack-top"><span className="stack-index">0{index + 1}<i> / 0{products.length}</i></span><span className="chip">{product.id === "alimentos" ? "Nutrición animal" : "Producción avícola"}</span></div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <ul>{product.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          <Link className={`button ${product.id === "huevos" ? "button-dark" : "button-yellow"}`} href={`/contacto?producto=${product.id}`}>Consultar este producto <Arrow /></Link>
        </div>
        <div className="stack-photo"><Parallax><Image src={product.image} alt={`${product.name}; imagen ilustrativa`} fill sizes="(max-width: 700px) 100vw, 50vw" /></Parallax></div>
      </article>)}</div>
      <p className="fine-print">Fotografías ilustrativas. La disponibilidad, las presentaciones y las condiciones comerciales se confirmarán con GEALAV.</p>
    </div></section>

    <section className="ribbons" aria-label="Áreas de actividad">
      <div className="ribbon ribbon-a">{[0, 1].map(copy => <div className="marquee-track" key={copy} aria-hidden={copy === 1}>{activities.map(activity => <span key={activity.title}>{activity.icon}<strong>{activity.title}</strong></span>)}</div>)}</div>
      <div className="ribbon ribbon-b" aria-hidden="true">{[0, 1].map(copy => <div className="marquee-track" key={copy}>{products.map(product => <span key={product.id}><EggIcon /><strong>{product.name}</strong></span>)}</div>)}</div>
    </section>

    <section className="bento-section"><div className="container">
      <Reveal className="block-head"><div><em className="script">en cifras</em><h2>Alimentos<br />y Aves</h2></div><div><p>Un grupo empresarial que integra producción avícola, nutrición animal e investigación.</p><Link className="text-link" href="/nosotros">Conocer el grupo <Arrow /></Link></div></Reveal>
      <div className="bento">
        <Reveal className="tile tile-photo"><Parallax><Image src="/images/avicultura-v3.webp" alt="Gallinas blancas en un entorno avícola con luz natural; imagen ilustrativa" fill sizes="(max-width: 950px) 100vw, 42vw" /></Parallax><div className="about-photo-label"><Image src="/logo_h.png" width={35} height={44} alt="" /><span>GEALAV<strong>Alimentos y Aves</strong></span></div><span className="photo-caption">Imagen ilustrativa de la actividad avícola</span></Reveal>
        <Reveal className="tile tile-year" delay={.06}><span className="tile-number"><Counter value={1964} from={1900} /></span><p>Creación del Combinado Avícola Nacional, antecedente de nuestra historia.</p></Reveal>
        <Reveal className="tile tile-lines" delay={.12}><span className="tile-number"><Counter value={products.length} /></span><p>Líneas de producción.</p></Reveal>
        <Reveal className="tile tile-network" delay={.06}><span className="tile-arrow"><Arrow /></span><span className="tile-number"><Counter value={companies.length} /></span><p>Entidades en el directorio de referencia.</p><Link className="tile-link" href="/estructura" aria-label="Ver directorio de empresas" /></Reveal>
        <Reveal className="tile tile-areas" delay={.12}><ul>{activities.map(activity => <li key={activity.title}>{activity.icon}<span><strong>{activity.title}</strong><small>{activity.detail}</small></span></li>)}</ul></Reveal>
      </div>
      <p className="fine-print">Datos del Manual de Identidad Visual de 2023; la estructura vigente se validará con GEALAV.</p>
    </div></section>

    <section id="actualidad" className="journal"><div className="container">
      <Reveal className="block-head"><div><em className="script">información del sector</em><h2>Nuestra<br />actividad</h2></div><div><p>Producción, nutrición e innovación.</p></div></Reveal>
      <ActivityList />
      <p className="fine-print">Contenidos de muestra para la presentación. Las publicaciones oficiales se incorporarán con GEALAV.</p>
    </div></section>

    <section className="faq-section section"><div className="container faq-layout"><Reveal><em className="script">te ayudamos</em><h2>Preguntas frecuentes</h2><p>Productos, empresas y consultas comerciales.</p><Link className="text-link" href="/contacto">Ir a contacto <Arrow /></Link></Reveal><Reveal delay={.1}><FAQAccordion /></Reveal></div></section>

    <section id="contacto" className="contact-block"><div className="container contact-panel contact-grid"><Reveal className="contact-copy"><em className="script">hablemos</em><h2>¿Buscas información sobre un producto?</h2><p>Indica la línea que te interesa y el tipo de consulta. También puedes solicitar información sobre GEALAV y sus empresas.</p><div className="contact-location"><span className="location-mark">↗</span><div><strong>GEALAV · La Habana, Cuba</strong><span>Grupo Empresarial de Alimentos y Aves</span></div></div><Link className="text-link" href="/contacto">Ver página de contacto <Arrow /></Link></Reveal><Reveal delay={.1}><ContactForm /></Reveal></div></section>
  </>;
}
