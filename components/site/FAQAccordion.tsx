"use client";
import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
const questions = [
 { title: "¿Qué productos forman parte de la oferta de GEALAV?", answer: <>Las principales líneas son huevos de consumo, carne de aves y alimentos balanceados para animales. En el <Link href="/productos">catálogo</Link> puedes explorar cada línea y preparar una consulta.</> },
 { title: "¿Cómo consultar disponibilidad y condiciones comerciales?", answer: <>Desde la ficha del producto, selecciona «Consultar este producto». El formulario abre con el tema seleccionado. La disponibilidad y las condiciones se confirmarán con la entidad. El envío de consultas está en modo demostración.</> },
 { title: "¿Dónde puedo encontrar las empresas del grupo?", answer: <>El <Link href="/estructura">directorio empresarial</Link> permite buscar por nombre o provincia y filtrar por área de actividad. El listado se basa en el manual de 2023 y está pendiente de validar su vigencia.</> },
];
export default function FAQAccordion() {
 const [open, setOpen] = useState<number | null>(null); const prefix = useId(); const reducedMotion = useReducedMotion();
 return <div className="faq-list">{questions.map((item, index) => <div className="faq-item" key={item.title}><h3><button className="faq-trigger" id={`${prefix}-question-${index}`} aria-expanded={open === index} aria-controls={`${prefix}-answer-${index}`} onClick={() => setOpen(open === index ? null : index)}>{item.title}<m.span aria-hidden="true" animate={{ rotate: open === index ? 45 : 0 }} transition={{ duration: reducedMotion ? 0 : .25 }}>+</m.span></button></h3><div id={`${prefix}-answer-${index}`} aria-labelledby={`${prefix}-question-${index}`} role="region"><AnimatePresence initial={false}>{open === index && <m.div className="faq-answer" key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : .3, ease: [.22, 1, .36, 1] }}><p>{item.answer}</p></m.div>}</AnimatePresence></div></div>)}</div>;
}
