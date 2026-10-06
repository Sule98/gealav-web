"use client";

import { useState } from "react";
import { SearchIcon } from "./Icons";
import { companies } from "@/lib/site-content";

const areas = ["Todas las áreas", "Avicultura", "Alimentación animal", "Servicios e investigación"];

export default function CompanyDirectory() {
  const [search, setSearch] = useState("");
  const [area, setArea] = useState(areas[0]);
  const normalize = (value: string) => value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const filtered = companies.filter(company => (area === areas[0] || company.area === area) && normalize(company.name).includes(normalize(search)));
  return <section className="company-directory">
    <div className="block-head"><div><em className="script">nuestra red</em><h2>Directorio<br />de empresas</h2></div><div><p className="directory-source">Directorio de referencia basado en el Manual de Identidad Visual de 2023. La estructura vigente y los contactos se validarán con GEALAV. Las áreas son una agrupación editorial para facilitar la exploración.</p></div></div>
    <div className="directory-toolbar"><div className="product-filters" role="group" aria-label="Filtrar entidades por área">{areas.map(value => <button key={value} type="button" aria-pressed={area === value} className={area === value ? "selected" : ""} onClick={() => setArea(value)}>{value}</button>)}</div><label className="catalogue-search"><SearchIcon /><input aria-label="Buscar entidad" placeholder="Buscar por nombre o provincia…" value={search} onChange={event => setSearch(event.target.value)} /></label></div>
    <p className="directory-count" aria-live="polite"><strong>{filtered.length}</strong> {filtered.length === 1 ? "entidad" : "entidades"}</p>
    <div className="directory-grid">{filtered.map(company => <div key={company.name} className="directory-card" data-area={company.area}><small><i />{company.area}</small><h3>{company.name}</h3></div>)}</div>
    {filtered.length === 0 && <p className="directory-empty">No hay entidades que coincidan. Prueba con otro nombre o área.</p>}
  </section>;
}
