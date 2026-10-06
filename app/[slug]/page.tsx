import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, institutionalPages } from "@/lib/site-content";
import { Arrow } from "@/components/site/Icons";
import CompanyDirectory from "@/components/site/CompanyDirectory";
import { Parallax, Reveal } from "@/components/site/MotionPrimitives";
import { CtaPanel, PageHero, type PageTone } from "@/components/site/PageBlocks";

type PageProps = { params: Promise<{ slug: string }> };
const tones: Record<string, PageTone> = { nosotros: "maroon", estructura: "olive", privacidad: "paper" };

export function generateStaticParams() {
  return [...Object.keys(institutionalPages), ...articles.map(article => article.slug)].map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = (Object.hasOwn(institutionalPages, slug) ? institutionalPages[slug] : undefined) ?? articles.find(article => article.slug === slug);
  return { title: content?.title ?? "Página no encontrada" };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const institution = Object.hasOwn(institutionalPages, slug) ? institutionalPages[slug] : undefined;
  const article = articles.find(item => item.slug === slug);
  if (!institution && !article) notFound();

  const hasCover = slug !== "privacidad";
  const label = institution?.eyebrow ?? article?.category ?? "";
  // La primera frase del artículo se presenta como entradilla.
  const [lead, ...rest] = article ? article.body.split(/(?<=\.)\s+/) : [];
  const otherArticles = articles.filter(item => item.slug !== slug);

  return <article>
    <PageHero tone={article ? "yellow" : tones[slug] ?? "paper"} crumb={label} script={label} title={institution?.title ?? article?.title} intro={institution?.intro ?? article?.excerpt} cover={hasCover} long={Boolean(article)} />
    {hasCover && <div className="container"><div className="page-cover"><Parallax><Image src={article?.image ?? "/images/avicultura-v3.webp"} alt={article?.imageAlt ?? "Entorno de producción avícola; imagen ilustrativa"} fill priority sizes="(max-width: 760px) 100vw, 90vw" /></Parallax><span className="photo-caption">Fotografía ilustrativa creada para el prototipo.</span></div></div>}
    <div className="container page-body">
      {institution && <div className="chapters">{institution.sections.map((section, index) => <Reveal className="chapter" key={section.title}><span className="chapter-index">0{index + 1}</span><h2>{section.title}</h2><p>{section.body}</p></Reveal>)}</div>}
      {article && <div className="article-layout"><aside className="article-meta"><span className="chip">{article.category}</span><p className="fine-print">Contenido editorial de muestra para la presentación del prototipo. No representa una noticia oficial ni un anuncio de la entidad.</p></aside><Reveal className="article-text"><p className="article-lead">{lead}</p><p>{rest.join(" ")}</p></Reveal></div>}
      {slug === "estructura" && <CompanyDirectory />}
      {article && <section className="more-reading"><Reveal className="block-head"><div><em className="script">sigue leyendo</em><h2>Más<br />actividad</h2></div></Reveal><div className="journal-list">{otherArticles.map((item, index) => <Reveal key={item.slug} delay={index * .08}><Link href={`/${item.slug}`} className="journal-row"><span className="journal-index">0{index + 1}</span><span className="journal-thumb"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 950px) 100vw, 1px" /></span><span className="journal-copy"><small>{item.category}</small><strong>{item.title}</strong><span>{item.excerpt}</span></span><span className="journal-arrow"><Arrow diagonal /></span></Link></Reveal>)}</div></section>}
      <CtaPanel script="hablemos" title="¿Buscas información sobre un producto?" text="Prepara una consulta sobre nuestros productos, el grupo empresarial o una posible colaboración." href="/contacto" label="Contacto y consultas" />
    </div>
  </article>;
}
