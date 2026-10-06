"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { Arrow } from "./Icons";

export default function HeroExperience() {
  const film = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  // La fotografía entra como tarjeta y crece hasta ocupar la pantalla mientras la sección permanece fijada.
  const { scrollYProgress } = useScroll({ target: film, offset: ["start end", "end end"] });
  const frameScale = useTransform(scrollYProgress, [0, .75], [.7, 1]);
  const frameRadius = useTransform(scrollYProgress, [.35, .78], [44, 0]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const captionOpacity = useTransform(scrollYProgress, [.7, .9], [0, 1]);
  const captionY = useTransform(scrollYProgress, [.7, .9], [40, 0]);
  const reveal = reducedMotion ? { opacity: 1 } : { opacity: [0, 1], y: [26, 0] };
  const rise = reducedMotion ? { opacity: 1 } : { y: ["110%", "0%"] };
  const line = (index: number) => ({ initial: false as const, whileInView: rise, viewport: { once: true }, transition: { duration: 1.1, delay: reducedMotion ? 0 : .1 + index * .12, ease: [.22, 1, .36, 1] as const } });
  return <>
    <section id="inicio" className="stage">
      <div className="stage-inner">
        <m.p className="stage-kicker" initial={false} whileInView={reveal} viewport={{ once: true }} transition={{ duration: .7 }}><span className="chip">Grupo Empresarial de Alimentos y Aves</span><em className="script">hecho en Cuba</em></m.p>
        <h1 className="stage-title">
          <span className="stage-line"><m.span {...line(0)}>Alimentos </m.span></span>
          <span className="stage-line"><m.span {...line(1)}><span className="stage-pill"><Image src="/images/huevos-v3.webp" alt="" fill sizes="340px" priority /></span>y aves </m.span></span>
          <span className="stage-line stage-line-accent"><m.span {...line(2)}>para Cuba.</m.span></span>
        </h1>
        <div className="stage-foot">
          <m.p initial={false} whileInView={reveal} viewport={{ once: true }} transition={{ duration: .7, delay: reducedMotion ? 0 : .5 }}>Huevos, carne de aves y alimentos balanceados. Conoce lo que hacemos y las empresas que lo hacen posible.</m.p>
          <m.div className="stage-actions" initial={false} whileInView={reveal} viewport={{ once: true }} transition={{ duration: .7, delay: reducedMotion ? 0 : .6 }}><Link href="/productos" className="button button-red">Explorar productos <Arrow /></Link><Link href="/nosotros" className="button button-ink">Conocer GEALAV <Arrow /></Link></m.div>
        </div>
        <div className="stage-badge" aria-hidden="true"><svg className="stage-badge-ring" viewBox="0 0 200 200"><defs><path id="stage-badge-arc" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs><text><textPath href="#stage-badge-arc" textLength="484">PRODUCCIÓN AVÍCOLA · ALIMENTOS BALANCEADOS · </textPath></text></svg><Image src="/logo_h.png" width={240} height={302} alt="" priority /></div>
      </div>
    </section>
    <section ref={film} className="film" aria-label="La actividad avícola">
      <div className="film-sticky">
        <m.div className="film-frame" style={reducedMotion ? undefined : { scale: frameScale, borderRadius: frameRadius }}>
          <m.div className="film-media" style={reducedMotion ? undefined : { scale: mediaScale }}><Image src="/images/campo-hero-v3.webp" alt="Gallinas blancas y huevos en un paisaje agrícola al amanecer; imagen ilustrativa" fill sizes="100vw" /></m.div>
          <div className="film-shade" />
          <m.div className="container film-caption" style={reducedMotion ? undefined : { opacity: captionOpacity, y: captionY }}><strong>Del campo<br />a la mesa.</strong><small>Imagen ilustrativa de la actividad avícola</small></m.div>
        </m.div>
      </div>
    </section>
  </>;
}
