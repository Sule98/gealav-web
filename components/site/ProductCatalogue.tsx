"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useId } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { products } from "@/lib/site-content";
import { Arrow, CloseIcon, SearchIcon } from "./Icons";

type Product = (typeof products)[number];
const categories = ["Todos", "Huevos", "Carne de aves", "Alimentos balanceados"];
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function ProductCatalogue({ initialCategory = "Todos", searchable = false }: { initialCategory?: string; searchable?: boolean }) {
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : "Todos");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product>(products[0]);
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const reducedMotion = useReducedMotion();
  const [detailVersion, setDetailVersion] = useState(0);
  const visibleProducts = products.filter(product => (category === "Todos" || product.category === category) && normalize(`${product.name} ${product.description}`).includes(normalize(query)));

  function showProduct(product: Product) {
    setSelected(product);
    setDetailVersion(version => version + 1);
    dialog.current?.showModal();
  }

  return <>
    <div className="catalogue-toolbar">
      <div className="product-filters" role="group" aria-label="Filtrar productos">
        {categories.map(item => <button key={item} type="button" aria-pressed={category === item} className={category === item ? "selected" : ""} onClick={() => setCategory(item)}>{category === item && <m.span className="product-filter-highlight" layoutId={`filter-${titleId}`} transition={{ duration: reducedMotion ? 0 : .3 }} />}{item}</button>)}
      </div>
      {searchable && <label className="catalogue-search"><SearchIcon /><input aria-label="Buscar productos" placeholder="Buscar un producto…" value={query} onChange={event => setQuery(event.target.value)} /></label>}
    </div>
    <m.div className="products-grid" layout><AnimatePresence initial={false} mode="popLayout">
      {visibleProducts.map(product => <m.article className={`product-card product-${product.id}`} key={product.id} layout="position" initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: reducedMotion ? 1 : .97 }} transition={{ duration: reducedMotion ? 0 : .3 }} whileHover={reducedMotion ? undefined : { y: -5 }}>
        <button className="product-image" aria-label={`Ver ${product.name}`} onClick={() => showProduct(product)}>
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
          <span className="product-image-tag">{product.category}</span>
        </button>
        <div className="product-info">
          <span className="product-type">{product.id === "alimentos" ? "NUTRICIÓN ANIMAL" : "PRODUCCIÓN AVÍCOLA"}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-card-footer"><span>{product.id === "alimentos" ? "Para la producción animal" : "Para la alimentación"}</span><button aria-label={`Conocer ${product.name}`} onClick={() => showProduct(product)}>Ver producto <Arrow /></button></div>
        </div>
      </m.article>)}
    </AnimatePresence></m.div>
    {visibleProducts.length === 0 && <div className="catalogue-empty"><SearchIcon /><h3>No encontramos ese producto</h3><p>Prueba con otra búsqueda o selecciona todas las categorías.</p><button className="button button-red" onClick={() => { setCategory("Todos"); setQuery(""); }}>Ver todos los productos <Arrow /></button></div>}
    <p className="catalogue-photo-note">Fotografías ilustrativas de las líneas de productos.</p><p className="catalogue-count" aria-live="polite">{visibleProducts.length} {visibleProducts.length === 1 ? "línea de producto" : "líneas de productos"}</p>
    <dialog ref={dialog} className="site-dialog product-dialog" aria-labelledby={titleId} onClick={event => { if (event.target === dialog.current) dialog.current?.close(); }}>
      <m.div key={`photo-${detailVersion}`} className="dialog-product-image" initial={false} animate={reducedMotion ? {opacity:1} : {opacity:[0,1]}} transition={{ duration: .35 }}><Image src={selected.image} alt={selected.name} fill sizes="(max-width: 700px) 100vw, 45vw" /><button className="icon-button dialog-close" aria-label="Cerrar detalle de producto" onClick={() => dialog.current?.close()}><CloseIcon /></button></m.div>
      <m.div key={`detail-${detailVersion}`} className="dialog-content" initial={false} animate={reducedMotion ? {opacity:1} : {opacity:[0,1],y:[12,0]}} transition={{ duration:.4 }}><span className="eyebrow">{selected.category}</span><h2 id={titleId}>{selected.name}</h2><p>{selected.description}</p><ul className="product-details">{selected.details.map(detail => <li key={detail}><span>✓</span>{detail}</li>)}</ul><Link href={`/contacto?producto=${selected.id}`} className="button button-red" onClick={() => dialog.current?.close()}>Consultar este producto <Arrow /></Link><small className="dialog-note">La disponibilidad, las presentaciones y las condiciones comerciales se confirmarán con GEALAV.</small></m.div>
    </dialog>
  </>;
}
