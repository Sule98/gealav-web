"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type PointerEvent } from "react";
import { useMotionValue, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { articles } from "@/lib/site-content";
import { Arrow } from "./Icons";
import { Reveal } from "./MotionPrimitives";

export default function ActivityList() {
  const list = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const previewX = useSpring(x, { stiffness: 260, damping: 28 });
  const previewY = useSpring(y, { stiffness: 260, damping: 28 });

  // La vista previa solo acompaña al ratón; en pantallas táctiles cada fila muestra su propia fotografía.
  function track(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !list.current) return;
    const bounds = list.current.getBoundingClientRect();
    x.set(event.clientX - bounds.left);
    y.set(event.clientY - bounds.top);
  }

  return <div ref={list} className="journal-list" onPointerMove={track} onPointerLeave={() => setActive(null)}>
    {articles.map((article, index) => <Reveal key={article.slug} delay={index * .08}><Link href={`/${article.slug}`} className="journal-row" onPointerEnter={event => { if (event.pointerType === "mouse") setActive(index); }}>
      <span className="journal-index">0{index + 1}</span>
      <span className="journal-thumb"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 950px) 100vw, 1px" /></span>
      <span className="journal-copy"><small>{article.category}</small><strong>{article.title}</strong><span>{article.excerpt}</span></span>
      <span className="journal-arrow"><Arrow diagonal /></span>
    </Link></Reveal>)}
    <m.div className="journal-preview" aria-hidden="true" style={{ x: previewX, y: previewY }} initial={false} animate={{ opacity: active === null ? 0 : 1, scale: active === null ? .8 : 1, rotate: active === null ? -8 : 3 }} transition={{ duration: .35 }}>{articles.map((article, index) => <Image key={article.slug} className={index === active ? "is-active" : ""} src={article.image} alt="" fill sizes="300px" />)}</m.div>
  </div>;
}
