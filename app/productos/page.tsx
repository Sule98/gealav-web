import type { Metadata } from "next";
import ProductCatalogue from "@/components/site/ProductCatalogue";
import { CtaPanel, PageHero } from "@/components/site/PageBlocks";

export const metadata: Metadata = { title: "Productos", description: "Explora las líneas de huevos, carne de aves y alimentos balanceados de GEALAV." };
const categories: Record<string, string> = { huevos: "Huevos", aves: "Carne de aves", alimentos: "Alimentos balanceados" };

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ categoria?: string }> }) {
  const { categoria } = await searchParams;
  const selected = categoria && Object.hasOwn(categories, categoria) ? categories[categoria] : "Todos";
  return <>
    <PageHero tone="yellow" crumb="Productos" script="catálogo GEALAV" title={<>Nuestros<br />productos</>} intro="Huevos, carne de aves y alimentos balanceados. Explora las categorías y consulta la información de cada línea." />
    <div className="container page-body"><ProductCatalogue key={selected} initialCategory={selected} searchable /><CtaPanel script="¿algo más?" title="¿Necesitas una información específica?" text="Las presentaciones, la disponibilidad y las condiciones comerciales se confirmarán con la entidad." href="/contacto" label="Preparar una consulta" /></div>
  </>;
}
